!function t(e,i,s){function a(n,o){if(!i[n]){if(!e[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(r)return r(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var l=i[n]={exports:{}};e[n][0].call(l.exports,function(t){var i=e[n][1][t];return a(i?i:t)},l,l.exports,t,e,i,s)}return i[n].exports}for(var r="function"==typeof require&&require,n=0;n<s.length;n++)a(s[n]);return a}({1:[function(t,e,i){var s,a,r,n=function(t,e){return function(){return t.apply(e,arguments)}};r=t("jade/scale-manager"),a=t("components/scaler"),e.exports=s=function(){function t(t,e){this.$el=t,this.onInstanceTotalChange=n(this.onInstanceTotalChange,this),this.onSelectionChange=n(this.onSelectionChange,this),window.manager=this,this.activeServerId=e.activeServerId,this.onSpecsChangeCb=e.onSpecsChange,this.totalInstances=e.totalInstances,this.build(e.isCluster,e.isHorizontallyScalable)}return t.prototype.build=function(t,e){var i;return this.isCluster=t,this.isHorizontallyScalable=e,this.destroyExisting(),this.isRedundantData=this.isCluster&&!this.isHorizontallyScalable,this.totalInstances=1,this.$node=$(r({isRedundantDataCluster:this.isRedundantData})),this.$el.append(this.$node),i=$(".scale-holder",this.$node),this.memberData={primary:{}},this.isRedundantData&&(this.memberData.secondary={},this.memberData.monitor={}),this.isHorizontallyScalable?this.scaler=new a(i,"default",this.onSelectionChange,!0,1):(this.scaler=new a(i,"default",this.onSelectionChange),this.initMemberEvents()),this.scaler.hideInstructions(),this.scaler.keepHoverInbounds(),castShadows(this.$node)},t.prototype.destroyExisting=function(){var t,e;return null!=(t=this.scaler)&&t.destroy(),null!=(e=this.$node)?e.remove():void 0},t.prototype.initMemberEvents=function(){return this.$members=$(".member",this.$node),this.activeMember=$(".member.active",this.$node).attr("data-id"),this.$members.on("click",function(t){return function(e){var i;return i=$(e.currentTarget),t.activeMember=i.attr("data-id"),t.visuallyActivateMemberBtn(i),"secondary"!==t.activeMember||t.memberData.secondary.userHasSpecified||(t.memberData.secondary.planId=t.memberData.primary.planId),t.scaler.refresh(t.memberData[t.activeMember].planId)}}(this))},t.prototype.visuallyActivateMemberBtn=function(t){var e;return null!=(e=this.$members)&&e.removeClass("active"),null!=t?t.addClass("active"):void 0},t.prototype.onSelectionChange=function(t){return this.isHorizontallyScalable||!this.isCluster?(this.memberData.primary.planId=t,this.memberData.primary.planData=this.scaler.getPlanData(t)):(this.memberData[this.activeMember].planId=t,this.memberData[this.activeMember].planData=this.scaler.getPlanData(t),"primary"!==this.activeMember||this.memberData.secondary.userHasSpecified||(this.memberData.secondary.planId=this.memberData.primary.planId,this.memberData.secondary.planData=this.memberData.primary.planData),"secondary"===this.activeMember&&(this.memberData.secondary.userHasSpecified=!0)),this.onSpecsChangeCb(this.getSelectedPlans())},t.prototype.onInstanceTotalChange=function(t){this.totalInstances=t},t.prototype.getSelectedPlans=function(){var t,e,i;this.isCluster?this.isHorizontallyScalable||null!=this.memberData.secondary.planData||this.memberData.secondary.userHasSpecified||(this.memberData.secondary.planId=this.memberData.primary.planId,this.memberData.secondary.planData=this.memberData.primary.planData):(this.visuallyActivateMemberBtn($(".member[data-id='primary']")),delete this.memberData.secondary,delete this.memberData.monitor),i=this.memberData;for(t in i)e=i[t],null==e.planId&&(e.planId=this.scaler.getDefaultPlan(),e.planData=this.scaler.getPlanData(e.planId));return this.isHorizontallyScalable&&(this.memberData.primary.totalInstances=this.scaler.slider.total),this.memberData},t}()},{"components/scaler":2,"jade/scale-manager":6}],2:[function(t,e,i){var s,a,r,n,o=function(t,e){return function(){return t.apply(e,arguments)}};a=t("components/slider"),r=t("components/specs-selector"),n=t("jade/scaler"),e.exports=s=function(){function t(t,e,i,s,a){this.$el=t,this.activeServerId=e,this.onSpecsChange=i,this.isHorizScalable=s,this.totalInstances=a,this.destroy=o(this.destroy,this),this.build()}return t.prototype.build=function(){return this.$node=$(n({})),this.$el.append(this.$node),this.specsSelector=new r(this.$node,this.onSpecsChange,this.activeServerId),null!=this.isHorizScalable?this.slider=new a(this.$node,this.onSpecsChange,this.totalInstances):void 0},t.prototype.hideInstructions=function(){return this.specsSelector.hideInstructions()},t.prototype.keepHoverInbounds=function(){return this.specsSelector.keepHoverInbounds=!0},t.prototype.destroy=function(){var t,e;return null!=(t=this.specSelector)&&t.destroy(),null!=(e=this.slider)&&e.destroy(),this.specSelector=null,this.slider=null,this.$node.remove()},t.prototype.refresh=function(t,e){return this.activeServerId=t,null==e&&(e=!0),this.specsSelector.refresh(this.activeServerId,e)},t.prototype.getDefaultPlan=function(){return this.specsSelector.serverSpecs.meta["default"]},t.prototype.getUserSelectedPlan=function(){return this.specsSelector.activeSpecsId},t.prototype.getPlanData=function(t){return this.specsSelector.getPlanData(t)},t}()},{"components/slider":3,"components/specs-selector":4,"jade/scaler":7}],3:[function(t,e,i){var s,a;a=t("jade/slider"),e.exports=s=function(){function t(t,e,i){null==i&&(i=1),this.build(t),this.updateTotal(i),this.cb=e}return t.prototype.build=function(t){var e;return this.$node=$(a({})),t.append(this.$node),e=30,this.$body=$("body"),this.$dragger=$(".dragger",this.$node),this.$tracks=$(".tracks"),this.$track=$(".track"),this.$totals=$(".totals"),this.trackWidth=this.$tracks.width(),this.stepSize=this.trackWidth/e,this.$dragger.on("mousedown",function(t){return function(){return t.$body.on("mousemove",function(e){var i,s;return i=(e.pageX-t.$tracks.offset().left)/t.trackWidth,i>1?i=1:0>i&&(i=0),s=Math.round(t.trackWidth*i/t.stepSize),1>s&&(s=1),t.updateTotal(s)}),t.$body.on("mouseup",function(){return t.$body.off("mousemove"),t.$body.off("mouseup")})}}(this))},t.prototype.updateTotal=function(t){var e;if(t!==this.total)return this.total=t,e=t*this.stepSize,this.$dragger.css({left:e+"px"}),this.$track.css({width:e}),this.$totals.text(t),this.cb?this.cb(t):void 0},t.prototype.destroy=function(){return this.$dragger.off(),this.$node.remove()},t}()},{"jade/slider":8}],4:[function(t,e,i){var s,a,r,n,o,c=function(t,e){return function(){return t.apply(e,arguments)}};o=t("jade/specs-selector"),r=t("jade/spec-html"),n=t("jade/spec-kind"),a=t("jade/spec-hover"),e.exports=s=function(){function t(t,e,i){this.$el=t,this.onChangeCb=e,this.activeSpecsId=i,this.changeSelectedSpecs=c(this.changeSelectedSpecs,this),this.build=c(this.build,this),PubSub.publish("SCALE.GET_OPTIONS",this.build),this.$node=$(o({})),this.$ram=$(".ram",this.$node),this.$cpu=$(".cpu",this.$node),this.$disk=$(".disk",this.$node),this.$specsHolder=$(".specs",this.$node),this.$specSelector=$(".spec-selector",this.$node),this.$el.append(this.$node)}return t.prototype.build=function(t){var e,i,s,a,r;for(this.serverSpecs=t,console.log("building..."),this.convertMbToGb("RAM",this.serverSpecs),"default"===this.activeSpecsId&&(this.activeSpecsId=this.serverSpecs.meta["default"]),this.setSpecWidthAndHeightScale(this.serverSpecs),this.growIncrament=450/this.serverSpecs.meta.totalPlans,this.growTimeout=0,this.totalGraphs=0,r=this.serverSpecs.plans,i=0,s=r.length;s>i;i++)a=r[i],e=$(n({title:this.addBreaks(a.meta.title)})),this.$specsHolder.append(e),this.addPlanKind($(".graphs-holder",e),a);return this.$graphs=$(".graph-skin.spec",this.$node),this.top=$(".specs",this.$node).position().top},t.prototype.addPlanKind=function(t,e){var i,s,a,r,n,o,c;for(n=e.specs,o=[],s=a=0,r=n.length;r>a;s=++a)c=n[s],i=s<e.specs.length?2:0,this.buildGraph(t,c,i),o.push(this.growTimeout+=this.growIncrament);return o},t.prototype.buildGraph=function(t,e,i){var s,a,n,o,c,d,l;return this.totalGraphs++,c=this.checkForAlternateDisks(e),o=.25*Math.sqrt(e.DISK)*this.graphScale,a=1.2*Math.sqrt(e.CPU)*this.graphScale,l=.6*Math.sqrt(e.RAM)*this.graphScale,d=3,n={isEBS:c,graphWidth:this.graphWidth+i,graphHeight:o+d+a+d+l,topPadding:0,cellWidth:this.graphWidth,diskHeight:0,cpuHeight:0,ramHeight:0},n.id=e.id,s=$(r(n)),s.on("mouseover",function(t){return function(){return t.duplicate(s,e)}}(this)),s.on("mouseout",function(t){return function(){return t.destroyClonedGraph()}}(this)),s.on("click",function(t){return function(){return t.onGraphClick(e,s)}}(this)),t.append(s),$(".ram",s).attr("data-height",l),$(".cpu",s).attr("data-height",a),$(".disk",s).attr("data-height",o),this.animateBlock($(".ram",s),$(".cpu",s),$(".disk",s),l,a,o,this.growTimeout),e.id===this.activeSpecsId?this.onGraphClick(e,s,!0):void 0},t.prototype.animateBlock=function(t,e,i,s,a,r,n){return setTimeout(function(){return t.css({height:s}),e.css({height:a}),i.css({height:r})},this.growTimeout)},t.prototype.refresh=function(t,e){var i,s,a,r,n,o,c,d,l,h;for(this.activeSpecsId=t,null==e&&(e=!0),e?(this.growIncrament=350/this.serverSpecs.meta.totalPlans,this.growTimeout=250):(this.growTimeout=10,this.growIncrament=0),setTimeout(function(t){return function(){var e;return t.activeSpecsId||(t.activeSpecsId=t.serverSpecs.meta["default"]),null!=(e=t.$graphs)&&e.removeClass("selected"),$("#"+t.activeSpecsId,t.$node).addClass("selected")}}(this),this.growTimeout),d=this.serverSpecs.plans,l=[],n=0,o=d.length;o>n;n++)c=d[n],l.push(function(){var t,e,n,o;for(n=c.specs,o=[],r=t=0,e=n.length;e>t;r=++t)h=n[r],a=$("#"+h.id+" .ram",this.$node),i=$("#"+h.id+" .cpu",this.$node),s=$("#"+h.id+" .disk",this.$node),this.animateBlock(a,i,s,Number(a.attr("data-height")),Number(i.attr("data-height")),Number(s.attr("data-height")),this.growTimeout+=this.growIncrament),o.push($("#"+h.id+" .ram, .cpu, .disk",this.$node).css({height:0}));return o}.call(this));return l},t.prototype.changeSelectedSpecs=function(t,e,i){return $(".val",this.$ram).text(t.toLocaleString()),$(".metric",this.$ram).text(" GB RAM"),$(".val",this.$cpu).text(e.toLocaleString()),$(".metric",this.$cpu).text(" CPU CORE"),$(".val",this.$disk).text(i.toLocaleString()),$(".metric",this.$disk).text(" GB DISK")},t.prototype.hideInstructions=function(){return this.$node.addClass("no-instructions")},t.prototype.onGraphClick=function(t,e,i){var s;if(null==i&&(i=!1),!i){if(this.activeSpecsId===t.id)return;this.onChangeCb(t.id),this.$clone.addClass("clicked")}return this.activeSpecsId=t.id,this.changeSelectedSpecs(t.RAM,t.CPU,t.DISK),null!=(s=this.$graphs)&&s.removeClass("selected"),e.addClass("selected")},t.prototype.duplicate=function(t,e){var i,s,r,n,o,c,d,l,h;for(c=t.position().left,this.$clone=t.clone(),this.$clone.addClass("cloned-graph"),n={ram:e.RAM.toLocaleString()+" GB",cpu:e.CPU.toLocaleString()+" CORE",disk:e.DISK.toLocaleString()+" GB"},s=$(a(n)),h=8,this.keepHoverInbounds&&t.position().left>420?s.css({right:t.outerWidth()+h}):s.css({left:this.graphWidth+h}),this.$clone.append(s),this.$specSelector.append(this.$clone),t.hasClass("selected")&&this.$clone.addClass("clicked"),this.$clone.css({left:c+"px",bottom:47,position:"absolute","pointer-events":"none","padding-right":"0",width:"-=1"}),r=[$(".heighter .ram",this.$clone),$(".heighter .cpu",this.$clone),$(".heighter .disk",this.$clone)],l=[],o=0,d=r.length;d>o;o++)i=r[o],l.push(i.css({height:Number(i.attr("data-height"))}));return l},t.prototype.destroyClonedGraph=function(){return $(".cloned-graph").remove()},t.prototype.setSpecWidthAndHeightScale=function(t){var e,i,s,a,r,n,o,c,d,l,h;for(h=0,s=550,i=130,o=8,l=2,d=0,d+=o*(t.plans.length-1),e=this.findBiggestSpec(t.plans),c=t.plans,a=0,r=c.length;r>a;a++)n=c[a],h+=n.specs.length,d+=l*n.specs.length;return this.graphWidth=(s-d)/h,this.graphScale=i/e},t.prototype.findBiggestSpec=function(t){var e,i,s,a,r,n,o,c;for(e=0,i=0,a=t.length;a>i;i++)for(n=t[i],o=n.specs,s=0,r=o.length;r>s;s++)c=o[s],e=this.getBiggest(e,c);return e},t.prototype.getBiggest=function(t,e){var i;return i=.25*Math.sqrt(e.DISK),i+=1.2*Math.sqrt(e.CPU),i+=.5*Math.sqrt(e.RAM),t>i?t:i},t.prototype.checkForAlternateDisks=function(t){return"number"!=typeof t.DISK?(t.DISK=1e3,!0):void 0},t.prototype.convertMbToGb=function(t){var e,i,s,a,r,n,o;if(!this.serverSpecs.convertedMbToGb){for(this.serverSpecs.convertedMbToGb=!0,r=this.serverSpecs.plans,n=[],i=0,s=r.length;s>i;i++)a=r[i],n.push(function(){var i,s,r,n;for(r=a.specs,n=[],e=i=0,s=r.length;s>i;e=++i)o=r[e],n.push(o[t]=o[t]/1024);return n}());return n}},t.prototype.addBreaks=function(t){return t.replace(/\s/i,"<br/>")},t.prototype.getPlanData=function(t){var e,i,s,a,r,n,o,c,d;for(o=this.serverSpecs.plans,i=0,a=o.length;a>i;i++)for(n=o[i],c=n.specs,e=s=0,r=c.length;r>s;e=++s)if(d=c[e],d.id===t)return d},t.prototype.destroy=function(){return this.$node.remove()},t}()},{"jade/spec-hover":9,"jade/spec-html":10,"jade/spec-kind":11,"jade/specs-selector":12}],5:[function(t,e,i){var s,a,r,n;a=t("components/scale-manager"),n=t("components/specs-selector"),r=t("components/slider"),s=function(){function t(t,e){this.$el=t,this.scaleManager=new a(this.$el,e)}return t.prototype.destroy=function(){return this.scaleManager.destroy()},t.prototype.getUserSelectedPlan=function(){return this.scaleManager.getSelectedPlans()},t.prototype.hideInstructions=function(){return this.scaleManager.scaler.specsSelector.hideInstructions()},t.prototype.keepHoverInbounds=function(){return this.scaleManager.scaler.specsSelector.keepHoverInbounds=!0},t.prototype.getDefaultPlan=function(){return this.scaleManager.scaler.specsSelector.serverSpecs.meta["default"]},t.prototype.getPlanData=function(t){return this.scaleManager.scaler.specsSelector.getPlanData(t)},t.prototype.refresh=function(t,e){return this.scaleManager.build(t,e)},t}(),window.nanobox||(window.nanobox={}),nanobox.ScaleMachine=s},{"components/scale-manager":1,"components/slider":3,"components/specs-selector":4}],6:[function(t,e,i){e.exports=function(t){var e=[],i=t||{};return function(t){e.push('<div class="scale-manager"><div class="wrapper">'),t&&e.push('<div class="members"><div data-id="primary" class="member active"><img data-src="vertical-single" class="shadow-icon"/><div class="txt">Primary</div></div><div data-id="secondary" class="member"><img data-src="vertical-single" class="shadow-icon"/><div class="txt">Secondary</div></div><div data-id="monitor" class="member"><img data-src="monitor-instance" class="shadow-icon"/><div class="txt">Monitor</div></div></div>'),e.push('<div class="scale-holder"></div></div></div>')}.call(this,"isRedundantDataCluster"in i?i.isRedundantDataCluster:"undefined"!=typeof isRedundantDataCluster?isRedundantDataCluster:void 0),e.join("")}},{}],7:[function(t,e,i){e.exports=function(t){var e=[];return e.push('<div class="scaler"></div>'),e.join("")}},{}],8:[function(t,e,i){e.exports=function(t){var e=[];return e.push('<div class="slider"><div class="totals">8</div><div class="drag-holder"><div class="tracks"><div class="track-bg"></div><div class="track"></div><div class="dragger"><div class="hit-area"><div class="handle"></div></div></div></div></div></div>'),e.join("")}},{}],9:[function(t,e,i){e.exports=function(t){var e,i=[],s=t||{};return function(t,s,a){i.push('<div class="spec-hover"><div class="ram"><div class="label">RAM</div><div class="size">'+jade.escape(null==(e=a)?"":e)+'</div></div><div class="cpu"><div class="label">CPU</div><div class="size">'+jade.escape(null==(e=t)?"":e)+'</div></div><div class="disk"><div class="label">DISK</div><div class="size">'+jade.escape(null==(e=s)?"":e)+"</div></div></div>")}.call(this,"cpu"in s?s.cpu:"undefined"!=typeof cpu?cpu:void 0,"disk"in s?s.disk:"undefined"!=typeof disk?disk:void 0,"ram"in s?s.ram:"undefined"!=typeof ram?ram:void 0),i.join("")}},{}],10:[function(t,e,i){e.exports=function(t){var e=[],i=t||{};return function(t,i,s,a,r,n,o,c){e.push("<div"+jade.attr("style","padding-right:"+r+"px",!0,!1)+jade.attr("id",""+n,!0,!1)+jade.attr("data-height",""+a,!0,!1)+' class="graph-skin spec"><div class="heighter"><div'+jade.attr("style","width:"+t+"px; height:"+c+"px;",!0,!1)+' class="ram"></div><div'+jade.attr("style","width:"+t+"px; height:"+i+"px;",!0,!1)+' class="cpu"></div><div'+jade.attr("style","width:"+t+"px; height:"+s+"px;",!0,!1)+jade.cls(["disk",o?"ebs":""],[null,!0])+"></div></div></div>")}.call(this,"cellWidth"in i?i.cellWidth:"undefined"!=typeof cellWidth?cellWidth:void 0,"cpuHeight"in i?i.cpuHeight:"undefined"!=typeof cpuHeight?cpuHeight:void 0,"diskHeight"in i?i.diskHeight:"undefined"!=typeof diskHeight?diskHeight:void 0,"graphHeight"in i?i.graphHeight:"undefined"!=typeof graphHeight?graphHeight:void 0,"graphWidth"in i?i.graphWidth:"undefined"!=typeof graphWidth?graphWidth:void 0,"id"in i?i.id:"undefined"!=typeof id?id:void 0,"isEBS"in i?i.isEBS:"undefined"!=typeof isEBS?isEBS:void 0,"ramHeight"in i?i.ramHeight:"undefined"!=typeof ramHeight?ramHeight:void 0),e.join("")}},{}],11:[function(t,e,i){e.exports=function(t){var e,i=[],s=t||{};return function(t){i.push('<div class="spec-kind"><div class="graphs-holder"></div><div class="title">'+(null==(e=t)?"":e)+"</div></div>")}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),i.join("")}},{}],12:[function(t,e,i){e.exports=function(t){var e=[],i=t||{};return function(t){e.push('<div class="specs-wrapper"><div class="instructions"> <div class="main">To scale this server, choose one of the following configurations:</div><div class="provider"> Digital Ocean Server Info</div></div><div class="spec-selector"> <div class="specs"><div style="display:none" class="key"><div class="ram-key">RAM</div><div class="cpu-key">CPU</div><div class="disk-key">DISK</div>'),t&&e.push('<div class="ebs-key">EBS</div>'),e.push('</div></div></div><div class="info"><div class="meta"> <div class="title">Server Specs</div></div><div class="vals"><div class="ram"><div class="val"></div><div class="metric"></div></div><div class="cpu"><div class="val"></div><div class="metric"></div></div><div class="disk"> <div class="val"></div><div class="metric"></div></div></div></div></div>')}.call(this,"isAWS"in i?i.isAWS:"undefined"!=typeof isAWS?isAWS:void 0),e.join("")}},{}]},{},[5]);