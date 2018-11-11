if (self.CavalryLogger) { CavalryLogger.start_js(["LmovH"]); }

__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationURI",["BusinessURI.brands","URI","VideoPermalinkURI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();a={localize:function(a){try{a=b("BusinessURI.brands")(a)}catch(b){return a.toString()}var c=a.getSubdomain();return a.getUnqualifiedURI().getQualifiedURI().setSubdomain(c).toString()},snowliftable:function(a){if(!a)return!1;a=new(b("URI"))(a);var c=a.getQueryData();return b("isFacebookURI")(a)&&(b("VideoPermalinkURI").isValid(a)||"fbid"in c)},isVaultSetURI:function(a){return this._areEquals(a,"/ajax/vault/sharer_preview.php")},isAlbumDraftRecoveryDialogURI:function(a){return this._areEquals(a,"/ajax/photos/upload/overlay/")},isQuicksilverURI:function(a){return this._areEquals(a,"/games/quicksilver/spotlight/")},isDirectURI:function(a){return this._startsWith(a,"/direct/")},isIGAccountCreationURI:function(a){return this._areEquals(a,"/ads/growth/aymt/instagram/account-creation-dialog/")},_areEquals:function(a,c){if(!a)return!1;a=new(b("URI"))(a);return b("isFacebookURI")(a)&&a.getPath()===c},_startsWith:function(a,c){if(!a)return!1;a=new(b("URI"))(a);return b("isFacebookURI")(a)&&a.getPath().startsWith(c)}};e.exports=a}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){__p&&__p();if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(event,a){s.inform(event,{updates:a,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var c=babelHelpers["extends"]({},b,{payloadsource:p()});this.inform("update-notifications",c);this.inform("update-seen",c);this.inform("update-read",c);this.inform("update-hidden",c)}.bind(this))},getArbiter:function(){return n},inform:function(event,a){return n.inform(event,a)},subscribe:function(event,a){return n.subscribe(event,a)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1420844941369152"};c.getQueryID=function(){"use strict";return"318967338567215"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c,d){__p&&__p();var e=document.getElementById("notificationsCountValue"),f=null;e&&(f=e.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});e=b("NotificationTokens").untokenizeIDs(a);a=j(e);a.seen=!0;f&&(a.badgeCount=f);c&&(a.source_view=c);d&&(a.classification=d);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").createElement(b("TextWithEmoticons.react"),{text:a}));return b("React").createElement("span",{className:b("joinClasses")("fwb","_6btd")},a,d)}e.exports=a}),null);
__d("FacebookWebNotificationsSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"2382846945064526",queryID:"1138169679678964"})}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BaseGraphQLSubscription","CurrentUser","FacebookWebNotificationsSubscriptionWebGraphQLSubscription","SubscriptionsHandler","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i="WEB_DESKTOP",j=[],k=null;h=babelHelpers.inherits(l,b("BaseGraphQLSubscription"));h&&h.prototype;l.prototype.getTopic=function(a){"use strict";return"gqls/"+this.getSubscriptionCallName()+"/actor_id_"+a.actorID+"_environment_"+i};l.prototype.getQueryID=function(){"use strict";return b("FacebookWebNotificationsSubscriptionWebGraphQLSubscription").getDocID()};l.prototype.getQueryParameters=function(a){"use strict";return{input:JSON.stringify({client_subscription_id:b("uuid")(),environment:i}),is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}};l.prototype.getSubscriptionCallName=function(){"use strict";return"web_notification_receive_subscribe"};function l(){"use strict";h.apply(this,arguments)}function m(a){__p&&__p();if(a.__type==="lifecycle_event")return;a=a.web_notification_receive_subscribe;if(a==null)return;var b=a.aggregated_notification,c=a.notification,d=a.pinned_conversation,e=a.should_play_sound,f=a.should_show_beeper;j.forEach(function(a){switch(a.event){case"NEW_BEEPER":c!=null&&f===!0&&a.callback({notification:c,should_play_sound:!!e});break;case"NEW_NOTIFICATION":b!=null&&a.callback(b);break;case"NEW_PINNED_CONVERSATION":d!=null&&a.callback(d);break}})}e.exports={subscribe:function(a){__p&&__p();j.push(a);k===null&&(k=new(b("SubscriptionsHandler"))(),k.addSubscriptions(l.subscribe({actorID:b("CurrentUser").getID()},m)));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,3589);c=!0;j.splice(j.indexOf(a),1);j.length===0&&(k.release(),k=null)}}}}}),null);
__d("XUIBadge",["cx","invariant","CSS","DOM","formatNumber"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a){return parseInt(a,10)===a}function a(a){"use strict";this.target=a.target,this.count=a.count,this.maxcount=a.maxcount}a.prototype.getCount=function(){"use strict";return this.count};a.prototype.setCount=function(a){"use strict";i(a)||h(0,186),a>=0||h(0,3502),this.count=a,b("CSS").conditionClass(this.target,"hidden_elem",this.count===0),b("DOM").setContent(this.target,b("formatNumber").withMaxLimit(a,this.maxcount)),a>this.maxcount?b("CSS").addClass(this.target,"_5ugi"):b("CSS").removeClass(this.target,"_5ugi")};a.prototype.setLegacyContent=function(a){"use strict";typeof a==="string"?(b("CSS").conditionClass(this.target,"hidden_elem",a==0),b("DOM").setContent(this.target,a),b("CSS").removeClass(this.target,"_5ugi")):this.setCount(a)};a.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1)};e.exports=a}),null);
__d("NotifTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REACT_BLUE_BAR_JEWEL:"react_blue_bar_jewel",NON_REACT_BLUE_BAR_JEWEL:"non_react_blue_bar_jewel",REACT_NOTIF_LIST:"react_notif_list",NOTIF_LIST_ITEM:"notif_list_item",SEE_ALL_LIST:"see_all_list",REACT_NOTIF_JEWEL_FLYOUT:"react_notif_jewel_flyout",NON_REACT_NOTIF_JEWEL_FLYOUT:"non_react_notif_jewel_flyout",CHEVRON:"chevron",REACT_MARK_ALL_AS_READ_LINK:"react_mark_all_as_read_link",NON_REACT_MARK_ALL_AS_READ_LINK:"non_react_mark_all_as_read_link",NOTIFICATION_SOUND_SETTING:"notifiation_sound_setting",NOTIFICATION_SOUND_SETTING_SELECTOR:"notifiation_sound_setting_selector",MESSAGE_SOUND_SETTING:"message_sound_setting",MESSAGE_SOUND_SETTING_SELECTOR:"message_sound_setting_selector",CLOSE_FRIEND_ACTIVITY_SELECTOR:"close_friend_activity_selector",BIRTHDAY_SELECTOR:"birthday_selector",ON_THIS_DAY_SELECTOR:"on_this_day_selector",TAGS_SELECTOR:"tags_selector",LIVE_VIDEO_SELECTOR:"live_video_selector",REACT_BADGE_COUNT_CONTAINER:"react_badge_count_container",NON_REACT_BADGE_COUNT_CONTAINER:"non_react_badge_count_container",BEEPER_LIST:"beeper_list",NON_REACT_SETTING_LINK:"non_react_setting_link",REACT_SETTING_LINK:"react_setting_link",GEOGRAPHIC_SUBSCRIPTION_SELECTOR:"geographic_subscription_selector"})}),null);