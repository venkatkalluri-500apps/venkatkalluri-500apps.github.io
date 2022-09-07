(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schedule","schedulely","ninjacapture150","ninjacapture156"],{"0c38":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"h-100 mt-5"},[t.cancelStatus?s("b-col",{staticClass:"text-center card mx-auto border-0 text-center py-6 rounded",attrs:{cols:"7"}},[s("div",{staticClass:"confirmation-check"},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"}},[s("circle",{staticClass:"path circle",attrs:{fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}}),s("polyline",{staticClass:"path check",attrs:{fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "}})])]),s("h4",{staticClass:"pt-3 mb-3"},[t._v("Confirmed!")]),s("span",[s("p",{staticClass:"text-dark"},[t._v(" You have cancelled appointment successfully. Confirmation email would also be sent to you. ")])])]):s("b-col",{staticClass:"mx-auto",attrs:{md:"10",xl:"9"}},[s("b-card",{staticClass:"p-md-3",attrs:{"body-class":"p-md-5"}},[s("div",{staticClass:"border-bottom pb-4 border-light"},[s("div",{staticClass:"d-flex align-items-center justify-content-center text-success d-flex flex-column "},[s("i",{staticClass:"fe fe-check-circle display-3 mb-3 font-weight-normal line-height-1"}),s("h2",{staticClass:"mb-0"},[t._v("Confirmed")])])]),s("div",{staticClass:"my-3 my-md-4 rounded"},[s("b-list-group",{attrs:{flush:""}},[s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0  text-muted"},[s("i",{staticClass:"mr-2 fe fe-bell align-bottom"}),t._v(" Event Name")])]),s("b-col",{staticClass:"my-auto"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.eventData.events.title))])])],1)],1),s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0 text-muted"},[s("i",{staticClass:"mr-2 fe fe-user align-bottom"}),t._v(" Event Owner")])]),s("b-col",{staticClass:"my-auto"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.userName))])])],1)],1),s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0 text-muted"},[s("i",{staticClass:"mr-2 fe fe-calendar align-bottom"}),t._v(" Date & Time")])]),s("b-col",{staticClass:"my-auto"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.timeformat(t.eventData.unix_times.start_unix,!0,"llll"))+" - "+t._s(t.timeformat(t.eventData.unix_times.end_unix,!0,"LT")))])])],1)],1),s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0  text-muted"},[s("i",{staticClass:"mr-2 fe fe-calendar align-bottom"}),t._v("Location")])]),s("b-col",{staticClass:"my-auto"},[s("h4",{staticClass:"mb-0 mobile-font"},[t._v(t._s(t.eventData.events.location))]),t.eventData&&t.eventData.events&&t.eventData.events.location&&"conference"==t.eventData.events.location?s("small",[s("b-link",{attrs:{href:JSON.parse(t.eventData.events.location_info).location_address,target:"blank"}},[t._v(t._s(JSON.parse(t.eventData.events.location_info).location_address))])],1):t.eventData&&t.eventData.events&&t.eventData.events.location?s("small",[t.eventData&&t.eventData.events&&t.eventData.events.location_info&&JSON.parse(t.eventData.events.location_info).location_address&&"invitee_call"!=JSON.parse(t.eventData.events.location_info).location_address?s("p",{staticClass:"mb-0"},[t._v(" "+t._s(JSON.parse(t.eventData.events.location_info).location_address)+" ")]):t._e(),t.eventData&&t.eventData.events&&t.eventData.events.location_info&&JSON.parse(t.eventData.events.location_info).location_more_info?s("p",{staticClass:"mt-0"},[t._v(" "+t._s(JSON.parse(t.eventData.events.location_info).location_more_info)+" ")]):t._e()]):s("small",[t._v("--")])])],1)],1),s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0 text-muted"},[s("i",{staticClass:"mr-2 fe fe-phone align-bottom"}),t._v(" Contact Details")])]),s("b-col",{staticClass:"my-auto pt-2 pt-md-0"},[s("div",[s("p",{staticClass:"mb-0"},[t._v(t._s(t.eventData.events_participants.name))]),s("small",[t._v(t._s(t.eventData.events_participants.email)+" "),t.eventData&&t.eventData.events_participants&&t.eventData.events_participants.custom_fields&&JSON.parse(t.eventData.events_participants.custom_fields).phone?s("span",{staticClass:"ml-3"},[t._v(" "+t._s(JSON.parse(t.eventData.events_participants.custom_fields).phone)+" ")]):t._e()])])])],1)],1),s("b-list-group-item",{staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0  text-muted"},[s("i",{staticClass:"mr-2 fe fe-calendar align-bottom"}),t._v(" Booked On")])]),s("b-col",{staticClass:"my-auto"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.timeformat(new Date)))])])],1)],1),s("p",{staticClass:"mb-0  py-3 border-bottom border-light mb-3"},[t._v("Additional Info")]),t._l(t.additional_info,(function(e,n){return s("b-list-group-item",{key:n,staticClass:"border-bottom-0 py-2"},[s("b-row",[s("b-col",{attrs:{cols:"12",md:"5",lg:"3"}},[s("p",{staticClass:"mb-2 mb-md-0 text-muted text-truncate"},[s("i",{staticClass:"mr-2 fe fe-list pr-1 align-bottom"}),t._v(t._s(n))])]),s("b-col",{staticClass:"my-auto"},[s("p",{staticClass:"mb-0"},[t._v(t._s(e))])])],1)],1)}))],2)],1),s("div",{staticClass:"border-top flex-column flex-md-row d-flex justify-content-between align-items-md-center pt-4"},[s("div",{staticClass:"d-flex align-items-md-center mt-2 flex-column flex-md-row"},[s("b-button",{staticClass:"px-md-3 mb-3 mb-md-0",attrs:{variant:"light",size:"sm"},on:{click:function(e){return t.downloadICS()}}},[s("i",{staticClass:"fe fe-download mr-1"}),t._v(" Download as ICS ")])],1),s("div",{staticClass:"d-md-flex justify-content-end align-items-center text-center ml-auto pr-0 mt-md-3 mt-2"},[s("span",{staticClass:"mr-md-4"},[s("b-link",{attrs:{href:"https://500apps.com",target:"blank"}},[t._v("Create your own event")])],1),s("b-button",{staticClass:"px-lg-4 px-4 px-md-2 mt-md-2 mt-3",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.reloadPage()}}},[t._v("Book another appointment")])],1)])])],1)],1)},a=[],r=(s("4160"),s("b64b"),s("159b"),s("c1df")),i=s.n(r),o={name:"Confirmation",components:{},props:{userName:String,cancelStatus:Boolean,eventData:Object,response:Object},data:function(){return{additional_info:{}}},created:function(){this.filterCustomfieldData()},methods:{reloadPage:function(){this.$router.go()},downloadICS:function(){window.open("data:text/calendar;charset=utf8,"+escape(this.response.ical_data))},timeformat:function(t,e,s){return e?i.a.utc(i()(1e3*t),"YYYY-MM-DD HH").tz(this.eventData.time_zone).format(s):i()(t).format("llll")},filterCustomfieldData:function(){var t=this,e=JSON.parse(this.eventData.events_participants.custom_fields);Object.keys(e).forEach((function(s){"name"!=s&&"email"!=s&&"phone"!=s&&(t.additional_info[s]=e[s])}))}}},c=o,l=(s("6504"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"4a89":function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){return function(t){function e(n){if(s[n])return s[n].exports;var a=s[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var s={};return e.m=t,e.c=s,e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,s){t.exports=!s(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var s=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=s)},function(t,e,s){var n=s(6),a=s(7);t.exports=function(t){return n(a(t))}},function(t,e,s){var n=s(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var s=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:s)(t)}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Avatar=void 0;var n=s(10),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.Avatar=a.default,e.default=a.default},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(12),a=s.n(n),r=s(41),i=s(11),o=i(a.a,r.a,!1,null,null,null);e.default=o.exports},function(t,e){t.exports=function(t,e,s,n,a,r){var i,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,o=t.default);var l,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),s&&(u.functional=!0),a&&(u._scopeId=a),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,l):[l]}return{esModule:i,exports:o,options:u}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13),a=function(t){return t&&t.__esModule?t:{default:t}}(n),r=function(t){for(var e=t.split(/[ -]/),s="",n=0;n<e.length;n++)s+=e[n].charAt(0);return s.length>3&&-1!==s.search(/[A-Z]/)&&(s=s.replace(/[a-z]+/g,"")),s.substr(0,3).toUpperCase()};e.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:r,validator:function(t){return"string"==typeof t("John",r)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},e={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},s={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},n=this.isImage?e:s;return(0,a.default)(t,n),t},userInitial:function(){return this.isImage?"":this.initials||this.parser(this.username,r)}},methods:{initial:r,onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var s=!1;"#"===t[0]&&(t=t.slice(1),s=!0);var n=parseInt(t,16),a=(n>>16)+e;a>255?a=255:a<0&&(a=0);var r=(n>>8&255)+e;r>255?r=255:r<0&&(r=0);var i=(255&n)+e;return i>255?i=255:i<0&&(i=0),(s?"#":"")+(i|r<<8|a<<16).toString(16)}}}},function(t,e,s){t.exports={default:s(14),__esModule:!0}},function(t,e,s){s(15),t.exports=s(4).Object.assign},function(t,e,s){var n=s(16);n(n.S+n.F,"Object",{assign:s(26)})},function(t,e,s){var n=s(0),a=s(4),r=s(17),i=s(19),o=function(t,e,s){var c,l,u,d=t&o.F,p=t&o.G,m=t&o.S,f=t&o.P,v=t&o.B,b=t&o.W,h=p?a:a[e]||(a[e]={}),_=h.prototype,g=p?n:m?n[e]:(n[e]||{}).prototype;for(c in p&&(s=e),s)(l=!d&&g&&void 0!==g[c])&&c in h||(u=l?g[c]:s[c],h[c]=p&&"function"!=typeof g[c]?s[c]:v&&l?r(u,n):b&&g[c]==u?function(t){var e=function(e,s,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,s)}return new t(e,s,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):f&&"function"==typeof u?r(Function.call,u):u,f&&((h.virtual||(h.virtual={}))[c]=u,t&o.R&&_&&!_[c]&&i(_,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,e,s){var n=s(18);t.exports=function(t,e,s){if(n(t),void 0===e)return t;switch(s){case 1:return function(s){return t.call(e,s)};case 2:return function(s,n){return t.call(e,s,n)};case 3:return function(s,n,a){return t.call(e,s,n,a)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,s){var n=s(20),a=s(25);t.exports=s(2)?function(t,e,s){return n.f(t,e,a(1,s))}:function(t,e,s){return t[e]=s,t}},function(t,e,s){var n=s(21),a=s(22),r=s(24),i=Object.defineProperty;e.f=s(2)?Object.defineProperty:function(t,e,s){if(n(t),e=r(e,!0),n(s),a)try{return i(t,e,s)}catch(t){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[e]=s.value),t}},function(t,e,s){var n=s(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,s){t.exports=!s(2)&&!s(3)((function(){return 7!=Object.defineProperty(s(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,s){var n=s(1),a=s(0).document,r=n(a)&&n(a.createElement);t.exports=function(t){return r?a.createElement(t):{}}},function(t,e,s){var n=s(1);t.exports=function(t,e){if(!n(t))return t;var s,a;if(e&&"function"==typeof(s=t.toString)&&!n(a=s.call(t)))return a;if("function"==typeof(s=t.valueOf)&&!n(a=s.call(t)))return a;if(!e&&"function"==typeof(s=t.toString)&&!n(a=s.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,s){"use strict";var n=s(27),a=s(38),r=s(39),i=s(40),o=s(6),c=Object.assign;t.exports=!c||s(3)((function(){var t={},e={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach((function(t){e[t]=t})),7!=c({},t)[s]||Object.keys(c({},e)).join("")!=n}))?function(t,e){for(var s=i(t),c=arguments.length,l=1,u=a.f,d=r.f;c>l;)for(var p,m=o(arguments[l++]),f=u?n(m).concat(u(m)):n(m),v=f.length,b=0;v>b;)d.call(m,p=f[b++])&&(s[p]=m[p]);return s}:c},function(t,e,s){var n=s(28),a=s(37);t.exports=Object.keys||function(t){return n(t,a)}},function(t,e,s){var n=s(29),a=s(5),r=s(31)(!1),i=s(34)("IE_PROTO");t.exports=function(t,e){var s,o=a(t),c=0,l=[];for(s in o)s!=i&&n(o,s)&&l.push(s);for(;e.length>c;)n(o,s=e[c++])&&(~r(l,s)||l.push(s));return l}},function(t,e){var s={}.hasOwnProperty;t.exports=function(t,e){return s.call(t,e)}},function(t,e){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},function(t,e,s){var n=s(5),a=s(32),r=s(33);t.exports=function(t){return function(e,s,i){var o,c=n(e),l=a(c.length),u=r(i,l);if(t&&s!=s){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===s)return t||u||0;return!t&&-1}}},function(t,e,s){var n=s(8),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},function(t,e,s){var n=s(8),a=Math.max,r=Math.min;t.exports=function(t,e){return t=n(t),t<0?a(t+e,0):r(t,e)}},function(t,e,s){var n=s(35)("keys"),a=s(36);t.exports=function(t){return n[t]||(n[t]=a(t))}},function(t,e,s){var n=s(0),a=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e){var s=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,s){var n=s(7);t.exports=function(t){return Object(n(t))}},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?s("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},a=[],r={render:n,staticRenderFns:a};e.a=r}])}))},6504:function(t,e,s){"use strict";s("c611")},"82ba":function(t,e,s){},"88fc":function(t,e,s){"use strict";s("82ba")},ae3f:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{staticClass:"my-5",class:(t.customClass,""),attrs:{md:"12"}},[s("b-card",{staticClass:"shadow-none mb-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"schedule-header-bg border-bottom-0 mobile-header-reset"},[s("h4",{staticClass:"mb-0 card-title text-white"},[t._v("Welcome to our scheduling page. Please follow the instructions to book an appointment.")]),s("b-img",{staticClass:"mr-n4",attrs:{src:"/img/tab_icon.svg",alt:"..",fluid:""}})],1),s("b-card-body",{staticClass:"position-relative schedule-card-body"},[s("div",{staticClass:"position-relative py-3"},[t.usersList.length>0?[t.ShowAgent?[s("div",{staticClass:"d-flex align-items-center font-size-16px step-header step-one"},[s("div",{staticClass:"circle-bg mr-2 mb-0 bg-primary"},[t.eventShow?s("i",{staticClass:"fe fe-check"}):s("span",[t._v("1")])]),s("h4",{staticClass:"mb-0 step-heading"},[t._v("Select the person to book your appointment")])]),s("b-row",{staticClass:"pt-2 px-2 mb-n3"},[t.userExists||t.isBusy?t.user&&!t.isBusy?[s("b-col",{staticClass:"px-2",attrs:{md:"6",lg:"4",xl:"3"}},[s("b-card",{class:"mb-3 shadow-none lift cursor-pointer "+(t.user["selecteduser"]?"selected-agnet border-primary":"border-transparent")+" rounded-sm",attrs:{"body-class":"p-3 m-2 d-flex align-items-center",id:"user-card"+t.index},on:{click:function(e){return t.getEvents(t.user,t.index)}}},[t.user.logo_url?t._e():[s("Avatar",{staticClass:"border-lighten rounded border",attrs:{username:t.user.name,size:50,src:t.user.pic_path}})],s("div",{staticClass:"ml-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.user.name))]),t.user&&t.user.time_zone?s("p",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip:hover",arg:"hover"}],staticClass:"mb-0 small text-muted d-flex align-items-center",attrs:{title:t.user.time_zone}},[s("i",{staticClass:"fe fe-pin fe-map-pin align-middle"}),s("span",{staticClass:"pl-2"},[t._v(t._s(t.user.time_zone))])]):t._e()])],2)],1)]:t._e():t._l(t.usersList,(function(e,n){return s("b-col",{key:n,staticClass:"px-2",attrs:{md:"6",lg:"4",xl:"3"}},[s("b-card",{class:"mb-3 shadow-sm lift-sm cursor-pointer "+(e["selecteduser"]?"selected-agnet border-primary":"border-transparent")+" rounded-sm",attrs:{"body-class":"p-3 m-1 d-flex align-items-center",id:"user-card"+n},on:{click:function(s){return t.getEvents(e,n)}}},[e.logo_url?t._e():[s("Avatar",{staticClass:"border-lighten rounded border",attrs:{username:e.name,size:50,src:e.pic_path}})],s("div",{staticClass:"ml-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(e.name))]),e&&e.time_zone?s("p",{staticClass:"mb-0 small text-muted  d-flex align-items-center"},[s("i",{staticClass:"fe fe-pin fe-map-pin align-middle"}),s("span",{staticClass:"pl-2"},[t._v(t._s(e.time_zone))])]):t._e()])],2)],1)}))],2)]:t._e(),t.eventShow?[s("div",{staticClass:"font-size-16px step-header d-flex align-items-center "},[s("div",{staticClass:"circle-bg mr-2 mb-1 bg-primary"},[t.isSlots?s("i",{staticClass:"fe fe-check"}):s("span",[t._v("2")])]),s("h4",{staticClass:"mb-0 step-heading"},[t._v("Select the Event to Book an Appointment")])]),s("b-row",{staticClass:"pt-2 px-2 mb-n3"},[0==t.eventsList.length?[s("b-col",{attrs:{md:"12"}},[s("div",{staticClass:"text-center mt-3"},[s("b-img",{attrs:{src:"/img/schedulely/schedule.svg",fluid:""}}),s("div",{staticClass:"my-3 py-2"},[s("h3",{staticClass:"mb-1 text-black-50"},[t._v("No Events Found")]),s("p",{staticClass:"text-muted mb-0"},[t._v("Try adjust your search to find what you're looking for.")])])],1)]),s("div",{staticClass:"mx-auto pb-5 text-center empty-state-font"})]:t._l(t.eventsList,(function(e,n){return s("b-col",{key:n,staticClass:"px-2",attrs:{md:t.eventsList&&1==t.eventsList.length?12:6,lg:t.eventsList&&1==t.eventsList.length?12:t.eventsList&&2==t.eventsList.length?6:4}},[s("b-card",{class:"description-card mb-3 lift-sm shadow-xs cursor-pointer max-height-300px "+(e["selectedevent"]?"selected-agnet border-primary":"border-transparent")+" rounded-sm",attrs:{"no-body":""},on:{click:function(s){return t.getEventDetails(e,n)}}},[s("div",{staticClass:"schedule-description"},[e.title?s("p",{staticClass:"multi-line-clamp-3 mb-0 text-body event-title"},[t._v(t._s(e.title))]):t._e(),e&&e.description&&e.description.length>250?s("b-popover",{ref:"popover",refInFor:!0,attrs:{"custom-class":"min-width-360px z-index-9999 border schedule-popover shadow",target:"popover-target-"+e.id,triggers:"hover",placement:"right"}},[s("div",{staticClass:"schedule-popover-text overflow-auto max-height-250px width-350px pl-0 pr-5",domProps:{innerHTML:t._s(decodeURI(e.description))}})]):t._e(),e.description?s("p",{staticClass:"schedule-description-p small",attrs:{id:"popover-target-"+e.id},domProps:{innerHTML:t._s(decodeURI(e.description))}}):t._e()],1)])],1)}))],2)]:t._e(),t.isSlots?[s("Events",{key:t.reRender,ref:"eventDetailsRef",attrs:{userData:t.user,eventData:t.event,isSlots:t.isSlots,projectId:t.projectId},on:{userDetails:function(e){t.isUserDetails=!0},showUser:t.showSteps}})]:t._e()]:t._e(),0!=t.usersList.length&&(!t.userExists||t.user)||t.isBusy?t._e():[s("b-card",{staticClass:"card-inactive mb-0 shadow-none"},[s("b-row",{staticClass:"text-center"},[s("b-col",{staticClass:"mx-auto",attrs:{md:"10",lg:"7",xl:"7"}},[s("img",{staticClass:"mb-0",attrs:{src:"https://infinity.500apps.com/img/empty_state.svg",alt:"..."}}),s("div",{staticClass:"text-center my-3 pt-2"},[s("h1",{staticClass:"mb-1 font-weight-normal"},[t._v("No Users found")]),s("p",{staticClass:"text-muted"},[t._v("You have not configured any users in the schedule app. Please ensure that at least one user is added to the application.")])])])],1)],1)],t.isBusy?s("b-overlay",{staticClass:"vh-50",attrs:{"spinner-variant":"primary",show:t.isBusy,"no-wrap":!!t.eventShow,opacity:"0.2"}}):t._e()],2)]),s("b-card-footer",{staticClass:"schedule-footer border-top"},[s("p",{staticClass:"mb-0"},[t._v(" Powered by "),s("b-link",{attrs:{href:"https://500apps.com",target:"_blank"}},[s("img",{staticClass:"ml-2 mr-1",attrs:{src:"/img/favicon.webp"}}),t._v(" 500apps ")])],1)])],1)],1)],1)],1)},a=[],r=(s("99af"),s("4de4"),s("caad"),s("d81d"),s("b0c0"),s("ac1f"),s("2532"),s("1276"),s("9911"),s("96cf"),s("c964")),i=s("7eaf"),o=s("ae61"),c=s("4a89"),l=s.n(c),u=s("2cb9"),d={name:"Users",components:{Events:o["default"],Avatar:l.a},data:function(){return{domainId:"",userId:"",eventId:"",usersList:[],user:[],eventsList:[],event:[],eventExists:!1,userExists:!1,eventShow:!1,isSlots:!1,isUserDetails:!1,previousIndex:0,isBusy:!1,ShowAgent:!1,projectId:"",projectList:[],selectedProject:{},reRender:0,customClass:!1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isBusy=!0,n=window.location.host,!n.includes(".schedule.cc")){e.next=12;break}return e.next=5,i["a"].getShortcutData(n.split(".schedule.cc")[0]);case 5:if(s=e.sent,s&&s.length){e.next=8;break}return e.abrupt("return");case 8:window.domain=s[0].domain_id,"event_level"==s[0].link?s[0].data_1&&(window.project_id=JSON.parse(s[0].data_1).event_type.split("-")[0],window.id=JSON.parse(s[0].data_1).event_type.split("-")[1]):(window.project_id=s[0].data_1?JSON.parse(s[0].data_1).project_id:null,window.id=null),window.region=s[0].env,window.user="user"==s[0].link||"event_level"==s[0].link?s[0].created_by:null;case 12:if(t.domainId=window.domain,t.userId=window.user,t.eventId=window.id,t.projectId=window.project_id,t.isBusy=!0,a=window.region,!t.projectId){e.next=57;break}return e.next=21,i["a"].get("project/".concat(t.domainId,"?project_id=").concat(t.projectId));case 21:if(t.projectList=e.sent,!(t.projectList&&t.projectList.length>0)){e.next=27;break}if(t.selectedProject=t.projectList[0],t.userId){e.next=27;break}return e.next=27,t.getProjectUsers(t.projectList[0],0);case 27:if(t.isSlots=!1,t.isUserDetails=!1,!t.userId){e.next=56;break}return t.ShowAgent=!0,e.next=33,i["a"].get_agents(a,"project/".concat(t.domainId,"/").concat(t.projectId,"?project_name=").concat(t.selectedProject.name));case 33:if(t.usersList=e.sent,t.user=t.usersList.filter((function(e){return e.id==t.userId})),t.user=t.user[0],t.user["selecteduser"]=!0,t.userExists=!0,t.isSlots=!1,t.isUserDetails=!1,!t.eventId){e.next=49;break}return t.customClass=!0,t.eventExists=!0,e.next=45,i["a"].get("".concat(t.domainId,"/").concat(t.userId,"/").concat(t.eventId));case 45:t.eventsList=e.sent,t.getEventDetails(t.eventsList[0],0),e.next=53;break;case 49:return e.next=51,i["a"].get("project/".concat(t.domainId,"/").concat(t.projectId,"/").concat(t.userId,"?project_name=").concat(t.selectedProject.name));case 51:t.eventsList=e.sent,t.eventShow=!0;case 53:t.user&&(t.eventShow=!0),e.next=57;break;case 56:t.customClass=!1;case 57:t.isBusy=!1,u["a"].$on("updateCustomClass",(function(){t.customClass=!1}));case 59:case"end":return e.stop()}}),e)})))()},methods:{getProjectUsers:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isBusy=!0,e.eventShow=!1,e.isSlots=!1,e.selectedProject=t,e.projectId=t.id,s.next=7,i["a"].get_agents(window.region,"project/".concat(e.domainId,"/").concat(e.projectId,"?project_name=").concat(e.selectedProject.name));case 7:e.usersList=s.sent,e.usersList&&1==e.usersList.length&&e.getEvents(e.usersList[0],0),e.ShowAgent=!0,e.isBusy=!1;case 11:case"end":return s.stop()}}),s)})))()},getEvents:function(t,e){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s.eventShow=!1,s.isSlots=!1,s.usersList[s.previousIndex]&&s.usersList[s.previousIndex].selecteduser&&(s.usersList[s.previousIndex].selecteduser=!1),s.usersList[e].selecteduser=!0,s.previousIndex=e,s.user=t,s.isSlots=!1,s.isUserDetails=!1,n.next=10,i["a"].get("project/".concat(s.domainId,"/").concat(s.projectId,"/").concat(s.user.id,"?project_name=").concat(s.selectedProject.name));case 10:s.eventsList=n.sent,s.eventShow=!0;case 12:case"end":return n.stop()}}),n)})))()},getEventDetails:function(t,e){this.reRender+=1,this.event=t,this.isSlots=!0,this.isUserDetails=!1,this.eventsList.map((function(t){t.selectedevent=!1})),this.eventsList[e].selectedevent=!0,this.$refs.eventDetailsRef&&(this.$refs.eventDetailsRef.getEventData(this.event.id),this.$refs.eventDetailsRef.timesArray=[])},openPopover:function(){this.$refs.popover.$emit("open")},showSteps:function(t){"user"==t?(this.showUser=!0,this.eventShow=!1,this.isSlots=!1,this.isUserDetails=!1):"event"==t&&this.user&&this.user.email?(this.showUser=!0,this.eventShow=!0,this.isSlots=!1,this.isUserDetails=!1):"slot"==t&&this.event&&this.event.title?(this.isSlots=!0,this.showUser=!0,this.eventShow=!0,this.$refs.eventDetailsRef.isUserDetails=!1,this.$refs.eventDetailsRef.isUserData=!0,this.isUserDetails=!1):"booking"==t&&this.$refs.eventDetailsRef.showBooking("booking")}}},p=d,m=(s("88fc"),s("2877")),f=Object(m["a"])(p,n,a,!1,null,null,null);e["default"]=f.exports},b6e1:function(t,e,s){"use strict";s("c60c")},c60c:function(t,e,s){},c611:function(t,e,s){},d261:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-container",{staticClass:"px-0"},[t.isConfirmed?t._e():s("div",[s("Users")],1)]),s("b-container",[t.isConfirmed?s("div",[s("Confirmation",{attrs:{userName:t.userName,eventData:t.eventData,response:t.response}})],1):t._e()])],1)},a=[],r=s("ae3f"),i=s("0c38"),o={name:"Schedulely",components:{Users:r["default"],Confirmation:i["default"]},data:function(){return{isConfirmed:!1,userName:"",eventData:{},response:{}}},mounted:function(){var t=this;this.$on("bookSlotConfirmed",(function(e,s,n,a){t.isConfirmed=e,t.userName=s,t.eventData=n,t.response=a}))},methods:{}},c=o,l=(s("b6e1"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},f68e:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showConfirm?s("div",[s("Confirmation",{attrs:{cancelStatus:!0}})],1):s("b-card",{staticClass:"col-sm-6 mt-7 mx-auto"},[t.pageError?s("b-card-body",[s("h3",{staticClass:"text-center"},[t._v("Sorry! Your URL is Broken")])]):s("b-card-body",{staticClass:"p-0",attrs:{"no-body":""}},[s("div",[s("h4",{staticClass:"mb-0 pt-3"},[t._v("Cancel Appointment")]),s("p",{staticClass:"text-muted mb-0 mt-1 small"},[t._v("Cancel your booked appointment")])]),s("hr"),s("b-row",{staticClass:"pt-3",attrs:{lg:"12"}},[s("b-col",{attrs:{lg:"4"}},[s("span",{staticClass:"text-muted"},[t._v(" Event Owner : ")])]),s("b-col",{attrs:{lg:"8"}},[s("span",[t._v(" "+t._s(t.eventTypeData.name)+" ")])])],1),s("b-row",{staticClass:"pt-3",attrs:{lg:"6"}},[s("b-col",{attrs:{lg:"4"}},[s("span",{staticClass:"text-muted"},[t._v(" Event Name : ")])]),s("b-col",{attrs:{lg:"8"}},[s("span",[t._v(" "+t._s(t.eventTypeData.title)+" ")])])],1),s("b-row",{staticClass:"pt-3",attrs:{lg:"12"}},[s("b-col",{attrs:{lg:"4"}},[s("span",{staticClass:"text-muted"},[t._v(" Description : ")])]),s("b-col",{attrs:{lg:"8"}},[s("span",{domProps:{innerHTML:t._s(decodeURI(t.eventTypeData.description))}})])],1),s("b-row",{staticClass:"pt-3",attrs:{lg:"12"}},[s("b-col",{attrs:{lg:"4"}},[s("span",{staticClass:"text-muted"},[t._v(" Status: ")])]),s("b-col",{attrs:{lg:"8"}},[s("span",[t._v(" "+t._s(t.eventTypeData.status)+" ")])])],1),s("b-row",{staticClass:"pt-3",attrs:{lg:"12"}},[s("b-col",{attrs:{lg:"4"}},[s("span",{staticClass:"text-muted"},[t._v(" Appointment Date / Time : ")])]),s("b-col",{attrs:{lg:"8"}},[t.eventTypeData.start_time?s("span",[t._v(" "+t._s(t.moment(t.moment.utc(t.eventTypeData.start_time)).format("llll"))+" ")]):t._e()])],1),t.cancelEventStatus?s("b-row",{staticClass:"pt-3",attrs:{lg:"12"}},[s("b-col",[s("span",{staticClass:"text-muted"},[t._v(" Cancellation Reason : ")]),s("b-form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.cancelEvent(e)}}},[s("b-form-textarea",{attrs:{autocomplete:"off",placeholder:"Enter cancellation reason",required:"",trim:""},model:{value:t.form.cancelReason,callback:function(e){t.$set(t.form,"cancelReason",e)},expression:"form.cancelReason"}}),s("hr"),s("button",{staticClass:"btn btn-primary float-right p-2 px-4",attrs:{type:"submit"}},[t._v(" Confirm ")])],1)],1)],1):t._e()],1)],1),s("b-overlay",{attrs:{show:t.isBusy,"no-wrap":"",opacity:"0.5"}})],1)},a=[],r=(s("99af"),s("96cf"),s("c964")),i=s("7eaf"),o=s("0c38"),c=s("c1df"),l=s.n(c),u={name:"CancelEvent",components:{Confirmation:o["default"]},data:function(){return{domain:"",eventTypeData:{},cancelEventStatus:!1,showCancelText:"",form:{cancelReason:""},pageError:!1,showConfirm:!1,isBusy:!1}},mounted:function(){this.domainId=window.domain,this.$route.query&&this.$route.query.email?this.getEventTypeData():this.pageError=!0},methods:{getEventTypeData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isBusy=!0,s={email:t.$route.query.email},e.next=5,i["a"].add("".concat(t.domainId,"/").concat(t.$route.params.user_id,"/").concat(t.$route.params.event_id,"/events"),s);case 5:n=e.sent,n.length>0?(t.eventTypeData=n[0],a=new Date(t.eventTypeData.start_time),a=a.setMinutes(a.getMinutes()-l()().utcOffset()),a>(new Date).getTime()&&"scheduled"==t.eventTypeData.status&&(t.cancelEventStatus=!0)):t.cancelEventStatus=!1,t.isBusy=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),t.pageError=!0,t.isBusy=!1;case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},cancelEvent:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isBusy=!0,"cancel"!==t.eventTypeData.status){e.next=5;break}t.showCancelText="This appointment has been already cancelled.",e.next=10;break;case 5:return s={status:"cancelled",event_id:t.$route.params.event_id,email:t.$route.query.email,cancel_reason:t.form.cancelReason},e.next=8,i["a"].edit(t.$route.params.event_id,"".concat(t.domainId,"/").concat(t.$route.params.user_id,"/cancelEvent"),s);case 8:t.showConfirm=!0,t.isBusy=!1;case 10:case"end":return e.stop()}}),e)})))()}}},d=u,p=s("2877"),m=Object(p["a"])(d,n,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=schedule.f8b1bf7c.js.map