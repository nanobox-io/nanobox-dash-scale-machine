ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()

window.init = ()=>
  onUserSelectNewServer = (data)->
    console.log "The user has clicked this server id : `#{data}`"

  PubSub.subscribe 'STATS.GET_OPTIONS', (m, cb)-> cb scaleMachineTestData.getHostOptions()

  app = new nanobox.ScaleMachine $(".holder"), scaleMachineTestData.getSampleScaleId(), onUserSelectNewServer
