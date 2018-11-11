if (self.CavalryLogger) { CavalryLogger.start_js(["JM\/8X"]); }

__d("RoyalBluebarTransitions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INDETERMINATE:"Indeterminate",PULSE:"Pulse",SHIMMER:"Shimmer",NONE:"none",OFF:"off",PULSE_GIF_2S:"pulse_gif1",PULSE_GIF_2S_DARKER:"pulse_gif2",PULSE_GIF_3S:"pulse_gif3"})}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","RoyalBluebarTransitions","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!==b("RoyalBluebarTransitions").OFF&&k!==b("RoyalBluebarTransitions").NONE;function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){this._subscriptionHandler.release(),this._subscriptionHandler=null}.bind(this)));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(event){b("Arbiter").inform("BlueBar/homeClick",event)===!1&&event.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k===b("RoyalBluebarTransitions").INDETERMINATE){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("XBrowseLoggerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/browse/logger/",{data:{type:"HackType",required:!0}})}),null);
__d("BrowseLogger",["AsyncRequest","Banzai","Run","XBrowseLoggerController","mapObject"],(function(a,b,c,d,e,f){__p&&__p();var g="browse",h="browse_aggr",i=null,j={},k={},l=function(a){if(a==null)return"undefined";var b=a.tagName.toLowerCase(),c=a.id;a=a.className;c&&(b+="#"+c);a&&(b+="."+a);return b};function m(){i=null,j={},k={}}function n(a){return Object.assign(a,{clientSessionID:i})}function o(a){b("Banzai").post(g,n(a))}function p(a){a=b("XBrowseLoggerController").getURIBuilder().setHackType("data",n(a)).getURI();new(b("AsyncRequest"))().setURI(a).send()}function q(){if(i===null)return;k.aggregated=j;b("Banzai").post(h,n(k));m()}function r(a){j[a]=(j[a]||0)+1}function s(a){Object.assign(k,a)}b("Run").onUnload(q);a={newSession:function(){q(),i=Math.random().toString(),k.start_time||(k.start_time=Math.round(Date.now()/1e3))},logResultClick:function(a,c,d,e,f,g,h){g===void 0&&(g=null);h={action:"result_click",click_type:a.ct||"result",section:a.section||"unknown",id:a.id||-1,path:a.path||"unknown",rank:a.rank||0,referrer:a.referrer||"unknown",result_type:a.result_type||"unknown",session_id:a.session_id||0,query_time:a.query_time||null,abtest_version:a.abtest_version||"NONE",abtest_params:a.abtest_params||null,typeahead_sid:a.typeahead_sid||"",source_module_role:a.source_module_role||"",result_title:a.result_title||"unknown",result_href:a.result_href||"unknown",result_semantic:a.result_semantic||"unknown",type:a.experience_type||"unknown",click_action:d||null,sub_id:a.sub_id||null,owner_id:a.owner_id||null,browse_location:a.browse_location||"unknown",query_data:a.query_data||"unknown",is_headline:a.is_headline||!1,qid:c.qid||0,mf_story_key:c.mf_story_key||0,module:a.module||"NONE",view:a.view||null,clicked_href:f||null,bt_key:g};c.tn&&(h.tn=c.tn);a.cst&&(h.click_subtype=a.cst);r("result_click_"+h.click_type);s({path:h.path,referrer:h.referrer,result_type:h.result_type,session_id:h.session_id,abtest_version:h.abtest_version,abtest_params:h.abtest_params,typeahead_sid:h.typeahead_sid});g?p(h):o(h);!a.id&&a.browse_location!=="browse_location:mf_trending"&&!g&&o({action:"logging_error",click_action:d,click_type:h.click_type,attributes:JSON.stringify(a),element:b("mapObject")({srcElement:e.srcElement,target:e.target,toElement:e.toElement},l),event:{button:e.button,clientX:e.clientX,clientY:e.clientY,ctrlKey:e.ctrlKey,layerX:e.layerX,layerY:e.layerY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY,shiftKey:e.shiftKey,type:e.type,x:e.x,y:e.y}})},logControlsClick:function(a,b){var c={action:"controls_click",click_type:b,path:a.path||"unknown",referrer:a.referrer||"unknown",session_id:a.session_id||0,query_time:a.query_time,filter_name:a.name||"unknown",typeahead_sid:a.typeahead_sid||"",result_type:a.result_type||"unknown",type:a.experience_type||"unknown"};a.cst&&(c.click_subtype=a.cst);r("controls_click_"+b);s({path:c.path,referrer:c.referrer,session_id:c.session_id,typeahead_sid:c.typeahead_sid});o(c)},logResultHover:function(a,b,c){c===void 0&&(c=null);b={action:"result_hover",id:a.id||0,path:a.path||"unknown",rank:a.rank||null,result_type:a.result_type||"unknown",session_id:a.session_id||0,query_time:a.query_time||null,time_elapsed:b||null,typeahead_sid:a.typeahead_sid||0,type:a.experience_type||"unknown",module:a.module||"NONE",view:a.view||null,bt_key:c};r("result_hover");s({path:b.path,session_id:b.session_id,typeahead_sid:b.typeahead_sid});c?p(b):o(b)},logScroll:function(a,b,c,d){a={action:"scroll",encoded_query:a,fragments:b,position:c,session_id:d||0};o(a)},logNUXStep:function(a){a={action:"nux_step",step:a};o(a)},logDisambiguationImpression:function(a,b,c,d,e){d={action:"disambiguation_imp",ids:d,name:a,path:c,type:b,typeahead_sid:e};o(d)},logDisambiguationClick:function(a,b,c,d,e,f){e={action:"disambiguation_clk",id:e,index:d,name:a,path:c,type:b,typeahead_sid:f};o(e)},logDYMLinkClick:function(a,b,c,d){b={action:"dym_click",path:a.path||"unknown",referrer:a.referrer||"unknown",session_id:a.session_id||0,query_time:a.query_time,abtest_version:a.abtest_version||"NONE",abtest_params:a.abtest_params,typeahead_sid:a.typeahead_sid||"",type:a.experience_type||"unknown",click_action:c,sub_id:a.sub_id,owner_id:a.owner_id,browse_location:a.browse_location||"unknown",query_data:a.query_data||"unknown",module:a.module||"NONE",view:a.view,dym_confidence:a.dym_confidence||"NONE",dym_query:a.dym_query||"",dym_correction:a.dym_correction||"",dym_clicked:a.dym_clicked||""};o(b)}};e.exports=a}),null);
__d("BrowseClickLogger",["BanzaiODS","BrowseClientEventLogger","BrowseLogger","DOMQuery","Event","Parent","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){__p&&__p();var d=a.target,e=b("collectDataAttributes")(d,["bt","ft","gt"],["data-bt-key"]);e.bt&&e.bt.path&&(e.bt.path+=document.location.search);e.gt.tn=e.ft.tn;e.gt.click_type=e.bt.ct||"result";var f=b("Parent").byAttribute(d,"href");f=f!=null?f.href:null;e.gt.clicked_href=f;b("BrowseClientEventLogger").logClick(e);if(e.bt==null||e.ft==null)return;b("DOMQuery").scry(d,"^.recourse-link").length>0?c==="left_click"&&b("BrowseLogger").logDYMLinkClick(e.bt,e.ft,c,a):b("BrowseLogger").logResultClick(e.bt,e.ft,c,a,f,e.normal["data-bt-key"],e.gt.xt)}var h=!1;a={init:function(a){h?b("BanzaiODS").bumpEntityKey("search.www.browse_click_logger","duplicate_initialization"):h=!0,b("Event").listen(a,"mousedown",function(a){var b=a.button===2||a.which===3?"right_click":"left_click";a.shiftKey&&(b+="_shift");a.altKey&&(b+="_alt");(a.metaKey||a.ctrlKey)&&(b+="_ctrl");g(a,b)}.bind(this))},logClick:g};e.exports=a}),null);
__d("SearchResultPageNavigationPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:SearchResultPageNavigationPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:SearchResultPageNavigationPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SearchResultPageNavigationPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setBemDisplayTime=function(a){this.$1.bem_display_time=a;return this};a.prototype.setBrowseLayoutPageletDisplayTime=function(a){this.$1.browse_layout_pagelet_display_time=a;return this};a.prototype.setCaller=function(a){this.$1.caller=a;return this};a.prototype.setFilterType=function(a){this.$1.filter_type=a;return this};a.prototype.setIemDisplayTime=function(a){this.$1.iem_display_time=a;return this};a.prototype.setNavType=function(a){this.$1.nav_type=a;return this};a.prototype.setNavigationStartTime=function(a){this.$1.navigation_start_time=a;return this};a.prototype.setReferrer=function(a){this.$1.referrer=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={appid:!0,bem_display_time:!0,browse_layout_pagelet_display_time:!0,caller:!0,filter_type:!0,iem_display_time:!0,nav_type:!0,navigation_start_time:!0,referrer:!0,session_id:!0,vc:!0};e.exports=a}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","DocumentTitle","PageNavigationStageLogger","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","RoyalBluebarTransitions","URI","UserAgent_DEPRECATED","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("QuicklingConfig").version,i,j="";c=babelHelpers.inherits(a,b("AjaxPipeRequest"));g=c&&c.prototype;function a(a,c){"use strict";__p&&__p();var d={version:h};g.constructor.call(this,a,c,{quickling:d});this._processFirstResponse=function(a){var c=a.getPayload();k(c.title);window.scrollTo(0,0);a=a.getRequest();a&&document.body&&(document.body.className=c.body_class||"");b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};this._isQuickling=!0}a.prototype._preBootloadFirstResponse=function(a){"use strict";return!0};a.prototype._fireDomContentCallback=function(){"use strict";this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),g._fireDomContentCallback.call(this)};a.prototype._fireOnloadCallback=function(){"use strict";var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));g._fireOnloadCallback.call(this)};a.prototype.isPageActive=function(a){"use strict";return b("Quickling").isPageActive(a)};a.prototype._versionCheck=function(a){"use strict";__p&&__p();if(a.version==h){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("PageNavigationStageLogger").setCookieForNavigation(a.uri);b("PageNavigationStageLogger").setNote("quickling_version");b("PageNavigationStageLogger").updateCookie();b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(b("URI"))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};a.prototype.getSanitizedParameters=function(){"use strict";return["quickling"]};a.prototype._getAsyncRequestType=function(){"use strict";return b("QuicklingFetchStreamConfig").experimentName!==b("RoyalBluebarTransitions").OFF?"useFetchWithIframeFallback":"useIframeTransport"};function k(a){a=a||"Facebook",b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(j=a,i||(i=window.setInterval(function(){var a=j,c=b("DocumentTitle").get();a!=c&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a={addHandler:function(a){g.push(a)},augmentURI:function(a){var c=[],d=new(b("URI"))(a);g.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});g=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageNavigationStageLogger","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").sessionLength,h=new RegExp(b("QuicklingConfig").inactivePageRegex),i=0,j=!1,k={init:function(){if(j)return;j=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(m,1)})},isActive:function(){return j},isPageActive:function(a){__p&&__p();if(a==="#")return!1;a=new(b("URI"))(a);if(a.getDomain()&&a.getDomain()!=new(b("URI"))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(b("URI"))(unescape(c)).getDomain();if(c&&c!=new(b("URI"))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();b("isEmpty")(a)||(c+="?"+b("PHPQuerySerializer").serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!h.test(c)},getLoadCount:function(){return i},transitionHandler_DO_NOT_USE:m};function l(){i++;return i>=g}function m(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);if(l()){b("PageNavigationStageLogger").setNote("quickling_refresh");return!1}a=b("QuicklingAugmenter").augmentURI(a);if(!k.isPageActive(a)){b("PageNavigationStageLogger").setNote("quickling_inactive");return!1}b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";n(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function n(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=k;a.Quickling=k}),null);
__d("SearchResultPageElementID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BOOTSTRAP_ENTITY_MODULE:"bootstrap_entity_module",LAYOUT_PAGELET:"initial_browse_result",LAYOUT_PAGELET_DISPLAY_DEPENDENCY:"pagelet_loader_initial_browse_result",INDEPENDENT_MODULE:"browse:independent:modules:pagelet",INDEPENDENT_MODULE_DISPLAY_DEPENDENCY:"pagelet_loader_browse:independent:modules:pagelet",LHC_CONTAINER:"browse_lhc_container",LHC_TABS_PAGELET:"pagelet_lhc_tabs",LHC_FILTERS_PAGELET:"pagelet_lhc_filters",LHC_NAV_PAGELET:"pagelet_lhc_nav",LHC_PLACES_PAGELET:"pagelet_lhc_places",LHC_MP_PAGELET:"pagelet_lhc_marketplace",LHC_GALAHAD_EMPTY_PAGELET:"pagelet_lhc_galahad_empty",CONTENT_CONTAINER:"browse_result_area",RHC_CONTAINER:"browse_rhc_container",RHC_RELATED_SEARCHES_PAGELET:"pagelet_rhc_related_searches",RHC_TRENDING_PAGELET:"pagelet_rhc_trending",RHC_PLACES_PAGELET:"pagelet_rhc_places",RHC_PREVIOUS_SEARCH_MARKETPLACE_PAGELET:"pagelet_rhc_previous_search_marketplace"})}),null);
__d("SearchResultPageNavigation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NORMAL:"normal",INITIAL_QUICKLING:"initial_quickling",QUICKLING:"quickling",ASYNC:"async"})}),null);
__d("SearchResultPageNavigationPerfMetrics",["Arbiter","SearchResultPageElementID","SearchResultPageNavigation","SearchResultPageNavigationPerfTypedLogger","SubscriptionsHandler","URI","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/\/search\/.+/g,h=[b("SearchResultPageElementID").INDEPENDENT_MODULE_DISPLAY_DEPENDENCY,b("SearchResultPageElementID").LAYOUT_PAGELET_DISPLAY_DEPENDENCY],i=null,j=null,k=null;function l(a){__p&&__p();this.$1=null;this.$2=null;this.$3=!1;this.$4=0;i=this;k=new(b("SearchResultPageNavigationPerfTypedLogger"))();this.$4=this.$5();a=new(b("URI"))(window.location).getPath();a.match(g)&&this.$6();this.$7(a)}l.prototype.enable=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe("pre_page_transition",function(event,a){this.$3=j!=null,this.$4=b("performanceAbsoluteNow")(),j=null,k=new(b("SearchResultPageNavigationPerfTypedLogger"))(),this.$7(a.to.getPath())}.bind(this)))};l.prototype.disable=function(){this.$8(),this.$1!=null&&(this.$1.release(),this.$1=null)};l.prototype.$6=function(){var a=function(){var a=h[c];b("Arbiter").subscribeOnce(a+"_displayed",function(event,b){l.setElementDisplayEndTime(a)},"new")};for(var c=0;c<h.length;c++)a()};l.prototype.$9=function(){if(this.$2==null)return;this.$2.addSubscriptions(b("Arbiter").subscribe("BigPipe/init",function(event,a){var b=function(){var b=h[c];a.arbiter.subscribe(b+"_displayed",function(event,a){l.setElementDisplayEndTime(b)},"new")};for(var c=0;c<h.length;c++)b()},"new"))};l.prototype.$7=function(a){!a.match(g)?this.$8():this.$2==null&&(this.$2=new(b("SubscriptionsHandler"))(),this.$9())};l.prototype.$5=function(){var a=window.performance||window.msPerformance;return!a||!a.timing?0:a.timing.navigationStart};l.prototype.$8=function(){k=null,j=null,this.$3=!1,this.$4=0,this.$2!=null&&(this.$2.release(),this.$2=null)};l.prototype.logSessionNavigationStats=function(){if(j==null||k==null)return;j.nav_type==b("SearchResultPageNavigation").QUICKLING&&(this.$3||(j.nav_type=b("SearchResultPageNavigation").INITIAL_QUICKLING));k.setVC().setAppID(j.app_id).setReferrer(j.ref).setCaller(j.callsite).setFilterType(j.filter_type).setSessionID(j.session_id).setNavType(j.nav_type).setNavigationStartTime(Math.floor(this.$4)).log()};l.setElementDisplayEndTime=function(a){__p&&__p();if(i==null||k==null)return;var c=Math.floor(b("performanceAbsoluteNow")());switch(a){case b("SearchResultPageElementID").BOOTSTRAP_ENTITY_MODULE:k.setBemDisplayTime(c);break;case b("SearchResultPageElementID").INDEPENDENT_MODULE_DISPLAY_DEPENDENCY:k.setIemDisplayTime(c);break;case b("SearchResultPageElementID").LAYOUT_PAGELET_DISPLAY_DEPENDENCY:k.setBrowseLayoutPageletDisplayTime(c);i.logSessionNavigationStats();break;default:break}};l.setSessionStats=function(a){j=a};e.exports=l}),null);