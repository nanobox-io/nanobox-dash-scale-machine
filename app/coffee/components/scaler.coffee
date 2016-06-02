Slider        = require 'components/slider'
SpecsSelector = require 'components/specs-selector'
scaler        = require 'jade/scaler'

module.exports = class Scaler

  constructor: (@$el, @activeServerId, @onSpecsChange, @isHorizScalable, @totalInstances) ->
    @build()

  build : () ->
    @$node = $ scaler( {} )
    @$el.append @$node

    @specsSelector = new SpecsSelector @$node, @onSpecsChange, @activeServerId
    if @isHorizScalable?
      @slider = new Slider @$node, @onSpecsChange, @totalInstances

  hideInstructions : () ->
    @specsSelector.hideInstructions()

  keepHoverInbounds : () ->
    @specsSelector.keepHoverInbounds = true

  destroy : () ->
    @specSelector.destroy()
    @slider?.destroy()
    @specSelector = null
    @slider = null
    @$node.remove()

  refresh : (@activeServerId, doAnimate=true)->
    @specsSelector.refresh @activeServerId, doAnimate

  getDefaultPlan : () ->
    @specsSelector.serverSpecs.meta.default

  getUserSelectedPlan : () ->
    @specsSelector.activeSpecsId

  getPlanData : (id) ->
    @specsSelector.getPlanData id
