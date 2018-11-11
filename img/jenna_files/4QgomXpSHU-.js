if (self.CavalryLogger) { CavalryLogger.start_js(["NXtMM"]); }

__d("CalendarUtils",["DateStrings","LocalDate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b,c,d){var e=[],f=d.order;for(var g=0;g<3;++g)f[g]==="d"?e.push(a):f[g]==="m"?e.push(b):e.push(c);return e.join(d.separator)}function h(a,b){__p&&__p();var c,d,e;a=a.split(/[/.,\s-]+/);if(a.length<3)return null;for(var f=0;f<3;++f){var g=a.shift();if(b[f]==="d"){c=parseInt(g,10);if(isNaN(c)||c<1)return null}else if(b[f]==="m"){d=parseInt(g,10);if(isNaN(d)||d<1||d>12)return null}else{e=parseInt(g,10);if(e<100&&e>=0&&g.length==2){g=new Date().getFullYear();if(Math.abs(g/100-e)>=2){var h=e+Math.floor(g/100)*100;e=h>g+4?h-100:h}}if(isNaN(e)||e<1e3)return null}}if(!c||!d||!e)return null;g=new Date(e,d,0).getDate();return isNaN(g)||g<c?null:{day:c,month:d,year:e}}a={placeholderDateString:function(a){return g(b("DateStrings").getDayPlaceholder(),b("DateStrings").getMonthPlaceholder(),b("DateStrings").getYearPlaceholder(),a)},dateTimeToString:function(a,b){return g(a.getDayOfMonth(),a.getMonth(),a.getYear(),b)},dateToString:function(a,b){return g(a.getDate(),a.getMonth()+1,a.getFullYear(),b)},utcDateToString:function(a,b){return g(a.getUTCDate(),a.getUTCMonth()+1,a.getUTCFullYear(),b)},stringToDate:function(a,b){a=h(a,b);return!a?!1:new Date(a.year,a.month-1,a.day)},localDateToString:function(a,b){return g(a.getDayOfMonth(),a.getMonth(),a.getYear(),b)},stringToLocalDate:function(a,c){a=h(a,c);return a?new(b("LocalDate"))(a.year,a.month,a.day):null}};e.exports=a}),null);
__d("UTCUtils",["DateConsts"],(function(a,b,c,d,e,f){__p&&__p();var g=b("DateConsts").MS_PER_HOUR,h=-1*7*g,i=-1*8*g,j={dateToUTC:function(a){return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())},dateToUTCDate:function(a){return new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())},getPacificOffsetAt:function(a){__p&&__p();if(a<=132057e7)return h;else if(a<=133146e7)return i;else if(a<=13520196e5)return h;else if(a<=13629096e5)return i;else if(a<=13834692e5)return h;else if(a<=13943592e5)return i;else if(a<=14149188e5)return h;else if(a<=14258088e5)return i;else if(a<=14463684e5)return h;else if(a<=14578632e5)return i;else if(a<=14784192e5)return h;else if(a<=14893128e5)return i;else if(a<=15098688e5)return h;else if(a<=15207624e5)return i;else if(a<=15413184e5)return h;else if(a<=1552212e6)return i;else if(a<=1572768e6)return h;else return i},offsetFromPacificTime:function(a){a=a||new Date();var b=j.getPacificOffsetAt(+a)/g;a=a.getTimezoneOffset()/60;return b+a}};e.exports=j}),null);
__d("getEventCharCode",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,a===0&&b===13&&(a=13)):a=b;return a>=32||a===13?a:0}e.exports=a}),null);
__d("DatePickerInput_DEPRECATED.react",["cx","AbstractTextField.react","CalendarUtils","DateFormatConfig","DatePickerRestraints","InputSelection","Keys","React","ReactDOM","UTCUtils","XUICloseButton.react","emptyFunction","getEventCharCode","joinClasses","shallowCompare"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;d=b("React").PropTypes;f=b("React").Component;var i=/\d/,j={order:b("DateFormatConfig").numericDateOrder,separator:b("DateFormatConfig").numericDateSeparator};function k(a){var b=/[1-9]{1}[0-9]*/g,c,d={},e=0;while(c=b.exec(a))d[j.order[e]]=c,e++;return d}function a(a){return a==null?"":b("CalendarUtils").utcDateToString(new Date(a),j)}g=babelHelpers.inherits(c,f);h=g&&g.prototype;function c(a){__p&&__p();h.constructor.call(this,a),this.onFocus=function(a){this.setState({focused:!0}),this.props.onFocus(a)}.bind(this),this.onChange=function(a){__p&&__p();var c;a&&(typeof a==="string"?c=a:c=a.target.value);if(c||!this.props.allowEmpty){var d=b("CalendarUtils").stringToDate(c,j.order),e=!1;if(d){e=b("DatePickerRestraints").isValidDate(d,this.props.dateRestraints);a=new Date(b("UTCUtils").dateToUTC(d));e?this.props.onChange(a):this.props.onInvalidDateSelected(a)}}else this.props.onDateRemoved();(!d||!e)&&this.setState({inputValue:c})}.bind(this),this.onKeyDown=function(event){__p&&__p();var a=event.keyCode;if(a==b("Keys").RETURN){event.preventDefault();this.onBlur(event);return}if(a===b("Keys").TAB){this.onBlur(event);return}if(a==b("Keys").UP||a==b("Keys").DOWN){event.preventDefault();a=a==b("Keys").UP?1:-1;var c=event.target,d=b("InputSelection").get(c);c=k(c.value);var e=new Date(this.props.selectTime);for(var f in c){var g=c[f],h=g.index+g[0].length;if(d.start>=g.index&&d.start<=h){switch(f){case"m":e.setMonth(e.getMonth()+a);break;case"d":e.setDate(e.getDate()+a);break;case"y":e.setFullYear(e.getFullYear()+a);break}break}}b("DatePickerRestraints").isValidDate(e,this.props.dateRestraints)&&(this.$1=f,this.props.onChange(e))}}.bind(this),this.onKeyUp=function(event){var a=event.keyCode;(a==b("Keys").UP||a==b("Keys").DOWN)&&event.preventDefault();a==b("Keys").ESC&&this.onBlur(event)}.bind(this),this.onKeyPress=function(event){var a=String.fromCharCode(b("getEventCharCode")(event.nativeEvent)),c=b("DateFormatConfig").numericDateSeparator;if(a===c||i.test(a))return;event.preventDefault()},this.$3=function(event){this.props.onDateRemoved(),this.setState({inputValue:""})}.bind(this),this.state={inputValue:this.props.selectTime?this.props.formatter(this.props.selectTime):"",focused:!1}}c.prototype.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};c.prototype.UNSAFE_componentWillReceiveProps=function(a){if(this.props.selectTime||a.selectTime){var b=a.formatter||this.props.formatter;this.setState({inputValue:b(a.selectTime)})}};c.prototype.componentDidUpdate=function(a,c){a=this.$1;var d=this.$2();if(this.state.inputValue&&a){var e=k(this.state.inputValue);e=e[a];b("InputSelection").set(d,e.index,e.index+e[0].length)}this.$1=null;this.props.selectAllOnFocus&&!c.focused&&this.state.focused&&b("InputSelection").set(d,0,d.value.length)};c.prototype.$2=function(){var a=b("ReactDOM").findDOMNode(this.refs.inputBox);if(a.nodeName==="INPUT")return a;else return a.getElementsByTagName("input")[0]};c.prototype.onBlur=function(a){var b=!1;!this.props.selectTime&&a.target.value.length&&(b=!0);this.setState(function(a){return{focused:!1,inputValue:b?"":a.inputValue}});this.props.onBlur(a)};c.prototype.$4=function(){var a;this.props.clearableTooltip&&this.state.inputValue?a=b("React").createElement(b("XUICloseButton.react"),{className:"_wrm",size:"small",type:"button",tooltip:this.props.clearableTooltip,onClick:this.$3}):this.props.icon&&(a=b("React").cloneElement(this.props.icon,{className:b("joinClasses")(this.props.icon.props.className,"_3smn")}));var c={root:"",empty:""};return b("React").createElement(b("AbstractTextField.react"),{leftChild:a,classNames:c},b("React").createElement("input",{className:"_3smp",type:"text"}))};c.prototype.$5=function(){return b("React").cloneElement(this.props.input||this.$4(),{placeholder:this.props.placeholder,value:this.state.inputValue,onChange:this.onChange,onFocus:this.onFocus,onKeyDown:this.onKeyDown,onKeyPress:this.onKeyPress,onKeyUp:this.onKeyUp,disabled:this.props.disabled,ref:"inputBox"})};c.prototype.render=function(){var a="";this.props.selectTime&&(a=this.props.utcOutput?this.props.selectTime:b("UTCUtils").dateToUTCDate(new Date(this.props.selectTime)).getTime());var c=b("joinClasses")(this.props.className,"_3smo");return b("React").createElement("span",{className:c},this.$5(),b("React").createElement("input",{type:"hidden",name:this.props.name,value:a}))};c.propTypes={allowEmpty:d.bool,dateRestraints:d.arrayOf(d.func),icon:d.element,input:d.element,name:d.string,onBlur:d.func,onChange:d.func,onDateRemoved:d.func,onFocus:d.func,onInvalidDateSelected:d.func,placeholder:d.string,selectTime:d.number,disabled:d.bool,formatter:d.func,selectAllOnFocus:d.bool,utcOutput:d.bool,clearableTooltip:d.string};c.defaultProps={allowEmpty:!0,formatter:a,onBlur:b("emptyFunction"),onChange:b("emptyFunction"),onDateRemoved:b("emptyFunction"),onFocus:b("emptyFunction"),onInvalidDateSelected:b("emptyFunction"),placeholder:b("CalendarUtils").placeholderDateString(j),selectAllOnFocus:!1,utcOutput:!1,clearableTooltip:""};e.exports=c}),null);
__d("MentionsTypeaheadViewItem.react",["cx","Badge.react","CssBackgroundImage.react","ImageBlock.react","React","TypeaheadViewItem","cssURL"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MentionsTypeaheadViewItem",mixins:[b("TypeaheadViewItem").Mixin],propTypes:babelHelpers["extends"]({},b("TypeaheadViewItem").propTypes,{ariaDescribedBy:a.string}),render:function(){var a=this.props.entry,c=a.getAuxiliaryData(),d=null;c&&(c.verified?d=b("React").createElement(b("Badge.react"),{type:"verified",size:"xsmall"}):c.workForeignEntity&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"})));c=a.getPhoto();c=typeof c==="string"?b("React").createElement(b("CssBackgroundImage.react"),{className:"_5u93",imageURI:c}):b("React").createElement("span",null);var e=null;a.getSubtitle()&&(e=b("React").createElement("div",{className:"_5u95"},a.getSubtitle()));var f="_5u91"+(this.props.highlighted?" _5u92":"");return b("React").createElement("li",{role:"option",className:f,"aria-label":a.getTitle(),"aria-selected":this.props.highlighted,"aria-describedby":this.props.ariaDescribedBy,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight},b("React").createElement(b("ImageBlock.react"),{spacing:"medium"},c,b("React").createElement("div",null,b("React").createElement("div",{className:"_5u94"},a.getTitle(),d),e)))}});e.exports=c}),null);
__d("XUIDatePicker.react",["cx","invariant","ix","CalendarUtils","ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","DateFormatConfig","DatePickerInput_DEPRECATED.react","DatePickerRestraints","Image.react","LayerTogglerContext","React","ReactDOM","ReactLayeredComponentMixin_DEPRECATED","Toggler","UTCUtils","XUICalendar.react","XUICard.react","XUIMonthPagerCalendar.react","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerTogglerContext:b("LayerTogglerContext")},k={order:b("DateFormatConfig").numericDateOrder,separator:b("DateFormatConfig").numericDateSeparator};function l(a){var c=new Date();if(a)c.setTime(a);else{a=b("UTCUtils").dateToUTC(c);c.setTime(a)}return b("XUICalendar.react").normalizeDate(c).getTime()}function m(a){var b=/^\d{4}-\d{2}-\d{2}$/.test(a);b||h(0,153);b=Date.parse(a);b||h(0,154,a);return b}function n(a){!a.initialDate||!a.initialTime||h(0,155);return a.initialDate?m(a.initialDate):a.initialTime}function o(a){!a.earliestDate||!a.earliestTime||h(0,156);return a.earliestDate?m(a.earliestDate):a.earliestTime?a.earliestTime*1e3:null}function p(a){!a.latestDate||!a.latestTime||h(0,157);return a.latestDate?m(a.latestDate):a.latestTime?a.latestTime*1e3:null}function q(a,b){var c=n(a);!b&&a.initialFocusTime&&(c=a.initialFocusTime);return l(c)}c=b("React").createClass({displayName:"XUIDatePicker",mixins:[b("ReactLayeredComponentMixin_DEPRECATED")],propTypes:{name:a.string,initialDate:a.string,initialTime:a.number,initialFocusTime:a.number,allowDuplicateSelection:a.bool,shouldSetDefaultDate:a.bool,earliestDate:a.string,earliestTime:a.number,latestDate:a.string,latestTime:a.number,dateRestraints:a.array,highlightedTimes:a.array,onCalendarSelectDateChange:a.func,onInvalidDateSelected:a.func,onDateRemoved:a.func,allowEmpty:a.bool,icon:a.element,placeholder:a.string,dayInnerFormatter:a.func,calendar:a.func,calendarProps:a.object,behaviors:a.object,onHideCalendar:a.func,onInputFocus:a.func,utcOutput:a.bool,includedDays:a.array},getDefaultProps:function(){return{shouldSetDefaultDate:!0,allowDuplicateSelection:!1,onCalendarSelectDateChange:b("emptyFunction"),onInvalidDateSelected:b("emptyFunction"),onDateRemoved:b("emptyFunction"),placeholder:b("CalendarUtils").placeholderDateString(k),calendar:b("XUIMonthPagerCalendar.react"),icon:b("React").createElement(b("Image.react"),{src:i("27445")}),onHideCalendar:b("emptyFunction"),onInputFocus:b("emptyFunction"),utcOutput:!1,includedDays:[]}},togglerSub:null,getInitialState:function(){return babelHelpers["extends"]({},this._calculateState(this.props),{showLayer:!1})},UNSAFE_componentWillReceiveProps:function(a){this.setState(this._calculateState(a,this.props))},_calculateState:function(a,b){__p&&__p();var c=n(a);if(b){var d=n(b);if(d===c&&a.shouldSetDefaultDate===b.shouldSetDefaultDate)return{}}d=l(c);b={selectTime:a.shouldSetDefaultDate||c?d:null};(!this.state||!this.state.selectTime||d!==this.state.selectTime)&&(b.focusTime=q(a,this.state));return b},componentWillUnmount:function(){this.removeSubscriptions()},removeSubscriptions:function(){this.togglerSub&&this.togglerSub.unsubscribe(),this.togglerSub=null},renderLayers:function(){if(!this.state.showLayer)return{};var a=this.props.calendar;return{layer:b("React").createElement(b("ContextualLayer.react"),{contextRef:function(){return this.refs.inputBox}.bind(this),position:"below",offsetY:3,behaviors:this._getBehaviors(),shown:this.state.showLayer,shouldSetARIAProperties:!1},b("React").createElement(b("XUICard.react"),{className:"_5c6i"},b("React").createElement(a,babelHelpers["extends"]({},this.props.calendarProps,{highlightedTimes:this.props.highlightedTimes,dateRestraints:this._getDateRestraintsFromProps(this.props),focusTime:this.state.focusTime,selectTime:this.state.selectTime,onFocusDateChange:this.onCalendarFocusDateChange,onSelectDateChange:function(a){b("ReactDOM").findDOMNode(this.refs.inputBox).focus(),this.onCalendarSelectDateChange(a),this._hide()}.bind(this),allowDuplicateSelection:this.props.allowDuplicateSelection,dayInnerFormatter:this.props.dayInnerFormatter}))))}},_getBehaviors:function(){return babelHelpers["extends"]({},j,this.props.behaviors)},_hide:function(){b("Toggler").hide(b("ReactDOM").findDOMNode(this))},onCalendarFocusDateChange:function(a){this.setState({focusTime:a.getTime()})},onCalendarSelectDateChange:function(a){this.setState({focusTime:a.getTime(),selectTime:a.getTime()}),this.props.onCalendarSelectDateChange(a)},onDateRemoved:function(){this.setState({selectTime:null}),this.props.onDateRemoved()},onInvalidDateSelected:function(a){this.setState({selectTime:null}),this.props.onInvalidDateSelected(a)},onTogglerShowOrHide:function(a,c){c.active===b("ReactDOM").findDOMNode(this)&&(a=="show"?this.setState({showLayer:!0}):(this.removeSubscriptions(),this.setState({showLayer:!1}),this.props.onHideCalendar()))},onInputFocus:function(){this.removeSubscriptions(),this.togglerSub=b("Toggler").subscribe(["show","hide"],this.onTogglerShowOrHide),b("Toggler").show(b("ReactDOM").findDOMNode(this)),this.props.onInputFocus()},_getDateRestraintsFromProps:function(a){if(a.dateRestraints)return a.dateRestraints;var c=[],d=o(a);d&&c.push(b("DatePickerRestraints").enforceDateIsNoEarlierThan(new Date(d)));d=p(a);d&&c.push(b("DatePickerRestraints").enforceDateIsNoLaterThan(new Date(d)));a.includedDays.length&&c.push(b("DatePickerRestraints").enforceDayIsIncluded(a.includedDays));return c},render:function(){return b("React").createElement(b("DatePickerInput_DEPRECATED.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5c6j"),dateRestraints:this._getDateRestraintsFromProps(this.props),icon:this.props.icon,name:this.props.name,onBlur:this._hide,onChange:this.onCalendarSelectDateChange,onDateRemoved:this.onDateRemoved,onFocus:this.onInputFocus,onInvalidDateSelected:this.onInvalidDateSelected,placeholder:this.props.placeholder,ref:"inputBox",selectTime:this.state.selectTime,utcOutput:this.props.utcOutput}))}});e.exports=c}),null);
__d("TimeInputParser",[],(function(a,b,c,d,e,f){__p&&__p();var g="AM",h="PM";function a(a){a=Math.floor(a/60);var b;a!==0?(b=Math.floor(a/60),a=a%60):b=0;return b>24?null:{hours24:b,minutes:a,time:i(b,a),text12:j(b,a)}}function i(a,b){return(a*60+b)*60}function j(a,b){b<10&&(b="0"+b);if(a===0)return"12:"+b+" "+g;else if(a<12)return a+":"+b+" "+g;else if(a===12)return"12:"+b+" "+h;else return a-12+":"+b+" "+h}b={fromTime:a,toTime:i,toText12:j,AM:g,PM:h};e.exports=b}),null);
__d("AbstractTimeInputColumn.react",["cx","Keys","React","ReactDOM","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={descriptionID:b("uniqueID")(),focused:!1,inputID:b("uniqueID")()},this.focusInput=function(){var a=b("ReactDOM").findDOMNode(this.refs.input);try{a.focus()}catch(a){}this.setState({focused:!0});this.props.onFocus&&this.props.onFocus()}.bind(this),this.blurInput=function(){var a=b("ReactDOM").findDOMNode(this.refs.input);try{a.blur()}catch(a){}this.setState({focused:!1});this.props.onBlur&&this.props.onBlur()}.bind(this),this.$4=function(a){__p&&__p();switch(a.keyCode){case b("Keys").TAB:a.shiftKey?this.$5(a):this.$6(a);break;case b("Keys").LEFT:this.$5(a);break;case b("Keys").UP:this.$7(a);break;case b("Keys").RIGHT:this.$6(a);break;case b("Keys").DOWN:this.$8(a);break;case b("Keys").BACKSPACE:case b("Keys").DELETE:this.props.onType&&this.props.onType(null);a.preventDefault();break}}.bind(this),this.$8=function(a){this.props.onSpin&&this.props.onSpin(-1),a.preventDefault()}.bind(this),this.$7=function(a){this.props.onSpin&&this.props.onSpin(1),a.preventDefault()}.bind(this),this.$5=function(event){this.props.onFocusPrevAttempt?(event.preventDefault(),this.props.onFocusPrevAttempt()):event.nativeEvent.keyCode===b("Keys").LEFT&&event.preventDefault()}.bind(this),this.$6=function(event){this.props.onFocusNextAttempt?(event.preventDefault(),this.props.onFocusNextAttempt()):event.nativeEvent.keyCode===b("Keys").RIGHT&&event.preventDefault()}.bind(this),this.$2=function(a){this.props.onType&&this.props.onType(a.target.value)}.bind(this),this.$3=function(){this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus()}.bind(this),this.$1=function(){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur()}.bind(this),c}a.prototype.render=function(){"use strict";var a=this.props.classNames||{},c=b("joinClasses")(this.props.className,a.column,this.state.focused?a.focused:null),d={};this.props.disabled&&(d.disabled="disabled");return b("React").createElement("div",{className:c},b("React").createElement("div",{className:a.columnBody},b("React").createElement("label",{"aria-hidden":!0,className:a.columnValue,htmlFor:this.state.inputID},this.props.value==null?this.props.placeholder:this.props.value),b("React").createElement("input",babelHelpers["extends"]({},d,{"aria-describedby":this.state.descriptionID,"aria-disabled":this.props.disabled,"aria-valuetext":this.props.value,"aria-valuenow":"0",className:a.textInput,id:this.state.inputID,ref:"input",role:"spinbutton",tabIndex:this.props.tabIndex,value:"",onBlur:this.$1,onChange:this.$2,onFocus:this.$3,onKeyDown:this.$4})),b("React").createElement("span",{"aria-label":this.props.label,className:"accessible_elem",id:this.state.descriptionID})))};a.propTypes={classNames:c.shape({column:c.string,columnBody:c.string,columnValue:c.string,focused:c.string,textInput:c.string}),disabled:c.bool,options:c.array,onBlur:c.func,onSpin:c.func,onType:c.func,onFocus:c.func,placeholder:c.string,value:c.any};e.exports=a}),null);
__d("TimeOfDay",["invariant","Instant","ISODateString","PeriodUnit","Timezone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Timezone").UTC;function i(a,b,c){a===void 0&&(a=0),b===void 0&&(b=0),c===void 0&&(c=0),this.hour=a,this.minute=b,this.second=c}i.create=function(a,b,c){a===void 0&&(a=0);b===void 0&&(b=0);c===void 0&&(c=0);return new i(a,b,c)};i.prototype.compare=function(a){return this.toSecondOfDay()-a.toSecondOfDay()};i.prototype.equals=function(a){return this.compare(a)===0};i.prototype.isBefore=function(a){return this.compare(a)<0};i.prototype.isAfter=function(a){return this.compare(a)>0};i.prototype.isBeforeOrEqual=function(a){return this.compare(a)<=0};i.prototype.isAfterOrEqual=function(a){return this.compare(a)>=0};i.prototype.min=function(a){return this.isBefore(a)?this:a};i.prototype.max=function(a){return this.isBefore(a)?a:this};i.prototype.$1=function(a){var b=this.toUTCDateOnArbitraryDay();a.hour!=null&&b.setUTCHours(a.hour);a.minute!=null&&b.setUTCMinutes(a.minute);a.second!=null&&b.setUTCSeconds(a.second);return i.fromUTCDate(b)};i.prototype.set=function(a){a.hour==null||a.hour>=0&&a.hour<=23||g(0,1151);a.minute==null||a.minute>=0&&a.minute<=59||g(0,1152);a.second==null||a.second>=0&&a.second<=59||g(0,1153);return this.$1(a)};i.prototype.add=function(a){var b=this.toUTCDateOnArbitraryDay();a.hour&&b.setUTCHours(b.getUTCHours()+a.hour);a.minute&&b.setUTCMinutes(b.getUTCMinutes()+a.minute);a.second&&b.setUTCSeconds(b.getUTCSeconds()+a.second);return i.fromUTCDate(b)};i.prototype.subtract=function(a){var b={};for(var c in a)b[c]=-a[c];return this.add(b)};i.prototype.addHours=function(a){return this.add({hour:a})};i.prototype.addMinutes=function(a){return this.add({minute:a})};i.prototype.addSeconds=function(a){return this.add({second:a})};i.prototype.subtractHours=function(a){return this.subtract({hour:a})};i.prototype.subtractMinutes=function(a){return this.subtract({minute:a})};i.prototype.subtractSeconds=function(a){return this.subtract({second:a})};i.prototype.startOfHour=function(){return this.floor(b("PeriodUnit").hour)};i.prototype.startOfMinute=function(){return this.floor(b("PeriodUnit").minute)};i.prototype.floor=function(a){switch(a){case b("PeriodUnit").hour:return this.set({minute:0,second:0});case b("PeriodUnit").minute:return this.set({second:0});case b("PeriodUnit").second:return this;default:g(0,1154,a)}};i.prototype.ceil=function(a){var b=this.floor(a);if(this.equals(b))return b;else{var c={};c[a]=1;return b.add(c)}};i.prototype.format=function(a,c){return b("Instant").format(this.toInstantOnArbitraryDay(),a,c)};i.prototype.toString=function(){return this.toISOString()};i.prototype.valueOf=function(){return this.toSecondOfDay()};i.prototype.toISOString=function(){return this.format("H:i:s",{skipPatternLocalization:!0})};i.fromISOString=function(a){a=b("ISODateString").parseTimeComponents(a);var c=a.hour,d=a.minute;a=a.second;return i.create(c,d,a)};i.prototype.toSecondOfDay=function(){return 3600*this.hour+60*this.minute+this.second};i.fromSecondOfDay=function(a){a=a;var b=a%60;a-=b;a/=60;var c=a%60;a-=c;a/=60;return i.create(a,c,b)};i.prototype.toUTCDateOnArbitraryDay=function(){return new Date(1e3*this.toInstantOnArbitraryDay())};i.fromUTCDate=function(a){return i.create(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds())};i.fromDate=function(a){return i.create(a.getHours(),a.getMinutes(),a.getSeconds())};i.prototype.toInstant=function(a,c){a=Date.UTC(a.year,a.month-1,a.day,this.hour,this.minute,this.second)/1e3;return b("Instant").getParallel(a,c)};i.prototype.toInstantOnArbitraryDay=function(){var a={year:2016,month:1,day:1};return this.toInstant(a,h)};i.fromInstant=function(a,c){a=a+b("Instant").getOffset(a,c);return i.fromUTCDate(new Date(1e3*a))};i.fromDateTime=function(a){a=a.getFields();return i.create(a.hour,a.minute,a.second)};i.fromFBDate=function(a){return i.create(a.getHours(),a.getMinutes(),a.getSeconds())};i.fromLocalDateTime=function(a){return i.create(a.hour,a.minute,a.second)};i.prototype.toJSON=function(){return this.toISOString()};i.prototype.fromJSON=function(a){return i.fromISOString(a)};e.exports=i}),null);
__d("AbstractTimeInput.react",["cx","fbt","AbstractTimeInputColumn.react","DateFormatConfig","React","TimeInputParser","TimeOfDay","UserAgent","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("TimeInputParser").AM,k=b("TimeInputParser").PM;c=b("React").PropTypes;var l=(b("DateFormatConfig").formats["g:ia"]||"").indexOf("a")>=0,m=new(b("TimeOfDay"))(0,0,0);d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={focused:!1},this.$2=function(){this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus()}.bind(this),this.$1=function(){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur()}.bind(this),this.$12=function(a){if(!this.props.onChangeValueAttempt)return;var b=this.props,c=b.minValue,d=b.maxValue;b=b.value;b&&a&&d&&c&&(a.isAfter(d)?b.equals(d)?a=c:a=d:a.isBefore(c)&&(b.equals(c)?a=d:a=c));this.props.onChangeValueAttempt(a)}.bind(this),this.$13=function(){return this.props.value||this.props.minValue||m}.bind(this),this.$9=function(){this.refs.hours.focusInput()}.bind(this),this.$6=function(a){this.$12(this.$13().addHours(a))}.bind(this),this.$7=function(a){if(a==null){this.$12(a);return}a===":"&&this.$3();var c=this.$13(),d=n(c),e;l?(e=o(b("nullthrows")(d.hours12),a,1,12),d.meridiem===k&&e!==12?e+=+12:d.meridiem===j&&e===12&&(e=0)):e=o(b("nullthrows")(d.hours24),a,0,23);e!=null&&this.$12(c.set({hour:e}))}.bind(this),this.$3=function(){this.refs.minutes.focusInput()}.bind(this),this.$10=function(a){var b=this.props.spinMinutesInterval;this.$12(this.$13().addMinutes(b*a))}.bind(this),this.$11=function(a){__p&&__p();if(a==null){this.$12(a);return}if(l&&(this.$14(a)||this.$15(a))){this.$8();this.$5(a);return}var c=this.$13(),d=n(c);d=o(b("nullthrows")(d.minutes),a,0,59);d!=null&&this.$12(c.set({minute:d}))}.bind(this),this.$8=function(){this.refs.ampm.focusInput()}.bind(this),this.$4=function(a){this.$12(this.$13().addHours(12*a))}.bind(this),this.$14=function(a){a=a.toLowerCase();return String(j).toLowerCase().startsWith(a)},this.$15=function(a){a=a.toLowerCase();return String(k).toLowerCase().startsWith(a)},this.$5=function(a){__p&&__p();if(a==null){this.$12(a);return}var c=this.$14(a);a=this.$15(a);if(!c&&!a)return;if(!this.props.value){var d=b("TimeOfDay").create(c?0:12);this.$12(d);return}d=n(this.props.value);(c&&d.meridiem!==j||a&&d.meridiem!==k)&&this.$4(1)}.bind(this),c}a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.classNames,d=a.disabled,e=a.icon,f=a.placeholder,g=a.value;a=babelHelpers.objectWithoutProperties(a,["classNames","disabled","icon","placeholder","value"]);var i,j,k=n(g),m=c.columnClassNames||{};if(l)i=b("React").createElement(b("AbstractTimeInputColumn.react"),{className:c.meridiem,classNames:m,disabled:d,label:h._("meridiem"),ref:"ampm",value:k.meridiem,onBlur:this.$1,onFocus:this.$2,onFocusPrevAttempt:this.$3,onSpin:this.$4,onType:this.$5}),j=b("React").createElement(b("AbstractTimeInputColumn.react"),{className:c.hours,classNames:m,disabled:d,label:h._("hours"),placeholder:f.hour,ref:"hours",value:k.hours12,onBlur:this.$1,onFocus:this.$2,onFocusNextAttempt:this.$3,onSpin:this.$6,onType:this.$7});else{var o=k.hours24==null||k.hours24>9?k.hours24:"0"+k.hours24;j=b("React").createElement(b("AbstractTimeInputColumn.react"),{className:c.hours,classNames:m,disabled:d,label:h._("hours"),placeholder:f.hour,ref:"hours",value:o,onBlur:this.$1,onFocus:this.$2,onFocusNextAttempt:this.$3,onSpin:this.$6,onType:this.$7})}o=e?b("React").createElement("div",{className:c.icon},e):null;e=b("joinClasses")(this.props.className,c.root,d?c.disabled:null,b("UserAgent").isBrowser("IE")?c.ie:null,this.state.focused?c.focused:null,g==null?c.placeholder:null);k=k.minutes==null||k.minutes>9?k.minutes:"0"+k.minutes;return b("React").createElement("div",babelHelpers["extends"]({},a,{"aria-atomic":!0,"aria-live":"polite","aria-label":g?g.format("g:iA"):"",className:e,role:"group"}),o,b("React").createElement("div",{dir:"ltr",className:c.text},j,b("React").createElement("span",{"aria-hidden":!0,className:c.space},b("DateFormatConfig").timeSeparator),b("React").createElement(b("AbstractTimeInputColumn.react"),{className:c.minutes,classNames:m,disabled:d,label:h._("minutes"),placeholder:f.minute,ref:"minutes",value:k,onBlur:this.$1,onFocus:this.$2,onFocusNextAttempt:l?this.$8:null,onFocusPrevAttempt:this.$9,onSpin:this.$10,onType:this.$11}),i))};a.propTypes={classNames:c.shape({columnClassNames:c.shape({column:c.string,columnBody:c.string,columnValue:c.string,focused:c.string,textInput:c.string}),disabled:c.string,focused:c.string,hours:c.string,icon:c.string,ie:c.string,meridiem:c.string,minutes:c.string,placeholder:c.string,root:c.string,space:c.string,text:c.string}).isRequired,disabled:c.bool,icon:c.element,maxValue:c.instanceOf(b("TimeOfDay")),minValue:c.instanceOf(b("TimeOfDay")),onBlur:c.func,onChangeValueAttempt:c.func,onFocus:c.func,placeholder:c.shape({hour:c.string,minute:c.string}),spinMinutesInterval:c.number,value:c.instanceOf(b("TimeOfDay"))};a.defaultProps={classNames:{columnClassNames:{column:"_4nww",columnBody:"_4nwx",columnValue:"_4nx3",textInput:"_4nx5"},disabled:"_4nx6",hours:"_4nx7",icon:"_4nx8",ie:"_4nx9",meridiem:"_4nxa",minutes:"_4nxe",root:"_4nxg",space:"_4nxh",text:"_4nxi"},placeholder:{hour:"",minute:""},spinMinutesInterval:1};function n(a){if(!a)return{};var b=a.hour%12;b=b===0?12:b;return{hours12:b,hours24:a.hour,meridiem:a.hour<12?j:k,minutes:a.minute}}function o(a,b,c,d){if(isNaN(b)||b.length!==1)return null;b=parseInt(b,10);if(b>d)return null;a=a*10+b;return a<=d?a>=c?a:null:b>=c?b:null}e.exports=a}),null);
__d("XUITimeInput.react",["cx","AbstractTimeInput.react","React","TimeInputParser","TimeOfDay","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();c=b("React").PropTypes;var h=b("TimeOfDay").create(12),i=babelHelpers["extends"]({},b("AbstractTimeInput.react").defaultProps.classNames,{columnClassNames:babelHelpers["extends"]({},b("AbstractTimeInput.react").defaultProps.classNames.columnClassNames,{column:"_4nww _5pw0",columnValue:"_4nx3 _5pw6",focused:"_5pw1"}),disabled:"_4nx6 _5o9l",focused:"_5pwl",space:"_4nxh _5pwa"});function a(a){var c=a.maxTime,d=a.minTime,e=a.onChangeValueAttempt,f=a.shouldSetDefaultTime,g=a.time,k=babelHelpers.objectWithoutProperties(a,["maxTime","minTime","onChangeValueAttempt","shouldSetDefaultTime","time"]);g=j(g);g===null&&f&&(g=h);return b("React").createElement(b("AbstractTimeInput.react"),babelHelpers["extends"]({},k,{className:b("joinClasses")(a.className,"_5pw9"),classNames:i,maxValue:j(c),minValue:j(d),onChangeValueAttempt:e&&function(a){a!=null&&e(a.valueOf())},value:g}))}function j(a){a=isNaN(a)?null:b("TimeInputParser").fromTime(a);a!==null&&(a=b("TimeOfDay").create(a.hours24,a.minutes));return a}d=b("AbstractTimeInput.react").propTypes;f=d.classNames;g=d.value;d=babelHelpers.objectWithoutProperties(d,["classNames","value"]);void f;void g;a.propTypes=babelHelpers["extends"]({},d,{maxTime:c.number,minTime:c.number,onChangeValueAttempt:c.func,shouldSetDefaultTime:c.bool,time:c.number});e.exports=a}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){__p&&__p();var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("XControllerWithPageTokenURIUpdater",[],(function(a,b,c,d,e,f){a={updateURI:function(a){window.history&&window.history.replaceState(window.history.state,null,a)}};e.exports=a}),null);
__d("CommercialBreakHostStoryComponentType",[],(function(a,b,c,d,e,f){a=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});e.exports=a}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakHostStoryComponentType","DOMQuery","EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("EventEmitter"))(),h=new Map(),i=new Map(),j=new Map();function k(a){a=a;var b=[];while(a)b.unshift(a),a=a.parentElement;return b}function l(a,b){__p&&__p();if(a===null)return null;var c=k(a);a=null;var d=null;b.forEach(function(b){var e=b[0];b=b[1];e=k(e);for(var f=0;f<c.length;++f)if(c[f]!==e[f]){(d===null||f>d)&&(d=f,a=b);break}});return a}a={registerVideoPlayerController:function(a,c){var d=a.getVideoID(),e=h.get(d);e?e.push(a):(e=[a],h.set(d,e));d=null;c===b("CommercialBreakHostStoryComponentType").POP_OVER_MENU?d=this.findPopoverAsyncMenuForVideoPlayerController(a):c===b("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER&&(d=this.findHostStoryControllerForVideoPlayerController(a));if(!d)return;g.emit(d.getInstanceID()+"/register",a)},registerHostStoryController:function(a,b,c){var d=j.get(b);d?d.push(a):(d=[a],j.set(b,d));this.findVideoControllerForStoryController(a,b,c)},registerPopoverAsyncMenu:function(a,b){var c=b.host_video_id;if(!c)return;a=new m(a,b);b=a.getInstanceID();var d=i.get(c);d||(d=[],i.set(c,d));d.push(a);this._informStoryComponentRegister(a.getTriggerElem(),b,c,a.registerVideoPlayerController.bind(a))},_informStoryComponentRegister:function(a,b,c,d){g.addListener(b+"/register",d);d=this.findVideoPlayerControllerForElement(a,c);if(!d)return;g.emit(b+"/register",d)},findVideoPlayerControllerForElement:function(a,b){b=h.get(b);return!b?null:l(a,b.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")}).map(function(a){return[a.getRootNode(),a]}))},findPopoverAsyncMenuForVideoPlayerController:function(a){var b=i.get(a.getVideoID());return!b?null:l(a.getRootNode(),b.map(function(a){return[a.getTriggerElem(),a]}))},findHostStoryControllerForVideoPlayerController:function(a){var c=j.get(a.getVideoID());if(!c)return null;for(var d=0;d<c.length;d++){var e=c[d];if(b("DOMQuery").contains(e.getContainerElement(),a.getRootNode()))return e}return null},findVideoControllerForStoryController:function(a,c,d){__p&&__p();g.addListener(a.getInstanceID()+"/register",d);d=h.get(c);if(!d)return;d=d.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")});for(var c=0;c<d.length;c++){var e=d[c];if(b("DOMQuery").contains(a.getContainerElement(),e.getRootNode())){g.emit(a.getInstanceID()+"/register",e);return}}}};function m(a,b){this._menu=a,this._originalEndpoint=this._menu._endpoint,this._additionalData=b}m.prototype.registerVideoPlayerController=function(a){a.addListener("commercialBreak/updateOptionMenuURI",function(a){this._updateEndpoint(a)}.bind(this)),a.addListener("commercialBreak/recoverOptionMenuURI",function(){return this._updateEndpoint(this._originalEndpoint)}.bind(this))};m.prototype._updateEndpoint=function(a){var b=this._menu;b.setMenu(b._loadingMenu);b._setFocus(b._loadingMenu);b._endpoint=a;b._fetched&&(b._fetched=!1,b.fetchMenu())};m.prototype.getInstanceID=function(){return this._menu._instanceId.toString()};m.prototype.getTriggerElem=function(){return this._menu.getTriggerElem()};m.prototype.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};e.exports=a}),null);