if (self.CavalryLogger) { CavalryLogger.start_js(["u1sxf"]); }

__d("ReactComposerFundraiserSproutContainer.react",["ExtensibleSproutsItemType","FundraiserActionSources","React","ReactComposerContextTypes","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerActions","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType","SocialGoodCharityActionsLoggerEvents","SocialGoodCharityActionsLoggerUtils","SocialGoodCharityActionsSourceKeys"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").FUNDRAISER,onSelect:this.$1.bind(this)})};a.prototype.$1=function(){var a={};a[b("SocialGoodCharityActionsSourceKeys").SOURCE_NAME]=b("FundraiserActionSources").COMPOSER;b("SocialGoodCharityActionsLoggerUtils").logFundraiserForStoryCreation(b("SocialGoodCharityActionsLoggerEvents").CREATE_FUNDRAISER_BEGIN,a);b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.uiConfig.loggingName,b("ReactComposerTaggerType").FUNDRAISER,!1)};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").FUNDRAISER]};a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);