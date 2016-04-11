ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()

window.init = ()=>
  onChangeCb = (data)->
    console.log data

  app = new nanobox.ScaleMachine $(".holder"), scaleMachineTestData.getHostOptions(), onChangeCb
