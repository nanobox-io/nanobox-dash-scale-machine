(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "meta":{
    "title":"AWS",
    "serverTitle":"Server",
    "default":"a1",
    "totalPlans":37
  },
	"id": "us-east-1",
	"title": "US East (N. Virginia)",
	"plans": [{
		"id": "general_purpose",
		"meta":{"title": "General purpose"},
		"specs": [{
			"id": "m1.small",
			"RAM": 1740,
			"CPU": 0.25,
			"DISK": 30,
			"transfer": "unlimited",
			"dollarsPerHr": 0.04816666666666666,
			"dollarsPerMo": 34.68
		}, {
			"id": "m1.medium",
			"RAM": 3840,
			"CPU": 0.25,
			"DISK": 40,
			"transfer": "unlimited",
			"dollarsPerHr": 0.09255555555555554,
			"dollarsPerMo": 66.63999999999999
		}, {
			"id": "m1.large",
			"RAM": 7680,
			"CPU": 0.5,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.18333333333333332,
			"dollarsPerMo": 132.0
		}, {
			"id": "m1.xlarge",
			"RAM": 15360,
			"CPU": 1.0,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.3708333333333333,
			"dollarsPerMo": 267.0
		}, {
			"id": "t2.nano",
			"RAM": 512,
			"CPU": 0.25,
			"DISK": 20,
			"transfer": "unlimited",
			"dollarsPerHr": 0.008677777777777777,
			"dollarsPerMo": 6.248
		}, {
			"id": "t2.micro",
			"RAM": 1024,
			"CPU": 0.25,
			"DISK": 30,
			"transfer": "unlimited",
			"dollarsPerHr": 0.016166666666666666,
			"dollarsPerMo": 11.64
		}, {
			"id": "t2.small",
			"RAM": 2048,
			"CPU": 0.25,
			"DISK": 40,
			"transfer": "unlimited",
			"dollarsPerHr": 0.028555555555555556,
			"dollarsPerMo": 20.56
		}, {
			"id": "t2.medium",
			"RAM": 4096,
			"CPU": 0.5,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.05533333333333333,
			"dollarsPerMo": 39.84
		}, {
			"id": "t2.large",
			"RAM": 8192,
			"CPU": 0.5,
			"DISK": 80,
			"transfer": "unlimited",
			"dollarsPerHr": 0.10511111111111111,
			"dollarsPerMo": 75.68
		}, {
			"id": "t2.xlarge",
			"RAM": 16384,
			"CPU": 1.0,
			"DISK": 160,
			"transfer": "unlimited",
			"dollarsPerHr": 0.21022222222222223,
			"dollarsPerMo": 151.36
		}, {
			"id": "t2.2xlarge",
			"RAM": 32768,
			"CPU": 2.0,
			"DISK": 320,
			"transfer": "unlimited",
			"dollarsPerHr": 0.42044444444444445,
			"dollarsPerMo": 302.72
		}, {
			"id": "m4.large",
			"RAM": 8192,
			"CPU": 0.5,
			"DISK": 80,
			"transfer": "unlimited",
			"dollarsPerHr": 0.11911111111111111,
			"dollarsPerMo": 85.76
		}, {
			"id": "m4.xlarge",
			"RAM": 16384,
			"CPU": 1.0,
			"DISK": 160,
			"transfer": "unlimited",
			"dollarsPerHr": 0.23722222222222222,
			"dollarsPerMo": 170.8
		}, {
			"id": "m4.2xlarge",
			"RAM": 32768,
			"CPU": 2.0,
			"DISK": 320,
			"transfer": "unlimited",
			"dollarsPerHr": 0.47544444444444445,
			"dollarsPerMo": 342.32
		}, {
			"id": "m4.4xlarge",
			"RAM": 65536,
			"CPU": 4.0,
			"DISK": 640,
			"transfer": "unlimited",
			"dollarsPerHr": 0.9508888888888889,
			"dollarsPerMo": 684.64
		}, {
			"id": "m4.10xlarge",
			"RAM": 163840,
			"CPU": 10.0,
			"DISK": 1600,
			"transfer": "unlimited",
			"dollarsPerHr": 2.377222222222222,
			"dollarsPerMo": 1711.6
		}, {
			"id": "m4.16xlarge",
			"RAM": 262144,
			"CPU": 16.0,
			"DISK": 2560,
			"transfer": "unlimited",
			"dollarsPerHr": 3.8025555555555557,
			"dollarsPerMo": 2737.84
		}, {
			"id": "m3.medium",
			"RAM": 3840,
			"CPU": 0.25,
			"DISK": 40,
			"transfer": "unlimited",
			"dollarsPerHr": 0.07255555555555555,
			"dollarsPerMo": 52.24
		}, {
			"id": "m3.large",
			"RAM": 7680,
			"CPU": 0.5,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.14133333333333334,
			"dollarsPerMo": 101.76
		}, {
			"id": "m3.xlarge",
			"RAM": 15360,
			"CPU": 1.0,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.28683333333333333,
			"dollarsPerMo": 206.52
		}, {
			"id": "m3.2xlarge",
			"RAM": 30720,
			"CPU": 2.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.5736666666666667,
			"dollarsPerMo": 413.04
		}]
	}, {
		"id": "compute_optimized",
		"meta":{"title": "Compute optimized"},
		"specs": [{
			"id": "c1.medium",
			"RAM": 1740,
			"CPU": 0.5,
			"DISK": 30,
			"transfer": "unlimited",
			"dollarsPerHr": 0.13416666666666668,
			"dollarsPerMo": 96.60000000000001
		}, {
			"id": "c1.xlarge",
			"RAM": 7168,
			"CPU": 2.0,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.5283333333333333,
			"dollarsPerMo": 380.40000000000003
		}, {
			"id": "cc2.8xlarge",
			"RAM": 61952,
			"CPU": 8.0,
			"DISK": 600,
			"transfer": "unlimited",
			"dollarsPerHr": 2.0833333333333335,
			"dollarsPerMo": 1500.0
		}, {
			"id": "c4.large",
			"RAM": 3840,
			"CPU": 0.5,
			"DISK": 40,
			"transfer": "unlimited",
			"dollarsPerHr": 0.10555555555555556,
			"dollarsPerMo": 76.0
		}, {
			"id": "c4.xlarge",
			"RAM": 7680,
			"CPU": 1.0,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.20733333333333334,
			"dollarsPerMo": 149.28
		}, {
			"id": "c4.2xlarge",
			"RAM": 15360,
			"CPU": 2.0,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.41883333333333334,
			"dollarsPerMo": 301.56
		}, {
			"id": "c4.4xlarge",
			"RAM": 30720,
			"CPU": 4.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.8376666666666667,
			"dollarsPerMo": 603.12
		}, {
			"id": "c4.8xlarge",
			"RAM": 61440,
			"CPU": 9.0,
			"DISK": 600,
			"transfer": "unlimited",
			"dollarsPerHr": 1.6743333333333332,
			"dollarsPerMo": 1205.52
		}, {
			"id": "c3.large",
			"RAM": 3840,
			"CPU": 0.5,
			"DISK": 40,
			"transfer": "unlimited",
			"dollarsPerHr": 0.11055555555555555,
			"dollarsPerMo": 79.6
		}, {
			"id": "c3.xlarge",
			"RAM": 7680,
			"CPU": 1.0,
			"DISK": 60,
			"transfer": "unlimited",
			"dollarsPerHr": 0.21833333333333332,
			"dollarsPerMo": 157.2
		}, {
			"id": "c3.2xlarge",
			"RAM": 15360,
			"CPU": 2.0,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.4408333333333333,
			"dollarsPerMo": 317.4
		}, {
			"id": "c3.4xlarge",
			"RAM": 30720,
			"CPU": 4.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.8816666666666666,
			"dollarsPerMo": 634.8
		}, {
			"id": "c3.8xlarge",
			"RAM": 61440,
			"CPU": 8.0,
			"DISK": 600,
			"transfer": "unlimited",
			"dollarsPerHr": 1.7633333333333332,
			"dollarsPerMo": 1269.6
		}]
	}, {
		"id": "gpu_instances",
		"meta":{"title": "GPU instances"},
		"specs": [{
			"id": "cg1.4xlarge",
			"RAM": 23040,
			"CPU": 4.0,
			"DISK": 220,
			"transfer": "unlimited",
			"dollarsPerHr": 2.1305555555555555,
			"dollarsPerMo": 1534.0
		}]
	}, {
		"id": "memory_optimized",
		"meta":{"title": "Memory optimized"},
		"specs": [{
			"id": "m2.xlarge",
			"RAM": 17510,
			"CPU": 0.5,
			"DISK": 170,
			"transfer": "unlimited",
			"dollarsPerHr": 0.26861111111111113,
			"dollarsPerMo": 193.4
		}, {
			"id": "m2.2xlarge",
			"RAM": 35020,
			"CPU": 1.0,
			"DISK": 340,
			"transfer": "unlimited",
			"dollarsPerHr": 0.5372222222222223,
			"dollarsPerMo": 386.8
		}, {
			"id": "m2.4xlarge",
			"RAM": 70041,
			"CPU": 2.0,
			"DISK": 680,
			"transfer": "unlimited",
			"dollarsPerHr": 1.0744444444444445,
			"dollarsPerMo": 773.6
		}, {
			"id": "cr1.8xlarge",
			"RAM": 249856,
			"CPU": 8.0,
			"DISK": 2440,
			"transfer": "unlimited",
			"dollarsPerHr": 3.838888888888889,
			"dollarsPerMo": 2764.0
		}, {
			"id": "x1.16xlarge",
			"RAM": 999424,
			"CPU": 16.0,
			"DISK": 9760,
			"transfer": "unlimited",
			"dollarsPerHr": 8.024555555555555,
			"dollarsPerMo": 5777.679999999999
		}, {
			"id": "x1.32xlarge",
			"RAM": 1998848,
			"CPU": 32.0,
			"DISK": 19520,
			"transfer": "unlimited",
			"dollarsPerHr": 16.04911111111111,
			"dollarsPerMo": 11555.359999999999
		}, {
			"id": "r4.large",
			"RAM": 15616,
			"CPU": 0.5,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.15383333333333335,
			"dollarsPerMo": 110.76
		}, {
			"id": "r4.xlarge",
			"RAM": 31232,
			"CPU": 1.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.3076666666666667,
			"dollarsPerMo": 221.52
		}, {
			"id": "r4.2xlarge",
			"RAM": 62464,
			"CPU": 2.0,
			"DISK": 610,
			"transfer": "unlimited",
			"dollarsPerHr": 0.6167222222222223,
			"dollarsPerMo": 444.04
		}, {
			"id": "r4.4xlarge",
			"RAM": 124928,
			"CPU": 4.0,
			"DISK": 1220,
			"transfer": "unlimited",
			"dollarsPerHr": 1.2334444444444446,
			"dollarsPerMo": 888.08
		}, {
			"id": "r4.8xlarge",
			"RAM": 249856,
			"CPU": 8.0,
			"DISK": 2440,
			"transfer": "unlimited",
			"dollarsPerHr": 2.466888888888889,
			"dollarsPerMo": 1776.16
		}, {
			"id": "r4.16xlarge",
			"RAM": 499712,
			"CPU": 16.0,
			"DISK": 4880,
			"transfer": "unlimited",
			"dollarsPerHr": 4.933777777777778,
			"dollarsPerMo": 3552.32
		}, {
			"id": "r3.large",
			"RAM": 15616,
			"CPU": 0.5,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.18683333333333335,
			"dollarsPerMo": 134.52
		}, {
			"id": "r3.xlarge",
			"RAM": 31232,
			"CPU": 1.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.3746666666666667,
			"dollarsPerMo": 269.76
		}, {
			"id": "r3.2xlarge",
			"RAM": 62464,
			"CPU": 2.0,
			"DISK": 610,
			"transfer": "unlimited",
			"dollarsPerHr": 0.7497222222222223,
			"dollarsPerMo": 539.8
		}, {
			"id": "r3.4xlarge",
			"RAM": 124928,
			"CPU": 4.0,
			"DISK": 1220,
			"transfer": "unlimited",
			"dollarsPerHr": 1.4994444444444446,
			"dollarsPerMo": 1079.6
		}, {
			"id": "r3.8xlarge",
			"RAM": 249856,
			"CPU": 8.0,
			"DISK": 2440,
			"transfer": "unlimited",
			"dollarsPerHr": 2.998888888888889,
			"dollarsPerMo": 2159.2
		}]
	}, {
		"id": "storage_optimized",
		"meta":{"title": "Storage optimized"},
		"specs": [{
			"id": "hi1.4xlarge",
			"RAM": 61952,
			"CPU": 4.0,
			"DISK": 600,
			"transfer": "unlimited",
			"dollarsPerHr": 3.1833333333333336,
			"dollarsPerMo": 2292.0
		}, {
			"id": "hs1.8xlarge",
			"RAM": 119808,
			"CPU": 4.0,
			"DISK": 1170,
			"transfer": "unlimited",
			"dollarsPerHr": 4.762499999999999,
			"dollarsPerMo": 3428.9999999999995
		}, {
			"id": "i2.xlarge",
			"RAM": 31232,
			"CPU": 1.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.8946666666666666,
			"dollarsPerMo": 644.16
		}, {
			"id": "i2.2xlarge",
			"RAM": 62464,
			"CPU": 2.0,
			"DISK": 610,
			"transfer": "unlimited",
			"dollarsPerHr": 1.7897222222222222,
			"dollarsPerMo": 1288.6000000000001
		}, {
			"id": "i2.4xlarge",
			"RAM": 124928,
			"CPU": 4.0,
			"DISK": 1220,
			"transfer": "unlimited",
			"dollarsPerHr": 3.5794444444444444,
			"dollarsPerMo": 2577.2000000000003
		}, {
			"id": "i2.8xlarge",
			"RAM": 249856,
			"CPU": 8.0,
			"DISK": 2440,
			"transfer": "unlimited",
			"dollarsPerHr": 7.158888888888889,
			"dollarsPerMo": 5154.400000000001
		}, {
			"id": "d2.xlarge",
			"RAM": 31232,
			"CPU": 1.0,
			"DISK": 300,
			"transfer": "unlimited",
			"dollarsPerHr": 0.7316666666666666,
			"dollarsPerMo": 526.8
		}, {
			"id": "d2.2xlarge",
			"RAM": 62464,
			"CPU": 2.0,
			"DISK": 610,
			"transfer": "unlimited",
			"dollarsPerHr": 1.464722222222222,
			"dollarsPerMo": 1054.6
		}, {
			"id": "d2.4xlarge",
			"RAM": 124928,
			"CPU": 4.0,
			"DISK": 1220,
			"transfer": "unlimited",
			"dollarsPerHr": 2.929444444444444,
			"dollarsPerMo": 2109.2
		}, {
			"id": "d2.8xlarge",
			"RAM": 249856,
			"CPU": 9.0,
			"DISK": 2440,
			"transfer": "unlimited",
			"dollarsPerHr": 5.858888888888888,
			"dollarsPerMo": 4218.4
		}]
	}, {
		"id": "micro",
		"meta":{"title": "Micro"},
		"specs": [{
			"id": "t1.micro",
			"RAM": 627,
			"CPU": 0.25,
			"DISK": 20,
			"transfer": "unlimited",
			"dollarsPerHr": 0.02277777777777778,
			"dollarsPerMo": 16.4
		}]
	}, {
		"id": "accelerated_computing",
		"meta":{"title": "Accelerated computing"},
		"specs": [{
			"id": "p2.xlarge",
			"RAM": 62464,
			"CPU": 1.0,
			"DISK": 610,
			"transfer": "unlimited",
			"dollarsPerHr": 0.9847222222222223,
			"dollarsPerMo": 709.0
		}, {
			"id": "p2.8xlarge",
			"RAM": 499712,
			"CPU": 8.0,
			"DISK": 4880,
			"transfer": "unlimited",
			"dollarsPerHr": 7.877777777777778,
			"dollarsPerMo": 5672.0
		}, {
			"id": "p2.16xlarge",
			"RAM": 749568,
			"CPU": 16.0,
			"DISK": 7320,
			"transfer": "unlimited",
			"dollarsPerHr": 15.416666666666668,
			"dollarsPerMo": 11100.0
		}, {
			"id": "g2.2xlarge",
			"RAM": 15360,
			"CPU": 2.0,
			"DISK": 150,
			"transfer": "unlimited",
			"dollarsPerHr": 0.6708333333333334,
			"dollarsPerMo": 483.0
		}, {
			"id": "g2.8xlarge",
			"RAM": 61440,
			"CPU": 8.0,
			"DISK": 600,
			"transfer": "unlimited",
			"dollarsPerHr": 2.6833333333333336,
			"dollarsPerMo": 1932.0
		}]
	}]
}

},{}],2:[function(require,module,exports){
var ScaleDataShim,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = ScaleDataShim = (function() {
  function ScaleDataShim() {
    this.getHostOptions = bind(this.getHostOptions, this);
    this.getServiceSpecs = bind(this.getServiceSpecs, this);
    var providers;
    providers = ["AWS_NEW", "LINODE", "DIGITAL_OCEAN", "JOYENT"];
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
    return this.providers[this.provider];
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
    var AWS_NEW;
    AWS_NEW = require('./aws.json');
    return this.providers = {
      AWS_NEW: AWS_NEW,
      LINODE: {
        meta: {
          title: "Linode",
          serverTitle: "Server",
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
                RAM: 1000,
                CPU: 1,
                DISK: 24,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "a2",
                RAM: 2000,
                CPU: 2,
                DISK: 48,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "a3",
                RAM: 4000,
                CPU: 4,
                DISK: 96,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "a4",
                RAM: 8000,
                CPU: 6,
                DISK: 192,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }
        ]
      },
      DIGITAL_OCEAN_OLD: {
        meta: {
          title: "Digital Ocean",
          serverTitle: "Droplet",
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
                RAM: 512,
                CPU: 1,
                DISK: 20,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b2",
                RAM: 1024,
                CPU: 1,
                DISK: 30,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b3",
                RAM: 2048,
                CPU: 2,
                DISK: 40,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b4",
                RAM: 4096,
                CPU: 2,
                DISK: 60,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b5",
                RAM: 8192,
                CPU: 4,
                DISK: 80,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High Volume"
            },
            specs: [
              {
                id: "b6",
                RAM: 16384,
                CPU: 8,
                DISK: 160,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b7",
                RAM: 32768,
                CPU: 12,
                DISK: 320,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b8",
                RAM: 49152,
                CPU: 16,
                DISK: 480,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "b9",
                RAM: 65536,
                CPU: 20,
                DISK: 640,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }
        ]
      },
      DIGITAL_OCEAN: {
        meta: {
          title: "DigitalOcean",
          "default": "512mb",
          totalPlans: 14
        },
        plans: [
          {
            meta: {
              title: "Standard"
            },
            specs: [
              {
                id: "512mb",
                RAM: 512,
                CPU: 1,
                DISK: 20,
                transfer: 1,
                dollarsPerHr: 0.00744,
                dollarsPerMo: 5
              }, {
                id: "1gb",
                RAM: 1024,
                CPU: 1,
                DISK: 30,
                transfer: 2,
                dollarsPerHr: 0.01488,
                dollarsPerMo: 10
              }, {
                id: "2gb",
                RAM: 2048,
                CPU: 2,
                DISK: 40,
                transfer: 3,
                dollarsPerHr: 0.02976,
                dollarsPerMo: 20
              }, {
                id: "4gb",
                RAM: 4096,
                CPU: 2,
                DISK: 60,
                transfer: 4,
                dollarsPerHr: 0.05952,
                dollarsPerMo: 40
              }, {
                id: "8gb",
                RAM: 8192,
                CPU: 4,
                DISK: 80,
                transfer: 5,
                dollarsPerHr: 0.11905,
                dollarsPerMo: 80
              }, {
                id: "16gb",
                RAM: 16384,
                CPU: 8,
                DISK: 160,
                transfer: 6,
                dollarsPerHr: 0.2381,
                dollarsPerMo: 16
              }, {
                id: "32gb",
                RAM: 32768,
                CPU: 12,
                DISK: 320,
                transfer: 7,
                dollarsPerHr: 0.47619,
                dollarsPerMo: 32
              }, {
                id: "48gb",
                RAM: 49152,
                CPU: 16,
                DISK: 480,
                transfer: 8,
                dollarsPerHr: 0.71429,
                dollarsPerMo: 48
              }, {
                id: "64gb",
                RAM: 65536,
                CPU: 20,
                DISK: 640,
                transfer: 9,
                dollarsPerHr: 0.95238,
                dollarsPerMo: 640
              }
            ]
          }, {
            meta: {
              title: "High Memory"
            },
            specs: [
              {
                id: "m-16gb",
                RAM: 16384,
                CPU: 2,
                DISK: 30,
                transfer: 6,
                dollarsPerHr: 0.17857,
                dollarsPerMo: 12
              }, {
                id: "m-32gb",
                RAM: 32768,
                CPU: 4,
                DISK: 90,
                transfer: 7,
                dollarsPerHr: 0.35714,
                dollarsPerMo: 24
              }, {
                id: "m-64gb",
                RAM: 65536,
                CPU: 8,
                DISK: 200,
                transfer: 8,
                dollarsPerHr: 0.71429,
                dollarsPerMo: 48
              }, {
                id: "m-128gb",
                RAM: 131072,
                CPU: 16,
                DISK: 340,
                transfer: 9,
                dollarsPerHr: 1.42857,
                dollarsPerMo: 96
              }, {
                id: "m-224gb",
                RAM: 229376,
                CPU: 32,
                DISK: 500,
                transfer: 10,
                dollarsPerHr: 2.5,
                dollarsPerMo: 1680
              }
            ]
          }
        ]
      },
      JOYENT: {
        meta: {
          title: "Joyent",
          serverTitle: "server",
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
                RAM: 1000,
                CPU: 0.25,
                DISK: 33,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c2",
                RAM: 1750,
                CPU: 1,
                DISK: 56,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c3",
                RAM: 2000,
                CPU: 1,
                DISK: 66,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c4",
                RAM: 3750,
                CPU: 1,
                DISK: 123,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c5",
                RAM: 4000,
                CPU: 1,
                DISK: 131,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c6",
                RAM: 5000,
                CPU: 2,
                DISK: 738,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c7",
                RAM: 8000,
                CPU: 2,
                DISK: 789,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c8",
                RAM: 15000,
                CPU: 4,
                DISK: 1467,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c9",
                RAM: 16000,
                CPU: 4,
                DISK: 1575,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c10",
                RAM: 17000.13,
                CPU: 5,
                DISK: 1683,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c11",
                RAM: 30000,
                CPU: 8,
                DISK: 1683,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c12",
                RAM: 32000,
                CPU: 8,
                DISK: 1683,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c13",
                RAM: 40000,
                CPU: 10,
                DISK: 1683,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High Memory"
            },
            specs: [
              {
                id: "c14",
                RAM: 17000.13,
                CPU: 2,
                DISK: 420,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c15",
                RAM: 34000.25,
                CPU: 4,
                DISK: 843,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c16",
                RAM: 68000.38,
                CPU: 8,
                DISK: 1122,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c17",
                RAM: 144000,
                CPU: 18,
                DISK: 2363,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c18",
                RAM: 256000,
                CPU: 32,
                DISK: 4200,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High CPU"
            },
            specs: [
              {
                id: "c19",
                RAM: 1750,
                CPU: 2,
                DISK: 75,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c20",
                RAM: 7000,
                CPU: 7,
                DISK: 263,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c21",
                RAM: 16000,
                CPU: 16,
                DISK: 600,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c22",
                RAM: 24000,
                CPU: 24,
                DISK: 900,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c23",
                RAM: 32000,
                CPU: 32,
                DISK: 1200,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High IO"
            },
            specs: [
              {
                id: "c24",
                RAM: 65000,
                CPU: 8,
                DISK: 1452,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c25",
                RAM: 128000,
                CPU: 16,
                DISK: 3072,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c26",
                RAM: 256000,
                CPU: 32,
                DISK: 6144,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High Storage"
            },
            specs: [
              {
                id: "c27",
                RAM: 32000,
                CPU: 8,
                DISK: 7680,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c28",
                RAM: 64000,
                CPU: 6,
                DISK: 15360,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "c29",
                RAM: 128000,
                CPU: 2,
                DISK: 30720,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }
        ]
      },
      AWS: {
        meta: {
          serverTitle: "EC2",
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
                RAM: 1000,
                CPU: 1,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d2",
                RAM: 2000,
                CPU: 1,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d3",
                RAM: 4000,
                CPU: 2,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d4",
                RAM: 8000,
                CPU: 2,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d5",
                RAM: 8000,
                CPU: 2,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d6",
                RAM: 16000,
                CPU: 4,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d7",
                RAM: 32000,
                CPU: 8,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d8",
                RAM: 64000,
                CPU: 16,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d9",
                RAM: 160000,
                CPU: 40,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d10",
                RAM: 3750,
                CPU: 1,
                DISK: 4,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d11",
                RAM: 5000,
                CPU: 2,
                DISK: 64,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d12",
                RAM: 15000,
                CPU: 4,
                DISK: 80,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d13",
                RAM: 30000,
                CPU: 8,
                DISK: 160,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "Compute Optimized"
            },
            specs: [
              {
                id: "d14",
                RAM: 3750,
                CPU: 2,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d15",
                RAM: 5000,
                CPU: 4,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d16",
                RAM: 15000,
                CPU: 8,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d17",
                RAM: 30000,
                CPU: 16,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d18",
                RAM: 60000,
                CPU: 36,
                DISK: "EBS Only",
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d19",
                RAM: 3750,
                CPU: 2,
                DISK: 32,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d20",
                RAM: 5000,
                CPU: 4,
                DISK: 80,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d21",
                RAM: 15000,
                CPU: 8,
                DISK: 160,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d22",
                RAM: 30000,
                CPU: 16,
                DISK: 320,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d23",
                RAM: 60000,
                CPU: 32,
                DISK: 640,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High GPU"
            },
            specs: [
              {
                id: "d24",
                RAM: 15000,
                CPU: 8,
                DISK: 60,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d25",
                RAM: 60000,
                CPU: 32,
                DISK: 240,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High RAM"
            },
            specs: [
              {
                id: "d26",
                RAM: 15000,
                CPU: 2,
                DISK: 64,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d27",
                RAM: 35000,
                CPU: 4,
                DISK: 160,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d28",
                RAM: 61000,
                CPU: 8,
                DISK: 320,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d29",
                RAM: 122000,
                CPU: 16,
                DISK: 320,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d30",
                RAM: 244000,
                CPU: 32,
                DISK: 640,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }, {
            meta: {
              title: "High Storage"
            },
            specs: [
              {
                id: "d31",
                RAM: 35000,
                CPU: 4,
                DISK: 800,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d32",
                RAM: 61000,
                CPU: 8,
                DISK: 1600,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d33",
                RAM: 122000,
                CPU: 16,
                DISK: 3200,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d34",
                RAM: 244000,
                CPU: 32,
                DISK: 6400,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d35",
                RAM: 35000,
                CPU: 4,
                DISK: 6000,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d36",
                RAM: 61000,
                CPU: 8,
                DISK: 12000,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d37",
                RAM: 122000,
                CPU: 16,
                DISK: 24000,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }, {
                id: "d38",
                RAM: 244000,
                CPU: 36,
                DISK: 48000,
                dollarsPerHr: 0.1,
                transfer: 1,
                dollarsPerMo: 10
              }
            ]
          }
        ]
      }
    };
  };

  return ScaleDataShim;

})();

},{"./aws.json":1}],3:[function(require,module,exports){
var ScaleMachineDataShim;

ScaleMachineDataShim = require('./shims/data-shim');

window.scaleMachineTestData = new ScaleMachineDataShim();

PubSub.subscribe('SCALE.GET_OPTIONS', function(m, cb) {
  return cb(scaleMachineTestData.getHostOptions());
});

window.init = (function(_this) {
  return function() {
    var config, config2, onSpecsChange, totalInstances;
    onSpecsChange = function(data) {
      console.log("The user has selected :");
      return console.log(data);
    };
    totalInstances = 5;
    config = {
      activeServerId: {
        primary: scaleMachineTestData.getSampleScaleId()
      },
      onSpecsChange: onSpecsChange,
      totalInstances: totalInstances,
      isHorizontallyScalable: false,
      isCluster: false
    };
    config2 = {
      activeServerId: {
        primary: scaleMachineTestData.getSampleScaleId(),
        secondary: scaleMachineTestData.getSampleScaleId(),
        arbiter: scaleMachineTestData.getSampleScaleId()
      },
      onSpecsChange: onSpecsChange,
      totalInstances: totalInstances,
      isHorizontallyScalable: true,
      isCluster: true
    };
    return window.app2 = new nanobox.ScaleMachine($(".holder"), config2);
  };
})(this);

},{"./shims/data-shim":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaGltcy9hd3MuanNvbiIsInNoaW1zL2RhdGEtc2hpbS5jb2ZmZWUiLCJzdGFnZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0OUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibWV0YVwiOntcbiAgICBcInRpdGxlXCI6XCJBV1NcIixcbiAgICBcInNlcnZlclRpdGxlXCI6XCJTZXJ2ZXJcIixcbiAgICBcImRlZmF1bHRcIjpcImExXCIsXG4gICAgXCJ0b3RhbFBsYW5zXCI6MzdcbiAgfSxcblx0XCJpZFwiOiBcInVzLWVhc3QtMVwiLFxuXHRcInRpdGxlXCI6IFwiVVMgRWFzdCAoTi4gVmlyZ2luaWEpXCIsXG5cdFwicGxhbnNcIjogW3tcblx0XHRcImlkXCI6IFwiZ2VuZXJhbF9wdXJwb3NlXCIsXG5cdFx0XCJtZXRhXCI6e1widGl0bGVcIjogXCJHZW5lcmFsIHB1cnBvc2VcIn0sXG5cdFx0XCJzcGVjc1wiOiBbe1xuXHRcdFx0XCJpZFwiOiBcIm0xLnNtYWxsXCIsXG5cdFx0XHRcIlJBTVwiOiAxNzQwLFxuXHRcdFx0XCJDUFVcIjogMC4yNSxcblx0XHRcdFwiRElTS1wiOiAzMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMDQ4MTY2NjY2NjY2NjY2NjYsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAzNC42OFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtMS5tZWRpdW1cIixcblx0XHRcdFwiUkFNXCI6IDM4NDAsXG5cdFx0XHRcIkNQVVwiOiAwLjI1LFxuXHRcdFx0XCJESVNLXCI6IDQwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4wOTI1NTU1NTU1NTU1NTU1NCxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDY2LjYzOTk5OTk5OTk5OTk5XG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcIm0xLmxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA3NjgwLFxuXHRcdFx0XCJDUFVcIjogMC41LFxuXHRcdFx0XCJESVNLXCI6IDYwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4xODMzMzMzMzMzMzMzMzMzMixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDEzMi4wXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcIm0xLnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTUzNjAsXG5cdFx0XHRcIkNQVVwiOiAxLjAsXG5cdFx0XHRcIkRJU0tcIjogMTUwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4zNzA4MzMzMzMzMzMzMzMzLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMjY3LjBcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwidDIubmFub1wiLFxuXHRcdFx0XCJSQU1cIjogNTEyLFxuXHRcdFx0XCJDUFVcIjogMC4yNSxcblx0XHRcdFwiRElTS1wiOiAyMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMDA4Njc3Nzc3Nzc3Nzc3Nzc3LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNi4yNDhcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwidDIubWljcm9cIixcblx0XHRcdFwiUkFNXCI6IDEwMjQsXG5cdFx0XHRcIkNQVVwiOiAwLjI1LFxuXHRcdFx0XCJESVNLXCI6IDMwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4wMTYxNjY2NjY2NjY2NjY2NjYsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxMS42NFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJ0Mi5zbWFsbFwiLFxuXHRcdFx0XCJSQU1cIjogMjA0OCxcblx0XHRcdFwiQ1BVXCI6IDAuMjUsXG5cdFx0XHRcIkRJU0tcIjogNDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjAyODU1NTU1NTU1NTU1NTU1Nixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDIwLjU2XG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcInQyLm1lZGl1bVwiLFxuXHRcdFx0XCJSQU1cIjogNDA5Nixcblx0XHRcdFwiQ1BVXCI6IDAuNSxcblx0XHRcdFwiRElTS1wiOiA2MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMDU1MzMzMzMzMzMzMzMzMzMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAzOS44NFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJ0Mi5sYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogODE5Mixcblx0XHRcdFwiQ1BVXCI6IDAuNSxcblx0XHRcdFwiRElTS1wiOiA4MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMTA1MTExMTExMTExMTExMTEsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA3NS42OFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJ0Mi54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDE2Mzg0LFxuXHRcdFx0XCJDUFVcIjogMS4wLFxuXHRcdFx0XCJESVNLXCI6IDE2MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMjEwMjIyMjIyMjIyMjIyMjMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxNTEuMzZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwidDIuMnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMzI3NjgsXG5cdFx0XHRcIkNQVVwiOiAyLjAsXG5cdFx0XHRcIkRJU0tcIjogMzIwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC40MjA0NDQ0NDQ0NDQ0NDQ0NSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDMwMi43MlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtNC5sYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogODE5Mixcblx0XHRcdFwiQ1BVXCI6IDAuNSxcblx0XHRcdFwiRElTS1wiOiA4MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMTE5MTExMTExMTExMTExMTEsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA4NS43NlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtNC54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDE2Mzg0LFxuXHRcdFx0XCJDUFVcIjogMS4wLFxuXHRcdFx0XCJESVNLXCI6IDE2MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMjM3MjIyMjIyMjIyMjIyMjIsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxNzAuOFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtNC4yeGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAzMjc2OCxcblx0XHRcdFwiQ1BVXCI6IDIuMCxcblx0XHRcdFwiRElTS1wiOiAzMjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjQ3NTQ0NDQ0NDQ0NDQ0NDQ1LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMzQyLjMyXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcIm00LjR4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDY1NTM2LFxuXHRcdFx0XCJDUFVcIjogNC4wLFxuXHRcdFx0XCJESVNLXCI6IDY0MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuOTUwODg4ODg4ODg4ODg4OSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDY4NC42NFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtNC4xMHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTYzODQwLFxuXHRcdFx0XCJDUFVcIjogMTAuMCxcblx0XHRcdFwiRElTS1wiOiAxNjAwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMi4zNzcyMjIyMjIyMjIyMjIsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxNzExLjZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwibTQuMTZ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDI2MjE0NCxcblx0XHRcdFwiQ1BVXCI6IDE2LjAsXG5cdFx0XHRcIkRJU0tcIjogMjU2MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDMuODAyNTU1NTU1NTU1NTU1Nyxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDI3MzcuODRcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwibTMubWVkaXVtXCIsXG5cdFx0XHRcIlJBTVwiOiAzODQwLFxuXHRcdFx0XCJDUFVcIjogMC4yNSxcblx0XHRcdFwiRElTS1wiOiA0MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMDcyNTU1NTU1NTU1NTU1NTUsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA1Mi4yNFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtMy5sYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogNzY4MCxcblx0XHRcdFwiQ1BVXCI6IDAuNSxcblx0XHRcdFwiRElTS1wiOiA2MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMTQxMzMzMzMzMzMzMzMzMzQsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxMDEuNzZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwibTMueGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAxNTM2MCxcblx0XHRcdFwiQ1BVXCI6IDEuMCxcblx0XHRcdFwiRElTS1wiOiAxNTAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjI4NjgzMzMzMzMzMzMzMzMzLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMjA2LjUyXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcIm0zLjJ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDMwNzIwLFxuXHRcdFx0XCJDUFVcIjogMi4wLFxuXHRcdFx0XCJESVNLXCI6IDMwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuNTczNjY2NjY2NjY2NjY2Nyxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDQxMy4wNFxuXHRcdH1dXG5cdH0sIHtcblx0XHRcImlkXCI6IFwiY29tcHV0ZV9vcHRpbWl6ZWRcIixcblx0XHRcIm1ldGFcIjp7XCJ0aXRsZVwiOiBcIkNvbXB1dGUgb3B0aW1pemVkXCJ9LFxuXHRcdFwic3BlY3NcIjogW3tcblx0XHRcdFwiaWRcIjogXCJjMS5tZWRpdW1cIixcblx0XHRcdFwiUkFNXCI6IDE3NDAsXG5cdFx0XHRcIkNQVVwiOiAwLjUsXG5cdFx0XHRcIkRJU0tcIjogMzAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjEzNDE2NjY2NjY2NjY2NjY4LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogOTYuNjAwMDAwMDAwMDAwMDFcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzEueGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA3MTY4LFxuXHRcdFx0XCJDUFVcIjogMi4wLFxuXHRcdFx0XCJESVNLXCI6IDYwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC41MjgzMzMzMzMzMzMzMzMzLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMzgwLjQwMDAwMDAwMDAwMDAzXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImNjMi44eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA2MTk1Mixcblx0XHRcdFwiQ1BVXCI6IDguMCxcblx0XHRcdFwiRElTS1wiOiA2MDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAyLjA4MzMzMzMzMzMzMzMzMzUsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxNTAwLjBcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzQubGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDM4NDAsXG5cdFx0XHRcIkNQVVwiOiAwLjUsXG5cdFx0XHRcIkRJU0tcIjogNDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjEwNTU1NTU1NTU1NTU1NTU2LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNzYuMFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJjNC54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDc2ODAsXG5cdFx0XHRcIkNQVVwiOiAxLjAsXG5cdFx0XHRcIkRJU0tcIjogNjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjIwNzMzMzMzMzMzMzMzMzM0LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTQ5LjI4XG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImM0LjJ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDE1MzYwLFxuXHRcdFx0XCJDUFVcIjogMi4wLFxuXHRcdFx0XCJESVNLXCI6IDE1MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuNDE4ODMzMzMzMzMzMzMzMzQsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAzMDEuNTZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzQuNHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMzA3MjAsXG5cdFx0XHRcIkNQVVwiOiA0LjAsXG5cdFx0XHRcIkRJU0tcIjogMzAwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC44Mzc2NjY2NjY2NjY2NjY3LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNjAzLjEyXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImM0Ljh4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDYxNDQwLFxuXHRcdFx0XCJDUFVcIjogOS4wLFxuXHRcdFx0XCJESVNLXCI6IDYwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDEuNjc0MzMzMzMzMzMzMzMzMixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDEyMDUuNTJcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzMubGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDM4NDAsXG5cdFx0XHRcIkNQVVwiOiAwLjUsXG5cdFx0XHRcIkRJU0tcIjogNDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjExMDU1NTU1NTU1NTU1NTU1LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNzkuNlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJjMy54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDc2ODAsXG5cdFx0XHRcIkNQVVwiOiAxLjAsXG5cdFx0XHRcIkRJU0tcIjogNjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjIxODMzMzMzMzMzMzMzMzMyLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTU3LjJcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzMuMnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTUzNjAsXG5cdFx0XHRcIkNQVVwiOiAyLjAsXG5cdFx0XHRcIkRJU0tcIjogMTUwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC40NDA4MzMzMzMzMzMzMzMzLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMzE3LjRcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzMuNHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMzA3MjAsXG5cdFx0XHRcIkNQVVwiOiA0LjAsXG5cdFx0XHRcIkRJU0tcIjogMzAwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC44ODE2NjY2NjY2NjY2NjY2LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNjM0Ljhcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiYzMuOHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogNjE0NDAsXG5cdFx0XHRcIkNQVVwiOiA4LjAsXG5cdFx0XHRcIkRJU0tcIjogNjAwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMS43NjMzMzMzMzMzMzMzMzMyLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTI2OS42XG5cdFx0fV1cblx0fSwge1xuXHRcdFwiaWRcIjogXCJncHVfaW5zdGFuY2VzXCIsXG5cdFx0XCJtZXRhXCI6e1widGl0bGVcIjogXCJHUFUgaW5zdGFuY2VzXCJ9LFxuXHRcdFwic3BlY3NcIjogW3tcblx0XHRcdFwiaWRcIjogXCJjZzEuNHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMjMwNDAsXG5cdFx0XHRcIkNQVVwiOiA0LjAsXG5cdFx0XHRcIkRJU0tcIjogMjIwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMi4xMzA1NTU1NTU1NTU1NTU1LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTUzNC4wXG5cdFx0fV1cblx0fSwge1xuXHRcdFwiaWRcIjogXCJtZW1vcnlfb3B0aW1pemVkXCIsXG5cdFx0XCJtZXRhXCI6e1widGl0bGVcIjogXCJNZW1vcnkgb3B0aW1pemVkXCJ9LFxuXHRcdFwic3BlY3NcIjogW3tcblx0XHRcdFwiaWRcIjogXCJtMi54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDE3NTEwLFxuXHRcdFx0XCJDUFVcIjogMC41LFxuXHRcdFx0XCJESVNLXCI6IDE3MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMjY4NjExMTExMTExMTExMTMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxOTMuNFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtMi4yeGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAzNTAyMCxcblx0XHRcdFwiQ1BVXCI6IDEuMCxcblx0XHRcdFwiRElTS1wiOiAzNDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjUzNzIyMjIyMjIyMjIyMjMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAzODYuOFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJtMi40eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA3MDA0MSxcblx0XHRcdFwiQ1BVXCI6IDIuMCxcblx0XHRcdFwiRElTS1wiOiA2ODAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAxLjA3NDQ0NDQ0NDQ0NDQ0NDUsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA3NzMuNlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJjcjEuOHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMjQ5ODU2LFxuXHRcdFx0XCJDUFVcIjogOC4wLFxuXHRcdFx0XCJESVNLXCI6IDI0NDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAzLjgzODg4ODg4ODg4ODg4OSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDI3NjQuMFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJ4MS4xNnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogOTk5NDI0LFxuXHRcdFx0XCJDUFVcIjogMTYuMCxcblx0XHRcdFwiRElTS1wiOiA5NzYwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogOC4wMjQ1NTU1NTU1NTU1NTUsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA1Nzc3LjY3OTk5OTk5OTk5OVxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJ4MS4zMnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTk5ODg0OCxcblx0XHRcdFwiQ1BVXCI6IDMyLjAsXG5cdFx0XHRcIkRJU0tcIjogMTk1MjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAxNi4wNDkxMTExMTExMTExMSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDExNTU1LjM1OTk5OTk5OTk5OVxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyNC5sYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTU2MTYsXG5cdFx0XHRcIkNQVVwiOiAwLjUsXG5cdFx0XHRcIkRJU0tcIjogMTUwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4xNTM4MzMzMzMzMzMzMzMzNSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDExMC43NlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyNC54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDMxMjMyLFxuXHRcdFx0XCJDUFVcIjogMS4wLFxuXHRcdFx0XCJESVNLXCI6IDMwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMzA3NjY2NjY2NjY2NjY2Nyxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDIyMS41MlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyNC4yeGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA2MjQ2NCxcblx0XHRcdFwiQ1BVXCI6IDIuMCxcblx0XHRcdFwiRElTS1wiOiA2MTAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjYxNjcyMjIyMjIyMjIyMjMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA0NDQuMDRcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwicjQuNHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTI0OTI4LFxuXHRcdFx0XCJDUFVcIjogNC4wLFxuXHRcdFx0XCJESVNLXCI6IDEyMjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAxLjIzMzQ0NDQ0NDQ0NDQ0NDYsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA4ODguMDhcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwicjQuOHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMjQ5ODU2LFxuXHRcdFx0XCJDUFVcIjogOC4wLFxuXHRcdFx0XCJESVNLXCI6IDI0NDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAyLjQ2Njg4ODg4ODg4ODg4OSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDE3NzYuMTZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwicjQuMTZ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDQ5OTcxMixcblx0XHRcdFwiQ1BVXCI6IDE2LjAsXG5cdFx0XHRcIkRJU0tcIjogNDg4MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDQuOTMzNzc3Nzc3Nzc3Nzc4LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMzU1Mi4zMlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyMy5sYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMTU2MTYsXG5cdFx0XHRcIkNQVVwiOiAwLjUsXG5cdFx0XHRcIkRJU0tcIjogMTUwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMC4xODY4MzMzMzMzMzMzMzMzNSxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDEzNC41MlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyMy54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDMxMjMyLFxuXHRcdFx0XCJDUFVcIjogMS4wLFxuXHRcdFx0XCJESVNLXCI6IDMwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMzc0NjY2NjY2NjY2NjY2Nyxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDI2OS43NlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyMy4yeGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA2MjQ2NCxcblx0XHRcdFwiQ1BVXCI6IDIuMCxcblx0XHRcdFwiRElTS1wiOiA2MTAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjc0OTcyMjIyMjIyMjIyMjMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA1MzkuOFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyMy40eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAxMjQ5MjgsXG5cdFx0XHRcIkNQVVwiOiA0LjAsXG5cdFx0XHRcIkRJU0tcIjogMTIyMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDEuNDk5NDQ0NDQ0NDQ0NDQ0Nixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDEwNzkuNlxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJyMy44eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAyNDk4NTYsXG5cdFx0XHRcIkNQVVwiOiA4LjAsXG5cdFx0XHRcIkRJU0tcIjogMjQ0MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDIuOTk4ODg4ODg4ODg4ODg5LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMjE1OS4yXG5cdFx0fV1cblx0fSwge1xuXHRcdFwiaWRcIjogXCJzdG9yYWdlX29wdGltaXplZFwiLFxuXHRcdFwibWV0YVwiOntcInRpdGxlXCI6IFwiU3RvcmFnZSBvcHRpbWl6ZWRcIn0sXG5cdFx0XCJzcGVjc1wiOiBbe1xuXHRcdFx0XCJpZFwiOiBcImhpMS40eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA2MTk1Mixcblx0XHRcdFwiQ1BVXCI6IDQuMCxcblx0XHRcdFwiRElTS1wiOiA2MDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAzLjE4MzMzMzMzMzMzMzMzMzYsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAyMjkyLjBcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiaHMxLjh4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDExOTgwOCxcblx0XHRcdFwiQ1BVXCI6IDQuMCxcblx0XHRcdFwiRElTS1wiOiAxMTcwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogNC43NjI0OTk5OTk5OTk5OTksXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAzNDI4Ljk5OTk5OTk5OTk5OTVcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiaTIueGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiAzMTIzMixcblx0XHRcdFwiQ1BVXCI6IDEuMCxcblx0XHRcdFwiRElTS1wiOiAzMDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjg5NDY2NjY2NjY2NjY2NjYsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA2NDQuMTZcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiaTIuMnhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogNjI0NjQsXG5cdFx0XHRcIkNQVVwiOiAyLjAsXG5cdFx0XHRcIkRJU0tcIjogNjEwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMS43ODk3MjIyMjIyMjIyMjIyLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTI4OC42MDAwMDAwMDAwMDAxXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImkyLjR4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDEyNDkyOCxcblx0XHRcdFwiQ1BVXCI6IDQuMCxcblx0XHRcdFwiRElTS1wiOiAxMjIwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMy41Nzk0NDQ0NDQ0NDQ0NDQ0LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMjU3Ny4yMDAwMDAwMDAwMDAzXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImkyLjh4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDI0OTg1Nixcblx0XHRcdFwiQ1BVXCI6IDguMCxcblx0XHRcdFwiRElTS1wiOiAyNDQwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogNy4xNTg4ODg4ODg4ODg4ODksXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA1MTU0LjQwMDAwMDAwMDAwMVxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJkMi54bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDMxMjMyLFxuXHRcdFx0XCJDUFVcIjogMS4wLFxuXHRcdFx0XCJESVNLXCI6IDMwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuNzMxNjY2NjY2NjY2NjY2Nixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDUyNi44XG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImQyLjJ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDYyNDY0LFxuXHRcdFx0XCJDUFVcIjogMi4wLFxuXHRcdFx0XCJESVNLXCI6IDYxMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDEuNDY0NzIyMjIyMjIyMjIyLFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogMTA1NC42XG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImQyLjR4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDEyNDkyOCxcblx0XHRcdFwiQ1BVXCI6IDQuMCxcblx0XHRcdFwiRElTS1wiOiAxMjIwLFxuXHRcdFx0XCJ0cmFuc2ZlclwiOiBcInVubGltaXRlZFwiLFxuXHRcdFx0XCJkb2xsYXJzUGVySHJcIjogMi45Mjk0NDQ0NDQ0NDQ0NDQsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAyMTA5LjJcblx0XHR9LCB7XG5cdFx0XHRcImlkXCI6IFwiZDIuOHhsYXJnZVwiLFxuXHRcdFx0XCJSQU1cIjogMjQ5ODU2LFxuXHRcdFx0XCJDUFVcIjogOS4wLFxuXHRcdFx0XCJESVNLXCI6IDI0NDAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiA1Ljg1ODg4ODg4ODg4ODg4OCxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDQyMTguNFxuXHRcdH1dXG5cdH0sIHtcblx0XHRcImlkXCI6IFwibWljcm9cIixcblx0XHRcIm1ldGFcIjp7XCJ0aXRsZVwiOiBcIk1pY3JvXCJ9LFxuXHRcdFwic3BlY3NcIjogW3tcblx0XHRcdFwiaWRcIjogXCJ0MS5taWNyb1wiLFxuXHRcdFx0XCJSQU1cIjogNjI3LFxuXHRcdFx0XCJDUFVcIjogMC4yNSxcblx0XHRcdFwiRElTS1wiOiAyMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuMDIyNzc3Nzc3Nzc3Nzc3NzgsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxNi40XG5cdFx0fV1cblx0fSwge1xuXHRcdFwiaWRcIjogXCJhY2NlbGVyYXRlZF9jb21wdXRpbmdcIixcblx0XHRcIm1ldGFcIjp7XCJ0aXRsZVwiOiBcIkFjY2VsZXJhdGVkIGNvbXB1dGluZ1wifSxcblx0XHRcInNwZWNzXCI6IFt7XG5cdFx0XHRcImlkXCI6IFwicDIueGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA2MjQ2NCxcblx0XHRcdFwiQ1BVXCI6IDEuMCxcblx0XHRcdFwiRElTS1wiOiA2MTAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAwLjk4NDcyMjIyMjIyMjIyMjMsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiA3MDkuMFxuXHRcdH0sIHtcblx0XHRcdFwiaWRcIjogXCJwMi44eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA0OTk3MTIsXG5cdFx0XHRcIkNQVVwiOiA4LjAsXG5cdFx0XHRcIkRJU0tcIjogNDg4MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDcuODc3Nzc3Nzc3Nzc3Nzc4LFxuXHRcdFx0XCJkb2xsYXJzUGVyTW9cIjogNTY3Mi4wXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcInAyLjE2eGxhcmdlXCIsXG5cdFx0XHRcIlJBTVwiOiA3NDk1NjgsXG5cdFx0XHRcIkNQVVwiOiAxNi4wLFxuXHRcdFx0XCJESVNLXCI6IDczMjAsXG5cdFx0XHRcInRyYW5zZmVyXCI6IFwidW5saW1pdGVkXCIsXG5cdFx0XHRcImRvbGxhcnNQZXJIclwiOiAxNS40MTY2NjY2NjY2NjY2NjgsXG5cdFx0XHRcImRvbGxhcnNQZXJNb1wiOiAxMTEwMC4wXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImcyLjJ4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDE1MzYwLFxuXHRcdFx0XCJDUFVcIjogMi4wLFxuXHRcdFx0XCJESVNLXCI6IDE1MCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDAuNjcwODMzMzMzMzMzMzMzNCxcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDQ4My4wXG5cdFx0fSwge1xuXHRcdFx0XCJpZFwiOiBcImcyLjh4bGFyZ2VcIixcblx0XHRcdFwiUkFNXCI6IDYxNDQwLFxuXHRcdFx0XCJDUFVcIjogOC4wLFxuXHRcdFx0XCJESVNLXCI6IDYwMCxcblx0XHRcdFwidHJhbnNmZXJcIjogXCJ1bmxpbWl0ZWRcIixcblx0XHRcdFwiZG9sbGFyc1BlckhyXCI6IDIuNjgzMzMzMzMzMzMzMzMzNixcblx0XHRcdFwiZG9sbGFyc1Blck1vXCI6IDE5MzIuMFxuXHRcdH1dXG5cdH1dXG59XG4iLCJ2YXIgU2NhbGVEYXRhU2hpbSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gU2NhbGVEYXRhU2hpbSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2NhbGVEYXRhU2hpbSgpIHtcbiAgICB0aGlzLmdldEhvc3RPcHRpb25zID0gYmluZCh0aGlzLmdldEhvc3RPcHRpb25zLCB0aGlzKTtcbiAgICB0aGlzLmdldFNlcnZpY2VTcGVjcyA9IGJpbmQodGhpcy5nZXRTZXJ2aWNlU3BlY3MsIHRoaXMpO1xuICAgIHZhciBwcm92aWRlcnM7XG4gICAgcHJvdmlkZXJzID0gW1wiQVdTX05FV1wiLCBcIkxJTk9ERVwiLCBcIkRJR0lUQUxfT0NFQU5cIiwgXCJKT1lFTlRcIl07XG4gICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyc1syXTtcbiAgICB0aGlzLmNyZWF0ZUhhc2goKTtcbiAgfVxuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldFNhbXBsZVNjYWxlSWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZG9tSW5kZXg7XG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKHRoaXMucHJvdmlkZXJzW3RoaXMucHJvdmlkZXJdLnBsYW5zWzBdLnNwZWNzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1t0aGlzLnByb3ZpZGVyXS5wbGFuc1swXS5zcGVjc1tyYW5kb21JbmRleF0uaWQ7XG4gIH07XG5cbiAgU2NhbGVEYXRhU2hpbS5wcm90b3R5cGUuZ2V0U2VydmljZVNwZWNzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZm87XG4gICAgaW5mbyA9IHRoaXMuZ2V0Q3VycmVudFNwZWNzKCk7XG4gICAgaW5mby5ob3N0ID0gdGhpcy5wcm92aWRlcjtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkYXRhOiBpbmZvXG4gICAgfSkpO1xuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldEhvc3RPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW3RoaXMucHJvdmlkZXJdO1xuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmdldEN1cnJlbnRTcGVjcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWN0LCBpLCBqLCBsZW4sIGxlbjEsIHBsYW4sIHJlZiwgcmVmMSwgc3BlYztcbiAgICBkaWN0ID0ge1xuICAgICAgTElOT0RFOiAnYScsXG4gICAgICBESUdJVEFMX09DRUFOOiAnYicsXG4gICAgICBKT1lFTlQ6ICdjJyxcbiAgICAgIEFXUzogJ2QnXG4gICAgfTtcbiAgICB0aGlzLnNwZWNJZCA9IGRpY3RbdGhpcy5wcm92aWRlcl0gKyBcIjJcIjtcbiAgICByZWYgPSB0aGlzLnByb3ZpZGVyc1t0aGlzLnByb3ZpZGVyXS5wbGFucztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBsYW4gPSByZWZbaV07XG4gICAgICByZWYxID0gcGxhbi5zcGVjcztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzcGVjID0gcmVmMVtqXTtcbiAgICAgICAgaWYgKHNwZWMuaWQgPT09IHRoaXMuc3BlY0lkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhbTogc3BlYy5SQU0sXG4gICAgICAgICAgICBjcHU6IHNwZWMuQ1BVLFxuICAgICAgICAgICAgZGlzazogc3BlYy5ESVNLLFxuICAgICAgICAgICAgaWQ6IHNwZWMuaWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFNjYWxlRGF0YVNoaW0ucHJvdG90eXBlLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgQVdTX05FVztcbiAgICBBV1NfTkVXID0gcmVxdWlyZSgnLi9hd3MuanNvbicpO1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVycyA9IHtcbiAgICAgIEFXU19ORVc6IEFXU19ORVcsXG4gICAgICBMSU5PREU6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkxpbm9kZVwiLFxuICAgICAgICAgIHNlcnZlclRpdGxlOiBcIlNlcnZlclwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImExXCIsXG4gICAgICAgICAgdG90YWxQbGFuczogNFxuICAgICAgICB9LFxuICAgICAgICBwbGFuczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhbmRhcmQgQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImExXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAyNCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJhMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNDgsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYTNcIixcbiAgICAgICAgICAgICAgICBSQU06IDQwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDk2LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImE0XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4MDAwLFxuICAgICAgICAgICAgICAgIENQVTogNixcbiAgICAgICAgICAgICAgICBESVNLOiAxOTIsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgRElHSVRBTF9PQ0VBTl9PTEQ6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHRpdGxlOiBcIkRpZ2l0YWwgT2NlYW5cIixcbiAgICAgICAgICBzZXJ2ZXJUaXRsZTogXCJEcm9wbGV0XCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IFwiYjFcIixcbiAgICAgICAgICB0b3RhbFBsYW5zOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHBsYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJTdGFuZGFyZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImIxXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA1MTIsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDIwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMDI0LFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAzMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMjA0OCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjRcIixcbiAgICAgICAgICAgICAgICBSQU06IDQwOTYsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDYwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImI1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4MTkyLFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA4MCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkhpZ2ggVm9sdW1lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjZcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2Mzg0LFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYjdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyNzY4LFxuICAgICAgICAgICAgICAgIENQVTogMTIsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImI4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0OTE1MixcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDQ4MCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJiOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjU1MzYsXG4gICAgICAgICAgICAgICAgQ1BVOiAyMCxcbiAgICAgICAgICAgICAgICBESVNLOiA2NDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgRElHSVRBTF9PQ0VBTjoge1xuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgdGl0bGU6IFwiRGlnaXRhbE9jZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IFwiNTEybWJcIixcbiAgICAgICAgICB0b3RhbFBsYW5zOiAxNFxuICAgICAgICB9LFxuICAgICAgICBwbGFuczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhbmRhcmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCI1MTJtYlwiLFxuICAgICAgICAgICAgICAgIFJBTTogNTEyLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAyMCxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMDA3NDQsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiA1XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCIxZ2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDEwMjQsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDMwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAyLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4wMTQ4OCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCIyZ2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDIwNDgsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAzLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4wMjk3NixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDIwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCI0Z2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDQwOTYsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDYwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiA0LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4wNTk1MixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDQwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCI4Z2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDgxOTIsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiA1LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xMTkwNSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDgwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCIxNmdiXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNjM4NCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiA2LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4yMzgxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTZcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcIjMyZ2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyNzY4LFxuICAgICAgICAgICAgICAgIENQVTogMTIsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiA3LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC40NzYxOSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDMyXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCI0OGdiXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0OTE1MixcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDQ4MCxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogOCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuNzE0MjksXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiA0OFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiNjRnYlwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjU1MzYsXG4gICAgICAgICAgICAgICAgQ1BVOiAyMCxcbiAgICAgICAgICAgICAgICBESVNLOiA2NDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDksXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjk1MjM4LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogNjQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkhpZ2ggTWVtb3J5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibS0xNmdiXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNjM4NCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogMzAsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDYsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjE3ODU3LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTJcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcIm0tMzJnYlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzI3NjgsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDkwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiA3LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4zNTcxNCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDI0XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJtLTY0Z2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDY1NTM2LFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAyMDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDgsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjcxNDI5LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogNDhcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcIm0tMTI4Z2JcIixcbiAgICAgICAgICAgICAgICBSQU06IDEzMTA3MixcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDM0MCxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogOSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDEuNDI4NTcsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiA5NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibS0yMjRnYlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMjI5Mzc2LFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogNTAwLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDIuNSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDE2ODBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIEpPWUVOVDoge1xuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgdGl0bGU6IFwiSm95ZW50XCIsXG4gICAgICAgICAgc2VydmVyVGl0bGU6IFwic2VydmVyXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IFwiYzFcIixcbiAgICAgICAgICB0b3RhbFBsYW5zOiAyNFxuICAgICAgICB9LFxuICAgICAgICBwbGFuczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiYzFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDAuMjUsXG4gICAgICAgICAgICAgICAgRElTSzogMzMsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzJcIixcbiAgICAgICAgICAgICAgICBSQU06IDE3NTAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDU2LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiA2NixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzc1MCxcbiAgICAgICAgICAgICAgICBDUFU6IDEsXG4gICAgICAgICAgICAgICAgRElTSzogMTIzLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImM1XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0MDAwLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiAxMzEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzZcIixcbiAgICAgICAgICAgICAgICBSQU06IDUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDczOCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogODAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogNzg5LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImM4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNTAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogMTQ2NyxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDE1NzUsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzEwXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxNzAwMC4xMyxcbiAgICAgICAgICAgICAgICBDUFU6IDUsXG4gICAgICAgICAgICAgICAgRElTSzogMTY4MyxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTFcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwMDAwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjgzLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxMlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzIwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2ODMsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzEzXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA0MDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDEwLFxuICAgICAgICAgICAgICAgIERJU0s6IDE2ODMsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIE1lbW9yeVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImMxNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTcwMDAuMTMsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDQyMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTVcIixcbiAgICAgICAgICAgICAgICBSQU06IDM0MDAwLjI1LFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA4NDMsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzE2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2ODAwMC4zOCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTEyMixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTdcIixcbiAgICAgICAgICAgICAgICBSQU06IDE0NDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDE4LFxuICAgICAgICAgICAgICAgIERJU0s6IDIzNjMsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzE4XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyNTYwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzMixcbiAgICAgICAgICAgICAgICBESVNLOiA0MjAwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSGlnaCBDUFVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMTlcIixcbiAgICAgICAgICAgICAgICBSQU06IDE3NTAsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDc1LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyMFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNzAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDcsXG4gICAgICAgICAgICAgICAgRElTSzogMjYzLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiA2MDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiYzIyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyNDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDI0LFxuICAgICAgICAgICAgICAgIERJU0s6IDkwMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjNcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMzIsXG4gICAgICAgICAgICAgICAgRElTSzogMTIwMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkhpZ2ggSU9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjRcIixcbiAgICAgICAgICAgICAgICBSQU06IDY1MDAwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNDUyLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTI4MDAwLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMzA3MixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjZcIixcbiAgICAgICAgICAgICAgICBSQU06IDI1NjAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDMyLFxuICAgICAgICAgICAgICAgIERJU0s6IDYxNDQsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFN0b3JhZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjMjdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMyMDAwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiA3NjgwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjQwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA2LFxuICAgICAgICAgICAgICAgIERJU0s6IDE1MzYwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImMyOVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTI4MDAwLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiAzMDcyMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBBV1M6IHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHNlcnZlclRpdGxlOiBcIkVDMlwiLFxuICAgICAgICAgIHRpdGxlOiBcIkFXU1wiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImQxXCIsXG4gICAgICAgICAgdG90YWxQbGFuczogMzhcbiAgICAgICAgfSxcbiAgICAgICAgcGxhbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkdlbmVyYWwgUHVycG9zZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMSxcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCIsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDJcIixcbiAgICAgICAgICAgICAgICBSQU06IDIwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogNDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQ0XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA4MDAwLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCIsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDVcIixcbiAgICAgICAgICAgICAgICBSQU06IDgwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTYwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMzIwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjQwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCIsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDlcIixcbiAgICAgICAgICAgICAgICBSQU06IDE2MDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDQwLFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTBcIixcbiAgICAgICAgICAgICAgICBSQU06IDM3NTAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxLFxuICAgICAgICAgICAgICAgIERJU0s6IDQsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDExXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA1MDAwLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiA2NCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTJcIixcbiAgICAgICAgICAgICAgICBSQU06IDE1MDAwLFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA4MCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTNcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwMDAwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAxNjAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJDb21wdXRlIE9wdGltaXplZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzc1MCxcbiAgICAgICAgICAgICAgICBDUFU6IDIsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogNTAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDQsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IFwiRUJTIE9ubHlcIixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMTdcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogXCJFQlMgT25seVwiLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQxOFwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjAwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzNixcbiAgICAgICAgICAgICAgICBESVNLOiBcIkVCUyBPbmx5XCIsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDE5XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAzNzUwLFxuICAgICAgICAgICAgICAgIENQVTogMixcbiAgICAgICAgICAgICAgICBESVNLOiAzMixcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjBcIixcbiAgICAgICAgICAgICAgICBSQU06IDUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDgwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyMVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2MCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjJcIixcbiAgICAgICAgICAgICAgICBSQU06IDMwMDAwLFxuICAgICAgICAgICAgICAgIENQVTogMTYsXG4gICAgICAgICAgICAgICAgRElTSzogMzIwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyM1wiLFxuICAgICAgICAgICAgICAgIFJBTTogNjAwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzMixcbiAgICAgICAgICAgICAgICBESVNLOiA2NDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIEdQVVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyNFwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA4LFxuICAgICAgICAgICAgICAgIERJU0s6IDYwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogNjAwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzMixcbiAgICAgICAgICAgICAgICBESVNLOiAyNDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFJBTVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyNlwiLFxuICAgICAgICAgICAgICAgIFJBTTogMTUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAyLFxuICAgICAgICAgICAgICAgIERJU0s6IDY0LFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQyN1wiLFxuICAgICAgICAgICAgICAgIFJBTTogMzUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDE2MCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMjhcIixcbiAgICAgICAgICAgICAgICBSQU06IDYxMDAwLFxuICAgICAgICAgICAgICAgIENQVTogOCxcbiAgICAgICAgICAgICAgICBESVNLOiAzMjAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDI5XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjIwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiAzMjAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMwXCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyNDQwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzMixcbiAgICAgICAgICAgICAgICBESVNLOiA2NDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJIaWdoIFN0b3JhZ2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzFcIixcbiAgICAgICAgICAgICAgICBSQU06IDM1MDAwLFxuICAgICAgICAgICAgICAgIENQVTogNCxcbiAgICAgICAgICAgICAgICBESVNLOiA4MDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDMyXCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MTAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTYwMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzNcIixcbiAgICAgICAgICAgICAgICBSQU06IDEyMjAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDE2LFxuICAgICAgICAgICAgICAgIERJU0s6IDMyMDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDM0XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAyNDQwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAzMixcbiAgICAgICAgICAgICAgICBESVNLOiA2NDAwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiBcImQzNVwiLFxuICAgICAgICAgICAgICAgIFJBTTogMzUwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiA0LFxuICAgICAgICAgICAgICAgIERJU0s6IDYwMDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDM2XCIsXG4gICAgICAgICAgICAgICAgUkFNOiA2MTAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDgsXG4gICAgICAgICAgICAgICAgRElTSzogMTIwMDAsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1BlckhyOiAwLjEsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IDEsXG4gICAgICAgICAgICAgICAgZG9sbGFyc1Blck1vOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZDM3XCIsXG4gICAgICAgICAgICAgICAgUkFNOiAxMjIwMDAsXG4gICAgICAgICAgICAgICAgQ1BVOiAxNixcbiAgICAgICAgICAgICAgICBESVNLOiAyNDAwMCxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVySHI6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcjogMSxcbiAgICAgICAgICAgICAgICBkb2xsYXJzUGVyTW86IDEwXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogXCJkMzhcIixcbiAgICAgICAgICAgICAgICBSQU06IDI0NDAwMCxcbiAgICAgICAgICAgICAgICBDUFU6IDM2LFxuICAgICAgICAgICAgICAgIERJU0s6IDQ4MDAwLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJIcjogMC4xLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiAxLFxuICAgICAgICAgICAgICAgIGRvbGxhcnNQZXJNbzogMTBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFNjYWxlRGF0YVNoaW07XG5cbn0pKCk7XG4iLCJ2YXIgU2NhbGVNYWNoaW5lRGF0YVNoaW07XG5cblNjYWxlTWFjaGluZURhdGFTaGltID0gcmVxdWlyZSgnLi9zaGltcy9kYXRhLXNoaW0nKTtcblxud2luZG93LnNjYWxlTWFjaGluZVRlc3REYXRhID0gbmV3IFNjYWxlTWFjaGluZURhdGFTaGltKCk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoJ1NDQUxFLkdFVF9PUFRJT05TJywgZnVuY3Rpb24obSwgY2IpIHtcbiAgcmV0dXJuIGNiKHNjYWxlTWFjaGluZVRlc3REYXRhLmdldEhvc3RPcHRpb25zKCkpO1xufSk7XG5cbndpbmRvdy5pbml0ID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29uZmlnLCBjb25maWcyLCBvblNwZWNzQ2hhbmdlLCB0b3RhbEluc3RhbmNlcztcbiAgICBvblNwZWNzQ2hhbmdlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJUaGUgdXNlciBoYXMgc2VsZWN0ZWQgOlwiKTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9O1xuICAgIHRvdGFsSW5zdGFuY2VzID0gNTtcbiAgICBjb25maWcgPSB7XG4gICAgICBhY3RpdmVTZXJ2ZXJJZDoge1xuICAgICAgICBwcmltYXJ5OiBzY2FsZU1hY2hpbmVUZXN0RGF0YS5nZXRTYW1wbGVTY2FsZUlkKClcbiAgICAgIH0sXG4gICAgICBvblNwZWNzQ2hhbmdlOiBvblNwZWNzQ2hhbmdlLFxuICAgICAgdG90YWxJbnN0YW5jZXM6IHRvdGFsSW5zdGFuY2VzLFxuICAgICAgaXNIb3Jpem9udGFsbHlTY2FsYWJsZTogZmFsc2UsXG4gICAgICBpc0NsdXN0ZXI6IGZhbHNlXG4gICAgfTtcbiAgICBjb25maWcyID0ge1xuICAgICAgYWN0aXZlU2VydmVySWQ6IHtcbiAgICAgICAgcHJpbWFyeTogc2NhbGVNYWNoaW5lVGVzdERhdGEuZ2V0U2FtcGxlU2NhbGVJZCgpLFxuICAgICAgICBzZWNvbmRhcnk6IHNjYWxlTWFjaGluZVRlc3REYXRhLmdldFNhbXBsZVNjYWxlSWQoKSxcbiAgICAgICAgYXJiaXRlcjogc2NhbGVNYWNoaW5lVGVzdERhdGEuZ2V0U2FtcGxlU2NhbGVJZCgpXG4gICAgICB9LFxuICAgICAgb25TcGVjc0NoYW5nZTogb25TcGVjc0NoYW5nZSxcbiAgICAgIHRvdGFsSW5zdGFuY2VzOiB0b3RhbEluc3RhbmNlcyxcbiAgICAgIGlzSG9yaXpvbnRhbGx5U2NhbGFibGU6IHRydWUsXG4gICAgICBpc0NsdXN0ZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB3aW5kb3cuYXBwMiA9IG5ldyBuYW5vYm94LlNjYWxlTWFjaGluZSgkKFwiLmhvbGRlclwiKSwgY29uZmlnMik7XG4gIH07XG59KSh0aGlzKTtcbiJdfQ==
