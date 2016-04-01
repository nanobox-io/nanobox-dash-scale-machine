SpecsSelector = require 'components/specs-selector'
class ScaleMachine

  constructor: (@$el, @options) ->
    @build()

  build : () ->
    @specsSelector = new SpecsSelector()
    @specsSelector.build @$el, @options

    # data  = { message: 'Live long and prosper.', source:'(See app/coffee/main.coffee)' }
    # $node = $ example( data )
    # $el.append $node

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
