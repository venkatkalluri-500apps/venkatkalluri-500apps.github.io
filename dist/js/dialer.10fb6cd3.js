(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialer","ninjacapture32","ninjacapture38"],{"2a22":function(e,t,_){"use strict";_("55b5")},"2ae6":function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c964"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("276c"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("e954"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("920b"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("92a6"),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_jwt__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9b7b"),_core_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("a11a"),CallBack_Server="https://api.${region}.500apps.com/pbxplus/v1/contact-info?app_name=pbxplus",CallBack=function(_Data){Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["a"])(CallBack,_Data);var _super=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["a"])(CallBack);function CallBack(){return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["a"])(this,CallBack),_super.apply(this,arguments)}return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["a"])(CallBack,[{key:"add",value:function(){var _add=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function _callee(form){var headers,region,url,response;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.next=2,_jwt__WEBPACK_IMPORTED_MODULE_7__["a"].setHeader();case 2:return headers=_context.sent,headers["x-api-key"]=form.api_key,region=this.getRegion(),url=CallBack_Server,url=eval("`"+url+"`"),_context.next=9,axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url,form,{headers:headers});case 9:return response=_context.sent,_context.abrupt("return",response.data);case 11:case"end":return _context.stop()}}),_callee,this)})));function add(e){return _add.apply(this,arguments)}return add}()}]),CallBack}(_core_data__WEBPACK_IMPORTED_MODULE_8__["a"]);__webpack_exports__["a"]=new CallBack},"4dda":function(e,t,_){"use strict";_("7046")},"55b5":function(e,t,_){},7046:function(e,t,_){},"9b23":function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c964"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("276c"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("e954"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("920b"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("92a6"),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_jwt__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9b7b"),_core_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("a11a"),Call_Log="https://api.${region}.500apps.com/pbxplus/v1/call-log?app_name=pbxplus",CallLog=function(_Data){Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["a"])(CallLog,_Data);var _super=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["a"])(CallLog);function CallLog(){return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["a"])(this,CallLog),_super.apply(this,arguments)}return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["a"])(CallLog,[{key:"add",value:function(){var _add=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function _callee(form){var headers,region,url,response;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.next=2,_jwt__WEBPACK_IMPORTED_MODULE_7__["a"].setHeader();case 2:return headers=_context.sent,headers["x-api-key"]=form.api_key,region=this.getRegion(),url=Call_Log,url=eval("`"+url+"`"),_context.next=9,axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(url,form,{headers:headers});case 9:return response=_context.sent,_context.abrupt("return",response.data);case 11:case"end":return _context.stop()}}),_callee,this)})));function add(e){return _add.apply(this,arguments)}return add}()}]),CallLog}(_core_data__WEBPACK_IMPORTED_MODULE_8__["a"]);__webpack_exports__["a"]=new CallLog},a78e:function(e,t,_){var a,n;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(i){var r;if(a=i,n="function"===typeof a?a.call(t,_,t,e):a,void 0===n||(e.exports=n),r=!0,e.exports=i(),r=!0,!r){var s=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=s,o}}})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var _=arguments[e];for(var a in _)t[a]=_[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function _(a){function n(){}function i(t,_,i){if("undefined"!==typeof document){i=e({path:"/"},n.defaults,i),"number"===typeof i.expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(_);/^[\{\[]/.test(r)&&(_=r)}catch(l){}_=a.write?a.write(_,t):encodeURIComponent(String(_)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var o in i)i[o]&&(s+="; "+o,!0!==i[o]&&(s+="="+i[o].split(";")[0]));return document.cookie=t+"="+_+s}}function r(e,_){if("undefined"!==typeof document){for(var n={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var s=i[r].split("="),o=s.slice(1).join("=");_||'"'!==o.charAt(0)||(o=o.slice(1,-1));try{var l=t(s[0]);if(o=(a.read||a)(o,l)||t(o),_)try{o=JSON.parse(o)}catch(c){}if(n[l]=o,e===l)break}catch(c){}}return e?n[e]:n}}return n.set=i,n.get=function(e){return r(e,!1)},n.getJSON=function(e){return r(e,!0)},n.remove=function(t,_){i(t,"",e(_,{expires:-1}))},n.defaults={},n.withConverter=_,n}return _((function(){}))}))},b9ba:function(e,t,_){"use strict";_.r(t);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{class:e.theme},[_("Header",{staticClass:"visitor-btns",attrs:{widgetData:e.widgetData,domain_id:e.domain_id,from:"visitor"},on:{visitor_click:e.showCallNow}}),"call_back"!=e.visitor_select&&"connected"!=e.status?_("div",{staticClass:"height-288 d-flex justify-content-center p-3"},[_("div",{staticClass:"p-2 font-size-13px"},[e._v(e._s(e.widgetData.description))])]):e._e(),"call_back"==e.visitor_select?_("CallBack",{attrs:{call_flow_id:e.flow_id,api_key:e.api_key,domain_id:e.domain_id}}):e._e(),"call_now"==e.visitor_select?_("div",{class:"connected"==e.status?"callnow-keypad":""},["connected"==e.status?_("div",{staticClass:"width-400"},[_("b-card",{staticClass:"h-100 bg-dailer rounded-20 mb-0",attrs:{"body-class":"dailer-padding"}},["visitor"!=e.$route.params.from?_("div",{staticClass:"d-flex justify-content-center"},[_("img",{staticClass:"avatar rounded-circle mb-3",attrs:{src:"https://infinity.500apps.com/avatars/avatar-47.png"}})]):e._e(),_("Timer",{staticClass:"timer-alignment",attrs:{domain_id:e.domain_id,connection:e.connection}}),_("KeyPad",{attrs:{domain_id:e.domain_id},on:{digitPressed:e.digitPressed}})],1)],1):e._e()]):e._e(),_("div",{staticClass:"text-center d-flex justify-content-between"},["call_now"==e.visitor_select?_("b-button",{staticClass:"rounded-top-0",style:{background:"Call Now"==e.buttonName?e.widgetData.btncolor:e.widgetData.btncolor2,borderColor:"Call Now"==e.buttonName?e.widgetData.btncolor:e.widgetData.btncolor2},attrs:{disabled:!e.isTwilioReady,block:"",variant:e.variant},on:{click:e.prefer}},[_("span",{staticClass:"fe fe-phone small mr-2"}),e._v(e._s(e.buttonName)+" "),e.isTwilioReady?e._e():_("b-spinner",{attrs:{small:"",variant:"light",label:"Spinning"}})],1):e._e()],1),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"pbx-widget-footer"},[_("p",{staticClass:"font-size-10px d-flex align-items-center justify-content-center mb-0"},[e._v(" Powered by "),_("a",{staticClass:"ml-2 text-primary cursor-pointer",attrs:{rel:"nofollow",onclick:"window.open('http://www.pbxplus.com/', '_blank')"}},[e._v("PBXPlus")])])])}],i=(_("99af"),_("d3b7"),_("25f0"),_("96cf"),_("c964")),r=_("f3f3"),s=_("2f62"),o=_("89c7"),l=_("73c2"),c=_("9846"),u=_("2cfc"),d=_("9b23"),p=_("f086"),m={components:{CallBack:p["default"],Header:o["default"],KeyPad:l["default"],Timer:c["default"]},props:{flow_id:String,api_key:String,domain_id:String},data:function(){return{theme:"visitor preview-keypad",is_call_now:!1,status:"",connectedCall:!1,visitor_select:"",connection:"",buttonName:"Call Now",variant:"success",widgetData:{},showText:!1}},computed:Object(r["a"])({},Object(s["b"])(["isTwilioReady","device","checkDeviceStatus"])),watch:{checkDeviceStatus:function(e){"connect"===e?(this.connectedCall=!0,this.status="connected"):"disconnect"==e&&this.updateCallLog()}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.visitor_select="call_now",e.prev=1,e.next=4,u["a"].getCapabilityVisitor(this.domain_id,this.flow_id,this.api_key);case 4:t=e.sent,this.$store.dispatch("getToken","".concat(t[0].pref_value,"?To=PBX_Guest_").concat(Math.floor(1e5*Math.random()))),this.widgetData=JSON.parse(t[0].widgets),this.theme="#12263F"==this.widgetData.color?"visitor preview-keypad widget-dark":"visitor preview-keypad",e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](1);case 12:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{initiateCall:function(){this.connection=this.device.connect({callflow_id:this.flow_id,domain_id:this.domain_id,api_key:this.api_key}),this.$store.dispatch("twilioDeviceListeners"),this.twilioConnection=this.connection},digitPressed:function(e){this.twilioConnection.sendDigits(e.toString())},disconnect_call:function(){this.device.disconnectAll(),this.connectedCall=!1,this.status=""},showCallNow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function _(){return regeneratorRuntime.wrap((function(_){while(1)switch(_.prev=_.next){case 0:if(t.visitor_select=e,"call_back"!=e){_.next=4;break}return _.next=4,t.disconnect_call();case 4:case"end":return _.stop()}}),_)})))()},prefer:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.is_call_now=!e.is_call_now,e.visitor_select="call_now",e.showText=!1,!e.is_call_now){t.next=11;break}return t.next=6,e.initiateCall();case 6:e.buttonName="Calling",e.variant="danger",e.buttonName="End Call",t.next=15;break;case 11:return t.next=13,e.disconnect_call();case 13:e.buttonName="Call Now",e.variant="success";case 15:case"end":return t.stop()}}),t)})))()},updateCallLog:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var _;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.buttonName="Call Now",e.variant="success",e.connection="",_={},_.callSid=e.twilioConnection.parameters.CallSid,_.flow_id=e.flow_id,_.api_key=e.api_key,_.domain_id=e.domain_id,d["a"].add(_);case 9:case"end":return t.stop()}}),t)})))()}}},b=m,f=(_("4dda"),_("2877")),h=Object(f["a"])(b,a,n,!1,null,"eda6f4ca",null);t["default"]=h.exports},c5f4:function(e,t,_){"use strict";_.r(t);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",["new"==e.status?_("div",{staticClass:"loading-content"},[_("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1):e._e(),"permission_pending"==e.status?[_("PermissionMessage")]:e._e(),"ready"==e.status?["visitor"==e.from?_("Visitor",{attrs:{domain_id:e.domain_id,flow_id:e.destination,api_key:e.api_key}}):e._e(),"agent"==e.from?_("Agent",{ref:"agent",attrs:{app_name:"pbxplus",number:e.destination,is_make_call:e.is_make_call,is_start_timer:e.is_start_timer,config:e.config}}):e._e(),"voxdesk"==e.from&&e.enable?_("Voxdesk",{ref:"voxdesk_ref",attrs:{app_name:e.from,agent_id:e.destination}}):e._e()]:e._e()],2)},n=[],i=(_("96cf"),_("c964")),r=_("276c"),s=_("e954"),o=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"getMedia",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=null,_={audio:!0},e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia(_);case 5:return t=e.sent,e.abrupt("return",{stream:t,msg:"",status:"ready"});case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",{error:e.t0,msg:"Please provide permissions to make call",status:"permission_pending"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),l=new o,c=_("1eed"),u=_("b9ba"),d=_("f154"),p=_("d13d"),m=_("a78e"),b=_.n(m),f=_("7f2c"),h={components:{Agent:c["default"],Visitor:u["default"],PermissionMessage:d["default"],Voxdesk:p["default"]},data:function(){return{status:"new",from:"",api_key:"",destination:0,loadType:"",enable:!1,is_make_call:!0,is_start_timer:!0,config:{disablePlayButton:!0}}},created:function(){var e=this;window.addEventListener("message",(function(t){console.log("message",t),"iframe"==t.data.loadType?e.setCookie(t.data.jwt):"make-call"==t.data.loadType?(window.self=e,e.destination=t.data.number,e.$refs.agent.number=e.destination,e.$refs.agent.$refs.keypad.phone_number=e.destination,e.$refs.agent.initiateCall()):t.data.is_conference&&(e.$refs.voxdesk_ref.$refs.agent_ref.$refs.conference_call_ref.conference_sid=t.data.conference_sid),"incomming"==t.data.loadType&&f["a"].$emit("incoming",t.data)})),"number"==this.$route.params.destination&&(this.is_start_timer=!1,this.is_make_call=!1)},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.getMedia();case 2:t=e.sent,"visitor"==this.$route.params.from&&(this.domain_id=this.$route.query.domain_id),this.status=t.status,this.from=this.$route.params.from,this.destination=this.$route.params.destination,this.api_key=this.$route.params.api_key;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{setCookie:function(e){var t={jwt:e};localStorage.setItem("token",JSON.stringify(t)),b.a.set("token",t,{secure:!0,sameSite:"None"}),this.enable=!0}},destroyed:function(){localStorage.removeItem("token")}},g=h,v=_("2877"),w=Object(v["a"])(g,a,n,!1,null,null,null);t["default"]=w.exports},d13d:function(e,t,_){"use strict";_.r(t);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("Agent",{ref:"agent_ref",staticClass:"bg-dailer-color",attrs:{isLoad:"enable",number:e.agent_id,app_name:e.app_name,config:e.config},on:{callConnected:e.callConnected}})],1)},n=[],i=_("1eed"),r={components:{Agent:i["default"]},props:{agent_id:{type:String},app_name:{type:String}},data:function(){return{enable:!1,config:{disablePlayButton:!0,disableVoicemailButton:!0}}},methods:{callConnected:function(){parent.postMessage({isCampaignStart:!0},"*")}}},s=r,o=(_("2a22"),_("2877")),l=Object(o["a"])(s,a,n,!1,null,"b959b990",null);t["default"]=l.exports},f086:function(e,t,_){"use strict";_.r(t);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"width-400"},[_("b-card",{staticClass:"visitor-callback mb-0",attrs:{"body-class":"p-3"}},[_("b-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[_("b-form-group",{staticClass:"mb-3",attrs:{label:"Enter Name","label-for":"input-name",size:"sm"}},[_("b-form-input",{attrs:{size:"sm",type:"text",oninvalid:"this.setCustomValidity('Please enter proper name')",oninput:"this.setCustomValidity('')",id:"input-name",placeholder:"Enter Name",pattern:"[a-zA-Z ]{3,30}",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),_("b-form-group",{staticClass:"mb-3",attrs:{label:"Enter Phone Number",size:"sm"}},[_("VueTelInput",{attrs:{required:"",size:"sm"},on:{"country-changed":e.countryChanged},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),_("b-form-group",{staticClass:"mb-3",attrs:{label:"Call Now/Schedule this later",size:"sm"}},[_("b-form-select",{staticClass:"mb-0",attrs:{size:"sm",options:e.sendType,required:""},model:{value:e.form.send_type,callback:function(t){e.$set(e.form,"send_type",t)},expression:"form.send_type"}})],1),"Scheduled"==e.form.send_type?_("b-row",[_("b-col",{attrs:{md:"12",size:"sm"}},[_("b-form-group",{staticClass:"mb-3",attrs:{label:"Callback Time",size:"sm"}},[_("b-form-input",{staticClass:"form-control pr-2",attrs:{type:"datetime-local",size:"sm",id:"callbacktime",required:""},model:{value:e.form.call_back_time,callback:function(t){e.$set(e.form,"call_back_time",t)},expression:"form.call_back_time"}})],1)],1),_("b-col",{attrs:{lg:"12"}},[_("label",{attrs:{size:"sm"}},[e._v("Timezone")]),_("b-form-select",{attrs:{size:"sm",options:e.getTimezones(),required:""},model:{value:e.form.timezone,callback:function(t){e.$set(e.form,"timezone",t)},expression:"form.timezone"}})],1)],1):e._e(),_("div",{staticClass:"d-flex justify-content-end border-top mt-3 pt-3"},[_("b-button",{attrs:{size:"sm",block:"",type:"submit",variant:"primary px-5",disabled:e.isDisabled}},[e._v("Submit")])],1),_("p",{staticClass:"mb-0 text-right mt-2 text-primary",class:e.errorClass},[e._v(e._s(e.message))])],1)],1)],1)},n=[],i=(_("caad"),_("2532"),_("96cf"),_("c964")),r=_("f62e"),s=_("2ae6"),o=_("7f45"),l=_.n(o),c={components:{VueTelInput:r["a"]},props:["domain_id","api_key","call_flow_id"],data:function(){return{form:{name:"",number:"",timezone:"",api_key:"",call_flow_id:"",domain_id:"",message:"",call_back_time:"",send_type:"Call now",country_code:""},isDisabled:!1,errorClass:"",message:"",sendType:[{value:"Call now",text:"Call now"},{value:"Scheduled",text:"Schedule later"}]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form.timezone=l.a.tz.guess();case 1:case"end":return t.stop()}}),t)})))()},methods:{countryChanged:function(e){this.form.country_code=e.dialCode},getTimezones:function(){var e=l.a.tz.names();return e.unshift({text:"Select timezone",value:""}),e},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.domain_id=e.domain_id,e.form.call_flow_id=e.call_flow_id,e.form.api_key=e.api_key,e.message="saving..",e.isDisabled=!1,t.prev=5,t.next=8,s["a"].add(e.form);case 8:e.message="Saved your data successfully",e.errorClass="text-primary",t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),t.t0.response.data.error.includes("Duplicate entry")?(e.message="Data already exists",e.errorClass="text-danger"):(e.message="Unable to save, Please try again",e.errorClass="text-danger");case 15:setTimeout((function(){e.message=""}),2e3);case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))()}}},u=c,d=_("2877"),p=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=p.exports},f154:function(e,t,_){"use strict";_.r(t);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"d-flex flex-column justify-content-center align-items-center p-4"},[_("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}),_("p",{staticClass:"mb-0 text-muted text-center mt-3"},[e._v("Please grant access to your webcam and microphone so that you can use in your dialer")])],1)},n=[],i=_("2877"),r={},s=Object(i["a"])(r,a,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=dialer.10fb6cd3.js.map