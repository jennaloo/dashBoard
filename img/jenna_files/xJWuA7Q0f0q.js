if (self.CavalryLogger) { CavalryLogger.start_js(["knOZG"]); }

__d("M4ComposerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:M4ComposerLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:M4ComposerLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:M4ComposerLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={event:!0,vc:!0};e.exports=a}),null);
__d("M4ComposerLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK_SEND:"click_send",KEYBOARD_SEND:"keyboard_send",CLICK_EMOJI:"click_emoji",CLICK_PHOTO_UPLOADER:"click_photo_uploader",CLICK_FILE_UPLOADER:"click_file_uploader",CLICK_STICKER:"click_sticker",CLICK_GAME:"click_game",CLICK_GIF:"click_gif",CLICK_QUICK_CAM:"click_quick_cam",CLICK_REMINDER:"click_reminder",CLICK_POLL:"click_group_poll",CLICK_EVENT_PLAN:"click_event_plan",CLICK_CHAT_EXTENSION:"click_chat_extension"})}),null);