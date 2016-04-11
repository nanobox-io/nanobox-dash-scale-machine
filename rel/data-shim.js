(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ScaleDataShim,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = ScaleDataShim = (function() {
  function ScaleDataShim() {
    this.getHostOptions = bind(this.getHostOptions, this);
    this.getServiceSpecs = bind(this.getServiceSpecs, this);
    var providers;
    providers = ["AWS", "LINODE", "DIGITAL_OCEAN", "JOYENT"];
    this.provider = providers[0];
    this.createHash();
  }

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
          title: "Linode"
        },
        plans: [
          {
            meta: {
              title: "Standard"
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
          title: "Digital Ocean"
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
          title: "Joyent"
        },
        plans: [
          {
            meta: {
              title: "Standard"
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
          title: "AWS"
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
    var app, onChangeCb;
    onChangeCb = function(data) {
      return console.log(data);
    };
    return app = new nanobox.ScaleMachine($(".holder"), scaleMachineTestData.getHostOptions(), onChangeCb);
  };
})(this);

},{"./shims/data-shim":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic2hpbXMvZGF0YS1zaGltLmNvZmZlZSIsInN0YWdlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMza0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBTY2FsZURhdGFTaGltLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY2FsZURhdGFTaGltID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTY2FsZURhdGFTaGltKCkge1xuICAgIHRoaXMuZ2V0SG9zdE9wdGlvbnMgPSBiaW5kKHRoaXMuZ2V0SG9zdE9wdGlvbnMsIHRoaXMpO1xuICAgIHRoaXMuZ2V0U2VydmljZVNwZWNzID0gYmluZCh0aGlzLmdldFNlcnZpY2VTcGVjcywgdGhpcyk7XG4gICAgdmFyIHByb3ZpZGVycztcbiAgICBwcm92aWRlcnMgPSBbXCJBV1NcIiwgXCJMSU5PREVcIiwgXCJESUdJVEFMX09DRUFOXCIsIFwiSk9ZRU5UXCJdO1xuICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcnNbMF07XG4gICAgdGhpcy5jcmVhdGVIYXNoKCk7XG4gIH1cblxuICBTY2FsZURhdGFTaGltLnByb3RvdHlwZS5nZXRTZXJ2aWNlU3BlY3MgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5mbztcbiAgICBpbmZvID0gdGhpcy5nZXRDdXJyZW50U3BlY3MoKTtcbiAgICBpbmZvLmhvc3QgPSB0aGlzLnByb3ZpZGVyO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGRhdGE6IGluZm9cbiAgICB9KSk7XG4gIH07XG5cbiAgU2NhbGVEYXRhU2hpbS5wcm90b3R5cGUuZ2V0SG9zdE9wdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5wcm92aWRlcnNbdGhpcy5wcm92aWRlcl0sXG4gICAgICBhY3RpdmVTcGVjc0lkOiB0aGlzLnNwZWNJZFxuICAgIH07XG4gIH07XG5cbiAgU2NhbGVEYXRhU2hpbS5wcm90b3R5cGUuZ2V0Q3VycmVudFNwZWNzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpY3QsIGksIGosIGxlbiwgbGVuMSwgcGxhbiwgcmVmLCByZWYxLCBzcGVjO1xuICAgIGRpY3QgPSB7XG4gICAgICBMSU5PREU6ICdhJyxcbiAgICAgIERJR0lUQUxfT0NFQU46ICdiJyxcbiAgICAgIEpPWUVOVDogJ2MnLFxuICAgICAgQVdTOiAnZCdcbiAgICB9O1xuICAgIHRoaXMuc3BlY0lkID0gZGljdFt0aGlzLnByb3ZpZGVyXSArIFwiMlwiO1xuICAgIHJlZiA9IHRoaXMucHJvdmlkZXJzW3RoaXMucHJvdmlkZXJdLnBsYW5zO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGxhbiA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwbGFuLnNwZWNzO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHNwZWMgPSByZWYxW2pdO1xuICAgICAgICBpZiAoc3BlYy5pZCA9PT0gdGhpcy5zcGVjSWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFtOiBzcGVjLlJBTSxcbiAgICAgICAgICAgIGNwdTogc3BlYy5DUFUsXG4gICAgICAgICAgICBkaXNrOiBzcGVjLkRJU0ssXG4gICAgICAgICAgICBpZDogc3BlYy5pZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU2NhbGVEYXRhU2hpbS5wcm90b3R5cGUuY3JlYXRlSGFzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVycyA9IHtcbiAgICAgIExJTk9ERToge1xuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgdGl0bGU6IFwiTGlub2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGxhbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlN0YW5kYXJkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYTFcIixcbiAgICAgICAgICAgICAgICBSQU06IDEsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDI0XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJhMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMixcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNDhcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImEzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0LFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA5NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYTRcIixcbiAgICAgICAgICAgICAgICBSQU06IDgsXG4gICAgICAgICAgICAgICAgQ1BVOiA2LFxuICAgICAgICAgICAgICAgIERJU0s6IDE5MlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgRElHSVRBTF9PQ0VBTjoge1xuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgdGl0bGU6IFwiRGlnaXRhbCBPY2VhblwiXG4gICAgICAgIH0sXG4gICAgICAgIHBsYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJTdGFuZGFyZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImIxXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAwLjUsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDIwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogMzBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImIzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiA0MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjRcIixcbiAgICAgICAgICAgICAgICBSQU06IDQsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogODBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBWb2x1bWVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogMTIsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNDgsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiA0ODBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImI5XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2NCxcbiAgICAgICAgICAgICAgICBDUFU6IDIwLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgSk9ZRU5UOiB7XG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICB0aXRsZTogXCJKb3llbnRcIlxuICAgICAgICB9LFxuICAgICAgICBwbGFuczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhbmRhcmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMSxcbiAgICAgICAgICAgICAgICBDUFU6IDAuMjUsXG4gICAgICAgICAgICAgICAgRElTSzogMzNcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxLjc1LFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiA1NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzNcIixcbiAgICAgICAgICAgICAgICBSQU06IDIsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDY2XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMy43NSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogMTIzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogNCxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogMTMxXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogNy41LFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiA3MzhcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImM3XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4LFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiA3ODlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImM4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogMTQ2N1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzlcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2LFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNTc1XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTBcIixcbiAgICAgICAgICAgICAgICBSQU06IDE3LjEzLFxuICAgICAgICAgICAgICAgIENQVTogNSxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjgzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTFcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjgzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTJcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjgzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTNcIixcbiAgICAgICAgICAgICAgICBSQU06IDQwLFxuICAgICAgICAgICAgICAgIENQVTogMTAsXG4gICAgICAgICAgICAgICAgRElTSzogMTY4M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIE1lbW9yeVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTcuMTMsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQyMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzE1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzNC4yNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogODQzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTZcIixcbiAgICAgICAgICAgICAgICBSQU06IDY4LjM4LFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxMTIyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTdcIixcbiAgICAgICAgICAgICAgICBSQU06IDE0NCxcbiAgICAgICAgICAgICAgICBDUFU6IDE4LFxuICAgICAgICAgICAgICAgIERJU0s6IDIzNjNcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjU2LFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogNDIwMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIENQVVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMS43NSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNzVcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyMFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNyxcbiAgICAgICAgICAgICAgICBDUFU6IDcsXG4gICAgICAgICAgICAgICAgRElTSzogMjYzXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjFcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2LFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogNjAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjJcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0LFxuICAgICAgICAgICAgICAgIENQVTogMjQsXG4gICAgICAgICAgICAgICAgRElTSzogOTAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjNcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogMTIwMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIElPXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzI0XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MC41LFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNDUyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjVcIixcbiAgICAgICAgICAgICAgICBSQU06IDEyOCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDMwNzJcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjU2LFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogNjE0NFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFN0b3JhZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiA3NjgwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjhcIixcbiAgICAgICAgICAgICAgICBSQU06IDY0LFxuICAgICAgICAgICAgICAgIENQVTogNixcbiAgICAgICAgICAgICAgICBESVNLOiAxNTM2MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzI5XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjgsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDMwNzIwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBBV1M6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkFXU1wiXG4gICAgICAgIH0sXG4gICAgICAgIHBsYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJHZW5lcmFsIFB1cnBvc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMSxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMixcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogNCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogOCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCJcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQ4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2NCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDlcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2MCxcbiAgICAgICAgICAgICAgICBDUFU6IDQwLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDEwXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzLjc1LFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiA0XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTFcIixcbiAgICAgICAgICAgICAgICBSQU06IDcuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNjRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTNcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ29tcHV0ZSBPcHRpbWl6ZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTRcIixcbiAgICAgICAgICAgICAgICBSQU06IDMuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDE1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA3LjUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDE2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMThcIixcbiAgICAgICAgICAgICAgICBSQU06IDYwLFxuICAgICAgICAgICAgICAgIENQVTogMzYsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTlcIixcbiAgICAgICAgICAgICAgICBSQU06IDMuNzUsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDMyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjBcIixcbiAgICAgICAgICAgICAgICBSQU06IDcuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogODBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2MFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzMCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDMyMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDIzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIEdQVVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjVcIixcbiAgICAgICAgICAgICAgICBSQU06IDYwLFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogMjQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkhpZ2ggUkFNXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDI2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNSxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNjRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMzAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjhcIixcbiAgICAgICAgICAgICAgICBSQU06IDYxLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAzMjBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTIyLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzBcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0NCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFN0b3JhZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzFcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwLjUsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjIsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiAzMjAwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzRcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0NCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0MDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzAuNSxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogNjAwMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDM2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MSxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTIwMDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMTIyLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMjQwMDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjQ0LFxuICAgICAgICAgICAgICAgIENQVTogMzYsXG4gICAgICAgICAgICAgICAgRElTSzogNDgwMDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFNjYWxlRGF0YVNoaW07XG5cbn0pKCk7XG4iLCJ2YXIgU2NhbGVNYWNoaW5lRGF0YVNoaW07XG5cblNjYWxlTWFjaGluZURhdGFTaGltID0gcmVxdWlyZSgnLi9zaGltcy9kYXRhLXNoaW0nKTtcblxud2luZG93LnNjYWxlTWFjaGluZVRlc3REYXRhID0gbmV3IFNjYWxlTWFjaGluZURhdGFTaGltKCk7XG5cbndpbmRvdy5pbml0ID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwLCBvbkNoYW5nZUNiO1xuICAgIG9uQ2hhbmdlQ2IgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gYXBwID0gbmV3IG5hbm9ib3guU2NhbGVNYWNoaW5lKCQoXCIuaG9sZGVyXCIpLCBzY2FsZU1hY2hpbmVUZXN0RGF0YS5nZXRIb3N0T3B0aW9ucygpLCBvbkNoYW5nZUNiKTtcbiAgfTtcbn0pKHRoaXMpO1xuIl19
