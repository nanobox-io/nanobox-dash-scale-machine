!function e(i,t,s){function n(r,a){if(!t[r]){if(!i[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(d)return d(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var p=t[r]={exports:{}};i[r][0].call(p.exports,function(e){var t=i[r][1][e];return n(t?t:e)},p,p.exports,e,i,t,s)}return t[r].exports}for(var d="function"==typeof require&&require,r=0;r<s.length;r++)n(s[r]);return n}({1:[function(e,i,t){var s,n,d,r,a,c=function(e,i){return function(){return e.apply(i,arguments)}};a=e("jade/specs-selector"),d=e("jade/spec-html"),r=e("jade/spec-kind"),n=e("jade/spec-hover"),i.exports=s=function(){function e(){this.changeSelectedSpecs=c(this.changeSelectedSpecs,this)}return e.prototype.build=function(e,i){var t,s,n,d,c;for(this.$node=$(a({isAWS:"AWS"===i.data.meta.title})),this.$ram=$(".ram",this.$node),this.$cpu=$(".cpu",this.$node),this.$disk=$(".disk",this.$node),this.$specsHolder=$(".specs",this.$node),e.append(this.$node),this.setSpecWidthAndHeightScale(i.data),c=i.data.plans,s=0,n=c.length;n>s;s++)d=c[s],t=$(r({title:this.addBreaks(d.meta.title)})),this.$specsHolder.append(t),this.addPlanKind($(".graphs-holder",t),d);return this.$graphs=$(".graph-skin.spec",this.$node)},e.prototype.addPlanKind=function(e,i){var t,s,n,d,r,a,c;for(r=i.specs,a=[],s=n=0,d=r.length;d>n;s=++n)c=r[s],t=s<i.specs.length?2:0,a.push(this.buildGraph(e,c,t));return a},e.prototype.buildGraph=function(e,i,t){var s,n,r,a,c,o,p,h;return o=this.checkForAlternateDisks(i),c=130,a=.25*Math.sqrt(i.DISK)*this.graphScale,n=1.2*Math.sqrt(i.CPU)*this.graphScale,h=.5*Math.sqrt(i.RAM)*this.graphScale,p=3,r={isEBS:o,graphWidth:this.graphWidth+t,graphHeight:a+p+n+p+h,topPadding:0,cellWidth:this.graphWidth,diskHeight:a,cpuHeight:n,ramHeight:h},r.disk_y=0,r.cpu_y=r.diskHeight+p,r.ram_y=r.cpu_y+p+r.cpuHeight,r.id=i.id,s=$(d(r)),s.on("mouseover",function(e){return function(){return e.duplicate(s,i)}}(this)),s.on("mouseout",function(e){return function(){return e.destroy()}}(this)),s.on("click",function(e){return function(){return e.onGraphClick(i,s)}}(this)),e.append(s)},e.prototype.changeSelectedSpecs=function(e,i,t){return this.$ram.text(e.toLocaleString()+" GB"),this.$cpu.text(i.toLocaleString()+" CORE"),this.$disk.text(t.toLocaleString()+" GB")},e.prototype.onGraphClick=function(e,i){var t;if(this.activeSpecsId!==e.id)return this.activeSpecsId=e.id,this.changeSelectedSpecs(e.RAM,e.CPU,e.DISK),null!=(t=this.$graphs)&&t.removeClass("selected"),i.addClass("selected")},e.prototype.duplicate=function(e,i){var t,s,d,r,a;return a=e.position().left+30,t=e.clone(),t.addClass("cloned-graph"),d={ram:i.RAM.toLocaleString()+" GB",cpu:i.CPU.toLocaleString()+" CORE",disk:i.DISK.toLocaleString()+" GB"},s=$(n(d)),e.position().left>110?s.css({left:-136}):s.css({left:2*this.graphWidth}),t.append(s),this.$node.append(t),r=$(".heighter",e).height(),t.css({left:a+"px",bottom:"109px",position:"absolute",height:r,"pointer-events":"none","padding-right":"0",width:"-=1"})},e.prototype.destroy=function(){return $(".cloned-graph").remove()},e.prototype.setSpecWidthAndHeightScale=function(e){var i,t,s,n,d,r,a,c,o,p,h;for(h=0,s=540,t=130,a=8,p=2,o=0,o+=a*(e.plans.length-1),i=this.findBiggestSpec(e.plans),c=e.plans,n=0,d=c.length;d>n;n++)r=c[n],h+=r.specs.length,o+=p*r.specs.length;return this.graphWidth=(s-o)/h,this.graphScale=t/i},e.prototype.findBiggestSpec=function(e){var i,t,s,n,d,r,a,c;for(i=0,t=0,n=e.length;n>t;t++)for(r=e[t],a=r.specs,s=0,d=a.length;d>s;s++)c=a[s],i=this.getBiggest(i,c);return i},e.prototype.getBiggest=function(e,i){var t;return t=.25*Math.sqrt(i.DISK),t+=1.2*Math.sqrt(i.CPU),t+=.5*Math.sqrt(i.RAM),e>t?e:t},e.prototype.checkForAlternateDisks=function(e){return"number"!=typeof e.DISK?(e.DISK=1e3,!0):void 0},e.prototype.addBreaks=function(e){return e.replace(/\s/i,"<br/>")},e}()},{"jade/spec-hover":3,"jade/spec-html":4,"jade/spec-kind":5,"jade/specs-selector":6}],2:[function(e,i,t){var s,n;n=e("components/specs-selector"),s=function(){function e(e,i){this.$el=e,this.options=i,this.build()}return e.prototype.build=function(){return this.specsSelector=new n,this.specsSelector.build(this.$el,this.options)},e}(),window.nanobox||(window.nanobox={}),nanobox.ScaleMachine=s},{"components/specs-selector":1}],3:[function(e,i,t){i.exports=function(e){var i,t=[],s=e||{};return function(e,s,n){t.push('<div class="spec-hover"><div class="ram"><div class="label">RAM</div><div class="size">'+jade.escape(null==(i=n)?"":i)+'</div></div><div class="cpu"><div class="label">CPU</div><div class="size">'+jade.escape(null==(i=e)?"":i)+'</div></div><div class="disk"><div class="label">DISK</div><div class="size">'+jade.escape(null==(i=s)?"":i)+"</div></div></div>")}.call(this,"cpu"in s?s.cpu:"undefined"!=typeof cpu?cpu:void 0,"disk"in s?s.disk:"undefined"!=typeof disk?disk:void 0,"ram"in s?s.ram:"undefined"!=typeof ram?ram:void 0),t.join("")}},{}],4:[function(e,i,t){i.exports=function(e){var i=[],t=e||{};return function(e,t,s,n,d,r,a){i.push("<div"+jade.attr("style","padding-right:"+n+"px",!0,!1)+jade.attr("id",""+d,!0,!1)+' class="graph-skin spec"><div class="heighter"><div'+jade.attr("style","width:"+e+"px; height:"+a+"px;",!0,!1)+' class="ram"></div><div'+jade.attr("style","width:"+e+"px; height:"+t+"px;",!0,!1)+' class="cpu"></div><div'+jade.attr("style","width:"+e+"px; height:"+s+"px;",!0,!1)+jade.cls(["disk",r?"ebs":""],[null,!0])+"></div></div></div>")}.call(this,"cellWidth"in t?t.cellWidth:"undefined"!=typeof cellWidth?cellWidth:void 0,"cpuHeight"in t?t.cpuHeight:"undefined"!=typeof cpuHeight?cpuHeight:void 0,"diskHeight"in t?t.diskHeight:"undefined"!=typeof diskHeight?diskHeight:void 0,"graphWidth"in t?t.graphWidth:"undefined"!=typeof graphWidth?graphWidth:void 0,"id"in t?t.id:"undefined"!=typeof id?id:void 0,"isEBS"in t?t.isEBS:"undefined"!=typeof isEBS?isEBS:void 0,"ramHeight"in t?t.ramHeight:"undefined"!=typeof ramHeight?ramHeight:void 0),i.join("")}},{}],5:[function(e,i,t){i.exports=function(e){var i,t=[],s=e||{};return function(e){t.push('<div class="spec-kind"><div class="graphs-holder"></div><div class="title">'+(null==(i=e)?"":i)+"</div></div>")}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),t.join("")}},{}],6:[function(e,i,t){i.exports=function(e){var i=[],t=e||{};return function(e){i.push('<div class="specs-wrapper"><div class="spec-selector"> <div class="info"><div class="meta"> <div class="title">Instance Scale</div><div class="host">Digital Ocean - Select a Scale Below</div></div><div class="vals"><div class="ram"> </div><div class="cpu"> </div><div class="disk"> </div></div></div><div class="specs"><div class="key"><div class="ram-key">RAM</div><div class="cpu-key">CPU</div><div class="disk-key">DISK</div>'),e&&i.push('<div class="ebs-key">EBS</div>'),i.push("</div></div></div></div>")}.call(this,"isAWS"in t?t.isAWS:"undefined"!=typeof isAWS?isAWS:void 0),i.join("")}},{}]},{},[2]);