(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture118"],{6683:function(e,t,a){},8035:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.show_button?[e.hasMicAccess&&e.hasCamAccess?e._e():a("b-card-body",{staticClass:"pb-2 mt-2 px-2 py-0 d-flex justify-content-center"},[a("div",{staticClass:"sr-options w-100"},[a("div",{staticClass:"align-items-baseline d-inline-flex justify-content-center p-0 video-tabs rounded p-2 bg-warning-soft w-100"},[a("div",{staticClass:"align-items-center align-middle d-flex justify-content-between"},[a("div",{staticClass:"d-flex justify-content-between align-items-center text-nowrap w-100"},[a("h5",{staticClass:"mb-0"},[a("span",{staticClass:"sr-team-name  ml-1 pl-1 mr-3"},[e._v("Microphone & Camera ")])]),a("b-button",{staticClass:"small-2",attrs:{variant:"outline-primary grant-buttons",size:"sm"},on:{click:e.requestMediaDeviceAccess}},[e._v("Grant Access")])],1)])])])]),e.hasMicrophone&&e.hasWebcam?e._e():a("b-card-body",{staticClass:"pb-2 mt-2 px-2 d-flex justify-content-center pt-0"},[a("div",{staticClass:"sr-options w-100"},[a("div",{staticClass:"align-items-baseline align-middle d-inline-flex justify-content-center p-2 rounded bg-warning-soft w-100"},[e.hasMicrophone?e._e():a("div",[a("div",{staticClass:"align-items-center align-middle d-flex justify-content-between"},[a("div",{staticClass:"d-flex justify-content-between align-items-center text-nowrap w-100"},[a("h5",{staticClass:"mb-0"},[a("span",{staticClass:"sr-team-name"},[e._v(" No Microphone Detected")])])])])]),a("span",{staticClass:"px-3"},[e._v("|")]),e.hasWebcam?e._e():a("div",[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("div",{staticClass:"d-flex justify-content-between align-items-baseline  text-nowrap w-100"},[a("h5",{staticClass:"mb-0"},[a("span",{staticClass:"sr-team-name"},[e._v("No Camera Detected")])])])])])])])])]:e._e(),a("b-modal",{ref:"camera-not-support-modal",attrs:{id:"grant_permission",size:"lg","header-class":"border-bottom-0 d-none","footer-class":"border-top-0 pt-2","ok-variant":"primary btn-sm px-4 py-1 mx-auto","body-class":"py-3","ok-only":""}},[a("div",{attrs:{id:"getAccess"}},[a("h3",[e._v("Enable Camera & Audio permissions to record yourself.")]),a("p",{staticClass:"mb-2 pl-3"},[e._v("Please follow below steps")]),"Chrome"==e.browser_type.browser?[a("div",{staticClass:"p-0 pt-4 px-3"},[a("div",[a("div",{staticClass:"bg-lighter p-3 rounded"},[a("ul",[a("li",[e._v("Click on camera icon in the address bar")]),a("li",[e._v("Select always Allow to access camera and microphone")]),a("li",[e._v("click on OK button below")])])]),a("p",{staticClass:"mt-2 mb-1"},[e._v("You can REMOVE i.e. DELETE camera permissions anytime on these page")]),a("a",{attrs:{href:"chrome://settings/content/camera?search=camera",target:"_blank"}},[e._v("chrome://settings/content/camera?search=camera")])]),a("div",{staticClass:"text-center mt-2"},[a("img",{staticClass:"img-thumbnail",attrs:{src:"/img/ninjainterview/ninja-cap.gif"}})])])]:e._e(),"Firefox"==e.browser_type.browser?[a("div",{staticClass:"p-0 pt-4 px-3"},[a("div",[a("div",{staticClass:"bg-lighter p-3 rounded"},[a("ul",[a("li",[e._v("Click on the camera icon in the address bar")]),a("li",[e._v("Click on the Blocked buttons next to the camera and microphone")]),a("li",[e._v("Click on the OK button below")])])])])])]:e._e(),"Edge"==e.browser_type.browser?[a("div",{staticClass:"p-0 pt-4 px-3"},[a("div",[a("div",{staticClass:"bg-lighter p-3 rounded"},[a("ul",[a("li",[e._v("Click on camera icon in the address bar")]),a("li",[e._v("Select always Allow to access camera and microphone")]),a("li",[e._v("Click on the OK button below")])])])])])]:e._e(),"Safari"==e.browser_type.browser?[a("div",{staticClass:"p-0 pt-4 px-3"},[a("div",[a("div",{staticClass:"bg-lighter p-3 rounded"},[a("ul",[a("li",[e._v("Click Safari -> Preferences")]),a("li",[e._v("Then click the Website tab")]),a("li",[e._v("Select Camera. Find currently open Website, and set camera permissions to either Allow or Ask")]),a("li",[e._v("Next,go to Microphone section and do the same thing")])])])])])]:e._e()],2)])],2)},i=[],n=(a("4160"),a("159b"),a("96cf"),a("c964")),c={props:{browser_type:Object,show_button:{type:Boolean,default:!0}},data:function(){return{hasWebcam:!1,isWebcamAlreadyCaptured:!1,hasMicrophone:!1,isMicrophoneAlreadyCaptured:!1}},created:function(){this.checkCameraAndAudio()},mounted:function(){var e=this;this.$root.$on("bv::modal::hide",(function(t,a){"grant_permission"==a&&(e.checkCameraAndAudio(),e.$emit("ok"))}))},computed:{hasCamAccess:function(){return!(this.hasWebcam&&!this.isWebcamAlreadyCaptured)},hasMicAccess:function(){return!(this.hasMicrophone&&!this.isMicrophoneAlreadyCaptured)}},methods:{open:function(){this.$refs["camera-not-support-modal"].show()},checkCameraAndAudio:function(){var e=this;navigator.mediaDevices.enumerateDevices().then((function(t){var a=JSON.parse(JSON.stringify(t));a.forEach((function(t){"audioinput"===t.kind?(t.deviceId&&t.label&&(e.isMicrophoneAlreadyCaptured=!0),e.hasMicrophone=!0):"videoinput"===t.kind&&(t.deviceId&&t.label&&(e.isWebcamAlreadyCaptured=!0),e.hasWebcam=!0)}))})).then((function(){})).catch((function(e){console.log(e)}))},requestMediaDeviceAccess:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:console.log("User accepted"),e.checkCameraAndAudio(),e.$emit("ok"),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("err",t.t0),e.open();case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},r=c,o=(a("e308"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,null,null);t["default"]=l.exports},e308:function(e,t,a){"use strict";a("6683")}}]);
//# sourceMappingURL=ninjacapture118.1f51dda9.js.map