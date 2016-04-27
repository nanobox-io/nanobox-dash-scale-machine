(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ScaleDataShim,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = ScaleDataShim = (function() {
  function ScaleDataShim() {
    this.getHostOptions = bind(this.getHostOptions, this);
    this.getServiceSpecs = bind(this.getServiceSpecs, this);
    var providers;
    providers = ["AWS", "LINODE", "DIGITAL_OCEAN", "JOYENT"];
    this.provider = providers[2];
    this.createHash();
  }

  ScaleDataShim.prototype.getSampleScaleId = function() {
    var randomIndex;
    randomIndex = Math.floor(this.providers[this.provider].plans[0].specs.length * Math.random());
    return this.providers[this.provider].plans[0].specs[randomIndex].id;
  };

  ScaleDataShim.prototype.getServiceSpecs = function() {
    var info;
    info = this.getCurrentSpecs();
    info.host = this.provider;
    return JSON.parse(JSON.stringify({
      data: info
    }));
  };

  ScaleDataShim.prototype.getHostOptions = function() {
    return {
      data: this.providers[this.provider],
      activeSpecsId: this.specId
    };
  };

  ScaleDataShim.prototype.getCurrentSpecs = function() {
    var dict, i, j, len, len1, plan, ref, ref1, spec;
    dict = {
      LINODE: 'a',
      DIGITAL_OCEAN: 'b',
      JOYENT: 'c',
      AWS: 'd'
    };
    this.specId = dict[this.provider] + "2";
    ref = this.providers[this.provider].plans;
    for (i = 0, len = ref.length; i < len; i++) {
      plan = ref[i];
      ref1 = plan.specs;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        spec = ref1[j];
        if (spec.id === this.specId) {
          return {
            ram: spec.RAM,
            cpu: spec.CPU,
            disk: spec.DISK,
            id: spec.id
          };
        }
      }
    }
  };

  ScaleDataShim.prototype.createHash = function() {
    return this.providers = {
      LINODE: {
        meta: {
          title: "Linode",
          "default": "a1",
          totalPlans: 4
        },
        plans: [
          {
            meta: {
              title: "Standard Configuration"
            },
            specs: [
              {
                id: "a1",
                RAM: 1,
                CPU: 1,
                DISK: 24
              }, {
                id: "a2",
                RAM: 2,
                CPU: 2,
                DISK: 48
              }, {
                id: "a3",
                RAM: 4,
                CPU: 4,
                DISK: 96
              }, {
                id: "a4",
                RAM: 8,
                CPU: 6,
                DISK: 192
              }
            ]
          }
        ]
      },
      DIGITAL_OCEAN: {
        meta: {
          title: "Digital Ocean",
          "default": "b1",
          totalPlans: 9
        },
        plans: [
          {
            meta: {
              title: "Standard"
            },
            specs: [
              {
                id: "b1",
                RAM: 0.5,
                CPU: 1,
                DISK: 20
              }, {
                id: "b2",
                RAM: 1,
                CPU: 1,
                DISK: 30
              }, {
                id: "b3",
                RAM: 2,
                CPU: 2,
                DISK: 40
              }, {
                id: "b4",
                RAM: 4,
                CPU: 2,
                DISK: 60
              }, {
                id: "b5",
                RAM: 8,
                CPU: 4,
                DISK: 80
              }
            ]
          }, {
            meta: {
              title: "High Volume"
            },
            specs: [
              {
                id: "b6",
                RAM: 16,
                CPU: 8,
                DISK: 160
              }, {
                id: "b7",
                RAM: 32,
                CPU: 12,
                DISK: 320
              }, {
                id: "b8",
                RAM: 48,
                CPU: 16,
                DISK: 480
              }, {
                id: "b9",
                RAM: 64,
                CPU: 20,
                DISK: 640
              }
            ]
          }
        ]
      },
      JOYENT: {
        meta: {
          title: "Joyent",
          "default": "c1",
          totalPlans: 24
        },
        plans: [
          {
            meta: {
              title: "Standard",
              "default": "c1"
            },
            specs: [
              {
                id: "c1",
                RAM: 1,
                CPU: 0.25,
                DISK: 33
              }, {
                id: "c2",
                RAM: 1.75,
                CPU: 1,
                DISK: 56
              }, {
                id: "c3",
                RAM: 2,
                CPU: 1,
                DISK: 66
              }, {
                id: "c4",
                RAM: 3.75,
                CPU: 1,
                DISK: 123
              }, {
                id: "c5",
                RAM: 4,
                CPU: 1,
                DISK: 131
              }, {
                id: "c6",
                RAM: 7.5,
                CPU: 2,
                DISK: 738
              }, {
                id: "c7",
                RAM: 8,
                CPU: 2,
                DISK: 789
              }, {
                id: "c8",
                RAM: 15,
                CPU: 4,
                DISK: 1467
              }, {
                id: "c9",
                RAM: 16,
                CPU: 4,
                DISK: 1575
              }, {
                id: "c10",
                RAM: 17.13,
                CPU: 5,
                DISK: 1683
              }, {
                id: "c11",
                RAM: 30,
                CPU: 8,
                DISK: 1683
              }, {
                id: "c12",
                RAM: 32,
                CPU: 8,
                DISK: 1683
              }, {
                id: "c13",
                RAM: 40,
                CPU: 10,
                DISK: 1683
              }
            ]
          }, {
            meta: {
              title: "High Memory"
            },
            specs: [
              {
                id: "c14",
                RAM: 17.13,
                CPU: 2,
                DISK: 420
              }, {
                id: "c15",
                RAM: 34.25,
                CPU: 4,
                DISK: 843
              }, {
                id: "c16",
                RAM: 68.38,
                CPU: 8,
                DISK: 1122
              }, {
                id: "c17",
                RAM: 144,
                CPU: 18,
                DISK: 2363
              }, {
                id: "c18",
                RAM: 256,
                CPU: 32,
                DISK: 4200
              }
            ]
          }, {
            meta: {
              title: "High CPU"
            },
            specs: [
              {
                id: "c19",
                RAM: 1.75,
                CPU: 2,
                DISK: 75
              }, {
                id: "c20",
                RAM: 7,
                CPU: 7,
                DISK: 263
              }, {
                id: "c21",
                RAM: 16,
                CPU: 16,
                DISK: 600
              }, {
                id: "c22",
                RAM: 24,
                CPU: 24,
                DISK: 900
              }, {
                id: "c23",
                RAM: 32,
                CPU: 32,
                DISK: 1200
              }
            ]
          }, {
            meta: {
              title: "High IO"
            },
            specs: [
              {
                id: "c24",
                RAM: 60.5,
                CPU: 8,
                DISK: 1452
              }, {
                id: "c25",
                RAM: 128,
                CPU: 16,
                DISK: 3072
              }, {
                id: "c26",
                RAM: 256,
                CPU: 32,
                DISK: 6144
              }
            ]
          }, {
            meta: {
              title: "High Storage"
            },
            specs: [
              {
                id: "c27",
                RAM: 32,
                CPU: 8,
                DISK: 7680
              }, {
                id: "c28",
                RAM: 64,
                CPU: 6,
                DISK: 15360
              }, {
                id: "c29",
                RAM: 128,
                CPU: 2,
                DISK: 30720
              }
            ]
          }
        ]
      },
      AWS: {
        meta: {
          title: "AWS",
          "default": "d1",
          totalPlans: 38
        },
        plans: [
          {
            meta: {
              title: "General Purpose"
            },
            specs: [
              {
                id: "d1",
                RAM: 1,
                CPU: 1,
                DISK: "EBS Only"
              }, {
                id: "d2",
                RAM: 2,
                CPU: 1,
                DISK: "EBS Only"
              }, {
                id: "d3",
                RAM: 4,
                CPU: 2,
                DISK: "EBS Only"
              }, {
                id: "d4",
                RAM: 8,
                CPU: 2,
                DISK: "EBS Only"
              }, {
                id: "d5",
                RAM: 8,
                CPU: 2,
                DISK: "EBS Only"
              }, {
                id: "d6",
                RAM: 16,
                CPU: 4,
                DISK: "EBS Only"
              }, {
                id: "d7",
                RAM: 32,
                CPU: 8,
                DISK: "EBS Only"
              }, {
                id: "d8",
                RAM: 64,
                CPU: 16,
                DISK: "EBS Only"
              }, {
                id: "d9",
                RAM: 160,
                CPU: 40,
                DISK: "EBS Only"
              }, {
                id: "d10",
                RAM: 3.75,
                CPU: 1,
                DISK: 4
              }, {
                id: "d11",
                RAM: 7.5,
                CPU: 2,
                DISK: 64
              }, {
                id: "d12",
                RAM: 15,
                CPU: 4,
                DISK: 80
              }, {
                id: "d13",
                RAM: 30,
                CPU: 8,
                DISK: 160
              }
            ]
          }, {
            meta: {
              title: "Compute Optimized"
            },
            specs: [
              {
                id: "d14",
                RAM: 3.75,
                CPU: 2,
                DISK: "EBS Only"
              }, {
                id: "d15",
                RAM: 7.5,
                CPU: 4,
                DISK: "EBS Only"
              }, {
                id: "d16",
                RAM: 15,
                CPU: 8,
                DISK: "EBS Only"
              }, {
                id: "d17",
                RAM: 30,
                CPU: 16,
                DISK: "EBS Only"
              }, {
                id: "d18",
                RAM: 60,
                CPU: 36,
                DISK: "EBS Only"
              }, {
                id: "d19",
                RAM: 3.75,
                CPU: 2,
                DISK: 32
              }, {
                id: "d20",
                RAM: 7.5,
                CPU: 4,
                DISK: 80
              }, {
                id: "d21",
                RAM: 15,
                CPU: 8,
                DISK: 160
              }, {
                id: "d22",
                RAM: 30,
                CPU: 16,
                DISK: 320
              }, {
                id: "d23",
                RAM: 60,
                CPU: 32,
                DISK: 640
              }
            ]
          }, {
            meta: {
              title: "High GPU"
            },
            specs: [
              {
                id: "d24",
                RAM: 15,
                CPU: 8,
                DISK: 60
              }, {
                id: "d25",
                RAM: 60,
                CPU: 32,
                DISK: 240
              }
            ]
          }, {
            meta: {
              title: "High RAM"
            },
            specs: [
              {
                id: "d26",
                RAM: 15,
                CPU: 2,
                DISK: 64
              }, {
                id: "d27",
                RAM: 30.5,
                CPU: 4,
                DISK: 160
              }, {
                id: "d28",
                RAM: 61,
                CPU: 8,
                DISK: 320
              }, {
                id: "d29",
                RAM: 122,
                CPU: 16,
                DISK: 320
              }, {
                id: "d30",
                RAM: 244,
                CPU: 32,
                DISK: 640
              }
            ]
          }, {
            meta: {
              title: "High Storage"
            },
            specs: [
              {
                id: "d31",
                RAM: 30.5,
                CPU: 4,
                DISK: 800
              }, {
                id: "d32",
                RAM: 61,
                CPU: 8,
                DISK: 1600
              }, {
                id: "d33",
                RAM: 122,
                CPU: 16,
                DISK: 3200
              }, {
                id: "d34",
                RAM: 244,
                CPU: 32,
                DISK: 6400
              }, {
                id: "d35",
                RAM: 30.5,
                CPU: 4,
                DISK: 6000
              }, {
                id: "d36",
                RAM: 61,
                CPU: 8,
                DISK: 12000
              }, {
                id: "d37",
                RAM: 122,
                CPU: 16,
                DISK: 24000
              }, {
                id: "d38",
                RAM: 244,
                CPU: 36,
                DISK: 48000
              }
            ]
          }
        ]
      }
    };
  };

  return ScaleDataShim;

})();

},{}],2:[function(require,module,exports){
var ScaleMachineDataShim;

ScaleMachineDataShim = require('./shims/data-shim');

window.scaleMachineTestData = new ScaleMachineDataShim();

window.init = (function(_this) {
  return function() {
    var onTotalInstancesChanged, onUserSelectNewServer, totalInstances;
    onUserSelectNewServer = function(data) {
      return console.log("The user has clicked this server id : `" + data + "`");
    };
    onTotalInstancesChanged = function(data) {
      return console.log("The user has dragged : `" + data + "` new instances");
    };
    PubSub.subscribe('STATS.GET_OPTIONS', function(m, cb) {
      return cb(scaleMachineTestData.getHostOptions());
    });
    totalInstances = 5;
    return window.app = new nanobox.ScaleMachine($(".holder"), scaleMachineTestData.getSampleScaleId(), onUserSelectNewServer, onTotalInstancesChanged, totalInstances);
  };
})(this);

},{"./shims/data-shim":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic2hpbXMvZGF0YS1zaGltLmNvZmZlZSIsInN0YWdlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFNjYWxlRGF0YVNoaW0sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjYWxlRGF0YVNoaW0gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNjYWxlRGF0YVNoaW0oKSB7XG4gICAgdGhpcy5nZXRIb3N0T3B0aW9ucyA9IGJpbmQodGhpcy5nZXRIb3N0T3B0aW9ucywgdGhpcyk7XG4gICAgdGhpcy5nZXRTZXJ2aWNlU3BlY3MgPSBiaW5kKHRoaXMuZ2V0U2VydmljZVNwZWNzLCB0aGlzKTtcbiAgICB2YXIgcHJvdmlkZXJzO1xuICAgIHByb3ZpZGVycyA9IFtcIkFXU1wiLCBcIkxJTk9ERVwiLCBcIkRJR0lUQUxfT0NFQU5cIiwgXCJKT1lFTlRcIl07XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyc1syXTtcbiAgICB0aGlzLmNyZWF0ZUhhc2goKTtcbiAgfVxuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldFNhbXBsZVNjYWxlSWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZG9tSW5kZXg7XG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKHRoaXMucHJvdmlkZXJzW3RoaXMucHJvdmlkZXJdLnBsYW5zWzBdLnNwZWNzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0aGlzLnByb3ZpZGVyXS5wbGFuc1swXS5zcGVjc1tyYW5kb21JbmRleF0uaWQ7XG4gIH07XG5cbiAgU2NhbGVEYXRhU2hpbS5wcm90b3R5cGUuZ2V0U2VydmljZVNwZWNzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZm87XG4gICAgaW5mbyA9IHRoaXMuZ2V0Q3VycmVudFNwZWNzKCk7XG4gICAgaW5mby5ob3N0ID0gdGhpcy5wcm92aWRlcjtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkYXRhOiBpbmZvXG4gICAgfSkpO1xuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldEhvc3RPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHRoaXMucHJvdmlkZXJzW3RoaXMucHJvdmlkZXJdLFxuICAgICAgYWN0aXZlU3BlY3NJZDogdGhpcy5zcGVjSWRcbiAgICB9O1xuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldEN1cnJlbnRTcGVjcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWN0LCBpLCBqLCBsZW4sIGxlbjEsIHBsYW4sIHJlZiwgcmVmMSwgc3BlYztcbiAgICBkaWN0ID0ge1xuICAgICAgTElOT0RFOiAnYScsXG4gICAgICBESUdJVEFMX09DRUFOOiAnYicsXG4gICAgICBKT1lFTlQ6ICdjJyxcbiAgICAgIEFXUzogJ2QnXG4gICAgfTtcbiAgICB0aGlzLnNwZWNJZCA9IGRpY3RbdGhpcy5wcm92aWRlcl0gKyBcIjJcIjtcbiAgICByZWYgPSB0aGlzLnByb3ZpZGVyc1t0aGlzLnByb3ZpZGVyXS5wbGFucztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBsYW4gPSByZWZbaV07XG4gICAgICByZWYxID0gcGxhbi5zcGVjcztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzcGVjID0gcmVmMVtqXTtcbiAgICAgICAgaWYgKHNwZWMuaWQgPT09IHRoaXMuc3BlY0lkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhbTogc3BlYy5SQU0sXG4gICAgICAgICAgICBjcHU6IHNwZWMuQ1BVLFxuICAgICAgICAgICAgZGlzazogc3BlYy5ESVNLLFxuICAgICAgICAgICAgaWQ6IHNwZWMuaWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBMSU5PREU6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkxpbm9kZVwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImExXCIsXG4gICAgICAgICAgdG90YWxQbGFuczogNFxuICAgICAgICB9LFxuICAgICAgICBwbGFuczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhbmRhcmQgQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImExXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAyNFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYTJcIixcbiAgICAgICAgICAgICAgICBSQU06IDIsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQ4XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJhM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogNCxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogOTZcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImE0XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4LFxuICAgICAgICAgICAgICAgIENQVTogNixcbiAgICAgICAgICAgICAgICBESVNLOiAxOTJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIERJR0lUQUxfT0NFQU46IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkRpZ2l0YWwgT2NlYW5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogXCJiMVwiLFxuICAgICAgICAgIHRvdGFsUGxhbnM6IDlcbiAgICAgICAgfSxcbiAgICAgICAgcGxhbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlN0YW5kYXJkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjFcIixcbiAgICAgICAgICAgICAgICBSQU06IDAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogMjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAzMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjNcIixcbiAgICAgICAgICAgICAgICBSQU06IDIsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImI1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4LFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA4MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFZvbHVtZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImI2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNixcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMzIsXG4gICAgICAgICAgICAgICAgQ1BVOiAxMixcbiAgICAgICAgICAgICAgICBESVNLOiAzMjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImI4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0OCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDQ4MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjlcIixcbiAgICAgICAgICAgICAgICBSQU06IDY0LFxuICAgICAgICAgICAgICAgIENQVTogMjAsXG4gICAgICAgICAgICAgICAgRElTSzogNjQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBKT1lFTlQ6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkpveWVudFwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImMxXCIsXG4gICAgICAgICAgdG90YWxQbGFuczogMjRcbiAgICAgICAgfSxcbiAgICAgICAgcGxhbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImMxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzFcIixcbiAgICAgICAgICAgICAgICBSQU06IDEsXG4gICAgICAgICAgICAgICAgQ1BVOiAwLjI1LFxuICAgICAgICAgICAgICAgIERJU0s6IDMzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMS43NSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogNTZcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiA2NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzRcIixcbiAgICAgICAgICAgICAgICBSQU06IDMuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDEyM1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzVcIixcbiAgICAgICAgICAgICAgICBSQU06IDQsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDEzMVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzZcIixcbiAgICAgICAgICAgICAgICBSQU06IDcuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNzM4XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNzg5XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDE0NjdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImM5XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNixcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogMTU3NVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzEwXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNy4xMyxcbiAgICAgICAgICAgICAgICBDUFU6IDUsXG4gICAgICAgICAgICAgICAgRElTSzogMTY4M1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzExXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTY4M1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzEyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMixcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTY4M1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzEzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0MCxcbiAgICAgICAgICAgICAgICBDUFU6IDEwLFxuICAgICAgICAgICAgICAgIERJU0s6IDE2ODNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBNZW1vcnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTRcIixcbiAgICAgICAgICAgICAgICBSQU06IDE3LjEzLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiA0MjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzQuMjUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDg0M1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzE2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2OC4zOCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTEyMlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzE3XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNDQsXG4gICAgICAgICAgICAgICAgQ1BVOiAxOCxcbiAgICAgICAgICAgICAgICBESVNLOiAyMzYzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMThcIixcbiAgICAgICAgICAgICAgICBSQU06IDI1NixcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQyMDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBDUFVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTlcIixcbiAgICAgICAgICAgICAgICBSQU06IDEuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDc1XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjBcIixcbiAgICAgICAgICAgICAgICBSQU06IDcsXG4gICAgICAgICAgICAgICAgQ1BVOiA3LFxuICAgICAgICAgICAgICAgIERJU0s6IDI2M1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzIxXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNixcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDYwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyNCxcbiAgICAgICAgICAgICAgICBDUFU6IDI0LFxuICAgICAgICAgICAgICAgIERJU0s6IDkwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzIzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMixcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDEyMDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBJT1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTQ1MlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzI1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjgsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiAzMDcyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjZcIixcbiAgICAgICAgICAgICAgICBSQU06IDI1NixcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDYxNDRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBTdG9yYWdlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzI3XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMixcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogNzY4MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzI4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2NCxcbiAgICAgICAgICAgICAgICBDUFU6IDYsXG4gICAgICAgICAgICAgICAgRElTSzogMTUzNjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTI4LFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiAzMDcyMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgQVdTOiB7XG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICB0aXRsZTogXCJBV1NcIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogXCJkMVwiLFxuICAgICAgICAgIHRvdGFsUGxhbnM6IDM4XG4gICAgICAgIH0sXG4gICAgICAgIHBsYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJHZW5lcmFsIFB1cnBvc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMixcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogNCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCJcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQ4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2NCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDlcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2MCxcbiAgICAgICAgICAgICAgICBDUFU6IDQwLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDEwXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzLjc1LFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiA0XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTFcIixcbiAgICAgICAgICAgICAgICBSQU06IDcuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNjRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTNcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29tcHV0ZSBPcHRpbWl6ZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTRcIixcbiAgICAgICAgICAgICAgICBSQU06IDMuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDE1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA3LjUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDE2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMThcIixcbiAgICAgICAgICAgICAgICBSQU06IDYwLFxuICAgICAgICAgICAgICAgIENQVTogMzYsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTlcIixcbiAgICAgICAgICAgICAgICBSQU06IDMuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDMyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjBcIixcbiAgICAgICAgICAgICAgICBSQU06IDcuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogODBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDMyMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDIzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIEdQVVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjVcIixcbiAgICAgICAgICAgICAgICBSQU06IDYwLFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogMjQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkhpZ2ggUkFNXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDI2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNjRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMzAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjhcIixcbiAgICAgICAgICAgICAgICBSQU06IDYxLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAzMjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTIyLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzBcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0NCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFN0b3JhZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzFcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLjUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjIsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiAzMjAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzRcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0NCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogNjAwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDM2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTIwMDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMTIyLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMjQwMDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjQ0LFxuICAgICAgICAgICAgICAgIENQVTogMzYsXG4gICAgICAgICAgICAgICAgRElTSzogNDgwMDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFNjYWxlRGF0YVNoaW07XG5cbn0pKCk7XG4iLCJ2YXIgU2NhbGVNYWNoaW5lRGF0YVNoaW07XG5cblNjYWxlTWFjaGluZURhdGFTaGltID0gcmVxdWlyZSgnLi9zaGltcy9kYXRhLXNoaW0nKTtcblxud2luZG93LnNjYWxlTWFjaGluZVRlc3REYXRhID0gbmV3IFNjYWxlTWFjaGluZURhdGFTaGltKCk7XG5cbndpbmRvdy5pbml0ID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb25Ub3RhbEluc3RhbmNlc0NoYW5nZWQsIG9uVXNlclNlbGVjdE5ld1NlcnZlciwgdG90YWxJbnN0YW5jZXM7XG4gICAgb25Vc2VyU2VsZWN0TmV3U2VydmVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgaGFzIGNsaWNrZWQgdGhpcyBzZXJ2ZXIgaWQgOiBgXCIgKyBkYXRhICsgXCJgXCIpO1xuICAgIH07XG4gICAgb25Ub3RhbEluc3RhbmNlc0NoYW5nZWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJUaGUgdXNlciBoYXMgZHJhZ2dlZCA6IGBcIiArIGRhdGEgKyBcImAgbmV3IGluc3RhbmNlc1wiKTtcbiAgICB9O1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ1NUQVRTLkdFVF9PUFRJT05TJywgZnVuY3Rpb24obSwgY2IpIHtcbiAgICAgIHJldHVybiBjYihzY2FsZU1hY2hpbmVUZXN0RGF0YS5nZXRIb3N0T3B0aW9ucygpKTtcbiAgICB9KTtcbiAgICB0b3RhbEluc3RhbmNlcyA9IDU7XG4gICAgcmV0dXJuIHdpbmRvdy5hcHAgPSBuZXcgbmFub2JveC5TY2FsZU1hY2hpbmUoJChcIi5ob2xkZXJcIiksIHNjYWxlTWFjaGluZVRlc3REYXRhLmdldFNhbXBsZVNjYWxlSWQoKSwgb25Vc2VyU2VsZWN0TmV3U2VydmVyLCBvblRvdGFsSW5zdGFuY2VzQ2hhbmdlZCwgdG90YWxJbnN0YW5jZXMpO1xuICB9O1xufSkodGhpcyk7XG4iXX0=
