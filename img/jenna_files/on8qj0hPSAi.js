if (self.CavalryLogger) { CavalryLogger.start_js(["fKRKa"]); }

__d("ReactComposerEventMediaPostButtonContainer.react",["React","ReactComposerContextTypes","ReactComposerEventStore","ReactComposerMediaPostButtonContainerMixin"],(function(a,b,c,d,e,f){a=b("React").createClass({displayName:"ReactComposerEventMediaPostButtonContainer",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComposerMediaPostButtonContainerMixin")],getDefaultProps:function(){return{useDefaultScheduleComponent:!0}},componentDidMount:function(){b("ReactComposerEventStore").registerComposerID(this.context.composerID)}});e.exports=a}),null);
__d("ReactComposerListSproutContainer.react",["ExtensibleSproutsItemType","FluxContainer","FunnelLogger","React","ReactComposerAttachmentActions","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerListActions","ReactComposerLoggingName","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerStore","ReactComposerTaggerStore","ReactComposerTaggerType","ShimButton.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="WWW_LISTS_COMPOSER_FUNNEL";c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(event){this.state.isSelected?(b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").STATUS,!0),b("ReactComposerListActions").resetList(this.context.composerID),b("FunnelLogger").appendAction(h,"LIST_REMOVED"),b("FunnelLogger").endFunnel(h)):(b("FunnelLogger").startFunnel(h),b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").LIST,!0,b("ExtensibleSproutsItemType").LIST,b("ReactComposerStore").getSproutSurface(this.context.composerID),null,b("ReactComposerLoggingName").LIST_SPROUT),b("FunnelLogger").appendAction(h,"LIST_SPROUT_CLICKED"))}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getSelectedAttachmentID(d.composerID);c=a===b("ReactComposerAttachmentType").LIST;return{isSelected:c,isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,b("ReactComposerTaggerType").LIST)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ShimButton.react"),{onClick:this.$1,tabIndex:-1},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.isSelected}))};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").LIST]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);