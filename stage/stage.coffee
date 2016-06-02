ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()

window.init = ()=>
  onUserSelectNewServer   = (data)-> console.log "The user has clicked this server id : `#{data}`"
  onTotalInstancesChanged = (data)-> console.log "The user has dragged : `#{data}` new instances"

  PubSub.subscribe 'SCALE.GET_OPTIONS', (m, cb)-> cb scaleMachineTestData.getHostOptions()

  totalInstances = 5
  config =
    activeServerId          : scaleMachineTestData.getSampleScaleId()
    onSpecsChange           : onUserSelectNewServer
    onInscanceTotalChangeCb : onTotalInstancesChanged
    totalInstances          : totalInstances
    isHorizontallyScalable  : false
    isCluster               : true

  window.app = new nanobox.ScaleMachine $(".holder"), config
  # app.hideInstructions()
