!function i(t,e,s){function n(r,c){if(!e[r]){if(!t[r]){var a="function"==typeof require&&require;if(!c&&a)return a(r,!0);if(d)return d(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var h=e[r]={exports:{}};t[r][0].call(h.exports,function(i){var e=t[r][1][i];return n(e?e:i)},h,h.exports,i,t,e,s)}return e[r].exports}for(var d="function"==typeof require&&require,r=0;r<s.length;r++)n(s[r]);return n}({1:[function(i,t,e){var s,n,d,r,c,a=function(i,t){return function(){return i.apply(t,arguments)}};c=i("jade/specs-selector"),d=i("jade/spec-html"),r=i("jade/spec-kind"),n=i("jade/spec-hover"),t.exports=s=function(){function i(i,t,e){this.$el=i,this.onChangeCb=t,this.activeSpecsId=e,this.changeSelectedSpecs=a(this.changeSelectedSpecs,this),this.build=a(this.build,this),PubSub.publish("STATS.GET_OPTIONS",this.build)}return i.prototype.build=function(i){var t,e,s,n,d;for(this.$node=$(c({isAWS:"AWS"===i.data.meta.title})),this.$ram=$(".ram",this.$node),this.$cpu=$(".cpu",this.$node),this.$disk=$(".disk",this.$node),this.$specsHolder=$(".specs",this.$node),this.$el.append(this.$node),this.setSpecWidthAndHeightScale(i.data),d=i.data.plans,e=0,s=d.length;s>e;e++)n=d[e],t=$(r({title:this.addBreaks(n.meta.title)})),this.$specsHolder.append(t),this.addPlanKind($(".graphs-holder",t),n);return this.$graphs=$(".graph-skin.spec",this.$node),this.top=$(".specs",this.$node).position().top},i.prototype.addPlanKind=function(i,t){var e,s,n,d,r,c,a;for(this.$el=i,r=t.specs,c=[],s=n=0,d=r.length;d>n;s=++n)a=r[s],e=s<t.specs.length?2:0,c.push(this.buildGraph(this.$el,a,e));return c},i.prototype.buildGraph=function(i,t,e){var s,n,r,c,a,o,h;return this.$el=i,a=this.checkForAlternateDisks(t),c=.25*Math.sqrt(t.DISK)*this.graphScale,n=1.2*Math.sqrt(t.CPU)*this.graphScale,h=.6*Math.sqrt(t.RAM)*this.graphScale,o=3,r={isEBS:a,graphWidth:this.graphWidth+e,graphHeight:c+o+n+o+h,topPadding:0,cellWidth:this.graphWidth,diskHeight:c,cpuHeight:n,ramHeight:h},r.disk_y=0,r.cpu_y=r.diskHeight+o,r.ram_y=r.cpu_y+o+r.cpuHeight,r.id=t.id,s=$(d(r)),s.on("mouseover",function(i){return function(){return i.duplicate(s,t)}}(this)),s.on("mouseout",function(i){return function(){return i.destroy()}}(this)),s.on("click",function(i){return function(){return i.onGraphClick(t,s)}}(this)),this.$el.append(s),t.id===this.activeSpecsId?this.onGraphClick(t,s,!0):void 0},i.prototype.changeSelectedSpecs=function(i,t,e){return $(".val",this.$ram).text(i.toLocaleString()),$(".metric",this.$ram).text(" GB RAM"),$(".val",this.$cpu).text(t.toLocaleString()),$(".metric",this.$cpu).text(" CPU CORE"),$(".val",this.$disk).text(e.toLocaleString()),$(".metric",this.$disk).text(" GB DISK")},i.prototype.onGraphClick=function(i,t,e){var s;if(null==e&&(e=!1),!e){if(this.activeSpecsId===i.id)return;this.onChangeCb(i.id),this.$clone.addClass("clicked")}return this.activeSpecsId=i.id,this.changeSelectedSpecs(i.RAM,i.CPU,i.DISK),null!=(s=this.$graphs)&&s.removeClass("selected"),t.addClass("selected")},i.prototype.duplicate=function(i,t){var e,s,d,r,c,a;return r=i.position().left,c=this.top,this.$clone=i.clone(),this.$clone.addClass("cloned-graph"),s={ram:t.RAM.toLocaleString()+" GB",cpu:t.CPU.toLocaleString()+" CORE",disk:t.DISK.toLocaleString()+" GB"},e=$(n(s)),a=8,i.position().left>420?e.css({right:i.outerWidth()+a}):e.css({left:this.graphWidth+a}),this.$clone.append(e),this.$node.append(this.$clone),d=$(".heighter",i).height(),this.$clone.css({left:r+"px",bottom:this.top+47+"px",position:"absolute",height:d,"pointer-events":"none","padding-right":"0",width:"-=1"})},i.prototype.destroy=function(){return $(".cloned-graph").remove()},i.prototype.setSpecWidthAndHeightScale=function(i){var t,e,s,n,d,r,c,a,o,h,l;for(l=0,s=550,e=130,c=8,h=2,o=0,o+=c*(i.plans.length-1),t=this.findBiggestSpec(i.plans),a=i.plans,n=0,d=a.length;d>n;n++)r=a[n],l+=r.specs.length,o+=h*r.specs.length;return this.graphWidth=(s-o)/l,this.graphScale=e/t},i.prototype.findBiggestSpec=function(i){var t,e,s,n,d,r,c,a;for(t=0,e=0,n=i.length;n>e;e++)for(r=i[e],c=r.specs,s=0,d=c.length;d>s;s++)a=c[s],t=this.getBiggest(t,a);return t},i.prototype.getBiggest=function(i,t){var e;return e=.25*Math.sqrt(t.DISK),e+=1.2*Math.sqrt(t.CPU),e+=.5*Math.sqrt(t.RAM),i>e?i:e},i.prototype.checkForAlternateDisks=function(i){return"number"!=typeof i.DISK?(i.DISK=1e3,!0):void 0},i.prototype.addBreaks=function(i){return i.replace(/\s/i,"<br/>")},i}()},{"jade/spec-hover":3,"jade/spec-html":4,"jade/spec-kind":5,"jade/specs-selector":6}],2:[function(i,t,e){var s,n;n=i("components/specs-selector"),s=function(){function i(i,t,e){this.$el=i,this.activeServerId=t,this.build(e)}return i.prototype.build=function(i){return this.specsSelector=new n(this.$el,i,this.activeServerId)},i}(),window.nanobox||(window.nanobox={}),nanobox.ScaleMachine=s},{"components/specs-selector":1}],3:[function(i,t,e){t.exports=function(i){var t,e=[],s=i||{};return function(i,s,n){e.push('<div class="spec-hover"><div class="ram"><div class="label">RAM</div><div class="size">'+jade.escape(null==(t=n)?"":t)+'</div></div><div class="cpu"><div class="label">CPU</div><div class="size">'+jade.escape(null==(t=i)?"":t)+'</div></div><div class="disk"><div class="label">DISK</div><div class="size">'+jade.escape(null==(t=s)?"":t)+"</div></div></div>")}.call(this,"cpu"in s?s.cpu:"undefined"!=typeof cpu?cpu:void 0,"disk"in s?s.disk:"undefined"!=typeof disk?disk:void 0,"ram"in s?s.ram:"undefined"!=typeof ram?ram:void 0),e.join("")}},{}],4:[function(i,t,e){t.exports=function(i){var t=[],e=i||{};return function(i,e,s,n,d,r,c){t.push("<div"+jade.attr("style","padding-right:"+n+"px",!0,!1)+jade.attr("id",""+d,!0,!1)+' class="graph-skin spec"><div class="heighter"><div'+jade.attr("style","width:"+i+"px; height:"+c+"px;",!0,!1)+' class="ram"></div><div'+jade.attr("style","width:"+i+"px; height:"+e+"px;",!0,!1)+' class="cpu"></div><div'+jade.attr("style","width:"+i+"px; height:"+s+"px;",!0,!1)+jade.cls(["disk",r?"ebs":""],[null,!0])+"></div></div></div>")}.call(this,"cellWidth"in e?e.cellWidth:"undefined"!=typeof cellWidth?cellWidth:void 0,"cpuHeight"in e?e.cpuHeight:"undefined"!=typeof cpuHeight?cpuHeight:void 0,"diskHeight"in e?e.diskHeight:"undefined"!=typeof diskHeight?diskHeight:void 0,"graphWidth"in e?e.graphWidth:"undefined"!=typeof graphWidth?graphWidth:void 0,"id"in e?e.id:"undefined"!=typeof id?id:void 0,"isEBS"in e?e.isEBS:"undefined"!=typeof isEBS?isEBS:void 0,"ramHeight"in e?e.ramHeight:"undefined"!=typeof ramHeight?ramHeight:void 0),t.join("")}},{}],5:[function(i,t,e){t.exports=function(i){var t,e=[],s=i||{};return function(i){e.push('<div class="spec-kind"><div class="graphs-holder"></div><div class="title">'+(null==(t=i)?"":t)+"</div></div>")}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),e.join("")}},{}],6:[function(i,t,e){t.exports=function(i){var t=[],e=i||{};return function(i){t.push('<div class="specs-wrapper"><div class="spec-selector"> <div class="instructions"> <div class="main">To scale this server, choose one of the following configurations:</div><div class="provider"> Digital Ocean Server Info</div></div><div class="specs"><div style="display:none" class="key"><div class="ram-key">RAM</div><div class="cpu-key">CPU</div><div class="disk-key">DISK</div>'),i&&t.push('<div class="ebs-key">EBS</div>'),t.push('</div></div></div><div class="info"><div class="meta"> <div class="title">Server Specs</div></div><div class="vals"><div class="ram"><div class="val"></div><div class="metric"></div></div><div class="cpu"><div class="val"></div><div class="metric"></div></div><div class="disk"> <div class="val"></div><div class="metric"></div></div></div></div></div>')}.call(this,"isAWS"in e?e.isAWS:"undefined"!=typeof isAWS?isAWS:void 0),t.join("")}},{}]},{},[2]);