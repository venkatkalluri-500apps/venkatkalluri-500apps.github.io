(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture22"],{"2ae6":function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c964"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("276c"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("e954"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("920b"),_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("92a6"),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_jwt__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9b7b"),_core_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("a11a"),CallBack_Server="https://api.${region}.500apps.com/pbxplus/v1/contact-info?app_name=pbxplus",CallBack=function(_Data){Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["a"])(CallBack,_Data);var _super=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["a"])(CallBack);function CallBack(){return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["a"])(this,CallBack),_super.apply(this,arguments)}return Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["a"])(CallBack,[{key:"add",value:function(){var _add=Object(_home_agile_Desktop_Public_infinity_public_2_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function _callee(form){var headers,region,url,response;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.next=2,_jwt__WEBPACK_IMPORTED_MODULE_7__["a"].setHeader();case 2:return headers=_context.sent,headers["x-api-key"]=form.api_key,region=this.getRegion(),url=CallBack_Server,url=eval("`"+url+"`"),_context.next=9,axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url,form,{headers:headers});case 9:return response=_context.sent,_context.abrupt("return",response.data);case 11:case"end":return _context.stop()}}),_callee,this)})));function add(e){return _add.apply(this,arguments)}return add}()}]),CallBack}(_core_data__WEBPACK_IMPORTED_MODULE_8__["a"]);__webpack_exports__["a"]=new CallBack},"8c65":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=function(e){try{return encodeURIComponent(e)}catch(t){console.error("error encode %o")}return null},a=function(e){try{return decodeURIComponent(e)}catch(t){console.error("error decode %o")}return null},n=function(e){return _(e).replace(/[\-\.\+\*]/g,"\\$&")},o={getItem:function(e){return e&&a(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+n(e)+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,r,a,n,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(r)switch(r.constructor){case Number:s=r===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:s="; expires="+r;break;case Date:s="; expires="+r.toUTCString();break;default:break}return document.cookie=[_(e),"=",_(t),s,n?"; domain="+n:"",a?"; path="+a:"",o?"; secure":""].join(""),!0},removeItem:function(e,t,r){return!!this.hasItem(e)&&(document.cookie=[_(e),"=; expires=Thu, 01 Jan 1970 00:00:00 GMT",r?"; domain="+r:"",t?"; path="+t:""].join(""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+_(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);return e=e.map((function(e){return a(e)})),e}};t.default=o},"9b7b":function(e,t,r){"use strict";r("96cf");var _=r("c964"),a=r("276c"),n=r("e954"),o=r("8c65"),s=r.n(o);function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidCharacterError";var l="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new i("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,_,a=0,n=0,o="";_=t.charAt(n++);~_&&(r=a%4?64*r+_:_,a++%4)?o+=String.fromCharCode(255&r>>(-2*a&6)):0)_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(_);return o};function c(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(l(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return l(t)}}function u(e){this.message=e}function m(e,t){if("string"!=typeof e)throw new u("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(c(e.split(".")[r]))}catch(e){throw new u("Invalid token specified: "+e.message)}}u.prototype=new Error,u.prototype.name="InvalidTokenError";var p=m,d=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"getJWT",value:function(){var e=s.a.getItem("token")||localStorage.getItem("token");if(e)try{var t=JSON.parse(e);this.jwt_token=p(t.jwt);var r="Bearer ".concat(t.jwt);return r}catch(_){return e}}},{key:"setHeader",value:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getJWT();case 2:return t=e.sent,r={},r["Authorization"]=t,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getJWTDecoded",value:function(){var e=this.getJWT();if(e)return p(e)}}]),e}();t["a"]=new d},f086:function(e,t,r){"use strict";r.r(t);var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"width-400"},[r("b-card",{staticClass:"visitor-callback mb-0",attrs:{"body-class":"p-3"}},[r("b-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-form-group",{staticClass:"mb-3",attrs:{label:"Enter Name","label-for":"input-name",size:"sm"}},[r("b-form-input",{attrs:{size:"sm",type:"text",oninvalid:"this.setCustomValidity('Please enter proper name')",oninput:"this.setCustomValidity('')",id:"input-name",placeholder:"Enter Name",pattern:"[a-zA-Z ]{3,30}",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{staticClass:"mb-3",attrs:{label:"Enter Phone Number",size:"sm"}},[r("VueTelInput",{attrs:{required:"",size:"sm"},on:{"country-changed":e.countryChanged},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("b-form-group",{staticClass:"mb-3",attrs:{label:"Call Now/Schedule this later",size:"sm"}},[r("b-form-select",{staticClass:"mb-0",attrs:{size:"sm",options:e.sendType,required:""},model:{value:e.form.send_type,callback:function(t){e.$set(e.form,"send_type",t)},expression:"form.send_type"}})],1),"Scheduled"==e.form.send_type?r("b-row",[r("b-col",{attrs:{md:"12",size:"sm"}},[r("b-form-group",{staticClass:"mb-3",attrs:{label:"Callback Time",size:"sm"}},[r("b-form-input",{staticClass:"form-control pr-2",attrs:{type:"datetime-local",size:"sm",id:"callbacktime",required:""},model:{value:e.form.call_back_time,callback:function(t){e.$set(e.form,"call_back_time",t)},expression:"form.call_back_time"}})],1)],1),r("b-col",{attrs:{lg:"12"}},[r("label",{attrs:{size:"sm"}},[e._v("Timezone")]),r("b-form-select",{attrs:{size:"sm",options:e.getTimezones(),required:""},model:{value:e.form.timezone,callback:function(t){e.$set(e.form,"timezone",t)},expression:"form.timezone"}})],1)],1):e._e(),r("div",{staticClass:"d-flex justify-content-end border-top mt-3 pt-3"},[r("b-button",{attrs:{size:"sm",block:"",type:"submit",variant:"primary px-5",disabled:e.isDisabled}},[e._v("Submit")])],1),r("p",{staticClass:"mb-0 text-right mt-2 text-primary",class:e.errorClass},[e._v(e._s(e.message))])],1)],1)],1)},a=[],n=(r("caad"),r("2532"),r("96cf"),r("c964")),o=r("f62e"),s=r("2ae6"),i=r("7f45"),l=r.n(i),c={components:{VueTelInput:o["a"]},props:["domain_id","api_key","call_flow_id"],data:function(){return{form:{name:"",number:"",timezone:"",api_key:"",call_flow_id:"",domain_id:"",message:"",call_back_time:"",send_type:"Call now",country_code:""},isDisabled:!1,errorClass:"",message:"",sendType:[{value:"Call now",text:"Call now"},{value:"Scheduled",text:"Schedule later"}]}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form.timezone=l.a.tz.guess();case 1:case"end":return t.stop()}}),t)})))()},methods:{countryChanged:function(e){this.form.country_code=e.dialCode},getTimezones:function(){var e=l.a.tz.names();return e.unshift({text:"Select timezone",value:""}),e},onSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.domain_id=e.domain_id,e.form.call_flow_id=e.call_flow_id,e.form.api_key=e.api_key,e.message="saving..",e.isDisabled=!1,t.prev=5,t.next=8,s["a"].add(e.form);case 8:e.message="Saved your data successfully",e.errorClass="text-primary",t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),t.t0.response.data.error.includes("Duplicate entry")?(e.message="Data already exists",e.errorClass="text-danger"):(e.message="Unable to save, Please try again",e.errorClass="text-danger");case 15:setTimeout((function(){e.message=""}),2e3);case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))()}}},u=c,m=r("2877"),p=Object(m["a"])(u,_,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=ninjacapture22.c41a5d54.js.map