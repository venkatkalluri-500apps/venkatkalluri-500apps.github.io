(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture2"],{"116b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("b-row",{},[i("b-col",{attrs:{cols:"12"}},[i("b-row",[i("div",{staticClass:"col-md-7"},[i("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Script")]),i("b-card",[i("b-form",[i("textarea",{staticClass:"form-control mx-3",attrs:{disabled:"",rows:"15"},domProps:{value:t.code}})])],1)],1),i("div",{staticClass:"col-md-5"},[i("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("FilePicker")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("button",{staticClass:"btn btn-block btn-primary",attrs:{size:"sm"},on:{click:t.loadFilePicker}},[t._v("Get File")])]),i("div",{staticClass:"col-md-6"},[i("button",{staticClass:"btn btn-block btn-primary",attrs:{size:"sm"},on:{click:function(e){t.upload_file=!t.upload_file}}},[t._v("Upload File")])])]),t.upload_file?i("div",[i("div",[i("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Select File to Upload")])]),i("input",{attrs:{type:"file",id:"file_data"},on:{change:function(e){return t.uploadFile(e)}}})]):t._e(),i("label",{staticClass:"mb-2 mt-3",attrs:{for:"inline-form-input-name"}},[t._v("Result")]),i("div",{staticClass:"row"},[t.upload_file?i("div",{attrs:{id:"show_image"}}):i("p",[t._v(t._s(t.file_data))]),i("p")])])])],1)],1),i("div",{attrs:{id:"container"}})],1)},l=[],o={name:"FilePicker",data:function(){return{code:"",file_data:"",upload_file:!1}},props:{api_key:String},mounted:function(){this.code="window._AppletIO.getFilePicker().getFile((event) => {console.log(event);})) window._AppletIO.getFilePicker().uploadFile({{file_data}})"},methods:{uploadFile:function(t){window._AppletIO.getFilePicker().uploadFile(t.target.files[0]),this.upload_file=!1,this.file_data="successfully uploaded"},loadFilePicker:function(){var t=this;t.file_data="",t.upload_file=!1,window._AppletIO.getFilePicker().getFile((function(e){t.convertImageURL(e)}))},convertImageURL:function(t){var e=new window.FileReader;e.readAsDataURL(t),e.onload=function(){var t=document.createElement("img");t.src=e.result,this.file_data=e.result,document.getElementById("show_image").appendChild(t)}}}},n=o,s=i("2877"),r=Object(s["a"])(n,a,l,!1,null,"4d280d3a",null);e["default"]=r.exports}}]);
//# sourceMappingURL=ninjacapture2.4e325c16.js.map