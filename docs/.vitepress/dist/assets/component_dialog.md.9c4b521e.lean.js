var U=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(s,o,n)=>o in s?U(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,T=(s,o)=>{for(var n in o||(o={}))P.call(o,n)&&L(s,n,o[n]);if(j)for(var n of j(o))O.call(o,n)&&L(s,n,o[n]);return s};import{_ as $,r as q,c as I,a as h,w as C,b as t,d as a,e as N,o as z,V as A}from"./app.4971001b.js";const G={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,openBlock:d,createElementBlock:b}=A,B=s("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),E=s(" \u8FD9\u662F\u5BF9\u8BDD\u6846\u7684\u57FA\u7840\u7528\u6CD5\uFF0C\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\u3002 ");function m(p,i){const k=o("TiButton"),f=o("TiDialog");return d(),b("div",null,[u(k,{onClick:p.showDialog,type:"primary",mode:"plain"},{default:n(()=>[B]),_:1},8,["onClick"]),u(f,{visible:p.visible,"onUpdate:visible":i[0]||(i[0]=e=>p.visible=e)},{default:n(()=>[E]),_:1},8,["visible"])])}const{ref:g}=A;return T({render:m},{setup(p,{expose:i}){i();const k=g(!1),e={visible:k,showDialog:()=>{k.value=!0},ref:g};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}(),"render-demo-1":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,createElementVNode:d,openBlock:b,createElementBlock:B}=A,E=s(" \u901A\u8FC7title\u5C5E\u6027\u81EA\u5B9A\u4E49\u6807\u9898 "),m=s(" \u901A\u8FC7title\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898 "),g=s(" Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236 "),_=s(" \u901A\u8FC7 title \u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898"),p=s(" Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236 ");function i(e,F){const y=o("TiButton"),r=o("TiDialog"),l=o("TiIcon");return b(),B("div",null,[u(y,{onClick:e.showDialog,type:"primary",mode:"plain"},{default:n(()=>[E]),_:1},8,["onClick"]),u(y,{onClick:e.showDialog2,type:"primary",mode:"plain"},{default:n(()=>[m]),_:1},8,["onClick"]),u(r,{visible:e.visible,"onUpdate:visible":F[0]||(F[0]=c=>e.visible=c),title:"\u81EA\u5B9A\u4E49\u6807\u9898",width:"600px"},{default:n(()=>[g]),_:1},8,["visible"]),u(r,{visible:e.visible2,"onUpdate:visible":F[1]||(F[1]=c=>e.visible2=c),width:"600px"},{title:n(()=>[d("span",null,[u(l,{icon:"info"}),_])]),default:n(()=>[p]),_:1},8,["visible"])])}const{ref:k}=A;return T({render:i},{setup(e,{expose:F}){F();const y=k(!1),r=k(!1),v={visible:y,visible2:r,showDialog:()=>{y.value=!0},showDialog2:()=>{r.value=!0},ref:k};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}(),"render-demo-2":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,createElementVNode:d,openBlock:b,createElementBlock:B}=A,E=s(" \u663E\u793A\u9ED8\u8BA4footer\u7684Dialog "),m=s(" \u663E\u793A\u81EA\u5B9A\u4E49footer\u7684Dialog "),g=d("div",null,"balabala",-1),_=d("div",null,"BALABALA",-1),p=d("div",null,"balabala",-1),i=d("div",null,"BALABALA",-1),k={class:"dialog-footer"},f=s("Cancel"),e=s("Confirm");function F(l,c){const v=o("TiButton"),D=o("TiDialog"),x=o("ti-button");return b(),B("div",null,[u(v,{onClick:l.showDefaultFooterDialog,type:"primary",mode:"plain"},{default:n(()=>[E]),_:1},8,["onClick"]),u(v,{onClick:l.showCustomFooterDialog,type:"primary",mode:"plain"},{default:n(()=>[m]),_:1},8,["onClick"]),u(D,{visible:l.defaultFooterDialogvisible,"onUpdate:visible":c[0]||(c[0]=w=>l.defaultFooterDialogvisible=w),"show-footer":"","ok-text":"\u786E\u8BA4","cancel-text":"\u5173\u95ED"},{default:n(()=>[g,_]),_:1},8,["visible"]),u(D,{visible:l.customFooterDialogvisible,"onUpdate:visible":c[3]||(c[3]=w=>l.customFooterDialogvisible=w),"show-footer":""},{footer:n(()=>[d("span",k,[u(x,{onClick:c[1]||(c[1]=w=>l.customFooterDialogvisible=!1),style:{"margin-right":"8px"}},{default:n(()=>[f]),_:1}),u(x,{type:"primary",onClick:c[2]||(c[2]=w=>l.customFooterDialogvisible=!1)},{default:n(()=>[e]),_:1})])]),default:n(()=>[p,i]),_:1},8,["visible"])])}const{ref:y}=A;return T({render:F},{setup(l,{expose:c}){c();const v=y(!1),D=y(!1),V={defaultFooterDialogvisible:v,customFooterDialogvisible:D,showDefaultFooterDialog:()=>{v.value=!0},showCustomFooterDialog:()=>{D.value=!0},ref:y};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}})}(),"render-demo-3":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,openBlock:d,createElementBlock:b}=A,B=s("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),E=s(" \u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F ");function m(p,i){const k=o("TiButton"),f=o("TiDialog");return d(),b("div",null,[u(k,{type:"primary",mode:"plain",onClick:p.showDialog},{default:n(()=>[B]),_:1},8,["onClick"]),u(f,{visible:p.visible,"onUpdate:visible":i[0]||(i[0]=e=>p.visible=e),"destroy-on-close":""},{default:n(()=>[E]),_:1},8,["visible"])])}const{ref:g}=A;return T({render:m},{setup(p,{expose:i}){i();const k=g(!1),e={visible:k,showDialog:()=>{k.value=!0},ref:g};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}(),"render-demo-4":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,createElementVNode:d,openBlock:b,createElementBlock:B}=A,E=s("overlay\uFF1Afalse"),m=s("close-on-click-overlay\uFF1Afalse"),g=s("overlay \u548C close-on-click-overlay \u5747\u4E3A false"),_=s("overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true"),p=s(" \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u4E0D\u663E\u793A\u906E\u7F69\u5C42\u3002\u4F46\u6B64\u65F6\u70B9\u51FB Dialog \u5916\u4ECD\u7136\u53EF\u4EE5\u5173\u95ED Dialog\u3002\u6240\u4EE5\u6B64\u65F6\u5E76\u4E0D\u80FD\u76F4\u63A5\u70B9\u51FB\u5230 Dialog \u4E0B\u5C42\u7684\u5143\u7D20\u3002 "),i=s(" \u8BBE\u7F6E close-on-click-overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u7981\u7528\u70B9\u51FB\u906E\u7F69\u7684\u65F6\u5019\u5173\u95ED Dialog \u7684\u529F\u80FD\u3002 "),k=s(" overlay \u548C close-on-click-overlay \u5747\u4E3A false \u7684 case "),f=s(" \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true\u65F6\uFF0C\u53EF\u4EE5\u5728\u663E\u793A Dialog \u7684\u540C\u65F6\u80FD\u70B9\u51FB\u5230 Dialog \u4E0B\u9762\u7684\u5143\u7D20\u3002 ");function e(r,l){const c=o("TiButton"),v=o("TiDialog");return b(),B("div",null,[d("div",null,[u(c,{onClick:r.showDialog,type:"primary",mode:"plain"},{default:n(()=>[E]),_:1},8,["onClick"])]),d("div",null,[u(c,{onClick:r.showDialog2,type:"primary",mode:"plain"},{default:n(()=>[m]),_:1},8,["onClick"])]),d("div",null,[u(c,{onClick:r.showDialog3,type:"primary",mode:"plain"},{default:n(()=>[g]),_:1},8,["onClick"])]),d("div",null,[u(c,{onClick:r.showDialog4,type:"primary",mode:"plain"},{default:n(()=>[_]),_:1},8,["onClick"])]),u(v,{visible:r.visible,"onUpdate:visible":l[0]||(l[0]=D=>r.visible=D),overlay:!1,title:"overlay\uFF1Afalse"},{default:n(()=>[p]),_:1},8,["visible"]),u(v,{visible:r.visible2,"onUpdate:visible":l[1]||(l[1]=D=>r.visible2=D),"close-on-click-overlay":!1,title:"close-on-click-overlay\uFF1Afalse"},{default:n(()=>[i]),_:1},8,["visible"]),u(v,{visible:r.visible3,"onUpdate:visible":l[2]||(l[2]=D=>r.visible3=D),overlay:!1,"close-on-click-overlay":!1},{default:n(()=>[k]),_:1},8,["visible"]),u(v,{visible:r.visible4,"onUpdate:visible":l[3]||(l[3]=D=>r.visible4=D),overlay:!1,"no-pointer-events-on-overlay":"",top:"30vh"},{default:n(()=>[f]),_:1},8,["visible"])])}const{ref:F}=A;return T({render:e},{setup(r,{expose:l}){l();const c=F(!1),v=F(!1),D=F(!1),x=F(!1),S={visible:c,visible2:v,visible3:D,visible4:x,showDialog:()=>{c.value=!0},showDialog2:()=>{v.value=!0},showDialog3:()=>{D.value=!0},showDialog4:()=>{x.value=!0},ref:F};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}})}(),"render-demo-5":function(){const{createTextVNode:s,resolveComponent:o,withCtx:n,createVNode:u,openBlock:d,createElementBlock:b}=A,B=s("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),E=s(" Dialog \u7684 header \u90E8\u5206\u53EF\u4EE5\u62D6\u62FD ");function m(p,i){const k=o("TiButton"),f=o("TiDialog");return d(),b("div",null,[u(k,{onClick:p.showDialog,type:"primary",mode:"plain"},{default:n(()=>[B]),_:1},8,["onClick"]),u(f,{visible:p.visible,"onUpdate:visible":i[0]||(i[0]=e=>p.visible=e),dragable:""},{default:n(()=>[E]),_:1},8,["visible"])])}const{ref:g}=A;return T({render:m},{setup(p,{expose:i}){i();const k=g(!1),e={visible:k,showDialog:()=>{k.value=!0},ref:g};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}})}()}},rt='{"title":"Dialog \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6807\u9898","slug":"\u81EA\u5B9A\u4E49\u6807\u9898"},{"level":2,"title":"\u5BF9\u8BDD\u6846 footer","slug":"\u5BF9\u8BDD\u6846-footer"},{"level":2,"title":"Dialog \u9500\u6BC1\u63A7\u5236","slug":"dialog-\u9500\u6BC1\u63A7\u5236"},{"level":2,"title":"\u906E\u7F69\u5C42\u8BBE\u7F6E","slug":"\u906E\u7F69\u5C42\u8BBE\u7F6E"},{"level":2,"title":"\u53EF\u62D6\u62FD\u8BBE\u7F6E","slug":"\u53EF\u62D6\u62FD\u8BBE\u7F6E"},{"level":2,"title":"Dialog \u5C5E\u6027","slug":"dialog-\u5C5E\u6027"},{"level":2,"title":"Dialog \u63D2\u69FD","slug":"dialog-\u63D2\u69FD"},{"level":2,"title":"Dialog \u4E8B\u4EF6","slug":"dialog-\u4E8B\u4EF6"}],"relativePath":"component/dialog.md","lastUpdated":1644821803247}',H=t("h1",{id:"dialog-\u5BF9\u8BDD\u6846",tabindex:"-1"},[a("Dialog \u5BF9\u8BDD\u6846 "),t("a",{class:"header-anchor",href:"#dialog-\u5BF9\u8BDD\u6846","aria-hidden":"true"},"#")],-1),J=t("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),K=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),M=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token punctuation"},">")]),a(`
    \u8FD9\u662F\u5BF9\u8BDD\u6846\u7684\u57FA\u7840\u7528\u6CD5\uFF0C\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\u3002
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=t("h2",{id:"\u81EA\u5B9A\u4E49\u6807\u9898",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6807\u9898 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6807\u9898","aria-hidden":"true"},"#")],-1),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(`
    `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    \u901A\u8FC7title\u5C5E\u6027\u81EA\u5B9A\u4E49\u6807\u9898
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(`
    `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog2"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    \u901A\u8FC7title\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("\u81EA\u5B9A\u4E49\u6807\u9898"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("600px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible2"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("600px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#title"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiIcon")]),a(),t("span",{class:"token attr-name"},"icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("info"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),a(" \u901A\u8FC7 title \u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
    Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible2 "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog2"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible2`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=N('<h2 id="\u5BF9\u8BDD\u6846-footer" tabindex="-1">\u5BF9\u8BDD\u6846 footer <a class="header-anchor" href="#\u5BF9\u8BDD\u6846-footer" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E <code>show-footer</code> \u5C5E\u6027\u53EF\u4EE5\u663E\u793A\u9ED8\u8BA4\u7684\u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9\u3002 \u901A\u8FC7 <code>ok</code> \u5C5E\u6027\u548C <code>cancel</code> \u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\u7684\u5904\u7406\u51FD\u6570\uFF0C \u901A\u8FC7 <code>ok-text</code> \u5C5E\u6027\u548C <code>cancel-text</code> \u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\u7684\u663E\u793A\u540D\u79F0\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7 footer \u63D2\u69FD\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u5BF9\u8BDD\u6846\u7684\u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9\uFF0C\u6CE8\u610F\u6B64\u65F6\u4ECD\u7136\u7531 <code>show-footer</code> \u5C5E\u6027\u63A7\u5236 footer \u90E8\u5206\u662F\u5426\u663E\u793A\u3002</p>',3),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(`
    `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDefaultFooterDialog"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    \u663E\u793A\u9ED8\u8BA4footer\u7684Dialog
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(`
    `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showCustomFooterDialog"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    \u663E\u793A\u81EA\u5B9A\u4E49footer\u7684Dialog
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("defaultFooterDialogvisible"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"show-footer"),a(`
    `),t("span",{class:"token attr-name"},"ok-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("\u786E\u8BA4"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"cancel-text"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("\u5173\u95ED"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a("balabala"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a("BALABALA"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("customFooterDialogvisible"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"show-footer"),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a("balabala"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a("BALABALA"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},"#footer"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("span")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dialog-footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("ti-button")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("customFooterDialogvisible = false"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),a(" 8px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),a("Cancel"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("ti-button")]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("ti-button")]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("customFooterDialogvisible = false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("Confirm"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("ti-button")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("span")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" defaultFooterDialogvisible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(" customFooterDialogvisible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDefaultFooterDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  defaultFooterDialogvisible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showCustomFooterDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  customFooterDialogvisible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=t("h2",{id:"dialog-\u9500\u6BC1\u63A7\u5236",tabindex:"-1"},[a("Dialog \u9500\u6BC1\u63A7\u5236 "),t("a",{class:"header-anchor",href:"#dialog-\u9500\u6BC1\u63A7\u5236","aria-hidden":"true"},"#")],-1),Z=t("p",null,[a("\u5982\u679C\u9700\u8981\u5728\u5173\u95ED\u65F6\u9500\u6BC1\u5185\u5BB9\u5B9E\u4F8B\uFF0C\u8BBE\u7F6E "),t("code",null,"destroy-on-close"),a(" \u5C5E\u6027\u4E3A "),t("code",null,"true"),a(" \u5373\u53EF\uFF0C\u9ED8\u8BA4\u4E3A "),t("code",null,"false"),a(" \u3002")],-1),tt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(`
    `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"destroy-on-close"),t("span",{class:"token punctuation"},">")]),a(`
    \u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),at=N('<div class="info custom-block"><p class="custom-block-title">Tips</p><p>\u9500\u6BC1\u7684\u4E0D\u4EC5\u4EC5\u662F\u5185\u5BB9\uFF0C\u800C\u662F\u6574\u4E2A Dialog \u3002</p></div><h2 id="\u906E\u7F69\u5C42\u8BBE\u7F6E" tabindex="-1">\u906E\u7F69\u5C42\u8BBE\u7F6E <a class="header-anchor" href="#\u906E\u7F69\u5C42\u8BBE\u7F6E" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u663E\u793A\u906E\u7F69\u5C42\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u53EF\u4EE5\u5173\u95ED\u5BF9\u8BDD\u6846\u3002</p><p>\u8BBE\u7F6E <code>overlay</code> \u5C5E\u6027\u4E3A <code>false</code> \u53EF\u4EE5\u4E0D\u663E\u793A\u906E\u7F69\u5C42\u3002\u4F46\u6B64\u65F6\u70B9\u51FB Dialog \u5916\u4ECD\u7136\u53EF\u4EE5\u5173\u95ED Dialog\u3002\u6240\u4EE5\u6B64\u65F6\u5E76\u4E0D\u80FD\u76F4\u63A5\u70B9\u51FB\u5230 Dialog \u4E0B\u5C42\u7684\u5143\u7D20\u3002<br> \u8BBE\u7F6E <code>close-on-click-overlay</code> \u5C5E\u6027\u4E3A <code>false</code> \u53EF\u4EE5\u7981\u7528\u70B9\u51FB\u906E\u7F69\u7684\u65F6\u5019\u5173\u95ED Dialog \u7684\u529F\u80FD\u3002 \u8BBE\u7F6E <code>overlay</code> \u5C5E\u6027\u4E3A <code>false</code> \u548C <code>no-pointer-events-on-overlay</code> \u5C5E\u6027\u4E3A <code>true</code> \u53EF\u4EE5\u5728\u663E\u793A Dialog \u7684\u540C\u65F6\u80FD\u70B9\u51FB\u5230 Dialog \u4E0B\u9762\u7684\u5143\u7D20\u3002</p>',4),nt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("overlay\uFF1Afalse"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog2"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("close-on-click-overlay\uFF1Afalse"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog3"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("overlay \u548C close-on-click-overlay \u5747\u4E3A false"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog4"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":overlay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("false"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("overlay\uFF1Afalse"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u4E0D\u663E\u793A\u906E\u7F69\u5C42\u3002\u4F46\u6B64\u65F6\u70B9\u51FB Dialog \u5916\u4ECD\u7136\u53EF\u4EE5\u5173\u95ED Dialog\u3002\u6240\u4EE5\u6B64\u65F6\u5E76\u4E0D\u80FD\u76F4\u63A5\u70B9\u51FB\u5230 Dialog \u4E0B\u5C42\u7684\u5143\u7D20\u3002
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
  
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible2"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":close-on-click-overlay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("false"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("close-on-click-overlay\uFF1Afalse"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    \u8BBE\u7F6E close-on-click-overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u7981\u7528\u70B9\u51FB\u906E\u7F69\u7684\u65F6\u5019\u5173\u95ED Dialog \u7684\u529F\u80FD\u3002
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
  
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible3"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":overlay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("false"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":close-on-click-overlay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("false"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    overlay \u548C close-on-click-overlay \u5747\u4E3A false \u7684 case
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
  
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible4"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},":overlay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("false"),t("span",{class:"token punctuation"},'"')]),a(`
    `),t("span",{class:"token attr-name"},"no-pointer-events-on-overlay"),a(`
    `),t("span",{class:"token attr-name"},"top"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("30vh"),t("span",{class:"token punctuation"},'"')]),a(`
  `),t("span",{class:"token punctuation"},">")]),a(`
    \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true\u65F6\uFF0C\u53EF\u4EE5\u5728\u663E\u793A Dialog \u7684\u540C\u65F6\u80FD\u70B9\u51FB\u5230 Dialog \u4E0B\u9762\u7684\u5143\u7D20\u3002
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible2 "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible3 "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible4 "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog2"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible2`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog3"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible3`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog4"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible4`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),st=t("h2",{id:"\u53EF\u62D6\u62FD\u8BBE\u7F6E",tabindex:"-1"},[a("\u53EF\u62D6\u62FD\u8BBE\u7F6E "),t("a",{class:"header-anchor",href:"#\u53EF\u62D6\u62FD\u8BBE\u7F6E","aria-hidden":"true"},"#")],-1),ot=t("p",null,[a("\u8BBE\u7F6E "),t("code",null,"dragable"),a(" \u5C5E\u6027\u4E3A "),t("code",null,"true"),a(" \u53EF\u4EE5\u542F\u7528 Dialog \u7684\u62D6\u62FD\u529F\u80FD\u3002")],-1),ut=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiButton")]),a(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("showDialog"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("primary"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("plain"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiButton")]),t("span",{class:"token punctuation"},">")]),a(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("TiDialog")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),a("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("visible"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"dragable"),t("span",{class:"token punctuation"},">")]),a(`
    Dialog \u7684 header \u90E8\u5206\u53EF\u4EE5\u62D6\u62FD
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("TiDialog")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" ref "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`
`),t("span",{class:"token keyword"},"const"),a(" visible "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),a(`
`),t("span",{class:"token keyword"},"const"),a(),t("span",{class:"token function-variable function"},"showDialog"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(),t("span",{class:"token punctuation"},"{"),a(`
  visible`),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token boolean"},"true"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),et=N('<h2 id="dialog-\u5C5E\u6027" tabindex="-1">Dialog \u5C5E\u6027 <a class="header-anchor" href="#dialog-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible / v-model:visible</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>Dialog \u7684\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u63D0\u793A</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 margin-top \u503C</td><td>string</td><td>\u2014</td><td>15vh</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>520px</td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>no-pointer-events-on-overlay</td><td>\u662F\u5426\u4E0D\u906E\u6321\u6B63\u5E38\u6587\u6863\u6D41\uFF08Dialog \u4E0B\u5C42\uFF09\u7684\u70B9\u51FB\u4E8B\u4EF6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>ok</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u5904\u7406\u51FD\u6570</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u5904\u7406\u51FD\u6570</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>ok-text</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u663E\u793A\u540D\u79F0</td><td>string</td><td>\u2014</td><td>\u786E\u5B9A</td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u663E\u793A\u540D\u79F0</td><td>string</td><td>\u2014</td><td>\u53D6\u6D88</td></tr><tr><td>custom-class</td><td>Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED</td><td>function(close)\uFF0Cclose \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>after-close</td><td>\u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>destroy-on-close</td><td>\u5F53\u5173\u95ED Dialog \u65F6\uFF0C\u9500\u6BC1\u6574\u4E2A Dialog</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A Dialog \u7684 header</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-footer</td><td>\u662F\u5426\u663E\u793A Dialog \u7684 footer</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>dragable</td><td>\u4E3A Dialog \u542F\u7528\u53EF\u62D6\u62FD\u529F\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="dialog-\u63D2\u69FD" tabindex="-1">Dialog \u63D2\u69FD <a class="header-anchor" href="#dialog-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>title</td><td>Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="dialog-\u4E8B\u4EF6" tabindex="-1">Dialog \u4E8B\u4EF6 <a class="header-anchor" href="#dialog-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>drag</td><td>Dialog \u88AB\u62D6\u62FD\u7684\u4E8B\u4EF6</td><td>(event: Event)</td></tr></tbody></table>',6);function lt(s,o,n,u,d,b){const B=q("render-demo-0"),E=q("demo"),m=q("render-demo-1"),g=q("render-demo-2"),_=q("render-demo-3"),p=q("render-demo-4"),i=q("render-demo-5");return z(),I("div",null,[H,J,K,h(E,{sourceCode:`<template>
  <TiButton @click="showDialog" type="primary" mode="plain">\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846</TiButton>

  <TiDialog v-model:visible="visible" >
    \u8FD9\u662F\u5BF9\u8BDD\u6846\u7684\u57FA\u7840\u7528\u6CD5\uFF0C\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\u3002
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
<\/script>
`},{highlight:C(()=>[M]),default:C(()=>[h(B)]),_:1}),Q,h(E,{sourceCode:`<template>
  <TiButton
    @click="showDialog"
    type="primary"
    mode="plain">
    \u901A\u8FC7title\u5C5E\u6027\u81EA\u5B9A\u4E49\u6807\u9898
  </TiButton>
  <TiButton
    @click="showDialog2"
    type="primary"
    mode="plain">
    \u901A\u8FC7title\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898
  </TiButton>

  <TiDialog v-model:visible="visible" title="\u81EA\u5B9A\u4E49\u6807\u9898" width="600px">
    Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236
  </TiDialog>

  <TiDialog v-model:visible="visible2" width="600px">
    <template #title>
      <span><TiIcon icon="info"/> \u901A\u8FC7 title \u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898</span>
    </template>
    Dialog\u7684\u6807\u9898\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6216 title \u63D2\u69FD\u63A7\u5236
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const showDialog = () => {
  visible.value = true
}
const showDialog2 = () => {
  visible2.value = true
}
<\/script>
`},{highlight:C(()=>[R]),default:C(()=>[h(m)]),_:1}),W,h(E,{sourceCode:`<template>
  <TiButton
    @click="showDefaultFooterDialog"
    type="primary"
    mode="plain">
    \u663E\u793A\u9ED8\u8BA4footer\u7684Dialog
  </TiButton>
  <TiButton
    @click="showCustomFooterDialog"
    type="primary"
    mode="plain">
    \u663E\u793A\u81EA\u5B9A\u4E49footer\u7684Dialog
  </TiButton>

  <TiDialog
    v-model:visible="defaultFooterDialogvisible"
    show-footer
    ok-text="\u786E\u8BA4"
    cancel-text="\u5173\u95ED"
  >
    <div>balabala</div>
    <div>BALABALA</div>
  </TiDialog>

  <TiDialog v-model:visible="customFooterDialogvisible" show-footer>
    <div>balabala</div>
    <div>BALABALA</div>

    <template #footer>
      <span class="dialog-footer">
        <ti-button @click="customFooterDialogvisible = false" style="margin-right: 8px;">Cancel</ti-button>
        <ti-button type="primary" @click="customFooterDialogvisible = false">Confirm</ti-button>
      </span>
    </template>
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const defaultFooterDialogvisible = ref(false)
const customFooterDialogvisible = ref(false)
const showDefaultFooterDialog = () => {
  defaultFooterDialogvisible.value = true
}
const showCustomFooterDialog = () => {
  customFooterDialogvisible.value = true
}
<\/script>
`},{highlight:C(()=>[X]),default:C(()=>[h(g)]),_:1}),Y,Z,h(E,{sourceCode:`<template>
  <TiButton
    type="primary"
    mode="plain"
    @click="showDialog"
  >\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846</TiButton>

  <TiDialog v-model:visible="visible" destroy-on-close>
    \u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
<\/script>
`},{highlight:C(()=>[tt]),default:C(()=>[h(_)]),_:1}),at,h(E,{sourceCode:`<template>
  <div>
    <TiButton @click="showDialog" type="primary" mode="plain">overlay\uFF1Afalse</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog2" type="primary" mode="plain">close-on-click-overlay\uFF1Afalse</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog3" type="primary" mode="plain">overlay \u548C close-on-click-overlay \u5747\u4E3A false</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog4" type="primary" mode="plain">overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true</TiButton>
  </div>

  <TiDialog
    v-model:visible="visible"
    :overlay="false"
    title="overlay\uFF1Afalse"
  >
    \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u4E0D\u663E\u793A\u906E\u7F69\u5C42\u3002\u4F46\u6B64\u65F6\u70B9\u51FB Dialog \u5916\u4ECD\u7136\u53EF\u4EE5\u5173\u95ED Dialog\u3002\u6240\u4EE5\u6B64\u65F6\u5E76\u4E0D\u80FD\u76F4\u63A5\u70B9\u51FB\u5230 Dialog \u4E0B\u5C42\u7684\u5143\u7D20\u3002
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible2"
    :close-on-click-overlay="false"
    title="close-on-click-overlay\uFF1Afalse"
  >
    \u8BBE\u7F6E close-on-click-overlay \u5C5E\u6027\u4E3A false \u53EF\u4EE5\u7981\u7528\u70B9\u51FB\u906E\u7F69\u7684\u65F6\u5019\u5173\u95ED Dialog \u7684\u529F\u80FD\u3002
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible3"
    :overlay="false"
    :close-on-click-overlay="false"
  >
    overlay \u548C close-on-click-overlay \u5747\u4E3A false \u7684 case
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible4"
    :overlay="false"
    no-pointer-events-on-overlay
    top="30vh"
  >
    \u8BBE\u7F6E overlay \u5C5E\u6027\u4E3A false\uFF0Cno-pointer-events-on-overlay \u5C5E\u6027\u4E3A true\u65F6\uFF0C\u53EF\u4EE5\u5728\u663E\u793A Dialog \u7684\u540C\u65F6\u80FD\u70B9\u51FB\u5230 Dialog \u4E0B\u9762\u7684\u5143\u7D20\u3002
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const showDialog = () => {
  visible.value = true
}
const showDialog2 = () => {
  visible2.value = true
}
const showDialog3 = () => {
  visible3.value = true
}
const showDialog4 = () => {
  visible4.value = true
}
<\/script>
`},{highlight:C(()=>[nt]),default:C(()=>[h(p)]),_:1}),st,ot,h(E,{sourceCode:`<template>
  <TiButton @click="showDialog" type="primary" mode="plain">\u70B9\u51FB\u663E\u793A\u5BF9\u8BDD\u6846</TiButton>

  <TiDialog v-model:visible="visible" dragable>
    Dialog \u7684 header \u90E8\u5206\u53EF\u4EE5\u62D6\u62FD
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
<\/script>
`},{highlight:C(()=>[ut]),default:C(()=>[h(i)]),_:1}),et])}var dt=$(G,[["render",lt]]);export{rt as __pageData,dt as default};
