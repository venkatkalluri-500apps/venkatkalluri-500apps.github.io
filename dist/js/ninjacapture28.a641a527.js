(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture28"],{"2cfc":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7db0"),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("c964"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("276c"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("e954"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("920b"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("92a6"),axios__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),_jwt__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("9b7b"),_core_data__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("a11a"),User_Server="https://api.${region}.500apps.com/auth/v1/users/domain_user_details?limit=50",Server="https://api.${region}.500apps.com/pbxplus/v1",Agent_Capability="https://pref.${region}.500apps.com/v2/app_pref?where=app_name='${app_name}' and pref_key='twilioDialer'",Voicemail_Server="https://api.${region}.500apps.com/voxdesk/v1/voicemail-drop/${callsid}?audio_url=${audio_url}",Media_Server="https://api.${region}.500apps.com/files/?app=pbxplus&limit=50",DialerData=function(_Data){Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["a"])(DialerData,_Data);var _super=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["a"])(DialerData);function DialerData(){return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["a"])(this,DialerData),_super.apply(this,arguments)}return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["a"])(DialerData,[{key:"getProfile",value:function(){var _getProfile=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee(){var headers,region,url,result,decoded,current_user;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.next=2,_jwt__WEBPACK_IMPORTED_MODULE_9__["a"].setHeader();case 2:return headers=_context.sent,region=this.getRegion(),url=eval("`"+User_Server+"`"),_context.next=7,axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url,{headers:headers});case 7:if(result=_context.sent,decoded=_jwt__WEBPACK_IMPORTED_MODULE_9__["a"].getJWTDecoded(),decoded){_context.next=11;break}return _context.abrupt("return","");case 11:return current_user=result.data.find((function(e){return e.email==decoded.email})),_context.abrupt("return",current_user);case 13:case"end":return _context.stop()}}),_callee,this)})));function getProfile(){return _getProfile.apply(this,arguments)}return getProfile}()},{key:"getCapabilityVisitor",value:function(){var _getCapabilityVisitor=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee2(domain_id,callflow_id,api_key){var region,url,result;return regeneratorRuntime.wrap((function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:return region=this.getRegion(),url=eval("`"+Server+"`"),_context2.next=4,axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(url,"/c2c/").concat(domain_id,"/").concat(callflow_id,"/").concat(api_key));case 4:return result=_context2.sent,_context2.abrupt("return",result.data);case 6:case"end":return _context2.stop()}}),_callee2,this)})));function getCapabilityVisitor(e,_,t){return _getCapabilityVisitor.apply(this,arguments)}return getCapabilityVisitor}()},{key:"getCapabilityAgent",value:function(){var _getCapabilityAgent=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee3(app_name){var headers,region,url,result;return regeneratorRuntime.wrap((function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,_jwt__WEBPACK_IMPORTED_MODULE_9__["a"].setHeader();case 2:return headers=_context3.sent,region=this.getRegion(),url=eval("`"+Agent_Capability+"`"),_context3.next=7,axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(url),{headers:headers});case 7:return result=_context3.sent,_context3.abrupt("return",result.data[0]);case 9:case"end":return _context3.stop()}}),_callee3,this)})));function getCapabilityAgent(e){return _getCapabilityAgent.apply(this,arguments)}return getCapabilityAgent}()},{key:"sendVoicemail",value:function(){var _sendVoicemail=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee4(callsid,audio_url){var headers,region,url,result;return regeneratorRuntime.wrap((function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,_jwt__WEBPACK_IMPORTED_MODULE_9__["a"].setHeader();case 2:return headers=_context4.sent,region=this.getRegion(),url=eval("`"+Voicemail_Server+"`"),_context4.next=7,axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(url),{headers:headers});case 7:return result=_context4.sent,_context4.abrupt("return",result);case 9:case"end":return _context4.stop()}}),_callee4,this)})));function sendVoicemail(e,_){return _sendVoicemail.apply(this,arguments)}return sendVoicemail}()},{key:"getMedia",value:function(){var _getMedia=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function _callee5(){var headers,region,url,result;return regeneratorRuntime.wrap((function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:return _context5.next=2,_jwt__WEBPACK_IMPORTED_MODULE_9__["a"].setHeader();case 2:return headers=_context5.sent,region=this.getRegion(),url=eval("`"+Media_Server+"`"),_context5.next=7,axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(url),{headers:headers});case 7:return result=_context5.sent,_context5.abrupt("return",result.data);case 9:case"end":return _context5.stop()}}),_callee5,this)})));function getMedia(){return _getMedia.apply(this,arguments)}return getMedia}()}]),DialerData}(_core_data__WEBPACK_IMPORTED_MODULE_10__["a"]);__webpack_exports__["a"]=new DialerData},"3c14":function(e,_,t){"use strict";t("7584")},7584:function(e,_,t){},"7db0":function(e,_,t){"use strict";var r=t("23e7"),a=t("b727").find,n=t("44d2"),i=t("ae40"),o="find",c=!0,s=i(o);o in[]&&Array(1)[o]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!s},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(o)},"89c7":function(e,_,t){"use strict";t.r(_);var r=function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"w-100"},["agent"==e.from?t("div",{staticClass:"d-flex card-body px-4 pt-3 pb-0 mt-3"},[e.profile.pic_path?t("b-img",{staticClass:"rounded",attrs:{src:e.profile.pic_path,alt:"Agent profile",height:"35",width:"35"}}):e._e(),t("h5",{staticClass:"first-letter-caps font-size-base mb-0 ml-3 text-truncate text-white opacity-0-8"},[e._v(e._s(e.profile.name))])],1):e._e(),"visitor"==e.from?[t("b-button",{staticClass:"mt-3 ml-3 call-now",style:e.style_call_now,attrs:{variant:"outline"},on:{click:function(_){e.$emit("visitor_click","call_now"),e.updateStyle("callnow")}}},[t("span",{staticClass:"fe fe-airplay mr-2 align-middle"}),e._v("Call from Computer")]),t("b-button",{staticClass:"ml-3 mt-3 call-back",style:e.style_call_back,attrs:{variant:"outline"},on:{click:function(_){e.$emit("visitor_click","call_back"),e.updateStyle("callback")}}},[t("span",{staticClass:"fe fe-phone-forwarded mr-2 align-middle"}),e._v("Call Back")])]:e._e()],2)},a=[],n=(t("96cf"),t("c964")),i=t("2cfc"),o={props:{from:String,widgetData:Object},data:function(){return{profile:{},show_form:!1,style_call_now:{},style_call_back:{}}},mounted:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var _=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("visitor"==this.from){e.next=5;break}return e.next=3,i["a"].getProfile();case 3:this.profile=e.sent,this.profile.pic_path||(this.profile.pic_path="/img/default_avatar.png");case 5:this.widgetData.bgcolor?this.style_call_now={background:this.widgetData.bgcolor,borderColor:this.widgetData.bgcolor,color:"white"}:setTimeout((function(){_.updateStyle("callnow")}),300);case 6:case"end":return e.stop()}}),e,this)})));function _(){return e.apply(this,arguments)}return _}(),methods:{updateStyle:function(e){if("callnow"==e)return this.style_call_now={background:this.widgetData.bgcolor,borderColor:this.widgetData.bgcolor,color:"white"},void(this.style_call_back={borderColor:this.widgetData.bgcolor2,color:this.widgetData.bgcolor2});this.style_call_now={borderColor:this.widgetData.bgcolor,color:this.widgetData.bgcolor},this.style_call_back={background:this.widgetData.bgcolor2,borderColor:this.widgetData.bgcolor2,color:"white"}}}},c=o,s=(t("3c14"),t("2877")),l=Object(s["a"])(c,r,a,!1,null,null,null);_["default"]=l.exports},"8c65":function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var r=function(e){try{return encodeURIComponent(e)}catch(_){console.error("error encode %o")}return null},a=function(e){try{return decodeURIComponent(e)}catch(_){console.error("error decode %o")}return null},n=function(e){return r(e).replace(/[\-\.\+\*]/g,"\\$&")},i={getItem:function(e){return e&&a(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+n(e)+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,_,t,a,n,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var o="";if(t)switch(t.constructor){case Number:o=t===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:o="; expires="+t;break;case Date:o="; expires="+t.toUTCString();break;default:break}return document.cookie=[r(e),"=",r(_),o,n?"; domain="+n:"",a?"; path="+a:"",i?"; secure":""].join(""),!0},removeItem:function(e,_,t){return!!this.hasItem(e)&&(document.cookie=[r(e),"=; expires=Thu, 01 Jan 1970 00:00:00 GMT",t?"; domain="+t:"",_?"; path="+_:""].join(""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+r(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);return e=e.map((function(e){return a(e)})),e}};_.default=i},"9b7b":function(e,_,t){"use strict";t("96cf");var r=t("c964"),a=t("276c"),n=t("e954"),i=t("8c65"),o=t.n(i);function c(e){this.message=e}c.prototype=new Error,c.prototype.name="InvalidCharacterError";var s="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var _=String(e).replace(/=+$/,"");if(_.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,r,a=0,n=0,i="";r=_.charAt(n++);~r&&(t=a%4?64*t+r:r,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return i};function l(e){var _=e.replace(/-/g,"+").replace(/_/g,"/");switch(_.length%4){case 0:break;case 2:_+="==";break;case 3:_+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(s(e).replace(/(.)/g,(function(e,_){var t=_.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(_)}catch(e){return s(_)}}function u(e){this.message=e}function p(e,_){if("string"!=typeof e)throw new u("Invalid token specified");var t=!0===(_=_||{}).header?0:1;try{return JSON.parse(l(e.split(".")[t]))}catch(e){throw new u("Invalid token specified: "+e.message)}}u.prototype=new Error,u.prototype.name="InvalidTokenError";var d=p,b=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"getJWT",value:function(){var e=o.a.getItem("token")||localStorage.getItem("token");if(e)try{var _=JSON.parse(e);this.jwt_token=d(_.jwt);var t="Bearer ".concat(_.jwt);return t}catch(r){return e}}},{key:"setHeader",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var _,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getJWT();case 2:return _=e.sent,t={},t["Authorization"]=_,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));function _(){return e.apply(this,arguments)}return _}()},{key:"getJWTDecoded",value:function(){var e=this.getJWT();if(e)return d(e)}}]),e}();_["a"]=new b}}]);
//# sourceMappingURL=ninjacapture28.a641a527.js.map