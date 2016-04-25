slider = require 'jade/slider'

module.exports = class Slider

  constructor: ($el, onTotalChangeCb, currentTotal=1) ->
    @build($el)
    @updateTotal currentTotal
    @cb =  onTotalChangeCb

  build : ($el)->
    $node = $ slider( {} )
    $el.append $node
    steps = 30

    @$body      = $ 'body'
    @$dragger   = $ ".dragger", $node
    @$tracks     = $ ".tracks"
    @$track     = $ ".track"
    @$totals    = $ ".totals"
    @trackWidth = @$tracks.width()
    @stepSize   = @trackWidth / steps

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

        @updateTotal total

      # Remove Events on release
      @$body.on "mouseup", ()=>
        @$body.off "mousemove"
        @$body.off "mouseup"

  updateTotal : (total) ->
    if total == @total then return
    @total = total

    pos = total * @stepSize
    @$dragger.css left  : "#{ pos }px"
    @$track.css   width : pos
    @$totals.text total

    if @cb then @cb total
