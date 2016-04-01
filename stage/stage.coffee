ScaleMachineDataShim = require './shims/data-shim'
window.scaleMachineTestData = new ScaleMachineDataShim()

window.init = ()=>
  app = new nanobox.ScaleMachine $(".holder"), scaleMachineTestData.getHostOptions()
