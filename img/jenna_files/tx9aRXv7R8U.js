if (self.CavalryLogger) { CavalryLogger.start_js(["JCrk4"]); }

__d("BizNotificationTabCountUtils",["BizChromeNotifTab","BizNotificationListConst"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP,h=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={incrementCountByTab:function(a,c){var d=Object.assign({},c);Object.keys(a).forEach(function(c){var e=h[c]||h[g[c]];c=a[c];e!=null&&(d[e]+=c,d[b("BizChromeNotifTab").ALL]+=c)});return d},clearTabCount:function(a,c,d){var e=Object.assign({},c),f=Object.assign({},d);a===b("BizChromeNotifTab").ALL?Object.keys(c).forEach(function(a){e[a]=0,f[a]=!1}):(e[b("BizChromeNotifTab").ALL]-=e[a],e[a]=0,f[a]=!1);return{updatedUnseenByTab:e,updatedTabCountToBeCleared:f}}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsReducerPlugin",["BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_MAP;a={reduce:function(a,c){var d=c.initialClassificationsForUnseenNotifs,e=a.unseenNotifsClassificationsMap,f=a.unseenNotifsCountByTab;f=b("BizNotificationTabCountUtils").incrementCountByTab(c.initialUnseenNotifsCountByClassification,a.unseenNotifsCountByTab);Object.keys(d).forEach(function(a){var b=d[a];b.forEach(function(b){e[b]=g[a]})});return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:e,unseenNotifsCountByTab:f})}};e.exports=a}),null);
__d("BizNotificationInitUnseenNotifsAction",["Laminar","BizNotificationInitUnseenNotifsReducerPlugin","BizNotificationTabDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationInitUnseenNotifsReducerPlugin"),b("BizNotificationTabDataProvider"),{})]},"BizNotificationInitUnseenNotifsActionPlugin");e.exports=a}),null);
__d("IndeterminateNotificationCounter",["DocumentTitle"],(function(a,b,c,d,e,f){"use strict";var g="(*) ",h={init:function(a){a>0&&h.addBadge()},addBadge:function(){var a=b("DocumentTitle").get();b("DocumentTitle").set(g+a,!0)},removeBadge:function(){var a=b("DocumentTitle").get();b("DocumentTitle").set(a,!0)}};e.exports=h}),null);
__d("BizNotificationBadgeUtils",["cx","BizNotificationConfig","IndeterminateNotificationCounter","NotifJewelLoggerJewelRef","NotifJewelLoggerRef","joinClasses","reportData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=99;function i(a){if(!a)return;a=a.getAttribute("class");a!=null&&a.includes("_7257")&&b("reportData")("badge_appeared",{gt:{jewel:b("NotifJewelLoggerJewelRef").NOTIFICATIONS,ref:b("NotifJewelLoggerRef").WWW_ADS_JEWEL}})}var j={increaseBadgeCount:function(a,b){if(a!=null&&b){b=a.textContent;if(!b.endsWith("+")){b=Number(a.textContent)+1;a.textContent=b<=h?b+"":h+"+"}}return a},decreaseBadgeCount:function(a,b){a!=null&&b&&(a.textContent="0");return a},setBadgeElementToBeActive:function(a){var c=b("BizNotificationConfig").hasBadgeExp,d=document.getElementById("NotifIndeterminateBadge"),e=(c?"":"_7255")+(c?" _76t_":"");e=a?b("joinClasses")("_7256",e):b("joinClasses")("_7257",e);a?(d=j.increaseBadgeCount(d,c),b("IndeterminateNotificationCounter").addBadge(),i(d)):(d=j.decreaseBadgeCount(d,c),b("IndeterminateNotificationCounter").removeBadge());d&&d.setAttribute("class",e)}};e.exports=j}),null);
__d("BizNotificationReceivedNotifReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_MACRO_CATEGORY_MAP,h=b("BizNotificationListConst").EMPTY_UNSEEN_NOTIFS_COUNT_BY_CLASSIFICATION,i=b("BizNotificationListConst").ORDERED_CLASSIFICATIONS,j=function(a,b){if(b==null)return!1;b=b.macro_categories_excluded_from_badging;return!b.includes(g[a])};a={reduce:function(a,c,d){__p&&__p();var e=d.prefsData;d=c.notifs;var f=a.unseenNotifsClassificationsMap,g=Object.assign({},h);d.forEach(function(a){var c=a.classifications;if(c==null)return;c.forEach(function(c){i.includes(c)&&(g[c]+=1,f[a.alert_id]=c,j(c,e.prefs)&&b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!0))})});c=b("BizNotificationTabCountUtils").incrementCountByTab(g,a.unseenNotifsCountByTab);return babelHelpers["extends"]({},a,{unseenNotifsClassificationsMap:f,unseenNotifsCountByTab:c})}};e.exports=a}),null);
__d("BizNotificationsPrefsProviderPlugin",[],(function(a,b,c,d,e,f){"use strict";a={initialState:{prefs:null}};e.exports=a}),null);
__d("BizNotificationsPrefsProvider",["BizNotificationsPrefsProviderPlugin","Laminar"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("BizNotificationsPrefsProviderPlugin"),"BizNotificationsPrefsProviderPlugin")}),null);
__d("BizNotificationReceivedNotifAction",["Laminar","BizNotificationReceivedNotifReducerPlugin","BizNotificationTabDataProvider","BizNotificationsPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationReceivedNotifReducerPlugin"),b("BizNotificationTabDataProvider"),{prefsData:b("BizNotificationsPrefsProvider")})]},"BizNotificationReceivedNotifActionPlugin");e.exports=a}),null);
__d("BizNotificationSeenStateUpdateReducerPlugin",["BizChromeNotifTab","BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").CLASSIFICATION_TO_TAB_MAP;a={reduce:function(a,c){__p&&__p();b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);if(!a.isJewelOpen){var d=b("BizNotificationTabCountUtils").clearTabCount(b("BizChromeNotifTab").ALL,a.unseenNotifsCountByTab,a.tabCountToBeCleared),e=d.updatedUnseenByTab;d=d.updatedTabCountToBeCleared;return babelHelpers["extends"]({},a,{unseenNotifsCountByTab:e,tabCountToBeCleared:d})}else{var f=a.tabCountToBeCleared;Object.keys(c.seenState).forEach(function(b){b=a.unseenNotifsClassificationsMap[b];if(b!=null){b=g[b];f[b]=!0}});return babelHelpers["extends"]({},a,{tabCountToBeCleared:f})}}};e.exports=a}),null);
__d("BizNotificationSeenStateUpdateAction",["Laminar","BizNotificationSeenStateUpdateReducerPlugin","BizNotificationTabDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSeenStateUpdateReducerPlugin"),b("BizNotificationTabDataProvider"),{})]},"BizNotificationSeenStateUpdateActionPlugin");e.exports=a}),null);
__d("BizNotificationSetJewelOpenReducerPlugin",["BizNotificationBadgeUtils","BizNotificationListConst","BizNotificationTabCountUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BizNotificationListConst").TAB_MAP;a={reduce:function(a,c){__p&&__p();c=c.isJewelOpen;var d=a.tabCountToBeCleared,e=a.unseenNotifsCountByTab,f=a.tabCountToBeCleared;b("BizNotificationBadgeUtils").setBadgeElementToBeActive(!1);c||Object.keys(d).forEach(function(a){if(d[a]){a=b("BizNotificationTabCountUtils").clearTabCount(g[a],e,f);e=a.updatedUnseenByTab;f=a.updatedTabCountToBeCleared}});return babelHelpers["extends"]({},a,{isJewelOpen:c,unseenNotifsCountByTab:e,tabCountToBeCleared:f})}};e.exports=a}),null);
__d("BizNotificationSetJewelOpenAction",["Laminar","BizNotificationSetJewelOpenReducerPlugin","BizNotificationTabDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationSetJewelOpenReducerPlugin"),b("BizNotificationTabDataProvider"),{})]},"BizNotificationSetJewelOpenActionPlugin");e.exports=a}),null);
__d("BizNotificationsSetPrefsReducerPlugin",[],(function(a,b,c,d,e,f){"use strict";a={reduce:function(a,b){return babelHelpers["extends"]({},a,{prefs:b.prefs})}};e.exports=a}),null);
__d("BizNotificationsSetPrefsAction",["Laminar","BizNotificationsSetPrefsReducerPlugin","BizNotificationsPrefsProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("BizNotificationsSetPrefsReducerPlugin"),b("BizNotificationsPrefsProvider"),{})]},"BIZ_NOTIFICATIONS.SET_PREFS");e.exports=a}),null);
__d("BizNotificationsTabsUtils",["AdsNuxTourAbandonedDataAction","Arbiter","BizNotificationInitUnseenNotifsAction","BizNotificationReceivedNotifAction","BizNotificationSeenStateUpdateAction","BizNotificationSetJewelOpenAction","NotificationConstants","NotificationUpdates"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={initTabs:function(a,c){b("BizNotificationInitUnseenNotifsAction").dispatch({initialUnseenNotifsCountByClassification:a,initialClassificationsForUnseenNotifs:c},{line:"31",module:"BizNotificationsTabsUtils.js"}),g.setupSubscriptions()},setupSubscriptions:function(){b("NotificationUpdates").subscribe("update-notifications",function(a,c){a=c.payloadsource;if(a!==b("NotificationConstants").PayloadSourceType.LIVE_SEND&&a!==b("NotificationConstants").PayloadSourceType.USER_ACTION)return;a=c.nodes;c=c.seenState;a!=null?b("BizNotificationReceivedNotifAction").dispatch({notifs:a},{line:"52",module:"BizNotificationsTabsUtils.js"}):c!=null&&b("BizNotificationSeenStateUpdateAction").dispatch({seenState:c},{line:"57",module:"BizNotificationsTabsUtils.js"})}),b("Arbiter").subscribe("notificationJewel/opened",function(){b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!0},{line:"62",module:"BizNotificationsTabsUtils.js"})}),b("Arbiter").subscribe("notificationJewel/closed",function(){b("AdsNuxTourAbandonedDataAction").dispatch({},{line:"66",module:"BizNotificationsTabsUtils.js"}),b("BizNotificationSetJewelOpenAction").dispatch({isJewelOpen:!1},{line:"67",module:"BizNotificationsTabsUtils.js"})})}};e.exports=g}),null);
__d("BizNotificationsPrefsUtils",["BizNotificationsSetPrefsAction","BizNotificationsTabsUtils"],(function(a,b,c,d,e,f){"use strict";a={initPrefs:function(a){b("BizNotificationsSetPrefsAction").dispatch({prefs:a},{line:"19",module:"BizNotificationsPrefsUtils.js"})}};e.exports=a}),null);