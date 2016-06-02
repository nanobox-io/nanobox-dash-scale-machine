scaleManager = require 'jade/scale-manager'
Scaler       = require 'components/scaler'
module.exports = class ScaleManager

  constructor: ($el, config) ->

    @activeServerId          = config.activeServerId
    @onSpecsChange           = config.onSpecsChange
    @onInscanceTotalChangeCb = config.onInscanceTotalChangeCb
    @totalInstances          = config.totalInstances
    @isCluster               = config.isCluster
    @isHorizontallyScalable  = config.isHorizontallyScalable
    @isRedundantData         = @isCluster && !@isHorizontallyScalable

    @totalInstances = 1
    @$node = $ scaleManager( {isRedundantDataCluster: @isRedundantData} )
    $el.append @$node
    $scaleHolder = $ '.scale-holder', @$node

    @memberData = { primary : {} }

    # When a redundant data cluster, add holder for secondary db and monitor
    if @isRedundantData
      @memberData.secondary = {}
      @memberData.monitor   = {}

    if @isHorizontallyScalable
      @scaleMachine = new Scaler $scaleHolder, 'default', @onSelectionChange, @onInstanceTotalChange, 1
    else
      @scaleMachine = new Scaler $scaleHolder, 'default', @onSelectionChange
      @initMemberEvents()

    @scaleMachine.hideInstructions()
    @scaleMachine.keepHoverInbounds()
    castShadows @$node

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

      @scaleMachine.refresh @memberData[@activeMember].planId

  visuallyActivateMemberBtn : ($newBtn) ->
    @$members?.removeClass 'active'
    $newBtn?.addClass 'active'

  onSelectionChange : (planId) =>
    if @isHorizontallyScalable || !@isCluster
      @memberData.primary.planId   = planId
      @memberData.primary.planData = @scaleMachine.getPlanData planId
    else
      @memberData[@activeMember].planId   = planId
      @memberData[@activeMember].planData = @scaleMachine.getPlanData planId
      if @activeMember == 'primary' && !@memberData.secondary.userHasSpecified
        @memberData.secondary.planId   = @memberData.primary.planId
        @memberData.secondary.planData = @memberData.primary.planData

      # If this is the secondary plan, note that user has specified the specs
      if @activeMember == 'secondary'
        @memberData.secondary.userHasSpecified = true

  onInstanceTotalChange : ( @totalInstances ) =>

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
        member.planId   = @scaleMachine.getDefaultPlan()
        member.planData = @scaleMachine.getPlanData member.planId

    if @isHorizontallyScalable
      @memberData.primary.totalInstances = @totalInstances

    return @memberData

  activate : () ->
    if !@isCluster
      @$node.addClass 'bunkhouse-topology'
      @scaleMachine.refresh @memberData.primary.planId, false

    else
      @$node.removeClass 'bunkhouse-topology'
      if !@isHorizontallyScalable
        if !@memberData.secondary?
          @memberData.secondary = {}
          @memberData.monitor   = {}
        @scaleMachine.refresh @memberData[$('.member.active', @$node).attr 'data-id'].planId, false
