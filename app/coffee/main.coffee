SpecsSelector = require 'components/specs-selector'
Slider        = require 'components/slider'

class ScaleMachine

  constructor: (@$el, @activeServerId, onSpecsChange, onInscanceTotalChangeCb, totalInstances) ->
    @specsSelector = new SpecsSelector @$el, onSpecsChange, @activeServerId
    if onInscanceTotalChangeCb?
      @slider = new Slider @$el, onInscanceTotalChangeCb, totalInstances

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
