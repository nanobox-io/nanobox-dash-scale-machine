specsSelector = require 'jade/specs-selector'
specHtml      = require 'jade/spec-html'
specKind      = require 'jade/spec-kind'
specHover     = require 'jade/spec-hover'

module.exports = class SpecsSelector

  constructor: ( @onChangeCb ) ->

  build : ($el, obj) ->
    @$node        = $ specsSelector( {isAWS:obj.data.meta.title == "AWS"} )
    @$ram         = $ ".ram", @$node
    @$cpu         = $ ".cpu", @$node
    @$disk        = $ ".disk", @$node
    @$specsHolder = $ ".specs", @$node
    $el.append @$node

    @setSpecWidthAndHeightScale obj.data

    for plan in obj.data.plans
      $kind = $ specKind( {title:@addBreaks(plan.meta.title)} )
      @$specsHolder.append $kind
      @addPlanKind $(".graphs-holder", $kind), plan

    @$graphs = $ ".graph-skin.spec", @$node
    # @valkrie.hookMachine.fireEvent 'get-service-specs'

  addPlanKind : ($el, plan) ->
    for spec, i in plan.specs
      horizPadding = if i < plan.specs.length then 2 else 0
      @buildGraph $el, spec, horizPadding

  buildGraph : ($el, spec, horizPadding) ->
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
      diskHeight   : diskHeight
      cpuHeight    : cpuHeight
      ramHeight    : ramHeight

    data.disk_y  = 0
    data.cpu_y   = data.diskHeight + padding
    data.ram_y   = data.cpu_y + padding + data.cpuHeight
    data.id      = spec.id

    $graph = $ specHtml( data )
    $graph.on 'mouseover', ()=> @duplicate $graph, spec
    $graph.on 'mouseout',  ()=> @destroy()
    $graph.on 'click',     ()=> @onGraphClick spec, $graph
    $el.append $graph

  changeSelectedSpecs : (ram, cpu, disk) =>
    $('.val', @$ram).text  ram.toLocaleString()
    $('.metric', @$ram).text  " GB RAM"

    $('.val', @$cpu).text  cpu.toLocaleString()
    $('.metric', @$cpu).text  " CPU CORE"

    $('.val', @$disk).text disk.toLocaleString()
    $('.metric', @$disk).text  " GB DISK"


  # ------------------------------------  Events

  onGraphClick : (spec, $graph) ->
    @$clone.addClass "clicked"
    return if @activeSpecsId == spec.id
    @onChangeCb spec.id
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
    @$clone = $graph.clone()
    @$clone.addClass "cloned-graph"

    # Hover item
    data =
      ram:  spec.RAM.toLocaleString()  + " GB"
      cpu:  spec.CPU.toLocaleString()  + " CORE"
      disk: spec.DISK.toLocaleString() + " GB"
    $specs = $ specHover( data )
    xtraSpace = 8
    if $graph.position().left > 420
      $specs.css right: $graph.outerWidth() + xtraSpace
    else
      $specs.css left: @graphWidth + xtraSpace

    @$clone.append $specs
    @$node.append @$clone
    height = $(".heighter", $graph).height()
    @$clone.css
      left             : "#{ left }px",
      bottom           : "#{ 145 }px",
      position         : "absolute"
      height           : height
      "pointer-events" : "none"
      "padding-right"  : "0"
      width            : "-=1"

  destroy : ()->
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
