scaleManager = require 'jade/scale-manager'
Scaler       = require 'components/scaler'
module.exports = class ScaleManager

  constructor: (@$el, config) ->
    @activeServerIds         = config.activeServerId
    @onSpecsChangeCb         = config.onSpecsChange
    @onInscanceTotalChangeCb = config.onInscanceTotalChangeCb
    @totalInstances          = config.totalInstances

    @build config.isCluster, config.isHorizontallyScalable

  build : (@isCluster, @isHorizontallyScalable) ->
    @destroyExisting()
    @isRedundantData         = @isCluster && !@isHorizontallyScalable

    @totalInstances = 1
    @$node = $ scaleManager( {isRedundantDataCluster: @isRedundantData} )
    @$el.append @$node
    $scaleHolder = $ '.scale-holder', @$node

    @memberData = { primary : {planId: @activeServerIds.primary} }

    # When a redundant data cluster, add holder for secondary db and monitor
    if @isRedundantData
      @memberData.secondary = {planId: @activeServerIds.secondary}
      @memberData.monitor   = {planId: @activeServerIds.monitor}

    if @isHorizontallyScalable
      @scaler = new Scaler $scaleHolder, @activeServerIds.primary, @onSelectionChange, @onInstanceTotalChange, 1
    else
      @scaler = new Scaler $scaleHolder, @activeServerIds.primary, @onSelectionChange
      @initMemberEvents()

    @scaler.hideInstructions()
    @scaler.keepHoverInbounds()
    castShadows @$node

  destroyExisting : () ->
    @scaler?.destroy()
    @$node?.remove()

  initMemberEvents : () ->
    @$members     = $('.member', @$node)
    @activeMember = $('.member.active', @$node).attr 'data-id'
    @$members.on 'click', (e)=>
      $currentTarget = $(e.currentTarget)
      @activeMember = $currentTarget.attr 'data-id'
      @visuallyActivateMemberBtn $currentTarget
      # If this is the secondary unit, and the user has not picked a secondary scale
      if @activeMember == "secondary" && !@memberData.secondary.userHasSpecified
        @memberData.secondary.planId = @memberData.primary.planId

      @scaler.refresh @memberData[@activeMember].planId

  visuallyActivateMemberBtn : ($newBtn) ->
    @$members?.removeClass 'active'
    $newBtn?.addClass 'active'

  onSelectionChange : (planId) =>
    if @isHorizontallyScalable || !@isCluster
      @memberData.primary.planId   = planId
      @memberData.primary.planData = @scaler.getPlanData planId
    else
      @memberData[@activeMember].planId   = planId
      @memberData[@activeMember].planData = @scaler.getPlanData planId
      if @activeMember == 'primary' && !@memberData.secondary.userHasSpecified
        @memberData.secondary.planId   = @memberData.primary.planId
        @memberData.secondary.planData = @memberData.primary.planData

      # If this is the secondary plan, note that user has specified the specs
      if @activeMember == 'secondary'
        @memberData.secondary.userHasSpecified = true

    @onSpecsChangeCb @getSelectedPlans()

  onInstanceTotalChange : ( @totalInstances ) =>
    if @onInscanceTotalChangeCb?
      @onInscanceTotalChangeCb(@totalInstances)

  getProviderMetadata : ()->
    @scaler.specsSelector.serverSpecs.meta

  getSelectedPlans : () ->
    # This is a bunkhouse
    if !@isCluster
      @visuallyActivateMemberBtn $(".member[data-id='primary']")
      delete @memberData.secondary
      delete @memberData.monitor

    # This is a db component..
    else if !@isHorizontallyScalable
      # If a secondary plan was not specified, use the primary's data
      if !@memberData.secondary.planData? && !@memberData.secondary.userHasSpecified
        @memberData.secondary.planId   = @memberData.primary.planId
        @memberData.secondary.planData = @memberData.primary.planData

    # Make sure there is a plan for each member
    for key, member of @memberData
      if !member.planId?
        member.planId   = @scaler.getDefaultPlan()
        member.planData = @scaler.getPlanData member.planId

    if @isHorizontallyScalable
      @memberData.primary.totalInstances = @scaler.slider.total

    return @memberData
