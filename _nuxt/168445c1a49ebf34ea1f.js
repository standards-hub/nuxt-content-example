(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("0fa96cd9",content,!0,{sourceMap:!1})},156:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("27707cc1",content,!0,{sourceMap:!1})},157:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("08a11a8b",content,!0,{sourceMap:!1})},158:function(t,e,n){"use strict";var o=n(155);n.n(o).a},159:function(t,e,n){(e=n(62)(!1)).push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--side-padding:23%}@media screen and (max-width:750px){:root{--side-padding:5%}}*{box-sizing:border-box}body,html{margin:0;padding:0;font-size:19px;font-family:Inter,-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial;line-height:1.7}h1{font-weight:900;margin-bottom:.5em}main{margin:1em 23%;margin:1em var(--side-padding)}main .date{font-size:.9em;color:#777}",""]),t.exports=e},160:function(t,e,n){"use strict";var o=n(156);n.n(o).a},161:function(t,e,n){(e=n(62)(!1)).push([t.i,"header[data-v-6966a0dd]{padding:.8em var(--side-padding);border-bottom:1px solid #ddd}header .title[data-v-6966a0dd]{font-weight:600;font-size:1.2em;margin-bottom:.2em}header nav ul[data-v-6966a0dd]{list-style-type:none;margin:0;padding:0;display:flex;overflow-x:scroll}header nav ul li a[data-v-6966a0dd]{color:#333;text-decoration:none}header nav ul li a[data-v-6966a0dd]:hover{font-weight:700;text-decoration:underline}header nav ul li+li[data-v-6966a0dd]{margin-left:1em}",""]),t.exports=e},162:function(t,e,n){"use strict";var o=n(157);n.n(o).a},163:function(t,e,n){(e=n(62)(!1)).push([t.i,"a[data-v-d9b8e6ca]{display:inline-block;color:#777;text-decoration:unset;border:1px solid #ccc;padding:.5em 1.2em;border-radius:1000em}a[data-v-d9b8e6ca]:hover{color:#000;border:1px solid #000}",""]),t.exports=e},164:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!1},backLink:{type:String,required:!1},date:{type:String,required:!1}},computed:{dateDisplay:function(){var t=new Date(this.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate())}}},r=(n(158),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("main",[t.backLink?n("BackButton",{attrs:{backLink:t.backLink}}):t._e(),t._v(" "),t.title?n("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.date?n("div",{staticClass:"date"},[t._v("\n      Last updated:\n      "),n("b",[t._v(t._s(t.dateDisplay))])]):t._e(),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(166).default,BackButton:n(165).default})},165:function(t,e,n){"use strict";n.r(e);var o={props:{backLink:{type:String,required:!1}}},r=(n(162),n(19)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:this.backLink}},[this._v("< back")])],1)}),[],!1,null,"d9b8e6ca",null);e.default=component.exports},166:function(t,e,n){"use strict";n.r(e);n(160);var o=n(19),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"title"},[t._v("Nuxt Content")]),t._v(" "),n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact-us"}},[t._v("Contact")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Posts")])],1),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://github.com/ninest/nuxt-content-example",target:"_blank"}},[this._v("GitHub")])])}],!1,null,"6966a0dd",null);e.default=component.exports},167:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("69b0b438",content,!0,{sourceMap:!1})},168:function(t,e,n){var content=n(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("4dbade7e",content,!0,{sourceMap:!1})},172:function(t,e,n){"use strict";var o=n(167);n.n(o).a},173:function(t,e,n){(e=n(62)(!1)).push([t.i,".post-container+.post-container[data-v-66387e4a]{margin-top:.5em}",""]),t.exports=e},174:function(t,e,n){"use strict";var o=n(168);n.n(o).a},175:function(t,e,n){(e=n(62)(!1)).push([t.i,".post-container[data-v-e210b2d4]{display:block;color:unset;text-decoration:unset;padding:1.3em;border:1px solid #eee;border-radius:.4em}.post-container h3[data-v-e210b2d4]{margin-top:0;margin-bottom:.5em}",""]),t.exports=e},191:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"Title"},desc:{type:String,default:"Description"},slug:{type:String,default:"/"}}},r=(n(174),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"post-container",attrs:{to:"/posts/"+t.slug}},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("div",[t._v(t._s(t.desc))])])}),[],!1,null,"e210b2d4",null);e.default=component.exports},193:function(t,e,n){"use strict";n.r(e);n(20);var o=n(3),r={data:function(){return{posts:[]}},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"My beautiful blog"}]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("posts").fetch();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},l=(n(172),n(19)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Default",{attrs:{title:"Posts"}},this._l(this.posts,(function(p){return e("PostContainer",{key:p.slug,attrs:{title:p.title,desc:p.description,slug:p.slug}})})),1)}),[],!1,null,"66387e4a",null);e.default=component.exports;installComponents(component,{PostContainer:n(191).default,Default:n(164).default})}}]);