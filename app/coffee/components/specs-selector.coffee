specsSelector = require 'jade/specs-selector'
specHtml      = require 'jade/spec-html'
specKind      = require 'jade/spec-kind'
specHover     = require 'jade/spec-hover'

module.exports = class SpecsSelector

  constructor: ( @$el, @onChangeCb, @activeSpecsId ) ->
    PubSub.publish 'STATS.GET_OPTIONS', @build
    # @$node        = $ specsSelector( {isAWS:obj.data.meta.title == "AWS"} )
    @$node         = $ specsSelector( {} )
    @$ram          = $ ".ram", @$node
    @$cpu          = $ ".cpu", @$node
    @$disk         = $ ".disk", @$node
    @$specsHolder  = $ ".specs", @$node
    @$specSelector = $ ".spec-selector", @$node
    @$el.append @$node

  build : (@serverSpecs) =>
    if @activeSpecsId == 'default'
      @activeSpecsId = @serverSpecs.data.meta.default

    @setSpecWidthAndHeightScale @serverSpecs.data
    @growIncrament = 450/@serverSpecs.data.meta.totalPlans
    @growTimeout   = 0
    @totalGraphs   = 0
    for plan in @serverSpecs.data.plans
      $kind = $ specKind( {title:@addBreaks(plan.meta.title)} )
      @$specsHolder.append $kind
      @addPlanKind $(".graphs-holder", $kind), plan

    @$graphs = $ ".graph-skin.spec", @$node
    # @valkrie.hookMachine.fireEvent 'get-service-specs'
    @top = $('.specs', @$node).position().top

  addPlanKind : (@$el, plan) ->
    for spec, i in plan.specs
      horizPadding = if i < plan.specs.length then 2 else 0
      @buildGraph @$el, spec, horizPadding
      @growTimeout += @growIncrament

  buildGraph : (@$el, spec, horizPadding) ->
    @totalGraphs++
    isEBS       = @checkForAlternateDisks spec
    diskHeight  = Math.sqrt(spec.DISK) * 0.25  * @graphScale
    cpuHeight   = Math.sqrt(spec.CPU)  * 1.2   * @graphScale
    ramHeight   = Math.sqrt(spec.RAM)  * 0.6   * @graphScale
    padding     = 3
    data        =
      isEBS        : isEBS
      graphWidth   : @graphWidth + horizPadding
      graphHeight  : diskHeight+padding+cpuHeight+padding+ramHeight
      topPadding   : 0
      cellWidth    : @graphWidth
      diskHeight   : 0
      cpuHeight    : 0
      ramHeight    : 0

    data.id      = spec.id

    $graph = $ specHtml( data )
    $graph.on 'mouseover', ()=> @duplicate $graph, spec
    $graph.on 'mouseout',  ()=> @destroyClonedGraph()
    $graph.on 'click',     ()=> @onGraphClick spec, $graph
    @$el.append $graph

    @animateBlock $('.ram',  $graph), $('.cpu',  $graph), $('.disk',  $graph), ramHeight, cpuHeight, diskHeight, @growTimeout

    if spec.id == @activeSpecsId
      @onGraphClick spec, $graph, true

  animateBlock : ($ram, $cpu, $disk, ramHeight, cpuHeight, diskHeight, timeout)->
    setTimeout ()->
      $ram.css  height: ramHeight
      $cpu.css  height: cpuHeight
      $disk.css height: diskHeight
    ,
      @growTimeout

  refresh : (@activeSpecsId, doAnimate=true) ->
    if doAnimate
      @growIncrament = 350/@serverSpecs.data.meta.totalPlans
      @growTimeout = 250
    else
      @growTimeout = 10
      @growIncrament = 0

    setTimeout ()=>
      @activeSpecsId ||= @serverSpecs.data.meta.default
      @$graphs?.removeClass "selected"
      $("##{@activeSpecsId}", @$node).addClass "selected"
    ,
      @growTimeout

    for plan in @serverSpecs.data.plans
      for spec, i in plan.specs
        $ram  = $("##{spec.id} .ram",  @node)
        $cpu  = $("##{spec.id} .cpu",  @node)
        $disk = $("##{spec.id} .disk",  @node)

        @animateBlock $ram, $cpu, $disk, $ram.height(), $cpu.height(), $disk.height(), @growTimeout+=@growIncrament
        $("##{spec.id} .ram, .cpu, .disk", @$node).css height: 0


  changeSelectedSpecs : (ram, cpu, disk) =>
    $('.val', @$ram).text  ram.toLocaleString()
    $('.metric', @$ram).text  " GB RAM"

    $('.val', @$cpu).text  cpu.toLocaleString()
    $('.metric', @$cpu).text  " CPU CORE"

    $('.val', @$disk).text disk.toLocaleString()
    $('.metric', @$disk).text  " GB DISK"


  hideInstructions : () -> @$node.addClass 'no-instructions'

  # ------------------------------------  Events

  onGraphClick : (spec, $graph, isInitialHighlight=false) ->
    if !isInitialHighlight
      return if @activeSpecsId == spec.id
      @onChangeCb spec.id
      @$clone.addClass "clicked"

    @activeSpecsId = spec.id

    @changeSelectedSpecs spec.RAM, spec.CPU, spec.DISK
    @$graphs?.removeClass "selected" # Deselect current active specs
    $graph.addClass "selected"       # Select new specs

    # If not the current specs..
    # if @currentSpecs.id != spec.id
    #   @$node.addClass "dirty"
    #   @valkrie.saver.setWorkingValue "specId", spec.id, @resetState
    # else
    #   @valkrie.saver.deleteWorkingValue "specId"

  duplicate : ($graph, spec) ->
    # Clone the spec graph
    left    = $graph.position().left
    top     =  @top
    @$clone = $graph.clone()
    @$clone.addClass "cloned-graph"

    # Hover item
    data =
      ram:  spec.RAM.toLocaleString()  + " GB"
      cpu:  spec.CPU.toLocaleString()  + " CORE"
      disk: spec.DISK.toLocaleString() + " GB"

    $specs = $ specHover( data )
    xtraSpace = 8

    if @keepHoverInbounds && $graph.position().left > 420
      $specs.css right: $graph.outerWidth() + xtraSpace
    else
      $specs.css left: @graphWidth + xtraSpace


    # top = $graph.attr 'data-height'
    @$clone.append $specs
    @$specSelector.append @$clone
    height = $(".heighter", $graph).height()
    # If this is already clicked / active..
    if $graph.hasClass 'selected'
      @$clone.addClass 'clicked'

    @$clone.css
      left             : "#{ left }px",
      # top              : 162 - top
      bottom           : 61
      position         : "absolute"
      height           : height
      "pointer-events" : "none"
      "padding-right"  : "0"
      width            : "-=1"

  destroyClonedGraph : ()->
    $(".cloned-graph").remove()

  # ------------------------------------ Helpers

  setSpecWidthAndHeightScale : (data) ->
    totalSpecs  = 0
    canvasWidth = 550
    canvasHeight = 130
    planPadding = 8
    specPadding = 2
    spaceWidth  = 0 # How much of the available space will be filled by padding
    spaceWidth  += planPadding * (data.plans.length-1)
    biggest     = @findBiggestSpec data.plans
    for plan in data.plans
      totalSpecs += plan.specs.length
      spaceWidth += specPadding * (plan.specs.length)

    @graphWidth     = (canvasWidth - spaceWidth)/totalSpecs
    @graphScale     = canvasHeight/biggest

  findBiggestSpec : (plans) ->
    biggest     = 0
    for plan in plans
      for spec in plan.specs
        biggest = @getBiggest biggest, spec
    biggest


  getBiggest : (champion, spec) ->
    challenger  = Math.sqrt(spec.DISK) * 0.25
    challenger += Math.sqrt(spec.CPU)  * 1.2
    challenger += Math.sqrt(spec.RAM)  * 0.5

    if champion > challenger then champion else challenger

  checkForAlternateDisks : (spec) ->
    if typeof spec.DISK != "number"
      spec.DISK = 1000
      return true

  addBreaks : (str) -> str.replace(/\s/i, '<br/>');

  getPlanData : (id) ->
    for plan in @serverSpecs.data.plans
      for spec, i in plan.specs
        if spec.id == id
          return spec

  destroy : () ->
    @$node.remove()
