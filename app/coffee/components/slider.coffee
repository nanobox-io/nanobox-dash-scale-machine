slider = require 'jade/slider'

module.exports = class Slider

  constructor: (@$el, onTotalChangeCb, currentTotal=1) ->
    @steps=30
    @build()
    @updateTotal currentTotal
    @cb =  onTotalChangeCb

  build : ()=>
    @cleanUpExistingBuild()
    @$node = $ slider( {} )
    @$doubler = $ "#doubler-btn", @$node
    @$doubler.on 'click', @doubleIt
    @$el.append @$node

    @$body      = $ 'body'
    @$dragger   = $ ".dragger", @$node
    @$tracks     = $ ".tracks"
    @$track     = $ ".track"
    @$totals    = $ ".totals"
    @trackWidth = @$tracks.width()
    @stepSize   = @trackWidth / @steps

    # On Mousedown
    @$dragger.on "mousedown", ()=>

      # Add drag listener
      @$body.on "mousemove", (e)=>
        perc = (e.pageX - @$tracks.offset().left) / @trackWidth

        # Must be a percentage between 0 and 1
        if perc > 1      then perc = 1
        else if perc < 0 then perc = 0

        total =  Math.round( (@trackWidth * perc) / @stepSize)

        # Don't allow 0
        if total < 1 then total = 1

        if perc == 1 && total < 1000
          @showDoubler()

        @updateTotal total

      # Remove Events on release
      @$body.on "mouseup", ()=>
        @$body.off "mousemove"
        @$body.off "mouseup"

  updateTotal : (total) ->
    if total == @total then return
    @total = total

    @updateWidth(total)
    pos = total * @stepSize
    @$dragger.css left  : "#{ pos }px"
    @$track.css   width : pos
    @$totals.text total

    if @cb then @cb total

  cleanUpExistingBuild : () ->
    if @$node?
      @$node.remove()

  destroy : () ->
    @$dragger.off()
    @$node.remove()

  updateWidth : (total)->
    digits = String(total).length
    @$node.removeClass "three four five"
    if digits == 3
      @$node.addClass 'three'
    else if digits == 4
      @$node.addClass 'four'
    else if digits > 4
      @$node.addClass 'five'

  doubleIt : () =>
    @$node.removeClass 'show-doubler'
    @total = 0
    @steps *= 2
    @build()
    @updateTotal(@steps/2)

  showDoubler : () ->
    @$node.addClass 'show-doubler'
