(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture116"],{"07ac":function(t,e,a){var n=a("23e7"),s=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return s(t)}})},"1b38":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"modal_ref",attrs:{size:"md","ok-title":"Submit Assessment",id:"confirm-modal",title:"Confirm","content-class":"bg-soft-light submit-modal","header-class":"border-bottom-0","footer-class":"d-flex py-3","cancel-variant":"secondary btn-sm px-3 mr-2 py-1","ok-variant":"primary btn-sm px-4 py-1","body-class":"py-3","hide-header":""},on:{ok:t.submitTest}},[a("h3",{staticClass:"my-3 line-height-14 text-danger"},[t._v("Are you sure you want to submit the assessment?")]),t.total_questions/2>t.answered_questions||t.is_mandatory_validation?a("div",{staticClass:"d-flex "},[a("p",{staticClass:" d-inline-block mb-0 px-3 py-2 my-2 text-body rounded small custom-alert-warning"},[t._v(" We noticed that you have not filled in "),t.total_questions/2>t.answered_questions?a("span",[t._v("all the answers")]):t._e(),t.total_questions/2>t.answered_questions&&t.is_mandatory_validation?a("span",{staticClass:"ml-2"},[t._v("&")]):t._e(),t.is_mandatory_validation?a("span",[t._v(" mandatory (*) questions.")]):t._e()])]):t._e(),a("p",{staticClass:"mt-3"},[a("span",{staticClass:"mb-1 mt-3 text-muted"},[t._v(" Total Questions :"),a("span",{staticClass:"font-weight-bold text-gray-900 ml-2"},[t._v(t._s(t.getTotalCount(t.categories)))])]),a("span",{staticClass:"text-muted ml-3"},[t._v(" Your Answers :"),a("span",{staticClass:"font-weight-bold text-gray-900 ml-2"},[t._v(t._s(t.getAttemptedCount(t.attempt_count)))])])]),a("div",{},[t._v(" Notes "),a("small",{staticClass:"text-muted"},[t._v("(Optional)")]),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Please enter notes...",rows:"3","max-rows":"6"},model:{value:t.candidate_notes,callback:function(e){t.candidate_notes=e},expression:"candidate_notes"}})],1)])],1)},s=[],o=(a("4160"),a("d81d"),a("a9e3"),a("07ac"),a("159b"),{props:{attempt_count:Object,total_questions_count:Number,categories:Array,is_mandatory_validation:Boolean},data:function(){return{answered_questions:0,total_questions:0,candidate_notes:""}},methods:{open:function(){this.$refs["modal_ref"].show()},submitTest:function(){this.$emit("submit",this.candidate_notes)},getAttemptedCount:function(t){var e=0;return Object.values(t).map((function(t){e+=t})),this.answered_questions=e,e},getTotalCount:function(t){var e=0;return t.forEach((function(t){e+=t.questions.length})),this.total_questions=e,e}}}),r=o,i=(a("2d86"),a("2877")),u=Object(i["a"])(r,n,s,!1,null,null,null);e["default"]=u.exports},"2af2":function(t,e,a){},"2d86":function(t,e,a){"use strict";a("2af2")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),s=a("5899"),o="["+s+"]",r=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6f53":function(t,e,a){var n=a("83ab"),s=a("df75"),o=a("fc6a"),r=a("d1e7").f,i=function(t){return function(e){var a,i=o(e),u=s(i),c=u.length,l=0,d=[];while(c>l)a=u[l++],n&&!r.call(i,a)||d.push(t?[a,i[a]]:i[a]);return d}};t.exports={entries:i(!0),values:i(!1)}},7156:function(t,e,a){var n=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var o,r;return s&&"function"==typeof(o=e.constructor)&&o!==a&&n(r=o.prototype)&&r!==a.prototype&&s(t,r),t}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),s=a("da84"),o=a("94ca"),r=a("6eeb"),i=a("5135"),u=a("c6b6"),c=a("7156"),l=a("c04e"),d=a("d039"),f=a("7c73"),p=a("241c").f,m=a("06cf").f,_=a("9bf2").f,v=a("58a8").trim,b="Number",h=s[b],g=h.prototype,y=u(f(g))==b,x=function(t){var e,a,n,s,o,r,i,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+c}for(o=c.slice(2),r=o.length,i=0;i<r;i++)if(u=o.charCodeAt(i),u<48||u>s)return NaN;return parseInt(o,n)}return+c};if(o(b,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var w,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(y?d((function(){g.valueOf.call(a)})):u(a)!=b)?c(new h(x(e)),a,N):x(e)},C=n?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;C.length>I;I++)i(h,w=C[I])&&!i(N,w)&&_(N,w,m(h,w));N.prototype=g,g.constructor=N,r(s,b,N)}},d81d:function(t,e,a){"use strict";var n=a("23e7"),s=a("b727").map,o=a("1dde"),r=a("ae40"),i=o("map"),u=r("map");n({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=ninjacapture116.22078d01.js.map