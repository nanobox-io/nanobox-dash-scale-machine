SpecsSelector = require 'components/specs-selector'
class ScaleMachine

  constructor: (@$el, @options, onChangeCb) ->
    @build onChangeCb

  build : (onChangeCb) ->
    @specsSelector = new SpecsSelector onChangeCb
    @specsSelector.build @$el, @options

    # data  = { message: 'Live long and prosper.', source:'(See app/coffee/main.coffee)' }
    # $node = $ example( data )
    # $el.append $node

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
