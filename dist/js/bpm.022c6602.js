(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bpm"],{"0da1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vh-100"},[s("b-navbar",{staticClass:"border-bottom p-3",attrs:{variant:"faded",type:"light"}},[s("div",{staticClass:"navbar-brand pb-0 mx-auto"},[s("div",{staticClass:"d-flex"},[s("img",{attrs:{src:"https://infinity.500apps.com/images/mail/bpmapp.png",height:"42",width:"110"}})]),s("p",{staticClass:"mb-0"},[t._v("Powered By "),s("span",{staticClass:"text-primary"},[t._v("500apps")])])])]),s("div",[s("b-row",{staticClass:"text-center mt-7"},[s("b-col"),s("b-col",{attrs:{cols:"8"}},[[s("h3",[t._v("Unsubscribed!")]),s("p",[t._v("You have been successfully unsubscribed from email alerts of BPM application.")])]],2),s("b-col")],1)],1),t._m(0)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fixed-bottom text-center bg-white border-top"},[s("p",{staticClass:"mb-0 mt-3 text-muted"},[t._v("Thanks")]),s("p",[s("b",[t._v("500apps Team")])])])}],r=(s("99af"),s("276c")),n=s("e954"),c=s("920b"),o=s("92a6"),u=s("a11a"),b="https://api.${region}.500apps.com/bpm/unsubscribe/",l=function(t){Object(c["a"])(s,t);var a=Object(o["a"])(s);function s(){var t;return Object(r["a"])(this,s),t=a.call(this,b),t.disablePCors(),t.unsuscribe_url=t.getURL(),t}return Object(n["a"])(s,[{key:"addToUnsubscribe",value:function(t,a){this.url="".concat(this.unsuscribe_url).concat(t,"/").concat(a);var s={is_subscribed:"0"};return this.add(s)}}]),s}(u["a"]),p=new l,d={data:function(){return{}},mounted:function(){p.addToUnsubscribe(this.$route.params.domain_id,this.$route.params.user_id)},methods:{}},m=d,v=s("2877"),h=Object(v["a"])(m,e,i,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=bpm.022c6602.js.map