!function t(e,i,s){function r(d,o){if(!i[d]){if(!e[d]){var a="function"==typeof require&&require;if(!o&&a)return a(d,!0);if(n)return n(d,!0);var c=new Error("Cannot find module '"+d+"'");throw c.code="MODULE_NOT_FOUND",c}var h=i[d]={exports:{}};e[d][0].call(h.exports,function(t){var i=e[d][1][t];return r(i?i:t)},h,h.exports,t,e,i,s)}return i[d].exports}for(var n="function"==typeof require&&require,d=0;d<s.length;d++)r(s[d]);return r}({1:[function(t,e,i){var s,r;r=t("jade/slider"),e.exports=s=function(){function t(t,e,i){null==i&&(i=1),this.build(t),this.updateTotal(i),this.cb=e}return t.prototype.build=function(t){var e;return this.$node=$(r({})),t.append(this.$node),e=30,this.$body=$("body"),this.$dragger=$(".dragger",this.$node),this.$tracks=$(".tracks"),this.$track=$(".track"),this.$totals=$(".totals"),this.trackWidth=this.$tracks.width(),this.stepSize=this.trackWidth/e,this.$dragger.on("mousedown",function(t){return function(){return t.$body.on("mousemove",function(e){var i,s;return i=(e.pageX-t.$tracks.offset().left)/t.trackWidth,i>1?i=1:0>i&&(i=0),s=Math.round(t.trackWidth*i/t.stepSize),1>s&&(s=1),t.updateTotal(s)}),t.$body.on("mouseup",function(){return t.$body.off("mousemove"),t.$body.off("mouseup")})}}(this))},t.prototype.updateTotal=function(t){var e;if(t!==this.total)return this.total=t,e=t*this.stepSize,this.$dragger.css({left:e+"px"}),this.$track.css({width:e}),this.$totals.text(t),this.cb?this.cb(t):void 0},t.prototype.destroy=function(){return this.$dragger.off(),this.$node.remove()},t}()},{"jade/slider":4}],2:[function(t,e,i){var s,r,n,d,o,a=function(t,e){return function(){return t.apply(e,arguments)}};o=t("jade/specs-selector"),n=t("jade/spec-html"),d=t("jade/spec-kind"),r=t("jade/spec-hover"),e.exports=s=function(){function t(t,e,i){this.$el=t,this.onChangeCb=e,this.activeSpecsId=i,this.changeSelectedSpecs=a(this.changeSelectedSpecs,this),this.build=a(this.build,this),PubSub.publish("STATS.GET_OPTIONS",this.build),this.$node=$(o({})),this.$ram=$(".ram",this.$node),this.$cpu=$(".cpu",this.$node),this.$disk=$(".disk",this.$node),this.$specsHolder=$(".specs",this.$node),this.$specSelector=$(".spec-selector",this.$node),this.$el.append(this.$node)}return t.prototype.build=function(t){var e,i,s,r,n;for(this.serverSpecs=t,"default"===this.activeSpecsId&&(this.activeSpecsId=this.serverSpecs.data.meta["default"]),this.setSpecWidthAndHeightScale(this.serverSpecs.data),this.growIncrament=450/this.serverSpecs.data.meta.totalPlans,this.growTimeout=0,this.totalGraphs=0,n=this.serverSpecs.data.plans,i=0,s=n.length;s>i;i++)r=n[i],e=$(d({title:this.addBreaks(r.meta.title)})),this.$specsHolder.append(e),this.addPlanKind($(".graphs-holder",e),r);return this.$graphs=$(".graph-skin.spec",this.$node),this.top=$(".specs",this.$node).position().top},t.prototype.addPlanKind=function(t,e){var i,s,r,n,d,o,a;for(this.$el=t,d=e.specs,o=[],s=r=0,n=d.length;n>r;s=++r)a=d[s],i=s<e.specs.length?2:0,this.buildGraph(this.$el,a,i),o.push(this.growTimeout+=this.growIncrament);return o},t.prototype.refresh=function(t){var e,i,s,r,n,d,o,a,c,h,l,p;for(this.activeSpecsId=t,this.growTimeout=300,h=this.serverSpecs.data.plans,n=0,o=h.length;o>n;n++)for(c=h[n],l=c.specs,r=d=0,a=l.length;a>d;r=++d)p=l[r],s=$("#"+p.id+" .ram",this.node),e=$("#"+p.id+" .cpu",this.node),i=$("#"+p.id+" .disk",this.node),this.animateBlock(s,e,i,s.height(),e.height(),i.height(),this.growTimeout+=this.growIncrament),$("#"+p.id+" .ram, .cpu, .disk",this.$node).css({height:0});return setTimeout(function(t){return function(){var e;return t.activeSpecsId||(t.activeSpecsId=t.serverSpecs.data.meta["default"]),null!=(e=t.$graphs)&&e.removeClass("selected"),$("#"+t.activeSpecsId,t.$node).addClass("selected")}}(this),300)},t.prototype.animateBlock=function(t,e,i,s,r,n,d){return setTimeout(function(){return t.css({height:s}),e.css({height:r}),i.css({height:n})},this.growTimeout)},t.prototype.buildGraph=function(t,e,i){var s,r,d,o,a,c,h;return this.$el=t,this.totalGraphs++,a=this.checkForAlternateDisks(e),o=.25*Math.sqrt(e.DISK)*this.graphScale,r=1.2*Math.sqrt(e.CPU)*this.graphScale,h=.6*Math.sqrt(e.RAM)*this.graphScale,c=3,d={isEBS:a,graphWidth:this.graphWidth+i,graphHeight:o+c+r+c+h,topPadding:0,cellWidth:this.graphWidth,diskHeight:0,cpuHeight:0,ramHeight:0},d.id=e.id,s=$(n(d)),s.on("mouseover",function(t){return function(){return t.duplicate(s,e)}}(this)),s.on("mouseout",function(t){return function(){return t.destroyClonedGraph()}}(this)),s.on("click",function(t){return function(){return t.onGraphClick(e,s)}}(this)),this.$el.append(s),this.animateBlock($(".ram",s),$(".cpu",s),$(".disk",s),h,r,o,this.growTimeout),e.id===this.activeSpecsId?this.onGraphClick(e,s,!0):void 0},t.prototype.changeSelectedSpecs=function(t,e,i){return $(".val",this.$ram).text(t.toLocaleString()),$(".metric",this.$ram).text(" GB RAM"),$(".val",this.$cpu).text(e.toLocaleString()),$(".metric",this.$cpu).text(" CPU CORE"),$(".val",this.$disk).text(i.toLocaleString()),$(".metric",this.$disk).text(" GB DISK")},t.prototype.hideInstructions=function(){return this.$node.addClass("no-instructions")},t.prototype.onGraphClick=function(t,e,i){var s;if(null==i&&(i=!1),!i){if(this.activeSpecsId===t.id)return;this.onChangeCb(t.id),this.$clone.addClass("clicked")}return this.activeSpecsId=t.id,this.changeSelectedSpecs(t.RAM,t.CPU,t.DISK),null!=(s=this.$graphs)&&s.removeClass("selected"),e.addClass("selected")},t.prototype.duplicate=function(t,e){var i,s,n,d,o,a;return d=t.position().left,o=this.top,this.$clone=t.clone(),this.$clone.addClass("cloned-graph"),s={ram:e.RAM.toLocaleString()+" GB",cpu:e.CPU.toLocaleString()+" CORE",disk:e.DISK.toLocaleString()+" GB"},i=$(r(s)),a=8,this.keepHoverInbounds&&t.position().left>420?i.css({right:t.outerWidth()+a}):i.css({left:this.graphWidth+a}),this.$clone.append(i),this.$specSelector.append(this.$clone),n=$(".heighter",t).height(),t.hasClass("selected")&&this.$clone.addClass("clicked"),this.$clone.css({left:d+"px",bottom:61,position:"absolute",height:n,"pointer-events":"none","padding-right":"0",width:"-=1"})},t.prototype.destroyClonedGraph=function(){return $(".cloned-graph").remove()},t.prototype.setSpecWidthAndHeightScale=function(t){var e,i,s,r,n,d,o,a,c,h,l;for(l=0,s=550,i=130,o=8,h=2,c=0,c+=o*(t.plans.length-1),e=this.findBiggestSpec(t.plans),a=t.plans,r=0,n=a.length;n>r;r++)d=a[r],l+=d.specs.length,c+=h*d.specs.length;return this.graphWidth=(s-c)/l,this.graphScale=i/e},t.prototype.findBiggestSpec=function(t){var e,i,s,r,n,d,o,a;for(e=0,i=0,r=t.length;r>i;i++)for(d=t[i],o=d.specs,s=0,n=o.length;n>s;s++)a=o[s],e=this.getBiggest(e,a);return e},t.prototype.getBiggest=function(t,e){var i;return i=.25*Math.sqrt(e.DISK),i+=1.2*Math.sqrt(e.CPU),i+=.5*Math.sqrt(e.RAM),t>i?t:i},t.prototype.checkForAlternateDisks=function(t){return"number"!=typeof t.DISK?(t.DISK=1e3,!0):void 0},t.prototype.addBreaks=function(t){return t.replace(/\s/i,"<br/>")},t.prototype.destroy=function(){return this.$node.remove()},t}()},{"jade/spec-hover":5,"jade/spec-html":6,"jade/spec-kind":7,"jade/specs-selector":8}],3:[function(t,e,i){var s,r,n;n=t("components/specs-selector"),r=t("components/slider"),s=function(){function t(t,e,i,s,d){this.$el=t,this.activeServerId=e,this.specsSelector=new n(this.$el,i,this.activeServerId),null!=s&&(this.slider=new r(this.$el,s,d))}return t.prototype.hideInstructions=function(){return this.specsSelector.hideInstructions()},t.prototype.keepHoverInbounds=function(){return this.specsSelector.keepHoverInbounds=!0},t.prototype.destroy=function(){var t;return this.specSelector.destroy(),null!=(t=this.slider)&&t.destroy(),this.specSelector=null,this.slider=null},t.prototype.refresh=function(t){return this.activeServerId=t,this.specsSelector.refresh(this.activeServerId)},t.prototype.getDefaultPlan=function(){return this.specsSelector.serverSpecs.data.meta["default"]},t}(),window.nanobox||(window.nanobox={}),nanobox.ScaleMachine=s},{"components/slider":1,"components/specs-selector":2}],4:[function(t,e,i){e.exports=function(t){var e=[];return e.push('<div class="slider"><div class="totals">8</div><div class="drag-holder"><div class="tracks"><div class="track-bg"></div><div class="track"></div><div class="dragger"><div class="hit-area"><div class="handle"></div></div></div></div></div></div>'),e.join("")}},{}],5:[function(t,e,i){e.exports=function(t){var e,i=[],s=t||{};return function(t,s,r){i.push('<div class="spec-hover"><div class="ram"><div class="label">RAM</div><div class="size">'+jade.escape(null==(e=r)?"":e)+'</div></div><div class="cpu"><div class="label">CPU</div><div class="size">'+jade.escape(null==(e=t)?"":e)+'</div></div><div class="disk"><div class="label">DISK</div><div class="size">'+jade.escape(null==(e=s)?"":e)+"</div></div></div>")}.call(this,"cpu"in s?s.cpu:"undefined"!=typeof cpu?cpu:void 0,"disk"in s?s.disk:"undefined"!=typeof disk?disk:void 0,"ram"in s?s.ram:"undefined"!=typeof ram?ram:void 0),i.join("")}},{}],6:[function(t,e,i){e.exports=function(t){var e=[],i=t||{};return function(t,i,s,r,n,d,o,a){e.push("<div"+jade.attr("style","padding-right:"+n+"px",!0,!1)+jade.attr("id",""+d,!0,!1)+jade.attr("data-height",""+r,!0,!1)+' class="graph-skin spec"><div class="heighter"><div'+jade.attr("style","width:"+t+"px; height:"+a+"px;",!0,!1)+' class="ram"></div><div'+jade.attr("style","width:"+t+"px; height:"+i+"px;",!0,!1)+' class="cpu"></div><div'+jade.attr("style","width:"+t+"px; height:"+s+"px;",!0,!1)+jade.cls(["disk",o?"ebs":""],[null,!0])+"></div></div></div>")}.call(this,"cellWidth"in i?i.cellWidth:"undefined"!=typeof cellWidth?cellWidth:void 0,"cpuHeight"in i?i.cpuHeight:"undefined"!=typeof cpuHeight?cpuHeight:void 0,"diskHeight"in i?i.diskHeight:"undefined"!=typeof diskHeight?diskHeight:void 0,"graphHeight"in i?i.graphHeight:"undefined"!=typeof graphHeight?graphHeight:void 0,"graphWidth"in i?i.graphWidth:"undefined"!=typeof graphWidth?graphWidth:void 0,"id"in i?i.id:"undefined"!=typeof id?id:void 0,"isEBS"in i?i.isEBS:"undefined"!=typeof isEBS?isEBS:void 0,"ramHeight"in i?i.ramHeight:"undefined"!=typeof ramHeight?ramHeight:void 0),e.join("")}},{}],7:[function(t,e,i){e.exports=function(t){var e,i=[],s=t||{};return function(t){i.push('<div class="spec-kind"><div class="graphs-holder"></div><div class="title">'+(null==(e=t)?"":e)+"</div></div>")}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),i.join("")}},{}],8:[function(t,e,i){e.exports=function(t){var e=[],i=t||{};return function(t){e.push('<div class="specs-wrapper"><div class="instructions"> <div class="main">To scale this server, choose one of the following configurations:</div><div class="provider"> Digital Ocean Server Info</div></div><div class="spec-selector"> <div class="specs"><div style="display:none" class="key"><div class="ram-key">RAM</div><div class="cpu-key">CPU</div><div class="disk-key">DISK</div>'),t&&e.push('<div class="ebs-key">EBS</div>'),e.push('</div></div></div><div class="info"><div class="meta"> <div class="title">Server Specs</div></div><div class="vals"><div class="ram"><div class="val"></div><div class="metric"></div></div><div class="cpu"><div class="val"></div><div class="metric"></div></div><div class="disk"> <div class="val"></div><div class="metric"></div></div></div></div></div>')}.call(this,"isAWS"in i?i.isAWS:"undefined"!=typeof isAWS?isAWS:void 0),e.join("")}},{}]},{},[3]);