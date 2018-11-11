if (self.CavalryLogger) { CavalryLogger.start_js(["GzIJ9"]); }

__d("ProfileFunFactsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={SINGLE_PROMPT_ANSWER_QUESTION:g._("Add Answer"),SINGLE_PROMPT_ANSWER_QUESTION_SHORT:g._("Answer"),SINGLE_PROMPT_ASK_QUESTION_PLACEHOLDER:g._("What are you curious about?"),SINGLE_PROMPT_ASK_NOTICE:g._("Your question will be added to a list of questions anyone on Facebook can answer. Your post's privacy won't be changed."),SINGLE_PROMPT_ASK_NUX:g._("Create your own questions for your friends and anyone on Facebook to answer"),SINGLE_PROMPT_DIALOG_TITLE:g._("Did You Know"),SINGLE_PROMPT_BACK_BUTTON:g._("Previous"),SINGLE_PROMPT_NEXT_BUTTON:g._("Next"),SINGLE_PROMPT_SAVE_AND_TAG:g._("Save and Tag Friends"),MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT:g._("It will be unavailable for people to answer and your name will be removed from existing posts. You won't be able to undo this."),MANAGE_QUESTIONS_DELETE_DIALOG_TITLE:g._("Archive this question?"),MANAGE_QUESTIONS_DELETE_BUTTON_TEXT:g._("Archive"),MANAGE_QUESTIONS_NULL_STATE_TITLE:g._("No Questions Yet"),MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT:g._("Create questions for your friends and anyone on Facebook to answer."),MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT:g._("Create Question"),QUESTION_OF_THE_DAY_LABEL:g._("QUESTION OF THE DAY"),MTOUCH_SINGLE_PROMPT_COMPOSER_BUTTON:g._("Add your answer..."),MTOUCH_SINGLE_PROMPT_BACK_BUTTON:g._("PREVIOUS"),MTOUCH_SINGLE_PROMPT_NEXT_BUTTON:g._("NEXT")};e.exports=a}),null);
__d("ProfileFunFactsTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COLLECTION_ENTRY_POINT:"profile_fun_facts_collection_entry",COMPOSER_TAGGER:"profile_fun_facts_composer_tagger",DIALOG:"profile_fun_facts_dialog",SELECTOR_RANDOMIZE:"profile_fun_facts_selector_randomize",SELECTOR_SELECT:"profile_fun_facts_selector_select"})}),null);
__d("FunFactSinglePromptSelectorActionBar.react",["ix","cx","FlexLayout.react","Image.react","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION||a.entryPoint===b("ProfileFunFactsEntryPoint").PERMALINK;return b("React").createElement(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),disabled:a.backButtonDisabled||a.disabled,image:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("533029"):g("513239")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_BACK_BUTTON,labelIsHidden:c,onClick:a.onUndo,size:"large"})}function k(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION||a.entryPoint===b("ProfileFunFactsEntryPoint").PERMALINK;return b("React").createElement(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),"data-testid":b("ProfileFunFactsTestIDs").SELECTOR_RANDOMIZE,disabled:a.disabled,imageRight:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("514459"):g("408315")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_NEXT_BUTTON,labelIsHidden:c,onClick:a.onRandomize,size:"large"})}function l(a){return b("React").createElement(b("XUIButton.react"),{className:"_4ysf","data-testid":b("ProfileFunFactsTestIDs").SELECTOR_SELECT,disabled:a.disabled,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_QUESTION_SHORT,onClick:a.onSelect,size:"large",use:"confirm"})}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=this.props.hasBackgroundStyle;return b("React").createElement(b("FlexLayout.react"),{className:(a?"_1c72":"")+" _2ph_",justify:"all"},b("React").createElement(j,this.props),b("React").createElement(l,this.props),b("React").createElement(k,this.props))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("FunFactSinglePromptSelectorBody.react",["cx","FlexLayout.react","React","ShimButton.react","TextWithEmoticons.react","XUISpinner.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function i(a){var c=a.prompt;a=a.onSelect;return b("React").createElement("div",{className:c.backgroundStyle?"_3ljc":""},b("React").createElement(b("ShimButton.react"),{className:"_3dlu",onClick:a},b("React").createElement("div",null,b("React").createElement(b("TextWithEmoticons.react"),{key:"emoji",size:32,text:c.emoji}),b("React").createElement(b("XUIText.react"),{className:"_3gi9 _3-8y",display:"block",size:"header1"},c.title),c.isCrowdsourced?b("React").createElement(b("XUIText.react"),{className:"_68km _3-8w",display:"block"},c.attribution):null)))}h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.prompt;a=a.onSelect;return b("React").createElement(b("FlexLayout.react"),{align:c?"stretch":"center",className:"_3gia",direction:"vertical",justify:"center"},c?b("React").createElement(i,{onSelect:a,prompt:c}):b("React").createElement(b("XUISpinner.react"),{size:"large"}))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("FunFactSinglePromptSelectorHeader.react",["ix","cx","CurrentUser","FacebookAppIDs","FlexLayout.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsStrings","React","ShimButton.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a){a=a.prompt;if(!a.isQuestionOfTheDay)return null;a=a.backgroundStyle?g("489589"):g("507318");return b("React").createElement(b("FlexLayout.react"),{align:"center",justify:"center"},b("React").createElement(b("Image.react"),{className:"_2d1b",src:a}),b("React").createElement(b("XUIText.react"),{className:"_2d1c _3-8s",weight:"bold"},b("ProfileFunFactsStrings").QUESTION_OF_THE_DAY_LABEL),b("React").createElement(b("Image.react"),{className:"_68g4",src:a}))}function k(a){a=a.prompt.timeRemaining;return!a?null:b("React").createElement(b("FlexLayout.react"),{justify:"center"},b("React").createElement(b("XUIText.react"),{className:"_68g6"},a))}function l(a){var c=a.prompt,d=a.entryPoint,e=c.socialProof;if(!e)return null;var f=function(){var f=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(a.isGroup?"group":"unknown").setEngagementType("tap").setItemType("social_proof").setEventMetadata({entry_point:d,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay?"true":"false"}).setAppID(b("FacebookAppIDs").WWW),g=null;e.friendsAnswersFeedURI?(f.setItemSubtype("friends_answers_feed"),g=e.friendsAnswersFeedURI):e.answerPermalinkURI?(f.setItemSubtype("permalink"),g=e.answerPermalinkURI):f.setItemSubtype("text");f.log();g!==null&&window.open(g)},g=e.friendsAnswersFeedURI||e.answerPermalinkURI;return b("React").createElement(b("ShimButton.react"),{className:"_68g8"+(g?" _4wzw":""),onClick:f},b("React").createElement(b("FlexLayout.react"),{align:"start",className:"_2pin _2pit",direction:"vertical"},e.label))}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=!!this.props.prompt.backgroundStyle;return b("React").createElement("div",{className:(a?"_2eqj":"")+" _3-8n"},b("React").createElement(j,this.props),b("React").createElement(k,this.props),b("React").createElement(l,this.props))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("XProfileFunFactsSinglePromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/single_prompt/fetch/",{cursor:{type:"String"},entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},fun_fact_prompt_types:{type:"EnumVector",defaultValue:[],enumType:{member:1}},fetch_amount:{type:"Int"},pinned_prompt_id:{type:"FBID"},random_seed:{type:"Int"}})}),null);
__d("FunFactSinglePromptSelector.react",["cx","AsyncRequest","CurrentUser","FacebookAppIDs","FlexLayout.react","FunFactSinglePromptSelectorActionBar.react","FunFactSinglePromptSelectorBody.react","FunFactSinglePromptSelectorHeader.react","ProfileEngagementTypedLogger","Random","React","XProfileFunFactsSinglePromptFetchController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=10;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={cursor:null,isLoading:!0,prompts:[],selectedIndex:-1},this.$1=b("Random").uint32(),this.$2=null,this.$5=function(){var a=this.state.selectedIndex;a<this.state.prompts.length-1?this.setState({selectedIndex:a+1}):this.state.cursor?this.$3():this.setState({selectedIndex:0});this.$4("refresh",this.state.prompts[a])}.bind(this),this.$6=function(){var a=this.state.selectedIndex;if(a<=0)return;this.setState({selectedIndex:a-1});this.$4("undo",this.state.prompts[a])}.bind(this),c}a.prototype.componentDidMount=function(){this.$3(this.props.pinnedPromptID)};a.prototype.componentWillUnmount=function(){this.$2&&this.$2.abandon()};a.prototype.componentDidUpdate=function(a,b){this.state.selectedIndex!==b.selectedIndex&&this.$4("impression",this.state.prompts[this.state.selectedIndex])};a.prototype.$4=function(a,c){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType(a).setItemType("question_prompt").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay?"true":"false"}).setAppID(b("FacebookAppIDs").WWW).log()};a.prototype.$7=function(a){this.props.onSelect(this.state.prompts[this.state.selectedIndex],a),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType("exit").setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,tap_target:"add_content"}).setAppID(b("FacebookAppIDs").WWW).log()};a.prototype.$3=function(a){var c=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setInt("fetch_amount",i).setInt("random_seed",this.$1);a&&c.setFBID("pinned_prompt_id",a.toString());this.state.cursor&&c.setString("cursor",this.state.cursor);this.setState({isLoading:!0});this.$2=new(b("AsyncRequest"))(c.getURI()).setHandler(function(a){a=a.getPayload();var b=this.state.selectedIndex+1,c=this.state.prompts.concat(a.prompts);this.setState({cursor:a.cursor,isLoading:!1,prompts:c,selectedIndex:b})}.bind(this));this.$2.send()};a.prototype.$8=function(){return this.state.isLoading&&this.state.selectedIndex<0?null:this.state.prompts[this.state.selectedIndex].backgroundStyle};a.prototype.render=function(){var a=this.state.isLoading?null:this.state.prompts[this.state.selectedIndex],c=b("React").createElement("div",null);a!==null&&(c=b("React").createElement(b("FunFactSinglePromptSelectorHeader.react"),{entryPoint:this.props.entryPoint,isGroup:this.props.isGroup,prompt:a}));return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_2nz1",direction:"vertical",justify:"all",style:this.$8()||undefined},c,b("React").createElement(b("FunFactSinglePromptSelectorBody.react"),{onSelect:this.$7.bind(this,"card"),prompt:a}),b("React").createElement(b("FunFactSinglePromptSelectorActionBar.react"),{backButtonDisabled:this.state.selectedIndex===0,disabled:this.state.isLoading,entryPoint:this.props.entryPoint,hasBackgroundStyle:!!this.$8(),onRandomize:this.$5,onSelect:this.$7.bind(this,"add_answer_footer"),onUndo:this.$6}))};e.exports=a}),null);
__d("XProfileFunFactsSelectorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/selector/",{entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},group_id:{type:"FBID"},pinned_prompt_id:{type:"FBID"},show_ask_tagger:{type:"Exists",defaultValue:!1},skip_selector:{type:"Bool",defaultValue:!1}})}),null);
__d("FunFactSinglePromptSelectorContainer.react",["cx","AsyncRequest","FunFactSinglePromptSelector.react","React","XProfileFunFactsSelectorController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setFBID("pinned_prompt_id",a.id.toString()).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))().setURI(a).send()}.bind(this),c}a.prototype.render=function(){return b("React").createElement("div",{className:"_64nu"},b("React").createElement(b("FunFactSinglePromptSelector.react"),{entryPoint:this.props.entryPoint,onSelect:this.$1,pinnedPromptID:this.props.pinnedPromptID}))};e.exports=a}),null);