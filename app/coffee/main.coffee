SpecsSelector = require 'components/specs-selector'
Slider        = require 'components/slider'
scaler        = require 'jade/scaler'

class ScaleMachine

  constructor: ($el, @activeServerId, onSpecsChange, onInscanceTotalChangeCb, totalInstances) ->
    $node = $ scaler( {} )
    $el.append $node

    @specsSelector = new SpecsSelector $node, onSpecsChange, @activeServerId
    if onInscanceTotalChangeCb?
      @slider = new Slider $node, onInscanceTotalChangeCb, totalInstances

  hideInstructions : () ->
    @specsSelector.hideInstructions()

  keepHoverInbounds : () ->
    @specsSelector.keepHoverInbounds = true

  destroy : () ->
    @specSelector.destroy()
    @slider?.destroy()
    @specSelector = null
    @slider = null

  refresh : (@activeServerId, doAnimate=true)->
    @specsSelector.refresh @activeServerId, doAnimate

  getDefaultPlan : () ->
    @specsSelector.serverSpecs.data.meta.default

  getUserSelectedPlan : () ->
    @specsSelector.activeSpecsId

  getPlanData : (id) ->
    @specsSelector.getPlanData id

window.nanobox ||= {}
nanobox.ScaleMachine = ScaleMachine
