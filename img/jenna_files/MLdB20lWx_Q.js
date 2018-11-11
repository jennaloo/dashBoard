if (self.CavalryLogger) { CavalryLogger.start_js(["JlTMC"]); }

__d("IntegrityContextDialogBody",["DOM","Event","OnVisible","Parent","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){if(!c)return null;var d=null,e=b("Parent").byTag(c,"a");e&&b("DOM").contains(a,e)&&(d=e);return{targetTagname:c.tagName,targetClasses:c.getAttribute("class")||null,linkHref:d&&d.getAttribute("href")||null,linkAjaxify:d&&d.getAttribute("ajaxify")||null}}function a(a){a=a.modules;this.$1=a||[];this.$2=null;this.$3=null}a.prototype.$4=function(){this.$2&&this.$2.release(),this.$2=null};a.prototype.$5=function(){this.$3&&this.$3.release(),this.$3=null};a.prototype.destroy=function(){this.$4(),this.$5()};a.prototype.initModuleVPVHandler=function(a){this.$4();var c=new(b("SubscriptionsHandler"))();this.$1.forEach(function(d,f){var g=d.moduleRoot,h=d.moduleName;c.addSubscriptions(new(b("OnVisible"))(g,function(){a(h,f)},!1,0))});this.$2=c};a.prototype.initModuleClickHandler=function(a){this.$5();var c=new(b("SubscriptionsHandler"))();this.$1.forEach(function(d,f){var h=d.moduleRoot,i=d.moduleName;c.addSubscriptions(b("Event").listen(h,"click",function(b){a(i,f,g(h,b.target))}))});this.$3=c};a.prototype.getModuleNames=function(){return this.$1.map(function(a){return a.moduleName})};e.exports=a}),null);
__d("IntegrityContextClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextClientLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextClientLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextClientLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setElapsedMs=function(a){this.$1.elapsed_ms=a;return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setFeedTracking=function(a){this.$1.feed_tracking=a;return this};a.prototype.setInstanceID=function(a){this.$1.instance_id=a;return this};a.prototype.setIntegrityContextType=function(a){this.$1.integrity_context_type=a;return this};a.prototype.setModuleIndex=function(a){this.$1.module_index=a;return this};a.prototype.setModuleName=function(a){this.$1.module_name=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTriggerLoggerID=function(a){this.$1.trigger_logger_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={elapsed_ms:!0,entry_point:!0,event:!0,feed_tracking:!0,instance_id:!0,integrity_context_type:!0,module_index:!0,module_name:!0,time:!0,trigger_logger_id:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("IntegrityContextTriggerClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:IntegrityContextTriggerClientLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setFeedTracking=function(a){this.$1.feed_tracking=a;return this};a.prototype.setIntegrityContextType=function(a){this.$1.integrity_context_type=a;return this};a.prototype.setTriggerLoggerID=function(a){this.$1.trigger_logger_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={entry_point:!0,event:!0,feed_tracking:!0,integrity_context_type:!0,trigger_logger_id:!0,vc:!0};e.exports=a}),null);
__d("IntegrityContextTriggerLoggerManager",["Event","IntegrityContextTriggerClientTypedLogger","OnVisible","Run","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=Object.freeze({TRIGGER_VPV:"trigger_vpv",TRIGGER_HOVER:"trigger_hover",TRIGGER_CLICK:"trigger_click"});function i(a,c,d){__p&&__p();var e=a.triggerLinkElem,f=a.loggerID,g=a.serializedFTMsg,h=a.integrityContextType;a=a.entryPoint;this.$1=e;this.$2=f;this.$3=g;this.$4=h;this.$6=null;this.$5=a;this.$7=c;e=this.destroy.bind(this);f=new(b("SubscriptionsHandler"))();f.addSubscriptions(b("Run").onLeave(e),b("Run").onUnload(e));d||this.$9(f);this.$8=f}i.prototype.$10=function(){var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(new(b("OnVisible"))(this.$1,function(){a.release(),this.onFirstVisible()}.bind(this),!0,0));return a};i.prototype.$11=function(){var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(b("Event").listen(this.$1,"mouseenter",function(){a.release(),this.onFirstMouseEnter()}.bind(this)));return a};i.prototype.$9=function(a){var c=this.$10(),d=this.$11();a.addSubscriptions(b("Event").listen(this.$1,"click",function(){this.onClick()}.bind(this)),{remove:function(){c.release(),d.release()}})};i.prototype.destroy=function(){this.$8.release(),delete g[this.$2]};i.prototype.onClick=function(){this.$6=new Date().valueOf(),this.$12(h.TRIGGER_CLICK)};i.prototype.onFirstMouseEnter=function(){this.$12(h.TRIGGER_HOVER)};i.prototype.onFirstVisible=function(){this.$12(h.TRIGGER_VPV)};i.prototype.getLastTriggerTimeMS=function(){return this.$6};i.prototype.$12=function(event){var a=new(b("IntegrityContextTriggerClientTypedLogger"))().setEvent(event).setTriggerLoggerID(this.$2).setIntegrityContextType(this.$4).setEntryPoint(this.$5);this.$3&&a.setFeedTracking(this.$3);var c=this.$7&&this.$7();c&&a.updateExtraData(c);a.log()};function j(a){return g[a]||null}function k(a){a=j(a);a&&a.destroy()}function l(a,b,c){var d=a.loggerID;k(d);a=new i(a,b,c);g[d]=a;return a}function a(a,b){b===void 0&&(b=null);return l(a,b,!1)}function c(a){return l(a,null,!0)}function d(a){a=j(a);return a&&a.getLastTriggerTimeMS()||null}e.exports={initLogger:a,initLoggerWithCustomEventListeners:c,clearLogger:k,getLastTriggerTimeMS:d}}),null);
__d("IntegrityContextDialogFactory",["Arbiter","AsyncRequest","IntegrityContextClientTypedLogger","IntegrityContextDialogBody","IntegrityContextTriggerLoggerManager","Run","SubscriptionsHandler","URI","isFacebookURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.freeze({LOAD_END:"load_end",MODULE_VPV:"module_vpv",MODULE_CLICK:"module_click",DIALOG_EXIT:"dialog_exit"}),h="IntegrityContextDialogFactory/dialogExit";function i(a){var c=a.dialog,d=a.body,e=a.loggerConfig;a=babelHelpers.objectWithoutProperties(a,["dialog","body","loggerConfig"]);if(!c||!d||!e)return null;return!(d instanceof b("IntegrityContextDialogBody"))?null:babelHelpers["extends"]({dialog:c,body:d,loggerConfig:e},a)}j.factory=function(a){a=i(a);return!a?null:new j(a)};function j(a){__p&&__p();var c=a.dialog,d=a.body,e=a.loggerConfig;a=a.onHideAsyncURI;this.$3=c;this.$4=d;this.$5=!1;d=a&&new(b("URI"))(a);this.$6=d&&b("isFacebookURI")(d)?d:null;this.$7=e;this.$8=this.$10();this.$9=new Date().valueOf();this.$11(c);this.$12(g.LOAD_END)}j.prototype.$10=function(){var a=this.$7.triggerLoggerID;return!a?null:b("IntegrityContextTriggerLoggerManager").getLastTriggerTimeMS(a)};j.prototype.$11=function(a){var c=this.$13.bind(this),d=new(b("SubscriptionsHandler"))();d.addSubscriptions(a.subscribe("hide",this.$14.bind(this)),b("Run").onLeave(c),b("Run").onUnload(c));this.$1=d;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(a.subscribe("afterexpand",function(){this.$15(),this.$16()}.bind(this)));this.$2=c};j.prototype.$15=function(){var a=this.$4;a.initModuleVPVHandler(function(a,b){this.$17(g.MODULE_VPV,a,b)}.bind(this));a.initModuleClickHandler(function(a,b,c){this.$17(g.MODULE_CLICK,a,b,c)}.bind(this))};j.prototype.$16=function(){this.$2&&this.$2.release(),this.$2=null};j.prototype.destroy=function(){this.$16(),this.$1.release(),this.$4.destroy()};j.prototype.$18=function(){this.$12(g.DIALOG_EXIT),b("Arbiter").inform(h,{dialogRootElem:this.$3.getContentRoot()}),this.destroy()};j.prototype.$14=function(){this.$19(),this.$18()};j.prototype.$13=function(){this.$18()};j.prototype.$19=function(){if(this.$5||!this.$6)return;this.$5=!0;new(b("AsyncRequest"))(this.$6).send()};j.prototype.$20=function(event,a){__p&&__p();var c=this.$7,d=c.instanceID,e=c.triggerLoggerID,f=c.serializedFTMsg,h=c.contextType,i=c.entryPoint;c=c.baseDialogExtraData;d=new(b("IntegrityContextClientTypedLogger"))().setEvent(event).setInstanceID(d).setTriggerLoggerID(e).setIntegrityContextType(h).setEntryPoint(i);f&&d.setFeedTracking(f);c&&d.updateExtraData(c);a&&d.updateExtraData(a);if(event===g.LOAD_END){e=this.$8;!e||e>this.$9?d.setElapsedMs(null):d.setElapsedMs(this.$9-e)}else if(event===g.DIALOG_EXIT){h=new Date().valueOf()-this.$9;d.setElapsedMs(h)}return d};j.prototype.$12=function(event,a){this.$20(event,a).log()};j.prototype.$17=function(event,a,b,c){this.$20(event,c).setModuleName(a).setModuleIndex(b).log()};e.exports={factory:function(a){return j.factory(a)}}}),null);