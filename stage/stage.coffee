ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()
PubSub.subscribe 'SCALE.GET_OPTIONS', (m, cb)->
  cb scaleMachineTestData.getHostOptions()

window.init = ()=>
  onSpecsChange = (data)->
    console.log "The user has selected :"
    console.log data

  totalInstances = 320
  config =
    activeServerId          :
      primary : scaleMachineTestData.getSampleScaleId()
    onSpecsChange           : onSpecsChange
    totalInstances          : totalInstances
    isHorizontallyScalable  : false
    isCluster               : false

  # window.app  = new nanobox.ScaleMachine $(".holder"), config

  config2 =
    activeServerId          :
      primary   : scaleMachineTestData.getSampleScaleId()
      secondary : scaleMachineTestData.getSampleScaleId()
      arbiter   : scaleMachineTestData.getSampleScaleId()
    onSpecsChange           : onSpecsChange
    totalInstances          : totalInstances
    isHorizontallyScalable  : true
    isCluster               : true
  window.app2 = new nanobox.ScaleMachine $(".holder"), config2
  # app.hideInstructions()
