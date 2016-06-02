ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()

window.init = ()=>
  onSpecsChange = (data)->
    console.log "The user has selected :"
    console.log data

  PubSub.subscribe 'SCALE.GET_OPTIONS', (m, cb)-> cb scaleMachineTestData.getHostOptions()

  totalInstances = 5
  config =
    activeServerId          : scaleMachineTestData.getSampleScaleId()
    onSpecsChange           : onSpecsChange
    totalInstances          : totalInstances
    isHorizontallyScalable  : true
    isCluster               : true

  window.app = new nanobox.ScaleMachine $(".holder"), config
  # app.hideInstructions()
