module.exports = class ScaleDataShim

  constructor     : () ->
    providers = ["AWS","LINODE","DIGITAL_OCEAN","JOYENT"]
    @provider = providers[2]
    @createHash()

  getSampleScaleId : ()->
    randomIndex = Math.floor(@providers[@provider].plans[0].specs.length * Math.random())
    @providers[@provider].plans[0].specs[randomIndex].id

  getServiceSpecs : () =>
    info = @getCurrentSpecs()
    info.host = @provider
    JSON.parse(JSON.stringify( {data:info} ));

  getHostOptions  : () => {data: @providers[@provider], activeSpecsId: @specId}

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
    @providers =
      LINODE:
        meta:
          title:"Linode"
          default:"a1"
          totalPlans:4
        plans:[
          {
            meta:
              title:"Standard Configuration"
            specs:[
              {id:"a1", RAM:1, CPU:1, DISK:24, dollarsPerHr:0.1}
              {id:"a2", RAM:2, CPU:2, DISK:48, dollarsPerHr:0.1}
              {id:"a3", RAM:4, CPU:4, DISK:96, dollarsPerHr:0.1}
              {id:"a4", RAM:8, CPU:6, DISK:192, dollarsPerHr:0.1}
            ]
          }
        ]
      DIGITAL_OCEAN:
        meta:
          title:"Digital Ocean"
          default:"b1"
          totalPlans:9
        plans:[
          {
            meta:
              title:"Standard"
            specs:[
              {id:"b1", RAM:0.5, CPU:1, DISK:20, dollarsPerHr:0.1}
              {id:"b2", RAM:1, CPU:1, DISK:30, dollarsPerHr:0.1}
              {id:"b3", RAM:2, CPU:2, DISK:40, dollarsPerHr:0.1}
              {id:"b4", RAM:4, CPU:2, DISK:60, dollarsPerHr:0.1}
              {id:"b5", RAM:8, CPU:4, DISK:80, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High Volume"
            specs:[
              {id:"b6", RAM:16, CPU:8, DISK:160, dollarsPerHr:0.1}
              {id:"b7", RAM:32, CPU:12, DISK:320, dollarsPerHr:0.1}
              {id:"b8", RAM:48, CPU:16, DISK:480, dollarsPerHr:0.1}
              {id:"b9", RAM:64, CPU:20, DISK:640, dollarsPerHr:0.1}
            ]
          }
        ]
      JOYENT:
        meta:
          title:"Joyent"
          default:"c1"
          totalPlans:24

        plans:[
          {
            meta:
              title:"Standard"
              default:"c1"
            specs:[
              {id:"c1", RAM:1, CPU:0.25, DISK:33, dollarsPerHr:0.1}
              {id:"c2", RAM:1.75, CPU:1, DISK:56, dollarsPerHr:0.1}
              {id:"c3", RAM:2, CPU:1, DISK:66, dollarsPerHr:0.1}
              {id:"c4", RAM:3.75, CPU:1, DISK:123, dollarsPerHr:0.1}
              {id:"c5", RAM:4, CPU:1, DISK:131, dollarsPerHr:0.1}
              {id:"c6", RAM:7.5, CPU:2, DISK:738, dollarsPerHr:0.1}
              {id:"c7", RAM:8, CPU:2, DISK:789, dollarsPerHr:0.1}
              {id:"c8", RAM:15, CPU:4, DISK:1467, dollarsPerHr:0.1}
              {id:"c9", RAM:16, CPU:4, DISK:1575, dollarsPerHr:0.1}
              {id:"c10", RAM:17.13, CPU:5, DISK:1683, dollarsPerHr:0.1}
              {id:"c11", RAM:30, CPU:8, DISK:1683, dollarsPerHr:0.1}
              {id:"c12", RAM:32, CPU:8, DISK:1683, dollarsPerHr:0.1}
              {id:"c13", RAM:40, CPU:10, DISK:1683, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High Memory"
            specs:[
              {id:"c14", RAM:17.13, CPU:2, DISK:420, dollarsPerHr:0.1}
              {id:"c15", RAM:34.25, CPU:4, DISK:843, dollarsPerHr:0.1}
              {id:"c16", RAM:68.38, CPU:8, DISK:1122, dollarsPerHr:0.1}
              {id:"c17", RAM:144, CPU:18, DISK:2363, dollarsPerHr:0.1}
              {id:"c18", RAM:256, CPU:32, DISK:4200, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High CPU"
            specs:[
              {id:"c19", RAM:1.75, CPU:2, DISK:75, dollarsPerHr:0.1}
              {id:"c20", RAM:7, CPU:7, DISK:263, dollarsPerHr:0.1}
              {id:"c21", RAM:16, CPU:16, DISK:600, dollarsPerHr:0.1}
              {id:"c22", RAM:24, CPU:24, DISK:900, dollarsPerHr:0.1}
              {id:"c23", RAM:32, CPU:32, DISK:1200, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High IO"
            specs:[
              {id:"c24", RAM:60.5, CPU:8, DISK:1452, dollarsPerHr:0.1}
              {id:"c25", RAM:128, CPU:16, DISK:3072, dollarsPerHr:0.1}
              {id:"c26", RAM:256, CPU:32, DISK:6144, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High Storage"
            specs:[
              {id:"c27", RAM:32, CPU:8, DISK:7680, dollarsPerHr:0.1}
              {id:"c28", RAM:64, CPU:6, DISK:15360, dollarsPerHr:0.1}
              {id:"c29", RAM:128, CPU:2, DISK:30720, dollarsPerHr:0.1}
            ]
          }
        ]
      AWS:
        meta:
          title:"AWS"
          default:"d1"
          totalPlans:38
        plans:[
          {
            meta:
              title:"General Purpose"
            specs:[
              {id:"d1", RAM:1, CPU:1, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d2", RAM:2, CPU:1, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d3", RAM:4, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d4", RAM:8, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d5", RAM:8, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d6", RAM:16, CPU:4, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d7", RAM:32, CPU:8, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d8", RAM:64, CPU:16, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d9", RAM:160, CPU:40, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d10", RAM:3.75, CPU:1, DISK:4, dollarsPerHr:0.1}
              {id:"d11", RAM:7.5, CPU:2, DISK:64, dollarsPerHr:0.1}
              {id:"d12", RAM:15, CPU:4, DISK:80, dollarsPerHr:0.1}
              {id:"d13", RAM:30, CPU:8, DISK:160, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"Compute Optimized"
            specs:[
              {id:"d14", RAM:3.75, CPU:2, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d15", RAM:7.5, CPU:4, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d16", RAM:15, CPU:8, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d17", RAM:30, CPU:16, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d18", RAM:60, CPU:36, DISK:"EBS Only", dollarsPerHr:0.1}
              {id:"d19", RAM:3.75, CPU:2, DISK:32, dollarsPerHr:0.1}
              {id:"d20", RAM:7.5, CPU:4, DISK:80, dollarsPerHr:0.1}
              {id:"d21", RAM:15, CPU:8, DISK:160, dollarsPerHr:0.1}
              {id:"d22", RAM:30, CPU:16, DISK:320, dollarsPerHr:0.1}
              {id:"d23", RAM:60, CPU:32, DISK:640, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High GPU"
            specs:[
              {id:"d24", RAM:15, CPU:8, DISK:60, dollarsPerHr:0.1}
              {id:"d25", RAM:60, CPU:32, DISK:240, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High RAM"
            specs:[
              {id:"d26", RAM:15, CPU:2, DISK:64, dollarsPerHr:0.1}
              {id:"d27", RAM:30.5, CPU:4, DISK:160, dollarsPerHr:0.1}
              {id:"d28", RAM:61, CPU:8, DISK:320, dollarsPerHr:0.1}
              {id:"d29", RAM:122, CPU:16, DISK:320, dollarsPerHr:0.1}
              {id:"d30", RAM:244, CPU:32, DISK:640, dollarsPerHr:0.1}
            ]
          }
          {
            meta:
              title:"High Storage"
            specs:[
              {id:"d31", RAM:30.5, CPU:4, DISK:800, dollarsPerHr:0.1}
              {id:"d32", RAM:61, CPU:8, DISK:1600, dollarsPerHr:0.1}
              {id:"d33", RAM:122, CPU:16, DISK:3200, dollarsPerHr:0.1}
              {id:"d34", RAM:244, CPU:32, DISK:6400, dollarsPerHr:0.1}
              {id:"d35", RAM:30.5, CPU:4, DISK:6000, dollarsPerHr:0.1}
              {id:"d36", RAM:61, CPU:8, DISK:12000, dollarsPerHr:0.1}
              {id:"d37", RAM:122, CPU:16, DISK:24000, dollarsPerHr:0.1}
              {id:"d38", RAM:244, CPU:36, DISK:48000, dollarsPerHr:0.1}
            ]
          }
        ]
