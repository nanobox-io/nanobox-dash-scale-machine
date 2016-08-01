!function e(t,i,s){function r(n,o){if(!i[n]){if(!t[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(a)return a(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var l=i[n]={exports:{}};t[n][0].call(l.exports,function(e){var i=t[n][1][e];return r(i?i:e)},l,l.exports,e,t,i,s)}return i[n].exports}for(var a="function"==typeof require&&require,n=0;n<s.length;n++)r(s[n]);return r}({1:[function(e,t,i){var s,r,a,n=function(e,t){return function(){return e.apply(t,arguments)}};a=e("jade/scale-manager"),r=e("components/scaler"),t.exports=s=function(){function e(e,t){this.$el=e,this.onInstanceTotalChange=n(this.onInstanceTotalChange,this),this.onSelectionChange=n(this.onSelectionChange,this),this.activeServerIds=t.activeServerId,this.onSpecsChangeCb=t.onSpecsChange,this.totalInstances=t.totalInstances,this.build(t.isCluster,t.isHorizontallyScalable)}return e.prototype.build=function(e,t){var i;return this.isCluster=e,this.isHorizontallyScalable=t,this.destroyExisting(),this.isRedundantData=this.isCluster&&!this.isHorizontallyScalable,this.totalInstances=1,this.$node=$(a({isRedundantDataCluster:this.isRedundantData})),this.$el.append(this.$node),i=$(".scale-holder",this.$node),this.memberData={primary:{planId:this.activeServerIds.primary}},this.isRedundantData&&(this.memberData.secondary={planId:this.activeServerIds.secondary},this.memberData.monitor={planId:this.activeServerIds.monitor}),this.isHorizontallyScalable?this.scaler=new r(i,this.activeServerIds.primary,this.onSelectionChange,this.onInstanceTotalChange,1):(this.scaler=new r(i,this.activeServerIds.primary,this.onSelectionChange),this.initMemberEvents()),this.scaler.hideInstructions(),this.scaler.keepHoverInbounds(),castShadows(this.$node)},e.prototype.destroyExisting=function(){var e,t;return null!=(e=this.scaler)&&e.destroy(),null!=(t=this.$node)?t.remove():void 0},e.prototype.initMemberEvents=function(){return this.$members=$(".member",this.$node),this.activeMember=$(".member.active",this.$node).attr("data-id"),this.$members.on("click",function(e){return function(t){var i;return i=$(t.currentTarget),e.activeMember=i.attr("data-id"),e.visuallyActivateMemberBtn(i),"secondary"!==e.activeMember||e.memberData.secondary.userHasSpecified||(e.memberData.secondary.planId=e.memberData.primary.planId),e.scaler.refresh(e.memberData[e.activeMember].planId)}}(this))},e.prototype.visuallyActivateMemberBtn=function(e){var t;return null!=(t=this.$members)&&t.removeClass("active"),null!=e?e.addClass("active"):void 0},e.prototype.onSelectionChange=function(e){return this.isHorizontallyScalable||!this.isCluster?(this.memberData.primary.planId=e,this.memberData.primary.planData=this.scaler.getPlanData(e)):(this.memberData[this.activeMember].planId=e,this.memberData[this.activeMember].planData=this.scaler.getPlanData(e),"primary"!==this.activeMember||this.memberData.secondary.userHasSpecified||(this.memberData.secondary.planId=this.memberData.primary.planId,this.memberData.secondary.planData=this.memberData.primary.planData),"secondary"===this.activeMember&&(this.memberData.secondary.userHasSpecified=!0)),this.onSpecsChangeCb(this.getSelectedPlans())},e.prototype.onInstanceTotalChange=function(e){this.totalInstances=e},e.prototype.getSelectedPlans=function(){var e,t,i;this.isCluster?this.isHorizontallyScalable||null!=this.memberData.secondary.planData||this.memberData.secondary.userHasSpecified||(this.memberData.secondary.planId=this.memberData.primary.planId,this.memberData.secondary.planData=this.memberData.primary.planData):(this.visuallyActivateMemberBtn($(".member[data-id='primary']")),delete this.memberData.secondary,delete this.memberData.monitor),i=this.memberData;for(e in i)t=i[e],null==t.planId&&(t.planId=this.scaler.getDefaultPlan(),t.planData=this.scaler.getPlanData(t.planId));return this.isHorizontallyScalable&&(this.memberData.primary.totalInstances=this.scaler.slider.total),this.memberData},e}()},{"components/scaler":2,"jade/scale-manager":6}],2:[function(e,t,i){var s,r,a,n,o=function(e,t){return function(){return e.apply(t,arguments)}};r=e("components/slider"),a=e("components/specs-selector"),n=e("jade/scaler"),t.exports=s=function(){function e(e,t,i,s,r){this.$el=e,this.activeServerId=t,this.onSpecsChange=i,this.onInstanceTotalChange=s,this.totalInstances=r,this.destroy=o(this.destroy,this),this.isHorizScalable=null!=this.onInstanceTotalChange,this.build()}return e.prototype.build=function(){return this.$node=$(n({})),this.$el.append(this.$node),this.specsSelector=new a(this.$node,this.onSpecsChange,this.activeServerId),null!=this.isHorizScalable?this.slider=new r(this.$node,this.onInstanceTotalChange,this.totalInstances):void 0},e.prototype.hideInstructions=function(){return this.specsSelector.hideInstructions()},e.prototype.keepHoverInbounds=function(){return this.specsSelector.keepHoverInbounds=!0},e.prototype.destroy=function(){var e,t;return null!=(e=this.specSelector)&&e.destroy(),null!=(t=this.slider)&&t.destroy(),this.specSelector=null,this.slider=null,this.$node.remove()},e.prototype.refresh=function(e,t){return this.activeServerId=e,null==t&&(t=!0),this.specsSelector.refresh(this.activeServerId,t)},e.prototype.getDefaultPlan=function(){return this.specsSelector.serverSpecs.meta["default"]},e.prototype.getUserSelectedPlan=function(){return this.specsSelector.activeSpecsId},e.prototype.getPlanData=function(e){return this.specsSelector.getPlanData(e)},e}()},{"components/slider":3,"components/specs-selector":4,"jade/scaler":7}],3:[function(e,t,i){var s,r;r=e("jade/slider"),t.exports=s=function(){function e(e,t,i){null==i&&(i=1),this.build(e),this.updateTotal(i),this.cb=t}return e.prototype.build=function(e){var t;return this.$node=$(r({})),e.append(this.$node),t=30,this.$body=$("body"),this.$dragger=$(".dragger",this.$node),this.$tracks=$(".tracks"),this.$track=$(".track"),this.$totals=$(".totals"),this.trackWidth=this.$tracks.width(),this.stepSize=this.trackWidth/t,this.$dragger.on("mousedown",function(e){return function(){return e.$body.on("mousemove",function(t){var i,s;return i=(t.pageX-e.$tracks.offset().left)/e.trackWidth,i>1?i=1:0>i&&(i=0),s=Math.round(e.trackWidth*i/e.stepSize),1>s&&(s=1),e.updateTotal(s)}),e.$body.on("mouseup",function(){return e.$body.off("mousemove"),e.$body.off("mouseup")})}}(this))},e.prototype.updateTotal=function(e){var t;if(e!==this.total)return this.total=e,t=e*this.stepSize,this.$dragger.css({left:t+"px"}),this.$track.css({width:t}),this.$totals.text(e),this.cb?this.cb(e):void 0},e.prototype.destroy=function(){return this.$dragger.off(),this.$node.remove()},e}()},{"jade/slider":8}],4:[function(e,t,i){var s,r,a,n,o,c=function(e,t){return function(){return e.apply(t,arguments)}};o=e("jade/specs-selector"),a=e("jade/spec-html"),n=e("jade/spec-kind"),r=e("jade/spec-hover"),t.exports=s=function(){function e(e,t,i){this.$el=e,this.onChangeCb=t,this.activeSpecsId=i,this.changeSelectedSpecs=c(this.changeSelectedSpecs,this),this.build=c(this.build,this),PubSub.publish("SCALE.GET_OPTIONS",this.build),this.$node=$(o({})),this.$ram=$(".ram",this.$node),this.$cpu=$(".cpu",this.$node),this.$disk=$(".disk",this.$node),this.$specsHolder=$(".specs",this.$node),this.$specSelector=$(".spec-selector",this.$node),this.$el.append(this.$node)}return e.prototype.build=function(e){var t,i,s,r,a;if(this.serverSpecs=e,!this.isBuilt){for(this.isBuilt=!0,this.convertMbToGb("RAM",this.serverSpecs),"default"===this.activeSpecsId&&(this.activeSpecsId=this.serverSpecs.meta["default"]),this.setSpecWidthAndHeightScale(this.serverSpecs),this.growIncrament=450/this.serverSpecs.meta.totalPlans,this.growTimeout=0,this.totalGraphs=0,a=this.serverSpecs.plans,i=0,s=a.length;s>i;i++)r=a[i],t=$(n({title:this.addBreaks(r.meta.title)})),this.$specsHolder.append(t),this.addPlanKind($(".graphs-holder",t),r);return this.$graphs=$(".graph-skin.spec",this.$node),this.top=$(".specs",this.$node).position().top}},e.prototype.addPlanKind=function(e,t){var i,s,r,a,n,o,c;for(n=t.specs,o=[],s=r=0,a=n.length;a>r;s=++r)c=n[s],i=s<t.specs.length?2:0,this.buildGraph(e,c,i),o.push(this.growTimeout+=this.growIncrament);return o},e.prototype.buildGraph=function(e,t,i){var s,r,n,o,c,d,l;return this.totalGraphs++,c=this.checkForAlternateDisks(t),o=.25*Math.sqrt(t.DISK)*this.graphScale,r=1.2*Math.sqrt(t.CPU)*this.graphScale,l=.6*Math.sqrt(t.RAM)*this.graphScale,d=3,n={isEBS:c,graphWidth:this.graphWidth+i,graphHeight:o+d+r+d+l,topPadding:0,cellWidth:this.graphWidth,diskHeight:0,cpuHeight:0,ramHeight:0},n.id=t.id,s=$(a(n)),s.on("mouseover",function(e){return function(){return e.duplicate(s,t)}}(this)),s.on("mouseout",function(e){return function(){return e.destroyClonedGraph()}}(this)),s.on("click",function(e){return function(){return e.onGraphClick(t,s)}}(this)),e.append(s),$(".ram",s).attr("data-height",l),$(".cpu",s).attr("data-height",r),$(".disk",s).attr("data-height",o),this.animateBlock($(".ram",s),$(".cpu",s),$(".disk",s),l,r,o,this.growTimeout),t.id===this.activeSpecsId?this.onGraphClick(t,s,!0):void 0},e.prototype.animateBlock=function(e,t,i,s,r,a,n){return setTimeout(function(){return e.css({height:s}),t.css({height:r}),i.css({height:a})},this.growTimeout)},e.prototype.refresh=function(e,t){var i,s,r,a,n,o,c,d,l,h;for(this.activeSpecsId=e,null==t&&(t=!0),t?(this.growIncrament=350/this.serverSpecs.meta.totalPlans,this.growTimeout=250):(this.growTimeout=10,this.growIncrament=0),setTimeout(function(e){return function(){var t;return e.activeSpecsId||(e.activeSpecsId=e.serverSpecs.meta["default"]),null!=(t=e.$graphs)&&t.removeClass("selected"),$("#"+e.activeSpecsId,e.$node).addClass("selected")}}(this),this.growTimeout),d=this.serverSpecs.plans,l=[],n=0,o=d.length;o>n;n++)c=d[n],l.push(function(){var e,t,n,o;for(n=c.specs,o=[],a=e=0,t=n.length;t>e;a=++e)h=n[a],r=$("#"+h.id+" .ram",this.$node),i=$("#"+h.id+" .cpu",this.$node),s=$("#"+h.id+" .disk",this.$node),this.animateBlock(r,i,s,Number(r.attr("data-height")),Number(i.attr("data-height")),Number(s.attr("data-height")),this.growTimeout+=this.growIncrament),o.push($("#"+h.id+" .ram, .cpu, .disk",this.$node).css({height:0}));return o}.call(this));return l},e.prototype.changeSelectedSpecs=function(e,t,i){return $(".val",this.$ram).text(e.toLocaleString()),$(".metric",this.$ram).text(" GB RAM"),$(".val",this.$cpu).text(t.toLocaleString()),$(".metric",this.$cpu).text(" CPU CORE"),$(".val",this.$disk).text(i.toLocaleString()),$(".metric",this.$disk).text(" GB DISK")},e.prototype.hideInstructions=function(){return this.$node.addClass("no-instructions")},e.prototype.onGraphClick=function(e,t,i){var s;if(null==i&&(i=!1),!i){if(this.activeSpecsId===e.id)return;this.onChangeCb(e.id),this.$clone.addClass("clicked")}return this.activeSpecsId=e.id,this.changeSelectedSpecs(e.RAM,e.CPU,e.DISK),null!=(s=this.$graphs)&&s.removeClass("selected"),t.addClass("selected")},e.prototype.duplicate=function(e,t){var i,s,a,n,o,c,d,l,h,p;for(d=e.position().left,this.$clone=e.clone(),this.$clone.addClass("cloned-graph"),n={ram:t.RAM.toLocaleString()+" GB",cpu:t.CPU.toLocaleString()+" CORE",disk:t.DISK.toLocaleString()+" GB",priceMo:t.dollarsPerMo,priceHr:t.dollarsPerHr,transfer:t.transfer,provider:this.serverSpecs.meta.title},s=$(r(n)),p=8,this.keepHoverInbounds&&e.position().left>420?s.css({right:e.outerWidth()+p}):s.css({left:this.graphWidth+p}),this.$clone.append(s),this.$specSelector.append(this.$clone),o=Number(e.attr("data-height")),e.hasClass("selected")&&this.$clone.addClass("clicked"),this.$clone.css({"padding-top":this.canvasHeight-Number(e.attr("data-height")),left:d+"px",top:"-10px",position:"absolute","pointer-events":"none","padding-right":"0",width:"-=1"}),a=[$(".heighter .ram",this.$clone),$(".heighter .cpu",this.$clone),$(".heighter .disk",this.$clone)],h=[],c=0,l=a.length;l>c;c++)i=a[c],h.push(i.css({height:Number(i.attr("data-height"))}));return h},e.prototype.destroyClonedGraph=function(){return $(".cloned-graph").remove()},e.prototype.setSpecWidthAndHeightScale=function(e){var t,i,s,r,a,n,o,c,d,l;for(l=0,i=550,n=8,d=2,this.canvasHeight=150+d,c=0,c+=n*(e.plans.length-1),t=this.findBiggestSpec(e.plans),o=e.plans,s=0,r=o.length;r>s;s++)a=o[s],l+=a.specs.length,c+=d*a.specs.length;return this.graphWidth=(i-c)/l,this.graphScale=this.canvasHeight/(t+d)},e.prototype.findBiggestSpec=function(e){var t,i,s,r,a,n,o,c;for(t=0,i=0,r=e.length;r>i;i++)for(n=e[i],o=n.specs,s=0,a=o.length;a>s;s++)c=o[s],t=this.getBiggest(t,c);return t},e.prototype.getBiggest=function(e,t){var i;return i=.25*Math.sqrt(t.DISK),i+=1.2*Math.sqrt(t.CPU),i+=.5*Math.sqrt(t.RAM),e>i?e:i},e.prototype.checkForAlternateDisks=function(e){return"number"!=typeof e.DISK?(e.DISK=1e3,!0):void 0},e.prototype.convertMbToGb=function(e){var t,i,s,r,a,n,o;if(!this.serverSpecs.convertedMbToGb){for(this.serverSpecs.convertedMbToGb=!0,a=this.serverSpecs.plans,n=[],i=0,s=a.length;s>i;i++)r=a[i],n.push(function(){var i,s,a,n;for(a=r.specs,n=[],t=i=0,s=a.length;s>i;t=++i)o=a[t],n.push(o[e]=o[e]/1024);return n}());return n}},e.prototype.addBreaks=function(e){return e.replace(/\s/i,"<br/>")},e.prototype.getPlanData=function(e){var t,i,s,r,a,n,o,c,d;for(o=this.serverSpecs.plans,i=0,r=o.length;r>i;i++)for(n=o[i],c=n.specs,t=s=0,a=c.length;a>s;t=++s)if(d=c[t],d.id===e)return d},e.prototype.destroy=function(){return this.$node.remove()},e}()},{"jade/spec-hover":9,"jade/spec-html":10,"jade/spec-kind":11,"jade/specs-selector":12}],5:[function(e,t,i){var s,r,a,n;r=e("components/scale-manager"),n=e("components/specs-selector"),a=e("components/slider"),s=function(){function e(e,t){this.$el=e,this.scaleManager=new r(this.$el,t)}return e.prototype.destroy=function(){return this.scaleManager.destroy()},e.prototype.getUserSelectedPlan=function(){return this.scaleManager.getSelectedPlans()},e.prototype.hideInstructions=function(){return this.scaleManager.scaler.specsSelector.hideInstructions()},e.prototype.keepHoverInbounds=function(){return this.scaleManager.scaler.specsSelector.keepHoverInbounds=!0},e.prototype.getDefaultPlan=function(){return this.scaleManager.scaler.specsSelector.serverSpecs.meta["default"]},e.prototype.getPlanData=function(e){return this.scaleManager.scaler.specsSelector.getPlanData(e)},e.prototype.refresh=function(e,t){return this.scaleManager.build(e,t)},e}(),window.nanobox||(window.nanobox={}),nanobox.ScaleMachine=s},{"components/scale-manager":1,"components/slider":3,"components/specs-selector":4}],6:[function(e,t,i){t.exports=function(e){var t=[],i=e||{};return function(e){t.push('<div class="scale-manager"><div class="wrapper">'),e&&t.push('<div class="members"><div data-id="primary" class="member active"><img data-src="vertical-single" class="shadow-icon"/><div class="txt">Primary</div></div><div data-id="secondary" class="member"><img data-src="vertical-single" class="shadow-icon"/><div class="txt">Secondary</div></div><div data-id="monitor" class="member"><img data-src="monitor-instance" class="shadow-icon"/><div class="txt">Monitor</div></div></div>'),t.push('<div class="scale-holder"></div></div></div>')}.call(this,"isRedundantDataCluster"in i?i.isRedundantDataCluster:"undefined"!=typeof isRedundantDataCluster?isRedundantDataCluster:void 0),t.join("")}},{}],7:[function(e,t,i){t.exports=function(e){var t=[];return t.push('<div class="scaler"></div>'),t.join("")}},{}],8:[function(e,t,i){t.exports=function(e){var t=[];return t.push('<div class="slider"><div class="totals">8</div><div class="drag-holder"><div class="tracks"><div class="track-bg"></div><div class="track"></div><div class="dragger"><div class="hit-area"><div class="handle"></div></div></div></div></div></div>'),t.join("")}},{}],9:[function(e,t,i){t.exports=function(e){var t,i=[],s=e||{};return function(e,s,r,a,n,o){i.push('<div class="spec-hover"><div class="provider">'+jade.escape(null==(t=a)?"":t)+' Specs</div><div class="specs"><div class="ram"><div class="label">RAM</div><div class="size">'+jade.escape(null==(t=n)?"":t)+'</div></div><div class="cpu"><div class="label">CPU</div><div class="size">'+jade.escape(null==(t=e)?"":t)+'</div></div><div class="disk"><div class="label">DISK</div><div class="size">'+jade.escape(null==(t=s)?"":t)+'</div></div></div><div class="transfer">'+jade.escape(null==(t=o)?"":t)+'TB Transfer</div><div class="price">'+jade.escape(null==(t=r)?"":t)+"</div></div>")}.call(this,"cpu"in s?s.cpu:"undefined"!=typeof cpu?cpu:void 0,"disk"in s?s.disk:"undefined"!=typeof disk?disk:void 0,"priceMo"in s?s.priceMo:"undefined"!=typeof priceMo?priceMo:void 0,"provider"in s?s.provider:"undefined"!=typeof provider?provider:void 0,"ram"in s?s.ram:"undefined"!=typeof ram?ram:void 0,"transfer"in s?s.transfer:"undefined"!=typeof transfer?transfer:void 0),i.join("")}},{}],10:[function(e,t,i){t.exports=function(e){var t=[],i=e||{};return function(e,i,s,r,a,n,o,c){t.push("<div"+jade.attr("style","padding-right:"+a+"px",!0,!1)+jade.attr("id",""+n,!0,!1)+jade.attr("data-height",""+r,!0,!1)+' class="graph-skin spec"><div class="heighter"><div'+jade.attr("style","width:"+e+"px; height:"+c+"px;",!0,!1)+' class="ram"></div><div'+jade.attr("style","width:"+e+"px; height:"+i+"px;",!0,!1)+' class="cpu"></div><div'+jade.attr("style","width:"+e+"px; height:"+s+"px;",!0,!1)+jade.cls(["disk",o?"ebs":""],[null,!0])+"></div></div></div>")}.call(this,"cellWidth"in i?i.cellWidth:"undefined"!=typeof cellWidth?cellWidth:void 0,"cpuHeight"in i?i.cpuHeight:"undefined"!=typeof cpuHeight?cpuHeight:void 0,"diskHeight"in i?i.diskHeight:"undefined"!=typeof diskHeight?diskHeight:void 0,"graphHeight"in i?i.graphHeight:"undefined"!=typeof graphHeight?graphHeight:void 0,"graphWidth"in i?i.graphWidth:"undefined"!=typeof graphWidth?graphWidth:void 0,"id"in i?i.id:"undefined"!=typeof id?id:void 0,"isEBS"in i?i.isEBS:"undefined"!=typeof isEBS?isEBS:void 0,"ramHeight"in i?i.ramHeight:"undefined"!=typeof ramHeight?ramHeight:void 0),t.join("")}},{}],11:[function(e,t,i){t.exports=function(e){var t,i=[],s=e||{};return function(e){i.push('<div class="spec-kind"><div class="graphs-holder"></div><div class="title">'+(null==(t=e)?"":t)+"</div></div>")}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),i.join("")}},{}],12:[function(e,t,i){t.exports=function(e){var t=[],i=e||{};return function(e){t.push('<div class="specs-wrapper"><div class="instructions"> <div class="main">To scale this server, choose one of the following configurations:</div><div class="provider"> Digital Ocean Server Info</div></div><div class="spec-selector"> <div class="specs"><div style="display:none" class="key"><div class="ram-key">RAM</div><div class="cpu-key">CPU</div><div class="disk-key">DISK</div>'),e&&t.push('<div class="ebs-key">EBS</div>'),t.push('</div></div></div><div class="info"><div class="meta"> <div class="title">Server Specs</div></div><div class="vals"><div class="ram"><div class="val"></div><div class="metric"></div></div><div class="cpu"><div class="val"></div><div class="metric"></div></div><div class="disk"> <div class="val"></div><div class="metric"></div></div></div></div></div>')}.call(this,"isAWS"in i?i.isAWS:"undefined"!=typeof isAWS?isAWS:void 0),t.join("")}},{}]},{},[5]);