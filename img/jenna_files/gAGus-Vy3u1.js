if (self.CavalryLogger) { CavalryLogger.start_js(["SRkqh"]); }

__d("GamingDestinationRHCEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICK:"click",TAB_CLICK:"tab_click"})}),null);
__d("GamingDestinationRHCTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationRHCLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDefaultTab=function(a){this.$1.default_tab=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPageletID=function(a){this.$1.pagelet_id=a;return this};a.prototype.setRhcSection=function(a){this.$1.rhc_section=a;return this};a.prototype.setTabName=function(a){this.$1.tab_name=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={default_tab:!0,event:!0,pagelet_id:!0,rhc_section:!0,tab_name:!0,vc:!0};e.exports=a}),null);
__d("once",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=g(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b}function g(a){__p&&__p();var b=a,c;a=function(){if(b){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];c=b.apply(this,d);b=null}return c};return a}e.exports=a}),null);
__d("GamesUnifiedRHCLoggerContainer.react",["DOMContainer.react","GamingDestinationRHCEvents","GamingDestinationRHCTypedLogger","OnVisible.react","React","ShimButton.react","once"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=b("once")(function(){this.$2(b("GamingDestinationRHCEvents").IMPRESSION)}.bind(this)),this.$3=b("once")(function(){this.$2(b("GamingDestinationRHCEvents").CLICK)}.bind(this)),c}a.prototype.$2=function(event){new(b("GamingDestinationRHCTypedLogger"))().setEvent(event).setRhcSection(this.props.rhcSection).setDefaultTab(this.props.defaultTab).setTabName(this.props.tabName).setPageletID(this.props.pageletID).log()};a.prototype.render=function(){var a=b("React").createElement(b("ShimButton.react"),{onClick:this.$3},b("React").createElement(b("DOMContainer.react"),null,this.props.child));this.props.shouldLogImpression&&(a=b("React").createElement(b("OnVisible.react"),{buffer:1,onVisible:this.$1},a));return a};a.defaultProps={shouldLogImpression:!0};e.exports=a}),null);