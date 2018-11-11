if (self.CavalryLogger) { CavalryLogger.start_js(["QLkpo"]); }

__d("MercurySharePreview.react",["cx","invariant","AsyncRequest","LeftRight.react","MercuryFallbackShareAttachment.react","MercuryShareAttachmentRenderLocations","React","XUICloseButton.react","XUISpinner.react","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.$1=1337,this.$2=null,this.state={attachmentData:null,loading:!1},this.$11=function(){this.$5(),this.props.onClose&&this.props.onClose(this.props.threadID)}.bind(this),b}a.prototype.UNSAFE_componentWillMount=function(){this.$3(this.props.share),this.$4(this.props.uri)};a.prototype.componentWillUnmount=function(){this.$5()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.share&&a.uri&&h(0,3593),!a.share&&!a.uri&&this.$5(),this.$3(a.share),this.$4(a.uri)};a.prototype.$3=function(a){var b=this.state.attachmentData||this.state.loading;a&&!b&&this.$6(a)};a.prototype.$4=function(a){var b=this.state.attachmentData||this.state.loading;a&&!(b&&this.props.uri===a)&&this.$7(a)};a.prototype.getShareData=function(){return this.state.attachmentData&&this.state.attachmentData.share_data};a.prototype.isLoading=function(){return this.state.loading};a.prototype.$6=function(a){this.$2=new(b("AsyncRequest"))().setURI("/message_share_attachment/fromParams/").setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,share_params:a.params,share_type:a.type}).setHandler(this.$8.bind(this,this.$9())),b("setImmediate")(function(){this.props.onLoading&&this.props.onLoading(this.props.threadID)}.bind(this)),this.$2&&this.$2.send(),this.setState({loading:!0,attachmentData:null})};a.prototype.$7=function(a){this.$2=new(b("AsyncRequest"))().setURI("/message_share_attachment/fromURI/").setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,uri:a}).setHandler(this.$8.bind(this,this.$9())),b("setImmediate")(function(){this.props.onLoading&&this.props.onLoading(this.props.threadID)}.bind(this)),this.$2&&this.$2.send(),this.setState({loading:!0,attachmentData:null})};a.prototype.$9=function(){return++this.$1};a.prototype.$10=function(){return this.$1};a.prototype.$8=function(a,b){if(this.$10()!==a)return;a=b.payload;a?(this.props.onLoaded&&this.props.onLoaded(this.props.threadID,a),this.setState({loading:!1,attachmentData:a})):this.props.onClose&&this.props.onClose(this.props.threadID)};a.prototype.$5=function(){this.$9(),this.$2&&this.$2.abort(),this.$2=null,this.setState({loading:!1,attachmentData:null})};a.prototype.render=function(){var a="_tig _tih";if(this.state.loading)return b("React").createElement(b("LeftRight.react"),{direction:b("LeftRight.react").DIRECTION.right,className:a},b("React").createElement(b("XUISpinner.react"),{className:"_tii",size:"large",background:"light"}),b("React").createElement(b("XUICloseButton.react"),{className:"_tij",shade:"dark",size:"small",onClick:this.$11}));a=this.state.attachmentData;return!a?b("React").createElement("div",null):b("React").createElement("div",null,b("React").createElement(b("MercuryFallbackShareAttachment.react"),{attachment:a,location:b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW}),b("React").createElement(b("XUICloseButton.react"),{className:"_tij",shade:"dark",size:"small",onClick:this.$11}))};a.propTypes={threadID:c.string,imageSize:c.shape({width:c.number.isRequired,height:c.number.isRequired}).isRequired,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()).isRequired,share:c.shape({params:c.array,type:c.number}),uri:c.string,onClose:c.func,onLoaded:c.func,onLoading:c.func};e.exports=a}),null);
__d("scrollToUFI2Element",["DOMScroll","ScrollableArea","Animation"],(function(a,b,c,d,e,f){"use strict";b("Animation");function a(a,c){var d=b("ScrollableArea").getInstance(a);d?d=d.scrollIntoView(a,!0,c):d=b("DOMScroll").scrollTo(a,!0,!1,0,0,c);return{cancel:d}}e.exports=a}),null);