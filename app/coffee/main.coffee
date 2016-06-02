ScaleManager  = require 'components/scale-manager'
SpecsSelector = require 'components/specs-selector'
Slider        = require 'components/slider'

class ScaleMachine

  constructor: (@$el, config) ->
    @scaleManager = new ScaleManager @$el, config

  destroy : () ->
    @scaleManager.destroy()

  #  Do I need to pass these API calls on to scaleManager.scaler ??  :
  hideInstructions : () ->
    @specsSelector.hideInstructions()

  keepHoverInbounds : () ->
    @specsSelector.keepHoverInbounds = true

  getDefaultPlan : () ->
    @specsSelector.serverSpecs.data.meta.default

  getUserSelectedPlan : () ->
    @specsSelector.activeSpecsId

  getPlanData : (id) ->
    @specsSelector.getPlanData id

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
