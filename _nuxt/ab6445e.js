(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(t,e,n){t.exports=n.p+"img/cim-text-hztl-color.4c2c14c.png"},173:function(t,e,n){"use strict";var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-header"},[r("button",{staticClass:"navbar-toggle collapsed",attrs:{"aria-expanded":"false","aria-controls":"navbar",type:"button","data-toggle":"collapse","data-target":"#navbar"}},[r("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"})]),t._v(" "),r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[r("img",{staticStyle:{"max-width":"345px","margin-top":"5px"},attrs:{src:n(172)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"page-link",staticStyle:{color:"#000"},attrs:{href:"https://cloudinformationmodel.org",target:"_blank"}},[t._v("Website")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"page-link",attrs:{target:"_blank",href:"https://github.com/cloudinformationmodel"}},[e("i",{staticClass:"fab fa-github-alt",staticStyle:{color:"#000"}})])])}],o=n(32),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",{staticClass:"navbar navbar-default navbar-fixed-top",staticStyle:{background:"rgb(255 255 255)",border:"1px solid #d0c6c6"},attrs:{role:"navigation"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[n("ul",{staticClass:"nav navbar-nav"},[t._m(1),t._v(" "),n("li",[n("NuxtLink",{staticStyle:{color:"#000"},attrs:{to:"/table"}},[t._v("Subject Areas")])],1),t._v(" "),t._m(2)])])])])])}),r,!1,null,null,null);e.a=component.exports},175:function(t,e,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("6759f5ab",content,!0,{sourceMap:!1})},179:function(t,e,n){t.exports=n.p+"img/hire.5a1938b.png"},180:function(t,e,n){"use strict";n(175)},181:function(t,e,n){var r=n(68)(!1);r.push([t.i,".button1{background-color:#e7e7e7;color:#000;border-color:#efefef}.button2{border:4px solid #00285f}.button2,.button3{background-color:#dae8fc;color:#780994}.button3{border:4px dotted #00285f}.button4{border-radius:12px}.button{padding:10px;text-align:center;text-decoration:none;display:inline-block;font-size:10px;cursor:pointer;margin:4px auto;display:block;width:110px}.imagen{max-width:50%;align-content:baseline;margin:12.5px auto 2px 37px}table{width:100%;border:1px solid #000}td,th{width:25%;text-align:left;vertical-align:top;border:1px solid hsla(0,0%,100%,0)}.td{border:1px solid hsla(0,0%,91%,0);padding:3px 1px}h5{color:#780994}",""]),t.exports=r},197:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(31),{head:function(){return{titleTemplate:"%s",title:"CIM"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("index").fetch();case 3:return r=e.sent,e.abrupt("return",{doc:r});case 5:case"end":return e.stop()}}),e)})))()},name:"BaseBlock",components:{Navbar:n(173).a}}),l=(n(180),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Default",{attrs:{title:t.doc.title}},[r("div",[r("Navbar")],1),t._v(" "),r("div",{staticClass:"home"},[r("div",{staticClass:"tier",staticStyle:{padding:"50px 1px"}},[r("div",{staticClass:"container",staticStyle:{"margin-top":"90px"}},[r("table",{staticStyle:{"table-layout":"fixed",width:"1200px"}},[r("tr",{staticStyle:{border:"1px solid #ffffff00"}},t._l(t.doc.subjects,(function(t){return r("td",{staticClass:"td"},[r("img",{staticClass:"imagen",staticStyle:{"font-size":"50px","margin-left":"25px"},attrs:{src:n(179)}})])})),0),t._v(" "),r("tr",{staticStyle:{border:"1px solid #ffffff00"}},t._l(t.doc.subjects,(function(e){return r("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.title))])})),0),t._v(" "),r("tr",{staticStyle:{background:"white"}},t._l(t.doc.subjects,(function(e){return r("td",{staticClass:"td"},[t._l(e.items,(function(e){return"enable"===e.status?r("button",{staticClass:"button button2"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e()})),t._v(" "),t._l(e.items,(function(e){return"progres"===e.status?r("button",{staticClass:"button button3"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e()})),t._v(" "),t._l(e.items,(function(e){return"not"===e.status?r("button",{staticClass:"button button4"},[t._v("\n            "+t._s(e.title)+"\n          ")]):t._e()}))],2)})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);