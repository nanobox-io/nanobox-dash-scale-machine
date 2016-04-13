SpecsSelector = require 'components/specs-selector'
Slider        = require 'components/slider'

class ScaleMachine

  constructor: (@$el, @activeServerId, onChangeCb) ->
    @build onChangeCb

  build : (onChangeCb) ->
    @specsSelector = new SpecsSelector @$el, onChangeCb, @activeServerId
    @slider        = new Slider @$el

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
