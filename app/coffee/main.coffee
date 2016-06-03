ScaleManager  = require 'components/scale-manager'
SpecsSelector = require 'components/specs-selector'
Slider        = require 'components/slider'

class ScaleMachine

  constructor: (@$el, config) ->
    @scaleManager = new ScaleManager @$el, config

  destroy : () ->
    @scaleManager.destroy()

  getUserSelectedPlan : () ->
    @scaleManager.getSelectedPlans()

  #  Do I need to pass these API calls on to scaleManager.scaler ??  :
  hideInstructions : () ->
    @scaleManager.scaler.specsSelector.hideInstructions()

  keepHoverInbounds : () ->
    @scaleManager.scaler.specsSelector.keepHoverInbounds = true

  getDefaultPlan : () ->
    @scaleManager.scaler.specsSelector.serverSpecs.meta.default

  getPlanData : (id) ->
    @scaleManager.scaler.specsSelector.getPlanData id

  refresh : (isCluster, isHorizontallyScalable) ->
    @scaleManager.build isCluster, isHorizontallyScalable

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
