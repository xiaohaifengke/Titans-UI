(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},o={index:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d3ca5":"317ada2f","chunk-2d208a29":"0e92c0c0","chunk-2d216271":"720ea0f6","chunk-2d228caf":"927c0f8a","chunk-7705b1c9":"19f8be2b","chunk-a4024ea2":"708de067"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-a4024ea2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d3ca5":"31d6cfe0","chunk-2d208a29":"31d6cfe0","chunk-2d216271":"31d6cfe0","chunk-2d228caf":"31d6cfe0","chunk-7705b1c9":"31d6cfe0","chunk-a4024ea2":"5ab78f2a"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Titans-UI/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("9682")},"6b78":function(e,t,n){},"7a87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("b0c0");var r=n("5530"),a=n("15fd"),o=n("7a23");function c(e){var t=e.setup,n=e.provideRefer,c=Object(a["a"])(e,["setup","provideRefer"]);return Object(r["a"])(Object(r["a"])({},Object(o["g"])(Object(r["a"])(Object(r["a"])({},c),{},{setup:function(e,r){var a=Object(o["h"])();if(!t)return console.error("designComponent: set up is required"),function(){return null};var u=t(e,r),i=u.refer,l=u.render;return a._refer=i,n&&(c.name?Object(o["m"])("@@".concat(c.name),i):console.error("designComponent: name is required when provideRefer is true")),l}}))),{},{use:{ref:function(e){var t=Object(o["h"])().ctx;return{get value(){return t.$refs[e].$._refer}}},inject:function(e){return Object(o["i"])("@@".concat(c.name),e)}}})}},"8b64":function(e,t,n){},"8be2":function(e,t,n){"use strict";n("6b78")},9682:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app-home"};function o(e,t,n,o,c,u){var i=Object(r["q"])("app-menu"),l=Object(r["q"])("app-navigator-page"),f=Object(r["q"])("AppNavigator");return Object(r["l"])(),Object(r["d"])(f,{defaultPath:"normal/button",ref:"navigator"},{default:Object(r["u"])((function(){return[Object(r["f"])("article",a,[Object(r["f"])("section",{class:"app-header",style:{height:e.HomeConfig.headSize+"px"}},[Object(r["f"])("span",{onClick:t[1]||(t[1]=function(){return e.goHome&&e.goHome.apply(e,arguments)})},"Titans-UI")],4),Object(r["f"])("section",{class:"app-menu",style:{width:e.HomeConfig.menuSize+"px",top:e.HomeConfig.headSize+"px"}},[Object(r["f"])(i)],4),Object(r["f"])("section",{class:"app-content",style:{paddingTop:e.HomeConfig.headSize+20+"px",paddingLeft:e.HomeConfig.menuSize+20+"px"}},[Object(r["f"])(l)],4)])]})),_:1},512)}n("fb6a"),n("ac1f"),n("1276");var c=n("3835"),u=n("7a87");function i(){var e=window.location.hash||"";"#"===e.charAt(0)&&(e=e.slice(1));var t=decodeURIComponent(e).split("#"),n=Object(c["a"])(t,2),r=n[0],a=n[1];return{path:r,hash:a}}function l(e){var t=Object(r["h"])(),n=i();n.path||(n.path=e.defaultPath);var a=Object(r["n"])({route:n}),o={go:function(e){window.location.hash=encodeURIComponent(e)}},c={hashchange:function(){a.route=i()}},u={state:a,methods:o};return t._refer=u,window.addEventListener("hashchange",c.hashchange),Object(r["k"])((function(){return window.removeEventListener("hashchange",c.hashchange)})),u}var f=Object(u["a"])({name:"app-navigator",props:{defaultPath:String},provideRefer:!0,setup:function(e,t){return{refer:l(e),render:function(){return t.slots.default&&t.slots.default()}}}}),s=(n("d3b7"),n("96cf"),n("1da1")),p=Object(u["a"])({setup:function(){var e=Object(r["n"])({PageComponent:null}),t=f.use.inject(),a={reset:function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(){var o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=t.state.route.path,o){a.next=3;break}return a.abrupt("return");case 3:return"/"===o.charAt(0)&&(o=o.slice(1)),a.next=6,n("e45c")("./"+o);case 6:c=a.sent.default,e.PageComponent=Object(r["j"])(c);case 8:case"end":return a.stop()}}),a)})));function o(){return a.apply(this,arguments)}return o}()};return Object(r["t"])((function(){return t.state.route.path}),a.reset,{immediate:!0}),{render:function(){var t=e.PageComponent;return Object(r["f"])("div",{class:"app-navigator-page"},[t?Object(r["f"])(t,null,null):null])}}}});n("99af"),n("b0c0");function d(e,t,n,a,o,c){return Object(r["l"])(!0),Object(r["d"])(r["a"],null,Object(r["p"])(a.menus,(function(e){return Object(r["l"])(),Object(r["d"])("div",{key:e.name},[(Object(r["l"])(!0),Object(r["d"])(r["a"],null,Object(r["p"])(e.children,(function(t){return Object(r["l"])(),Object(r["d"])("div",{key:t.name,onClick:Object(r["w"])((function(n){return a.handleClickMenu({path:"".concat(e.path,"/").concat(t.path)})}),["stop"])},[Object(r["f"])("span",null,Object(r["r"])(t.meta.title),1),Object(r["f"])("span",null,Object(r["r"])(t.meta.subtitle),1)],8,["onClick"])})),128))])})),128)}var h=[{path:"/normal",name:"normal",meta:{title:"基础"},children:[{path:"color",name:"color",meta:{title:"Color",subtitle:"颜色"}},{path:"icon",name:"icon",meta:{title:"Icon",subtitle:"图标"}},{path:"layout",name:"layout",meta:{title:"Layout",subtitle:"布局"}}]},{path:"/form",name:"form",meta:{title:"表单组件"},children:[{path:"button",name:"button",meta:{title:"Button",subtitle:"按钮"}},{path:"input",name:"input",meta:{title:"Input",subtitle:"输入框"}}]}],b={name:"app-menu",props:{currentPath:{type:String}},setup:function(){var e=f.use.inject();return{menus:h,handleClickMenu:function(t){console.log(t),e.methods.go(t.path)}}}};b.render=d;var m=b,v=n("5c40"),j={headSize:60,menuSize:300},g=Object(v["j"])({components:{AppMenu:m,AppNavigator:f,AppNavigatorPage:p},name:"app",data:function(){return{HomeConfig:j}},methods:{goHome:function(){console.log(this.$refs.navigator),this.$refs.navigator.$._refer.methods.go("home")}}});n("8be2");g.render=o;var O=g,y=n("ffb4"),k=Object(r["c"])(O);k.use(y["b"]),k.mount("#app"),window.app=k},"9f13":function(e,t,n){},e45c:function(e,t,n){var r={"./form/button":["882b","chunk-a4024ea2"],"./form/button.vue":["882b","chunk-a4024ea2"],"./form/input":["ad6d0","chunk-7705b1c9"],"./form/input.vue":["ad6d0","chunk-7705b1c9"],"./home":["db61","chunk-2d228caf"],"./home.vue":["db61","chunk-2d228caf"],"./normal/color":["a642","chunk-2d208a29"],"./normal/color.vue":["a642","chunk-2d208a29"],"./normal/icon":["5dee","chunk-2d0d3ca5"],"./normal/icon.vue":["5dee","chunk-2d0d3ca5"],"./normal/layout":["c0f4","chunk-2d216271"],"./normal/layout.vue":["c0f4","chunk-2d216271"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="e45c",e.exports=a},ffb4:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("4160"),n("159b"),n("b0c0");var r=n("5530");function a(e,t){return Object(r["a"])(Object(r["a"])({},e),{},{install:function(n){n.component(e.name,e),null===t||void 0===t||t.forEach(n.use)}})}var o=n("7a23"),c=n("7a87"),u=(n("8b64"),Object(c["a"])({name:"TiInput",props:{status:{type:String,default:"primary"}},setup:function(e){var t=Object(o["o"])(""),n=Object(o["o"])(null),r=Object(o["b"])((function(){return["ti-input","ti-input-status-".concat(e.status)]})),a={focus:function(){n.value.focus()},clear:function(){t.value=""}};return{refer:{methods:a,modelValue:t},render:function(){return Object(o["f"])("div",{class:r.value},[Object(o["v"])(Object(o["f"])("input",{class:"ti-input-inner",type:"text","onUpdate:modelValue":function(e){return t.value=e},ref:n},null),[[o["s"],t.value]]),Object(o["f"])("button",{onClick:a.clear},[Object(o["e"])("clear")])])}}}}));console.log("加载了 TiInput 组件");var i=a(u),l=(n("9f13"),Object(c["a"])({name:"TiButton",props:{status:{type:String,default:"primary"},label:{type:String}},setup:function(e,t){var n=["ti-button","ti-button-status-".concat(e.status)];return{render:function(){return Object(o["f"])("button",{class:n},[t.slots.default?t.slots.default():e.label])}}}}));console.log("加载了 TiButton 组件");var f=a(l),s=[i,f];function p(e){s.forEach(e.use)}t["b"]={install:p}}});
//# sourceMappingURL=index.58c48214.js.map