var w=Object.defineProperty;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var C=(c,u,l)=>u in c?w(c,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[u]=l,h=(c,u)=>{for(var l in u||(u={}))b.call(u,l)&&C(c,l,u[l]);if(_)for(var l of _(u))y.call(u,l)&&C(c,l,u[l]);return c};import{_ as A,r as F,c as V,a as d,w as m,b as t,d as n,e as B,o as D,V as v}from"./app.4971001b.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:u,openBlock:l,createElementBlock:i}=v;function k(e,a){const o=c("ti-switch");return l(),i("div",null,[u(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s)},null,8,["modelValue"])])}const{ref:p}=v;return h({render:k},{setup(e,{expose:a}){a();const s={value:p(!0),ref:p};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:u,openBlock:l,createElementBlock:i}=v;function k(e,a){const o=c("ti-switch");return l(),i("div",null,[u(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),type:"primary"},null,8,["modelValue"]),u(o,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value=s),type:"success"},null,8,["modelValue"]),u(o,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e.value=s),type:"info"},null,8,["modelValue"]),u(o,{modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=s=>e.value=s),type:"warning"},null,8,["modelValue"]),u(o,{modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=s=>e.value=s),type:"danger"},null,8,["modelValue"])])}const{ref:p}=v;return h({render:k},{setup(e,{expose:a}){a();const s={value:p(!0),ref:p};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:u,createElementVNode:l,openBlock:i,createElementBlock:k}=v;function p(a,o){const s=c("ti-switch");return i(),k("div",null,[l("div",null,[u(s,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r)},null,8,["modelValue"]),u(s,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=r=>a.value=r),"on-color":"rgba(150, 0, 255, 1)","off-color":"rgba(130, 90, 155, 1)"},null,8,["modelValue"]),u(s,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r),"on-color":"rgba(22, 226, 226, 0.2)","off-color":"rgba(15, 73, 100, 0.6)","handle-on-color":"rgba(0, 255, 255, 1)","handle-off-color":"rgba(48, 105, 105, 1)"},null,8,["modelValue"])])])}const{ref:f}=v;return h({render:p},{setup(a,{expose:o}){o();const r={value:f(!0),ref:f};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}})}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:u,openBlock:l,createElementBlock:i}=v;function k(e,a){const o=c("ti-switch");return l(),i("div",null,[u(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),type:"warning",width:60,height:30},null,8,["modelValue"]),u(o,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value=s),type:"danger",width:"80",height:"40"},null,8,["modelValue"])])}const{ref:p}=v;return h({render:k},{setup(e,{expose:a}){a();const s={value:p(!0),ref:p};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:u,openBlock:l,createElementBlock:i}=v;function k(e,a){const o=c("ti-switch");return l(),i("div",null,[u(o,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),"on-text":"\u5F00\u542F","off-text":"\u5173\u95ED"},null,8,["modelValue"])])}const{ref:p}=v;return h({render:k},{setup(e,{expose:a}){a();const s={value:p(!0),ref:p};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}})}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:u,openBlock:l,createElementBlock:i}=v;function k(e,a){const o=c("ti-switch");return l(),i("div",null,[u(o,{modelValue:e.isDisabled,"onUpdate:modelValue":a[0]||(a[0]=s=>e.isDisabled=s),"on-text":"\u7981\u7528/\u53EA\u8BFB\u5F00\u542F","off-text":"\u7981\u7528/\u53EA\u8BFB\u5173\u95ED"},null,8,["modelValue"]),u(o,{modelValue:e.disableItem,"onUpdate:modelValue":a[1]||(a[1]=s=>e.disableItem=s),"on-text":"\u7981\u7528\u9879\u5F00\u542F","off-text":"\u7981\u7528\u9879\u5173\u95ED",disabled:e.isDisabled},null,8,["modelValue","disabled"]),u(o,{modelValue:e.readonlyItem,"onUpdate:modelValue":a[2]||(a[2]=s=>e.readonlyItem=s),"on-text":"\u53EA\u8BFB\u9879\u5F00\u542F","off-text":"\u53EA\u8BFB\u9879\u5173\u95ED",readonly:e.isDisabled},null,8,["modelValue","readonly"]),u(o,{class:"disabled-demo",modelValue:e.referenceItem,"onUpdate:modelValue":a[3]||(a[3]=s=>e.referenceItem=s),type:"success","on-text":"\u53C2\u8003\u9879\u5F00\u542F","off-text":"\u53C2\u8003\u9879\u5173\u95ED"},null,8,["modelValue"])])}const{ref:p}=v;return h({render:k},{setup(e,{expose:a}){a();const o=p(!0),s=p(!0),r=p(!0),E=p(!1),g={isDisabled:o,disableItem:s,readonlyItem:r,referenceItem:E,ref:p};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}(),"render-demo-6":function(){const{resolveComponent:c,createVNode:u,toDisplayString:l,createElementVNode:i,openBlock:k,createElementBlock:p}=v,f={style:{"margin-left":"10px"}};function e(s,r){const E=c("ti-switch");return k(),p("div",null,[u(E,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=g=>s.value=g),"on-text":"ON","off-text":"OFF","on-value":"\u5F00\u542F","off-value":"\u5173\u95ED",width:"75",height:"30"},null,8,["modelValue"]),i("span",f,"\u7ED1\u5B9A\u503C: "+l(s.value),1)])}const{ref:a}=v;return h({render:e},{setup(s,{expose:r}){r();const g={value:a(!0),ref:a};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}()}},at='{"title":"Switch \u5F00\u5173","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5F00\u5173\u7684\u7C7B\u578B type","slug":"\u5F00\u5173\u7684\u7C7B\u578B-type"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u989C\u8272","slug":"\u81EA\u5B9A\u4E49\u989C\u8272"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5C3A\u5BF8","slug":"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"},{"level":2,"title":"\u6587\u5B57\u63CF\u8FF0","slug":"\u6587\u5B57\u63CF\u8FF0"},{"level":2,"title":"\u7981\u7528/\u53EA\u8BFB","slug":"\u7981\u7528-\u53EA\u8BFB"},{"level":2,"title":"\u6269\u5C55\u7684 value \u7C7B\u578B","slug":"\u6269\u5C55\u7684-value-\u7C7B\u578B"},{"level":2,"title":"Switch \u5C5E\u6027","slug":"switch-\u5C5E\u6027"},{"level":2,"title":"Switch \u4E8B\u4EF6","slug":"switch-\u4E8B\u4EF6"}],"relativePath":"component/switch.md","lastUpdated":1644821803249}',x=t("h1",{id:"switch-\u5F00\u5173",tabindex:"-1"},[n("Switch \u5F00\u5173 "),t("a",{class:"header-anchor",href:"#switch-\u5F00\u5173","aria-hidden":"true"},"#")],-1),N=t("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),S=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),I=t("p",null,[n("\u7ED1\u5B9A "),t("code",null,"v-model"),n(" \u5230\u4E00\u4E2A "),t("code",null,"Boolean"),n(" \u7C7B\u578B\u7684\u53D8\u91CF\u3002")],-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=B('<h2 id="\u5F00\u5173\u7684\u7C7B\u578B-type" tabindex="-1">\u5F00\u5173\u7684\u7C7B\u578B type <a class="header-anchor" href="#\u5F00\u5173\u7684\u7C7B\u578B-type" aria-hidden="true">#</a></h2><p>\u5171\u4E94\u79CD\u7C7B\u578B\uFF1A\u4E3B\u8981\uFF08 <code>primary</code> \uFF09\u3001\u6210\u529F\uFF08 <code>success</code> \uFF09\u3001\u4FE1\u606F\uFF08 <code>info</code> \uFF09\u3001\u8B66\u544A\uFF08 <code>warning</code> \uFF09\u3001\u5371\u9669\uFF08 <code>danger</code> \uFF09\u3002</p>',2),O=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=B('<h2 id="\u81EA\u5B9A\u4E49\u989C\u8272" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u989C\u8272" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u901A\u8FC7 <code>type</code> \u5C5E\u6027\u63A7\u5236\u989C\u8272\u5916\uFF0C\u8FD8\u53EF\u4EE5\u81EA\u7531\u7684\u8BBE\u7F6E\u5F00\u5173\u7684\u989C\u8272\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>on-color</code> \u5C5E\u6027\u4E0E <code>off-color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002 \u4F7F\u7528 <code>handle-on-color</code> \u5C5E\u6027\u4E0E <code>handle-off-color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u6309\u94AE\u7684\u989C\u8272\u3002 \u8BBE\u7F6E\u7684\u989C\u8272\u4F1A\u8986\u76D6 <code>type</code> \u5C5E\u6027\u63A7\u5236\u7684\u989C\u8272\u3002</p>',3),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
      `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"on-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(150, 0, 255, 1)"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"off-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(130, 90, 155, 1)"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
      `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"on-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(22, 226, 226, 0.2)"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"off-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(15, 73, 100, 0.6)"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"handle-on-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(0, 255, 255, 1)"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"handle-off-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rgba(48, 105, 105, 1)"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h2",{id:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5C3A\u5BF8 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),z=t("p",null,[n("\u8BBE\u7F6E "),t("code",null,"width"),n(" \u548C "),t("code",null,"height"),n(" \u5C5E\u6027\u6307\u5B9A\u5BBD\u548C\u9AD8\u3002")],-1),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("60"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("30"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("80"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("40"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=t("h2",{id:"\u6587\u5B57\u63CF\u8FF0",tabindex:"-1"},[n("\u6587\u5B57\u63CF\u8FF0 "),t("a",{class:"header-anchor",href:"#\u6587\u5B57\u63CF\u8FF0","aria-hidden":"true"},"#")],-1),J=t("p",null,[n("\u4F7F\u7528 "),t("code",null,"on-text"),n(" \u5C5E\u6027\u4E0E "),t("code",null,"off-text"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\u3002")],-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),L=t("h2",{id:"\u7981\u7528-\u53EA\u8BFB",tabindex:"-1"},[n("\u7981\u7528/\u53EA\u8BFB "),t("a",{class:"header-anchor",href:"#\u7981\u7528-\u53EA\u8BFB","aria-hidden":"true"},"#")],-1),M=t("p",null,"\u5F00\u5173\u7684\u7981\u7528\u72B6\u6001\u548C\u53EA\u8BFB\u72B6\u6001\u3002",-1),Q=t("p",null,[n("\u8BBE\u7F6E "),t("code",null,"disabled"),n(" \u5C5E\u6027\u548C "),t("code",null,"readonly"),n(" \u5C5E\u6027\u5373\u53EF\u3002")],-1),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDisabled"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u7981\u7528/\u53EA\u8BFB\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u7981\u7528/\u53EA\u8BFB\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("disableItem"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u7981\u7528\u9879\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u7981\u7528\u9879\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDisabled"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("readonlyItem"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u53EA\u8BFB\u9879\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u53EA\u8BFB\u9879\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":readonly"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDisabled"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("disabled-demo"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("referenceItem"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u53C2\u8003\u9879\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u53C2\u8003\u9879\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" isDisabled "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" disableItem "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" readonlyItem "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" referenceItem  "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=B('<h2 id="\u6269\u5C55\u7684-value-\u7C7B\u578B" tabindex="-1">\u6269\u5C55\u7684 value \u7C7B\u578B <a class="header-anchor" href="#\u6269\u5C55\u7684-value-\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E <code>on-value</code> \u548C <code>off-value</code> \u5C5E\u6027\uFF0C\u63A5\u53D7 <code>Boolean</code>, <code>String</code> \u6216 <code>Number</code> \u7C7B\u578B\u7684\u503C\u3002</p>',2),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ti-switch")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ON"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("OFF"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"on-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5F00\u542F"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"off-value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("75"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("30"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-left"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("\u7ED1\u5B9A\u503C: {{value}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=B('<h2 id="switch-\u5C5E\u6027" tabindex="-1">Switch \u5C5E\u6027 <a class="header-anchor" href="#switch-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary / success / info / warning / danger</td><td>primary</td></tr><tr><td>on-color</td><td>switch\u7684\u72B6\u6001\u4E3A on \u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>off-color</td><td>switch\u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>handle-on-color</td><td>switch\u7684\u72B6\u6001\u4E3A on \u65F6\u5F00\u5173\u6309\u94AE\u7684\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>handle-off-color</td><td>switch\u7684\u72B6\u6001\u4E3A off \u65F6\u5F00\u5173\u6309\u94AE\u7684\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>switch\u7684\u5BBD\u5EA6\uFF0C\u65E0\u9700\u5E26\u5355\u4F4D\uFF0C\u81EA\u52A8\u5E26\u4E0A\u5355\u4F4D px</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>height</td><td>switch\u7684\u5BBD\u5EA6\uFF0C\u65E0\u9700\u5E26\u5355\u4F4D\uFF0C\u81EA\u52A8\u5E26\u4E0A\u5355\u4F4D px</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-value</td><td>switch\u7684\u72B6\u6001\u4E3A on \u65F6\u7684\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>true</td></tr><tr><td>off-value</td><td>switch\u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>false</td></tr><tr><td>on-text</td><td>switch\u7684\u72B6\u6001\u4E3A on \u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>off-text</td><td>switch\u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB\u72B6\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="switch-\u4E8B\u4EF6" tabindex="-1">Switch \u4E8B\u4EF6 <a class="header-anchor" href="#switch-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>value</td></tr></tbody></table>',4);function Z(c,u,l,i,k,p){const f=F("render-demo-0"),e=F("demo"),a=F("render-demo-1"),o=F("render-demo-2"),s=F("render-demo-3"),r=F("render-demo-4"),E=F("render-demo-5"),g=F("render-demo-6");return D(),V("div",null,[x,N,S,I,d(e,{sourceCode:`<template>
  <ti-switch v-model="value" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[U]),default:m(()=>[d(f)]),_:1}),j,d(e,{sourceCode:`<template>
  <ti-switch v-model="value" type="primary"/>
  <ti-switch v-model="value" type="success"/>
  <ti-switch v-model="value" type="info"/>
  <ti-switch v-model="value" type="warning"/>
  <ti-switch v-model="value" type="danger"/>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[O]),default:m(()=>[d(a)]),_:1}),P,d(e,{sourceCode:`<template>
  <div>
    <ti-switch v-model="value" />
    <ti-switch
      v-model="value"
      on-color="rgba(150, 0, 255, 1)"
      off-color="rgba(130, 90, 155, 1)"
    />
    <ti-switch
      v-model="value"
      on-color="rgba(22, 226, 226, 0.2)"
      off-color="rgba(15, 73, 100, 0.6)"
      handle-on-color="rgba(0, 255, 255, 1)"
      handle-off-color="rgba(48, 105, 105, 1)"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[$]),default:m(()=>[d(o)]),_:1}),T,z,d(e,{sourceCode:`<template>
  <ti-switch
    v-model="value"
    type="warning"
    :width="60"
    :height="30"
  />
  <ti-switch
    v-model="value"
    type="danger"
    width="80"
    height="40"
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[G]),default:m(()=>[d(s)]),_:1}),H,J,d(e,{sourceCode:`<template>
  <ti-switch v-model="value" on-text="\u5F00\u542F" off-text="\u5173\u95ED" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[K]),default:m(()=>[d(r)]),_:1}),L,M,Q,d(e,{sourceCode:`<template>
  <ti-switch
    v-model="isDisabled"
    on-text="\u7981\u7528/\u53EA\u8BFB\u5F00\u542F"
    off-text="\u7981\u7528/\u53EA\u8BFB\u5173\u95ED"
  />

  <ti-switch
    v-model="disableItem"
    on-text="\u7981\u7528\u9879\u5F00\u542F"
    off-text="\u7981\u7528\u9879\u5173\u95ED"
    :disabled="isDisabled"
  />

  <ti-switch
    v-model="readonlyItem"
    on-text="\u53EA\u8BFB\u9879\u5F00\u542F"
    off-text="\u53EA\u8BFB\u9879\u5173\u95ED"
    :readonly="isDisabled"
  />

  <ti-switch
    class="disabled-demo"
    v-model="referenceItem"
    type="success"
    on-text="\u53C2\u8003\u9879\u5F00\u542F"
    off-text="\u53C2\u8003\u9879\u5173\u95ED"
  />
</template>
<script setup>
import { ref } from 'vue'
const isDisabled = ref(true)
const disableItem = ref(true)
const readonlyItem = ref(true)
const referenceItem  = ref(false)
<\/script>
`},{highlight:m(()=>[R]),default:m(()=>[d(E)]),_:1}),W,d(e,{sourceCode:`<template>
  <ti-switch
    v-model="value"
    on-text="ON"
    off-text="OFF"
    on-value="\u5F00\u542F"
    off-value="\u5173\u95ED"
    width="75"
    height="30"
  />
  <span style="margin-left: 10px;">\u7ED1\u5B9A\u503C: {{value}}</span>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>
`},{highlight:m(()=>[X]),default:m(()=>[d(g)]),_:1}),Y])}var st=A(q,[["render",Z]]);export{at as __pageData,st as default};
