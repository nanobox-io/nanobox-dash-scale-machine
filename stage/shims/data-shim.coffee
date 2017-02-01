module.exports = class ScaleDataShim

  constructor     : () ->
    providers = ["AWS_NEW","LINODE","DIGITAL_OCEAN","JOYENT"]
    @provider = providers[2]
    @createHash()
    # console.log JSON.stringify(@providers[ providers[0] ])

  getSampleScaleId : ()->
    randomIndex = Math.floor(@providers[@provider].plans[0].specs.length * Math.random())
    @providers[@provider].plans[0].specs[randomIndex].id

  getServiceSpecs : () =>
    info = @getCurrentSpecs()
    info.host = @provider
    JSON.parse(JSON.stringify( {data:info} ));

  getHostOptions  : () =>
    @providers[@provider]

  getCurrentSpecs : () ->
    dict = LINODE:'a', DIGITAL_OCEAN:'b', JOYENT:'c', AWS:'d'
    @specId  = dict[@provider] + "2"

    for plan in @providers[@provider].plans
      for spec in plan.specs
        if spec.id == @specId
          return{
            ram  : spec.RAM
            cpu  : spec.CPU
            disk : spec.DISK
            id   : spec.id
          }

  createHash : () ->
    AWS_NEW = require './aws.json';
    @providers =
      AWS_NEW: AWS_NEW
      LINODE:
        meta:
          title:"Linode"
          serverTitle:"Server"
          default:"a1"
          totalPlans:4
        plans:[
          {
            meta:
              title:"Standard Configuration"
            specs:[
              {id:"a1", RAM:1000, CPU:1, DISK:24, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"a2", RAM:2000, CPU:2, DISK:48, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"a3", RAM:4000, CPU:4, DISK:96, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"a4", RAM:8000, CPU:6, DISK:192, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
        ]
      DIGITAL_OCEAN_OLD:
        meta:
          title:"Digital Ocean"
          serverTitle:"Droplet"
          default:"b1"
          totalPlans:9
        plans:[
          {
            meta:
              title:"Standard"
            specs:[
              {id:"b1", RAM:512, CPU:1, DISK:20, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b2", RAM:1024, CPU:1, DISK:30, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b3", RAM:2048, CPU:2, DISK:40, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b4", RAM:4096, CPU:2, DISK:60, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b5", RAM:8192, CPU:4, DISK:80, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High Volume"
            specs:[
              {id:"b6", RAM:16384, CPU:8, DISK:160, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b7", RAM:32768, CPU:12, DISK:320, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b8", RAM:49152, CPU:16, DISK:480, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"b9", RAM:65536, CPU:20, DISK:640, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
        ]
      DIGITAL_OCEAN:
        meta:
          title: "DigitalOcean",
          default: "512mb",
          totalPlans: 14
        plans: [
          {
            meta:
              title: "Standard"
            specs: [
              {id: "512mb", RAM: 512, CPU: 1, DISK: 20, transfer: 1, dollarsPerHr: 0.00744, dollarsPerMo: 5 },
              {id: "1gb", RAM: 1024, CPU: 1, DISK: 30, transfer: 2, dollarsPerHr: 0.01488, dollarsPerMo: 10},
              {id: "2gb", RAM: 2048, CPU: 2, DISK: 40, transfer: 3, dollarsPerHr: 0.02976, dollarsPerMo: 20},
              {id: "4gb", RAM: 4096, CPU: 2, DISK: 60, transfer: 4, dollarsPerHr: 0.05952, dollarsPerMo: 40},
              {id: "8gb", RAM: 8192, CPU: 4, DISK: 80, transfer: 5, dollarsPerHr: 0.11905, dollarsPerMo: 80},
              {id: "16gb", RAM: 16384, CPU: 8, DISK: 160, transfer: 6, dollarsPerHr: 0.2381, dollarsPerMo: 16},
              {id: "32gb", RAM: 32768, CPU: 12, DISK: 320, transfer: 7, dollarsPerHr: 0.47619, dollarsPerMo: 32},
              {id: "48gb", RAM: 49152, CPU: 16, DISK: 480, transfer: 8, dollarsPerHr: 0.71429, dollarsPerMo: 48},
              {id: "64gb", RAM: 65536, CPU: 20, DISK: 640, transfer: 9, dollarsPerHr: 0.95238, dollarsPerMo: 640}
            ]
          },
          {
            meta:
              title: "High Memory"
            specs: [
              {id: "m-16gb", RAM: 16384, CPU: 2, DISK: 30, transfer: 6, dollarsPerHr: 0.17857, dollarsPerMo: 12},
              {id: "m-32gb", RAM: 32768, CPU: 4, DISK: 90, transfer: 7, dollarsPerHr: 0.35714, dollarsPerMo: 24},
              {id: "m-64gb", RAM: 65536, CPU: 8, DISK: 200, transfer: 8, dollarsPerHr: 0.71429, dollarsPerMo: 48},
              {id: "m-128gb", RAM: 131072, CPU: 16, DISK: 340, transfer: 9, dollarsPerHr: 1.42857, dollarsPerMo: 96},
              {id: "m-224gb", RAM: 229376, CPU: 32, DISK: 500, transfer: 10, dollarsPerHr: 2.5, dollarsPerMo: 1680}
            ]
          }
        ]
      JOYENT:
        meta:
          title:"Joyent"
          serverTitle:"server"
          default:"c1"
          totalPlans:24

        plans:[
          {
            meta:
              title:"Standard"
              default:"c1"
            specs:[
              {id:"c1", RAM:1000, CPU:0.25, DISK:33, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c2", RAM:1750, CPU:1, DISK:56, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c3", RAM:2000, CPU:1, DISK:66, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c4", RAM:3750, CPU:1, DISK:123, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c5", RAM:4000, CPU:1, DISK:131, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c6", RAM:5000, CPU:2, DISK:738, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c7", RAM:8000, CPU:2, DISK:789, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c8", RAM:15000, CPU:4, DISK:1467, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c9", RAM:16000, CPU:4, DISK:1575, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c10", RAM:17000.13, CPU:5, DISK:1683, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c11", RAM:30000, CPU:8, DISK:1683, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c12", RAM:32000, CPU:8, DISK:1683, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c13", RAM:40000, CPU:10, DISK:1683, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High Memory"
            specs:[
              {id:"c14", RAM:17000.13, CPU:2, DISK:420, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c15", RAM:34000.25, CPU:4, DISK:843, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c16", RAM:68000.38, CPU:8, DISK:1122, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c17", RAM:144000, CPU:18, DISK:2363, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c18", RAM:256000, CPU:32, DISK:4200, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High CPU"
            specs:[
              {id:"c19", RAM:1750, CPU:2, DISK:75, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c20", RAM:7000, CPU:7, DISK:263, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c21", RAM:16000, CPU:16, DISK:600, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c22", RAM:24000, CPU:24, DISK:900, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c23", RAM:32000, CPU:32, DISK:1200, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High IO"
            specs:[
              {id:"c24", RAM:65000, CPU:8, DISK:1452, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c25", RAM:128000, CPU:16, DISK:3072, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c26", RAM:256000, CPU:32, DISK:6144, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High Storage"
            specs:[
              {id:"c27", RAM:32000, CPU:8, DISK:7680, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c28", RAM:64000, CPU:6, DISK:15360, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"c29", RAM:128000, CPU:2, DISK:30720, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
        ]
      AWS:
        meta:
          serverTitle:"EC2"
          title:"AWS"
          default:"d1"
          totalPlans:38
        plans:[
          {
            meta:
              title:"General Purpose"
            specs:[
              {id:"d1", RAM:1000, CPU:1, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d2", RAM:2000, CPU:1, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d3", RAM:4000, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d4", RAM:8000, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d5", RAM:8000, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d6", RAM:16000, CPU:4, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d7", RAM:32000, CPU:8, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d8", RAM:64000, CPU:16, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d9", RAM:160000, CPU:40, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d10", RAM:3750, CPU:1, DISK:4, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d11", RAM:5000, CPU:2, DISK:64, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d12", RAM:15000, CPU:4, DISK:80, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d13", RAM:30000, CPU:8, DISK:160, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"Compute Optimized"
            specs:[
              {id:"d14", RAM:3750, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d15", RAM:5000, CPU:4, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d16", RAM:15000, CPU:8, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d17", RAM:30000, CPU:16, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d18", RAM:60000, CPU:36, DISK:"EBS Only", dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d19", RAM:3750, CPU:2, DISK:32, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d20", RAM:5000, CPU:4, DISK:80, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d21", RAM:15000, CPU:8, DISK:160, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d22", RAM:30000, CPU:16, DISK:320, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d23", RAM:60000, CPU:32, DISK:640, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High GPU"
            specs:[
              {id:"d24", RAM:15000, CPU:8, DISK:60, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d25", RAM:60000, CPU:32, DISK:240, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High RAM"
            specs:[
              {id:"d26", RAM:15000, CPU:2, DISK:64, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d27", RAM:35000, CPU:4, DISK:160, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d28", RAM:61000, CPU:8, DISK:320, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d29", RAM:122000, CPU:16, DISK:320, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d30", RAM:244000, CPU:32, DISK:640, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
          {
            meta:
              title:"High Storage"
            specs:[
              {id:"d31", RAM:35000, CPU:4, DISK:800, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d32", RAM:61000, CPU:8, DISK:1600, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d33", RAM:122000, CPU:16, DISK:3200, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d34", RAM:244000, CPU:32, DISK:6400, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d35", RAM:35000, CPU:4, DISK:6000, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d36", RAM:61000, CPU:8, DISK:12000, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d37", RAM:122000, CPU:16, DISK:24000, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
              {id:"d38", RAM:244000, CPU:36, DISK:48000, dollarsPerHr:0.1, transfer:1, dollarsPerMo:10}
            ]
          }
        ]
