(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjaauth","ninjacapture110"],{"0020":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-5"},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("div",[n("b-row",[n("b-col",{attrs:{cols:"11"}},[n("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Api Key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control mx-0",attrs:{type:"text",rows:"15"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),n("b-col",{attrs:{cols:"1 mt-5"}},[n("button",{staticClass:"btn btn-block btn-primary mb-3 px-3",attrs:{size:"sm"},on:{click:t.loadInit}},[t._v("Copy")])])],1),n("b-col",{attrs:{cols:"12 mb-3"}},[n("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Init Method")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control mx-3",attrs:{disabled:"",rows:"3"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t.is_script?n("b-tabs",{attrs:{"content-class":"mt-4"}},[n("b-tab",{attrs:{title:"Single Sign On"}},[n("SingleSignOn",{attrs:{api_key:t.api_key}})],1)],1):t._e()],1)])],1)],1)},a=[],o=n("1325"),r=n("c747"),s=n("8f77"),c={components:{SingleSignOn:o["default"]},data:function(){return{is_script:!1,code:"",api_key:"",id:""}},mounted:function(){this.id=this.$route.params.key,this.code="window._AppletIO.init(".concat(this.$route.params.key,")"),this.loadScript()},methods:{loadScript:function(){r["a"].downloadJS(this.getUrl());var t=this;setTimeout((function(){t.is_script=!0,t.loadInit()}),1e3)},loadInit:function(){this.code="window._AppletIO.init(".concat(this.id,")"),window._AppletIO.init(this.id);var t=this;setTimeout((function(){t.api_key=t.id}),1e3),s["a"].copy(this.id)},getUrl:function(){var t="https://appletio-js.500apps.com/";return"dev"==window.region||"qa"==window.region?t+"".concat(window.region,"/main.js"):t+"main.js"}}},l=c,d=n("2877"),u=Object(d["a"])(l,i,a,!1,null,"6dbfe7a3",null);e["default"]=u.exports},1325:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("b-row",{},[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Script")]),n("b-card",[n("b-form",[n("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"15"},domProps:{value:t.code}})])],1)],1),n("div",{staticClass:"col-md-5"},[n("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Single Sign On")]),n("b-card",[n("div",{attrs:{id:"unified_SSO"}})]),n("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Result")]),n("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"8"},domProps:{value:t.profile_data}})],1)])])],1)],1)},a=[],o={name:"SSO",data:function(){return{code:"",profile_data:""}},props:{api_key:String},mounted:function(){this.code="window._AppletIO.getSSO().render('unified_SSO',(event) => {console.log(event);}))"},methods:{},watch:{api_key:function(){var t=this;window._AppletIO.getSSO().render("unified_SSO",(function(e){t.profile_data=JSON.stringify(e.data)}))}}},r=o,s=n("2877"),c=Object(s["a"])(r,i,a,!1,null,"2bfb1ce8",null);e["default"]=c.exports},"8f77":function(t,e,n){"use strict";n("d3b7");var i=n("276c"),a=n("e954"),o=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"copy",value:function(t){var e=this;return new Promise((function(n){navigator.clipboard?navigator.clipboard.writeText(t).then((function(){return n(!0)})).catch((function(){return n(!1)})):e.fallbackCopyTextToClipboard(t)}))}},{key:"fallbackCopyTextToClipboard",value:function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}]),t}();e["a"]=new o},c747:function(t,e,n){"use strict";n("d3b7");var i=n("276c"),a=n("e954"),o=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"downloadJS",value:function(t){var e=document.createElement("script");e.src=t,e.type="text/javascript",e.async=!1,document.getElementsByTagName("head")[0].appendChild(e)}},{key:"downloadCSS",value:function(t,e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,e&&(n.id=e),document.getElementsByTagName("head")[0].appendChild(n)}},{key:"remove",value:function(t){document.getElementById(t)&&document.getElementById(t).remove()}},{key:"loadWithPromise",value:function(t,e){return new Promise((function(n,i){if(document.querySelector('script[src="'+t+'"]'))n("done");else{var a=document.createElement("script");a.src=t,e&&(a.id=e),document.head.appendChild(a),a.addEventListener("load",(function(){n("done")}))}}))}}]),t}();e["a"]=new o}}]);
//# sourceMappingURL=ninjaauth.eb35b677.js.map