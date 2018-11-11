if (self.CavalryLogger) { CavalryLogger.start_js(["B6bBE"]); }

__d("WarningScreenEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WarningScreenEventsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WarningScreenEventsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WarningScreenEventsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setContentID=function(a){this.$1.content_id=a;return this};a.prototype.setContentLocation=function(a){this.$1.content_location=a;return this};a.prototype.setIsThumbnail=function(a){this.$1.is_thumbnail=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={appversion:!0,content_id:!0,content_location:!0,is_thumbnail:!0,name:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("StoryRenderLocation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HOMEPAGE_STREAM:"homepage_stream",SUMMARY:"summary",ACTIVITY_LOG:"activity_log",BRIEF_ACTIVITY_LOG:"brief_activity_log",TIMELINE:"timeline",NEWSSTAND:"newsstand",GROUP:"group",EVENT:"event",CIVIC_PROPOSAL:"civic_proposal",NEWSSTAND_PERMALINK:"newsstand_permalink",TIMELINE_ENTSTREAM:"timeline_entstream",PERMALINK:"permalink",COVER_FEED:"cover_feed",BLENDED_SEARCH_RESULTS:"blended_search",FEED_MOBILE:"feed_mobile",HOME_BUBBLE:"home_bubble",FEED_IMMERSIVE:"feed_immersive",PERMALINK_IMMERSIVE:"permalink_immersive",TIMELINE_IMMERSIVE:"timeline_immersive",GROUP_IMMERSIVE:"group_immersive",COVER_IMMERSIVE:"cover_immersive",TIMELINE_CONTEXT:"timeline_context",EDIT_HISTORY:"edit_history",SNAPTU_FEED:"snaptu_feed",SNAPTU_TIMELINE:"snaptu_timeline",SNAPTU_GROUPS_FEED:"snaptu_groups_feed",SIDE_FEED:"side_feed",MESSAGE_THREAD:"message_thread",MESSENGER_AD:"messenger_ad",PRESENCE_FEED:"presence_feed",APP_FEED:"app_feed",EXPLORE_FEED:"explore_feed",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",NEWS_FEED_DEEP_DIVE:"news_feed_deep_dive",SEEN_CONTENT:"seen_content",TRENDING_HOVERCARD:"trending_hovercard",GAMETIME_HIGHLIGHTS:"gametime_highlights",VIDEO_CHANNEL:"video_channel",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME:"video_home",GROUPS_LANDING:"groups_landing",GROUP_BIO:"group_bio",GROUP_FLAGGED_QUEUE:"group_flagged_queue",GROUP_REPORT_QUEUE:"group_report_queue",GROUP_PENDING_QUEUE:"group_pending_queue",BUY_AND_SELL:"buy_and_sell",APPENDABLE_PROMPT:"appendable_prompt",REVIEWS_FEED:"reviews_feed",TOPIC_FEED:"topic_feed",ADMIN_FEED:"admin_feed",BREAKUP_VIEW_POSTS_FEED:"breakup_view_posts_feed",CRISIS_FEED:"crisis_feed",LOCAL_SEARCH_RESULTS_PAGE:"local_search_results_page",PLACE_FEED:"place_feed",NATIVE_TEMPLATES:"native_templates",SEARCH_RESULTS_PAGE:"search_results_page",FUNDRAISER_PAGE:"fundraiser_page",FUNDRAISER_FOR_STORY_MORE_INFO_PAGE:"fundraiser_for_story_more_info_page",LOCAL_SERP:"local_serp",REACTION_OVERLAY:"reaction_overlay",VIDEO_INSTREAM:"video_instream",SOCIAL_BALLOT:"social_ballot",ENDORSEMENTS:"endorsements",GOV_DIGEST:"gov_digest",TRENDING_ISSUES:"trending_issues",PETITIONS:"petitions",POLITICAL_POST_FEED:"political_post_feed",TOWN_HALL:"town_hall",UNSPECIFIED:"unspecified",CONVERSATION_NUB:"conversation_nub",SUPPORT_INBOX:"support_inbox",COMMERCE_BOOKMARK:"commerce_bookmark",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",MARKETPLACE_BSG_PROFILE:"marketplace_bsg_profile",MARKETPLACE_MEGAMALL:"marketplace_megamall",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PDP_SELLER:"marketplace_pdp_seller",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_PROFILE_BUYER:"marketplace_profile_buyer",MARKETPLACE_PROFILE_SELLER:"marketplace_profile_seller",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_CONFIRMATION_BUYER:"marketplace_rating_confirmation_buyer",MARKETPLACE_RATING_CONFIRMATION_SELLER:"marketplace_rating_confirmation_seller",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_RATING_FLOW_BUYER:"marketplace_rating_flow_buyer",MARKETPLACE_RATING_FLOW_SELLER:"marketplace_rating_flow_seller",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_SELLER:"marketplace_thread_seller",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",MARKETPLACE_MESSENGER_REPORT_BUYER:"marketplace_messenger_report_buyer",MARKETPLACE_MESSENGER_REPORT_SELLER:"marketplace_messenger_report_seller",MARKETPLACE_SHOP_PDP:"marketplace_shop_pdp",MARKETPLACE_SHOP_PDP_SELLER:"marketplace_shop_pdp_seller",MARKETPLACE_B2C_REVIEW:"marketplace_b2c_review",CURATED_COLLECTION_PAGE:"curated_collection_page",COLLEGE_HOMEPAGE:"college_community_homepage",SIGNAL_APP:"signal_app",B2C_BOOKMARK:"b2c_bookmark",TOPIC_ENTITY_PAGE:"topic_entity_page",GROUPS_TAB:"groups_tab",GROUPS_GSYM_SEE_MORE:"groups_gsym_see_more",GROUPS_MY_POSTS:"groups_my_posts",GROUPS_SAVED_POSTS:"groups_saved_posts",JOBS_TAB:"jobs_tab",FACEBOOK_360:"facebook_360",ALBUM_FEED:"album_feed",SHARING_SPACES:"sharing_spaces",OPENGRAPH_DIALOG:"opengraph_dialog",SEARCH:"search",COMPOUNDEYE_PII_STRIPPED:"compoundeye_pii_stripped",GAMEROOM_FEED:"gameroom_feed",GAME_HUB_FEED:"game_hub_feed",PAGES_COMMUNITY_TAB:"pages_community_tab",THROWBACK_COMPOSER:"throwback_composer",TOP_LIVE_VIDEOS:"top_live_videos",STONEHENGE_CONSUMPTION:"stonehenge_consumption",ARTICLE_CONTEXT:"article_context",INTEGRITY_CONTEXT:"integrity_context",PROFILE_FRAME_DISCOVERY:"profile_frame_discovery",LUMOS:"lumos",CREATOR_APP_INSPIRATION_FEED:"inspiration_feed",PROJECT_NEO:"project_neo",GROUP_MALL:"group_mall",GROUP_PERMALINK:"group_permalink",GROUP_ACTIVITY_LOG:"group_activity_log",GROUP_ADMIN_TO_MEMBER_FEEDBACK:"group_admin_to_member_feedback",PYI:"pyi",RECOMMENDATIONS_DASHBOARD:"recommendations_dashboard",PAGE_RECOMMENDATIONS_TOOL:"page_recommendations_tool",PAGE_RECOMMENDATIONS_TAB_FEED:"page_recommendation_tab_feed",RAINBOW_EXPLORE:"rainbow_explore",AGORA_GROUPS_FEED:"agora_groups_feed",AGORA_PAGES_FEED:"agora_pages_feed",AGORA_SCHOOL_FEED:"agora_school_feed",AGORA_YOUTH_HIGH_SCHOOL_DIGEST:"agora_youth_high_school_digest",ATHENS_FEED:"athens_feed",FOX_FEED:"fox_feed",FOX_PERMALINK:"fox_permalink",FOX_RECOMMENDATIONS_FEED:"fox_recommendation_feed",HIGHLIGHTS_UNIT:"highlights_unit",MARKETPLACE_LOCAL_SHOP_PAGE_POSTS:"marketplace_local_shop_page_posts",GROUP_HOISTED:"group_hoisted",PAGE_SURFACE_RECOMMENDATIONS:"page_surface_recommendations",ACTOR_GATEWAY:"actor_gateway",AGORA_BREAKING_NEWS:"agora_breaking_news",SURVEY_GALLERY:"survey_gallery",LOGGED_OUT_FEED:"logged_out_feed",GAMES_FEED:"games_feed",GAMING_VIDEO_STREAMER_HUB:"gaming_video_streamer_hub",FB_STORIES:"fb_stories",MEDIA_MANAGER_HOME:"media_manager_home",MEDIA_MANAGER_POST_INSIGHTS:"media_manager_post_insights",WOODHENGE_EXCLUSIVE_FEED:"woodhenge_exclusive_feed",LOCAL_SURFACE:"local_surface",ADS_TRANSPARENCY_SHOW_ADS:"ads_transparency_show_ads",MISINFORMATION_FACT_CHECKER_APP:"misinformation_fact_checker_app",INSANT_ARTICLE:"instant_article",PROFILE_FEATURED:"profile_featured",WORKPLACE_TEAM_FEED:"workplace_team_feed",NEWS_STORYLINE_FEED:"news_storyline_feed",DITTO_HASHTAG_FEED:"ditto_hashtag_feed",MONTHLY_ACTIVITY_DIGEST_FEED:"monthly_activity_digest_feed",END_OF_FEED_UNIT_OVERLAY:"end_of_feed_unit_overlay",WORKPLACE_NEWSFEED_PROMOTED_POST:"workplace_newsfeed_promoted_post",ASSET3D_PHOTO_FULLSCREEN:"asset3d_photo_fullscreen",GROUP_GRID_ISLAND:"group_grid_island"})}),null);
__d("WarningScreenAttachmentPlacement",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BELOW_COMMENT:"below-comment",BELOW_CONTENT:"below-content",INLINE:"inline"})}),null);
__d("WarningScreenEventName",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({APPEAL_REQUEST_FAILED:"warning_screen_appeal_request_ignored",APPEAL_CREATED:"warning_screen_appeal_created",DISABLE_THUMBNAIL:"warning_screen_disable_thumbnail",GIVE_FEEDBACK_TAPPED:"warning_screen_give_feedback_tapped",REVIEW_REQUESTED:"warning_screen_review_requested",PROSPECTIVE_VISIBLE:"warning_screen_prospective_visible",WARNING_SCREEN_LOADED:"warning_screen_loaded",WARNING_SCREEN_UNCOVER_TAPPED:"warning_screen_uncover_tapped",WARNING_SCREEN_COVER_TAPPED:"warning_screen_cover_tapped",WARNING_SCREEN_VISIBLE:"warning_screen_visible",WARNING_SCREEN_LEARN_MORE_TAPPED:"warning_screen_learn_more_tapped",VIEWER_SCREEN_REMOVAL_REQUESTED:"warning_screen_viewer_screen_removal_requested",VIEWER_SCREEN_REMOVED:"warning_screen_viewer_screen_removed"})}),null);
__d("WarningScreenTargetType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PHOTO:"photo",VIDEO:"video",LINKSHARE:"link",POST:"post"})}),null);
__d("ObjectionableContentToggleButton.react",["ix","cx","Button.react","CSS","Image.react","React","StoryRenderLocation","VideoPlayerReason","WarningScreenAttachmentPlacement","WarningScreenEventName","WarningScreenEventsTypedLogger","WarningScreenTargetType","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){__p&&__p();i.constructor.call(this,a);this.state={isFiltered:this.props.isFilteredInitially};this.$3=function(a){a.stopPropagation();a.preventDefault();a=this.state.isFiltered;b("CSS").conditionClass(this.props.filter,"_cgv",!a);this.state.isFiltered?new(b("WarningScreenEventsTypedLogger"))().setName(b("WarningScreenEventName").WARNING_SCREEN_UNCOVER_TAPPED).setContentID(this.props.contentID).setContentLocation(this.props.location).setIsThumbnail(0).log():new(b("WarningScreenEventsTypedLogger"))().setName(b("WarningScreenEventName").WARNING_SCREEN_COVER_TAPPED).setContentID(this.props.contentID).setContentLocation(this.props.location).setIsThumbnail(0).log();this.props.video&&(!a?this.$4():this.$5());this.setState({isFiltered:!a})}.bind(this);var c=a.video;c&&c.addListener("optionsChange",function(){c.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&c.setOption("FeedAutoplay","isFilteredByWarningScreen",!0)})}a.prototype.$1=function(){var a=this.state.isFiltered,c=a?g("480473"):g("570542");this.props.placement===b("WarningScreenAttachmentPlacement").INLINE&&(c=a?g("532618"):g("503312"));return b("React").createElement(b("Image.react"),{className:"_1oid",src:c})};a.prototype.$2=function(){return this.state.isFiltered?this.props.uncoveredLabel:this.props.coveredLabel};a.prototype.$6=function(){var a=this.props,c=a.contentType;a=a.placement;return a===b("WarningScreenAttachmentPlacement").INLINE&&c===b("WarningScreenTargetType").VIDEO&&!this.state.isFiltered};a.prototype.$4=function(){var a=this.props,c=a.islive;a=a.video;c?a.mute():(a.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&a.setOption("FeedAutoplay","isFilteredByWarningScreen",!0),a.pause(b("VideoPlayerReason").WARNING_SCREEN_COVER))};a.prototype.$5=function(){var a=this.props,b=a.islive;a=a.video;b?a.unmute():(a.hasOption("FeedAutoplay","isFilteredByWarningScreen")&&a.setOption("FeedAutoplay","isFilteredByWarningScreen",!1),a.play())};a.prototype.componentDidMount=function(){this.props.video&&this.$4()};a.prototype.render=function(){var a=this.props,c=a.isFullscreen,d=a.location;a=a.placement;return b("React").createElement(b("Button.react"),{className:"_5_hk _299h"+(c?" _32yh":"")+(d===b("StoryRenderLocation").VIDEO_CHANNEL?" _6h77":"")+(this.$6()?" _6h78":"")+(a===b("WarningScreenAttachmentPlacement").INLINE?" _1yom":"")+(a===b("WarningScreenAttachmentPlacement").BELOW_COMMENT?" _1yoo":"")+(a===b("WarningScreenAttachmentPlacement").BELOW_CONTENT?" _1yop":""),image:this.$1(),label:this.$2(),onClick:this.$3})};e.exports=a}),null);
__d("WarningScreenEventsLoggerHelper",["OnVisible","WarningScreenEventName","WarningScreenEventsTypedLogger"],(function(a,b,c,d,e,f){a={logContentVisible:function(a,c,d,e){var f=new(b("WarningScreenEventsTypedLogger"))().setName(b("WarningScreenEventName").WARNING_SCREEN_VISIBLE).setContentID(c).setContentLocation(d).setIsThumbnail(e),g=new(b("OnVisible"))(a,function(){f.log(),g.remove()},!0,0)},logOnClick:function(a,c,d,e,f){var g=new(b("WarningScreenEventsTypedLogger"))().setName(f).setContentID(c).setContentLocation(d).setIsThumbnail(e);a.onclick=function(){g.log()}}};e.exports=a}),null);