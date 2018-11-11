if (self.CavalryLogger) { CavalryLogger.start_js(["5XWmt"]); }

__d("CircularProgressBar.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"CircularProgressBar",propTypes:{animate:a.bool,percentComplete:a.number.isRequired,text:a.string},render:function(){var a=this.props,c=a.animate,d=a.text;a=a.percentComplete;var e=360*a/100,f=Math.max(e,180)-180;e=Math.min(e,180);a=a<100?"1":"0";return b("React").createElement("div",{className:"_1_bj",style:{opacity:a}},!!d&&b("React").createElement("div",{className:"_22sa"},d),b("React").createElement("div",{className:"_1_bk"},b("React").createElement("div",{className:c?"_22sb":""},b("React").createElement("div",{className:"_1_bl",style:{opacity:a}}),b("React").createElement("div",{className:"_1_bp _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+f+"deg)",opacity:a}})),b("React").createElement("div",{className:"_1_bs _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+e+"deg)",opacity:a}})))))}});e.exports=c}),null);
__d("FileInputUploader",["ArbiterMixin","DOM","DTSG","FileForm","Form","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this._inputElem=a,this._data={}}a.prototype.setInput=function(a){"use strict";this._inputElem=a;return this};a.prototype.setURI=function(a){"use strict";this._uri=a;return this};a.prototype.setData=function(a){"use strict";this._data=a;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setFiles=function(a){"use strict";this._files=a;return this};a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setUploadInParallel=function(a){"use strict";this._uploadInParallel=!!a;return this};a.prototype.setConcurrentLimit=function(a){"use strict";this._concurrentLimit=a;return this};a.prototype.abort=function(){"use strict";this._fileForm&&(this._fileForm.abort(),this._destroyFileForm())};a.prototype.send=function(){"use strict";__p&&__p();this._createForm();var a=!this._inputElem.parentElement;if(!a){var c=this._inputElem.cloneNode(!1);b("DOM").replace(this._inputElem,c)}b("DOM").appendContent(this._formElem,this._inputElem);b("DOM").appendContent(document.body,this._formElem);this._fileForm.submit();a||b("DOM").replace(c,this._inputElem);this._removeFormEl()};a.prototype._onFileFormEvent=function(a,b){"use strict";(a==="success"||a==="failure")&&this._destroyFileForm();return this.inform(a,b)};a.prototype._createForm=function(){"use strict";this._destroyFileForm(),this._formElem=b("DOM").create("form",{action:this._uri,method:"post"}),this._fileForm=new(b("FileForm"))(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit}),this._files&&this._fileForm.setFiles(this._files),this._fileForm.subscribe(b("FileForm").EVENTS,this._onFileFormEvent.bind(this)),b("Form").createHiddenInputs(babelHelpers["extends"]({fb_dtsg:b("DTSG").getToken()},this._data),this._formElem)};a.prototype._removeFormEl=function(){"use strict";b("DOM").remove(this._formElem),this._formElem=null};a.prototype._destroyFileForm=function(){"use strict";this._fileForm&&(this._fileForm.destroy(),this._fileForm=null)};e.exports=a}),null);
__d("Network",["mixInEventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g=!0,h=a.navigator.connection,i={0:"unknown",1:"ethernet",2:"wifi",3:"2g",4:"3g"};function c(){return g}function d(a){if(a==g)return;g=a;l.emit(a?"online":"offline")}function f(){return h?h.bandwidth:g?Infinity:0}function j(){return h?h.metered:!1}function k(){var a=h?String(h.type):"0";return i[a]||a}var l={getBandwidth:f,getType:k,isMetered:j,isOnline:c,setOnline:d};b("mixInEventEmitter")(l,{online:!0,offline:!0});a.addEventListener?(a.addEventListener("online",d.bind(null,!0)),a.addEventListener("offline",d.bind(null,!1))):a.attachEvent&&(a.attachEvent("online",d.bind(null,!0)),a.attachEvent("offline",d.bind(null,!1)));e.exports=l}),null);
__d("CallToActionLinkFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIDEO_LEAD:"VIDEO_LEAD",VIDEO_LPP:"VIDEO_LPP",VIDEO_NEKO:"VIDEO_NEKO",VIDEO_NON_LINK:"VIDEO_NON_LINK",VIDEO_SHOP:"VIDEO_SHOP"})}),null);