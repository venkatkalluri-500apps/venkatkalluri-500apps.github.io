(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture6"],{1669:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.app,expression:"app"}],staticClass:"form-control mx-2",attrs:{"aria-label":"Default select example"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.app=e.target.multiple?a:a[0]},function(e){t.code="window._AppletIO.getOAuth().authenticate('"+t.app+"')"}]}},[a("option",{attrs:{value:"",selected:""}},[t._v("Select app")]),t._l(t.apps,(function(e){return a("option",{key:e},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"col-md-3"},[a("button",{staticClass:"btn btn-block btn-primary mb-3 px-5",attrs:{size:"sm"},on:{click:function(e){return t.authenticate()}}},[t._v("Try it")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Script")]),a("b-card",[a("b-form",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control mx-3",attrs:{disabled:"",rows:"15"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})])],1)],1),a("div",{staticClass:"col-md-5"},[a("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Result")]),a("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"15"},domProps:{value:t.response}})])])])},i=[],r=(a("4de4"),a("caad"),a("d81d"),a("b0c0"),a("2532"),{name:"OAuth",data:function(){return{app:"",apps:[],code:"",response:""}},props:{api_key:String},mounted:function(){this.code="window._AppletIO.getOAuth().authenticate('".concat(this.app,"')"),this.apps=window._AppletIO.getApps().filter((function(t){return t.api.includes("client_id")||t.api.includes("consumer_key")})).map((function(t){return t.name}))},methods:{authenticate:function(){var t=this;this.app&&window._AppletIO.getOAuth().authenticate(this.app).then((function(e){t.response=JSON.stringify(e.data)}))}}}),s=r,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,"e72e5aba",null);e["default"]=c.exports},"4de4":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").filter,r=a("1dde"),s=a("ae40"),o=r("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),s=a("ae40"),o=r("map"),c=s("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=ninjacapture6.dd8c97d4.js.map