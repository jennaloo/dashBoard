if (self.CavalryLogger) { CavalryLogger.start_js(["P00iU"]); }

__d("FantaTabsVisibleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FantaTabsVisibleLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAllowedRaisedTabs=function(a){this.$1.allowed_raised_tabs=a;return this};a.prototype.setOpenTabs=function(a){this.$1.open_tabs=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVisibleTabs=function(a){this.$1.visible_tabs=a;return this};c={allowed_raised_tabs:!0,open_tabs:!0,vc:!0,visible_tabs:!0};e.exports=a}),null);
__d("CanvasIFrameLogger",["reportData"],(function(a,b,c,d,e,f){c={log:function(c,d,e){c={tti_ms:c,app_id:d,is_early_flush:!!a._is_auto_flush,browser:e||"unknown"};b("reportData")("app_tti",{gt:c})}};e.exports=c}),null);