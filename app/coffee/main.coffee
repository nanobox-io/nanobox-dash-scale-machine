SpecsSelector = require 'components/specs-selector'
class ScaleMachine

  constructor: (@$el, @activeServerId, onChangeCb) ->
    @build onChangeCb

  build : (onChangeCb) ->
    @specsSelector = new SpecsSelector @$el, onChangeCb, @activeServerId

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
