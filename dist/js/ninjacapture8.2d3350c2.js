(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture8"],{e906:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("b-row",{},[e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Script")]),e("b-card",[e("b-form",[e("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"15"},domProps:{value:t.code}})])],1)],1),e("div",{staticClass:"col-md-5"},[e("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Single Sign On")]),e("b-card",[e("div",{attrs:{id:"unified_SSO"}})]),e("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Result")]),e("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"8"},domProps:{value:t.profile_data}})],1)])])],1)],1)},n=[],s={name:"SSO",data:function(){return{code:"",profile_data:""}},props:{api_key:String},mounted:function(){this.code="window._AppletIO.getSSO().render('unified_SSO',(event) => {console.log(event);}))"},methods:{},watch:{api_key:function(){var t=this;window._AppletIO.getSSO().render("unified_SSO",(function(a){t.profile_data=JSON.stringify(a.data)}))}}},r=s,o=e("2877"),l=Object(o["a"])(r,i,n,!1,null,"7a3517f8",null);a["default"]=l.exports}}]);
//# sourceMappingURL=ninjacapture8.2d3350c2.js.map