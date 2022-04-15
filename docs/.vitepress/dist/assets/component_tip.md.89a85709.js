var U=Object.defineProperty;var R=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var J=(o,a,e)=>a in o?U(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,$=(o,a)=>{for(var e in a||(a={}))z.call(a,e)&&J(o,e,a[e]);if(R)for(var e of R(a))G.call(a,e)&&J(o,e,a[e]);return o};import{_ as H,r as V,c as K,a as A,w as T,V as v,b as n,d as t,e as Q,o as W}from"./app.5aaa6b63.js";const X={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:a,withCtx:e,createVNode:l,toDisplayString:B,createElementVNode:_,openBlock:m,createElementBlock:i}=v,f={class:"tip-basic"},r=o("\u63D2\u5165\u4E00\u6761\u6570\u636E"),C=o("\u63D2\u5165\u4E94\u6761\u6570\u636E");function w(g,d){const E=a("ti-button"),b=a("ti-tip");return m(),i("div",null,[_("div",f,[l(E,{onClick:d[0]||(d[0]=k=>g.addMsgToTipList(1))},{default:e(()=>[r]),_:1}),l(E,{onClick:d[1]||(d[1]=k=>g.addMsgToTipList(5))},{default:e(()=>[C]),_:1}),_("div",null,"tipList: "+B(g.tipList),1),l(b,{modelValue:g.tipList,"onUpdate:modelValue":d[2]||(d[2]=k=>g.tipList=k)},null,8,["modelValue"])])])}const{defineComponent:j}=v,{ref:L}=v;return $({render:w},j({setup(g,{expose:d}){d();const E=L([]);let b=0;const c={tipList:E,index:b,addMsgToTipList:h=>{E.value.push(...Array.from({length:h}).map(p=>`\u7B2C${b++}\u6761\u6D4B\u8BD5\u4FE1\u606F`))},ref:L};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:a,withCtx:e,createVNode:l,renderList:B,Fragment:_,openBlock:m,createElementBlock:i,toDisplayString:f,createElementVNode:r}=v,C={class:"tip-demo"},w=o("\u63D2\u5165\u4E00\u6761\u6570\u636E"),j=o("\u63D2\u5165\u4E94\u6761\u6570\u636E"),L=o(" objTipList: [ "),S=o(" ] ");function g(k,c){const h=a("ti-button"),p=a("ti-tip");return m(),i("div",null,[r("div",C,[l(h,{onClick:c[0]||(c[0]=u=>k.addObjTipToObjTipList(1))},{default:e(()=>[w]),_:1}),l(h,{onClick:c[1]||(c[1]=u=>k.addObjTipToObjTipList(5))},{default:e(()=>[j]),_:1}),r("div",null,[L,(m(!0),i(_,null,B(k.objTipList,(u,F)=>(m(),i("div",{key:F},f(JSON.stringify(u)),1))),128)),S]),l(p,{modelValue:k.objTipList,"onUpdate:modelValue":c[2]||(c[2]=u=>k.objTipList=u)},null,8,["modelValue"])])])}const{defineComponent:d}=v,{ref:E}=v;return $({render:g},d({setup(k,{expose:c}){c();const h=E([]),p=["\u8D75","\u94B1","\u5B59","\u674E","\u5468","\u5434","\u90D1","\u738B","\u51AF","\u9648"],u=["\u82F1","\u534E","\u6587","\u7389","\u79C0","\u660E","\u4E3D","\u5170","\u7EA2","\u91D1"],F=()=>{const y=()=>Math.floor(Math.random()*10);return`${p[y()]}${u[y()]}`},D={objTipList:h,familyNames:p,names:u,getName:F,addObjTipToObjTipList:y=>{h.value.push(...Array.from({length:y}).map(()=>{const s=F(),x=Math.random()>.5?"-1":"0";return{name:s,status:x,tip:`${s} ${x==="0"?"\u5DF2\u4E0A\u7EBF":"\u5DF2\u4E0B\u7EBF"}`}}))},ref:E};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}))}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:a,withCtx:e,createVNode:l,renderList:B,Fragment:_,openBlock:m,createElementBlock:i,toDisplayString:f,createElementVNode:r,normalizeClass:C,normalizeStyle:w}=v,j={class:"tip-slot-demo"},L=o("\u63D2\u5165\u4E00\u6761\u6570\u636E"),S=o("\u63D2\u5165\u4E94\u6761\u6570\u636E"),g=o(" slotTipList: [ "),d=o(" ] "),E={class:"demo-tip_name"};function b(p,u){const F=a("ti-button"),N=a("ti-checkbox"),D=a("TiIcon"),y=a("ti-tip");return m(),i("div",null,[r("div",j,[l(F,{onClick:u[0]||(u[0]=s=>p.addObjTipToSlotTipList(1))},{default:e(()=>[L]),_:1}),l(F,{style:{margin:"0 8px"},onClick:u[1]||(u[1]=s=>p.addObjTipToSlotTipList(5))},{default:e(()=>[S]),_:1}),l(N,{modelValue:p.customStyles,"onUpdate:modelValue":u[2]||(u[2]=s=>p.customStyles=s),label:"\u4F7F\u7528\u81EA\u5B9A\u4E49styles"},null,8,["modelValue"]),r("div",null,[g,(m(!0),i(_,null,B(p.slotTipList,(s,x)=>(m(),i("div",{key:x},f(JSON.stringify(s)),1))),128)),d]),l(y,{modelValue:p.slotTipList,"onUpdate:modelValue":u[3]||(u[3]=s=>p.slotTipList=s),interval:3e3,style:w(p.customStyles?p.styles:{})},{default:e(s=>[r("div",null,[l(D,{class:C((s==null?void 0:s.status)==="0"?"demo-tip_online":"demo-tip_offline"),icon:(s==null?void 0:s.status)==="0"?"bell":"close-notification"},null,8,["class","icon"]),r("span",E,f(s==null?void 0:s.name),1),r("span",{class:C((s==null?void 0:s.status)==="0"?"demo-tip_online":"demo-tip_offline")},f((s==null?void 0:s.status)==="0"?"\u5DF2\u4E0A\u7EBF":"\u5DF2\u4E0B\u7EBF"),3)])]),_:1},8,["modelValue","style"])])])}const{defineComponent:k}=v,{ref:c}=v;return $({render:b},k({setup(p,{expose:u}){u();const F=c([]),N=["\u8D75","\u94B1","\u5B59","\u674E","\u5468","\u5434","\u90D1","\u738B","\u51AF","\u9648"],D=["\u82F1","\u534E","\u6587","\u7389","\u79C0","\u660E","\u4E3D","\u5170","\u7EA2","\u91D1"],y=()=>{const O=()=>Math.floor(Math.random()*10);return`${N[O()]}${D[O()]}`},s=O=>{F.value.push(...Array.from({length:O}).map(()=>{const M=y(),I=Math.random()>.5?"-1":"0";return{name:M,status:I,tip:`${M}${I==="0"?"\u5DF2\u4E0A\u7EBF":"\u5DF2\u4E0B\u7EBF"}`}}))},x=c(!1),q={slotTipList:F,familyNames:N,names:D,getName:y,addObjTipToSlotTipList:s,customStyles:x,styles:{position:"fixed",background:"linear-gradient(90deg, rgba(138, 43, 226, 0.2), transparent, rgba(138, 43, 226, 0.2))"},ref:c};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}}))}()}},dn='{"title":"Tip \u5C0F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u5BF9\u8C61\u7C7B\u578B\u7684\u6D88\u606F","slug":"\u5BF9\u8C61\u7C7B\u578B\u7684\u6D88\u606F"},{"level":2,"title":"\u4F5C\u7528\u57DF\u63D2\u69FD","slug":"\u4F5C\u7528\u57DF\u63D2\u69FD"},{"level":2,"title":"Tip \u5C5E\u6027","slug":"tip-\u5C5E\u6027"},{"level":2,"title":"Tip \u63D2\u69FD","slug":"tip-\u63D2\u69FD"},{"level":2,"title":"Tip \u4E8B\u4EF6","slug":"tip-\u4E8B\u4EF6"}],"relativePath":"component/tip.md","lastUpdated":1644828393910}',Y=n("h1",{id:"tip-\u5C0F\u63D0\u793A",tabindex:"-1"},[t("Tip \u5C0F\u63D0\u793A "),n("a",{class:"header-anchor",href:"#tip-\u5C0F\u63D0\u793A","aria-hidden":"true"},"#")],-1),Z=n("p",null,"\u7528\u4E8E\u5B57\u6570\u6BD4\u8F83\u5C11\u7684\u6D88\u606F\u63D0\u793A\uFF0C\u5982\u4EBA\u5458\u7684\u4E0A\u4E0B\u7EBF\u7B49\u3002",-1),P=n("p",null,[t("\u8BE5\u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A\u5F85\u663E\u793A\u7684\u6D88\u606F\u5217\u8868\u4F5C\u4E3A\u53C2\u6570\u3002\u5F53\u5217\u8868\u4E2D\u6709\u6D88\u606F\u65F6\uFF0C\u4F1A\u4ECE\u8BE5\u5217\u8868\u4E2D\u53D6\u51FA\u7B2C\u4E00\u9879\u7528\u4E8E\u663E\u793A\uFF0C\u5E76\u5C06\u8BE5\u9879\u4ECE\u539F\u5217\u8868\u4E2D\u5220\u9664\u3002"),n("br"),t(" \u6D88\u606F\u9879\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u8005\u5BF9\u8C61\uFF0C\u5F53\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5BF9\u8C61\u7684 "),n("code",null,"tip"),t(" \u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u4E3A\u9700\u8981\u5C55\u793A\u7684\u6D88\u606F\u3002")],-1),nn=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tip-basic"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addMsgToTipList(1)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E00\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addMsgToTipList(5)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E94\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("tipList: {{ tipList }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-tip")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tipList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-tip")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" tipList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"addMsgToTipList"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"n"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  tipList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token operator"},"..."),t("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),t(" n "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u7B2C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u6761\u6D4B\u8BD5\u4FE1\u606F"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("stylesheet/scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".tip-basic"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed gray"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),sn=n("h2",{id:"\u5BF9\u8C61\u7C7B\u578B\u7684\u6D88\u606F",tabindex:"-1"},[t("\u5BF9\u8C61\u7C7B\u578B\u7684\u6D88\u606F "),n("a",{class:"header-anchor",href:"#\u5BF9\u8C61\u7C7B\u578B\u7684\u6D88\u606F","aria-hidden":"true"},"#")],-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tip-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addObjTipToObjTipList(1)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E00\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addObjTipToObjTipList(5)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E94\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      objTipList: [
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in objTipList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ JSON.stringify(item) }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      ]
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-tip")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("objTipList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-tip")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" objTipList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" familyNames "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u8D75'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u94B1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5B59'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u674E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5468'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5434'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u90D1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u738B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u51AF'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u9648'"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token keyword"},"const"),t(" names "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u82F1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u534E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u6587'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7389'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u79C0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u660E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u4E3D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5170'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7EA2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u91D1'"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getName"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRandomIndex"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("familyNames"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getRandomIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("names"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getRandomIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"addObjTipToObjTipList"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"n"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  objTipList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token operator"},"..."),t("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),t(" n "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" name "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" status "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'-1'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0'"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'0'"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'\u5DF2\u4E0A\u7EBF'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u4E0B\u7EBF'"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("stylesheet/scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".tip-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 250px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed gray"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=n("h2",{id:"\u4F5C\u7528\u57DF\u63D2\u69FD",tabindex:"-1"},[t("\u4F5C\u7528\u57DF\u63D2\u69FD "),n("a",{class:"header-anchor",href:"#\u4F5C\u7528\u57DF\u63D2\u69FD","aria-hidden":"true"},"#")],-1),en=n("div",null,[t("\u5982\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9Astyle\u7684\u65B9\u5F0F\u4FEE\u6539\u6837\u5F0F\uFF0C\u5982\u672C\u4F8B\u4E2D\u7684\u4FEE\u6539 "),n("code",null,"position"),t(" \u7B49\u6837\u5F0F\u3002")],-1),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tip-slot-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addObjTipToSlotTipList(1)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E00\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-button")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 8px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addObjTipToSlotTipList(5)"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t("\u63D2\u5165\u4E94\u6761\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-checkbox")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("customStyles"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u4F7F\u7528\u81EA\u5B9A\u4E49styles"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      slotTipList: [
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in slotTipList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ JSON.stringify(item) }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      ]
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ti-tip")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotTipList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":interval"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3000"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("customStyles ? styles : {}"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-slot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TiIcon")]),t(`
            `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps?.status === "),n("span",{class:"token punctuation"},"'"),t("0"),n("span",{class:"token punctuation"},"'"),t(" ? "),n("span",{class:"token punctuation"},"'"),t("demo-tip_online"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("demo-tip_offline"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps?.status === "),n("span",{class:"token punctuation"},"'"),t("0"),n("span",{class:"token punctuation"},"'"),t(" ? "),n("span",{class:"token punctuation"},"'"),t("bell"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("close-notification"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("TiIcon")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-tip_name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ slotProps?.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps?.status === "),n("span",{class:"token punctuation"},"'"),t("0"),n("span",{class:"token punctuation"},"'"),t(" ? "),n("span",{class:"token punctuation"},"'"),t("demo-tip_online"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("demo-tip_offline"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`{{
            slotProps?.status === '0' ? '\u5DF2\u4E0A\u7EBF' : '\u5DF2\u4E0B\u7EBF'
          }}`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ti-tip")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(" slotTipList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" familyNames "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u8D75'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u94B1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5B59'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u674E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5468'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5434'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u90D1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u738B'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u51AF'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u9648'"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token keyword"},"const"),t(" names "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u82F1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u534E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u6587'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7389'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u79C0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u660E'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u4E3D'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u5170'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7EA2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u91D1'"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getName"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRandomIndex"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("familyNames"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getRandomIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("names"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"getRandomIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"addObjTipToSlotTipList"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"n"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  slotTipList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token operator"},"..."),t("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),t(" n "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" name "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" status "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'-1'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0'"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'0'"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'\u5DF2\u4E0A\u7EBF'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u4E0B\u7EBF'"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" customStyles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" styles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'fixed'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),t(`
    `),n("span",{class:"token string"},"'linear-gradient(90deg, rgba(138, 43, 226, 0.2), transparent, rgba(138, 43, 226, 0.2))'"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("stylesheet/scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".tip-slot-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 250px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed gray"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".demo-tip_name"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 55px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 7px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" 600"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #ff7400"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".demo-tip_online"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #00ffa7"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".demo-tip_offline"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #ccc"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),pn=Q('<h2 id="tip-\u5C5E\u6027" tabindex="-1">Tip \u5C5E\u6027 <a class="header-anchor" href="#tip-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F85\u5C55\u793A\u7684\u6D88\u606F\u5217\u8868</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>interval</td><td>\u6D88\u606F\u5207\u6362\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1Ams</td><td>number</td><td>\u2014</td><td>3000</td></tr></tbody></table><h2 id="tip-\u63D2\u69FD" tabindex="-1">Tip \u63D2\u69FD <a class="header-anchor" href="#tip-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u6D88\u606F\u5185\u5BB9 \uFF08\u662F\u4E00\u4E2A\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0CslotProps: { tip: string, ...customProps }\uFF09</td></tr></tbody></table><h2 id="tip-\u4E8B\u4EF6" tabindex="-1">Tip \u4E8B\u4EF6 <a class="header-anchor" href="#tip-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>afterEnter</td><td>\u5728 Tip \u7EC4\u4EF6\u8FDB\u5165\u89C6\u56FE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>afterLeave</td><td>\u5728 Tip \u7EC4\u4EF6\u79BB\u5F00\u89C6\u56FE\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6);function cn(o,a,e,l,B,_){const m=V("render-demo-0"),i=V("demo"),f=V("render-demo-1"),r=V("render-demo-2");return W(),K("div",null,[Y,Z,P,nn,A(i,{sourceCode:`<template>
  <div class="tip-basic">
    <ti-button @click="addMsgToTipList(1)">\u63D2\u5165\u4E00\u6761\u6570\u636E</ti-button>
    <ti-button @click="addMsgToTipList(5)">\u63D2\u5165\u4E94\u6761\u6570\u636E</ti-button>
    <div>tipList: {{ tipList }}</div>
    <ti-tip v-model="tipList"></ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const tipList = ref([])
let index = 0
const addMsgToTipList = (n: number) => {
  tipList.value.push(
    ...Array.from({ length: n }).map((item) => \`\u7B2C\${index++}\u6761\u6D4B\u8BD5\u4FE1\u606F\`)
  )
}
<\/script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-basic {
  position: relative;
  height: 100px;
  border: 1px dashed gray;
  overflow: hidden;
}
</style>
`},{highlight:T(()=>[tn]),default:T(()=>[A(m)]),_:1}),sn,A(i,{sourceCode:`<template>
  <div class="tip-demo">
    <ti-button @click="addObjTipToObjTipList(1)">\u63D2\u5165\u4E00\u6761\u6570\u636E</ti-button>
    <ti-button @click="addObjTipToObjTipList(5)">\u63D2\u5165\u4E94\u6761\u6570\u636E</ti-button>
    <div>
      objTipList: [
      <div v-for="(item, index) in objTipList" :key="index">
        {{ JSON.stringify(item) }}
      </div>
      ]
    </div>
    <ti-tip v-model="objTipList"></ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const objTipList = ref([])

const familyNames = ['\u8D75', '\u94B1', '\u5B59', '\u674E', '\u5468', '\u5434', '\u90D1', '\u738B', '\u51AF', '\u9648']
const names = ['\u82F1', '\u534E', '\u6587', '\u7389', '\u79C0', '\u660E', '\u4E3D', '\u5170', '\u7EA2', '\u91D1']
const getName = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 10)
  }
  return \`\${familyNames[getRandomIndex()]}\${names[getRandomIndex()]}\`
}
const addObjTipToObjTipList = (n: number) => {
  objTipList.value.push(
    ...Array.from({ length: n }).map(() => {
      const name = getName()
      const status = Math.random() > 0.5 ? '-1' : '0'
      return {
        name,
        status,
        tip: \`\${name} \${status === '0' ? '\u5DF2\u4E0A\u7EBF' : '\u5DF2\u4E0B\u7EBF'}\`
      }
    })
  )
}
<\/script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-demo {
  position: relative;
  height: 250px;
  overflow: hidden;
  border: 1px dashed gray;
}
</style>
`},{highlight:T(()=>[an]),default:T(()=>[A(f)]),_:1}),on,A(i,{sourceCode:`<template>
  <div class="tip-slot-demo">
    <ti-button @click="addObjTipToSlotTipList(1)">\u63D2\u5165\u4E00\u6761\u6570\u636E</ti-button>
    <ti-button style="margin: 0 8px" @click="addObjTipToSlotTipList(5)"
    >\u63D2\u5165\u4E94\u6761\u6570\u636E</ti-button
    >
    <ti-checkbox
      v-model="customStyles"
      label="\u4F7F\u7528\u81EA\u5B9A\u4E49styles"
    ></ti-checkbox>
    <div>
      slotTipList: [
      <div v-for="(item, index) in slotTipList" :key="index">
        {{ JSON.stringify(item) }}
      </div>
      ]
    </div>
    
    <ti-tip
      v-model="slotTipList"
      :interval="3000"
      :style="customStyles ? styles : {}"
    >
      <template v-slot="slotProps">
        <div>
          <TiIcon
            :class="slotProps?.status === '0' ? 'demo-tip_online' : 'demo-tip_offline'"
            :icon="slotProps?.status === '0' ? 'bell' : 'close-notification'"
          ></TiIcon>
          <span class="demo-tip_name">{{ slotProps?.name }}</span>
          <span :class="slotProps?.status === '0' ? 'demo-tip_online' : 'demo-tip_offline'">{{
            slotProps?.status === '0' ? '\u5DF2\u4E0A\u7EBF' : '\u5DF2\u4E0B\u7EBF'
          }}</span>
        </div>
      </template>
    </ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const slotTipList = ref([])

const familyNames = ['\u8D75', '\u94B1', '\u5B59', '\u674E', '\u5468', '\u5434', '\u90D1', '\u738B', '\u51AF', '\u9648']
const names = ['\u82F1', '\u534E', '\u6587', '\u7389', '\u79C0', '\u660E', '\u4E3D', '\u5170', '\u7EA2', '\u91D1']
const getName = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 10)
  }
  return \`\${familyNames[getRandomIndex()]}\${names[getRandomIndex()]}\`
}
const addObjTipToSlotTipList = (n: number) => {
  slotTipList.value.push(
    ...Array.from({ length: n }).map(() => {
      const name = getName()
      const status = Math.random() > 0.5 ? '-1' : '0'
      return {
        name,
        status,
        tip: \`\${name}\${status === '0' ? '\u5DF2\u4E0A\u7EBF' : '\u5DF2\u4E0B\u7EBF'}\`
      }
    })
  )
}
const customStyles = ref(false)
const styles = {
  position: 'fixed',
  background:
    'linear-gradient(90deg, rgba(138, 43, 226, 0.2), transparent, rgba(138, 43, 226, 0.2))'
}
<\/script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-slot-demo {
  position: relative;
  height: 250px;
  overflow: hidden;
  border: 1px dashed gray;
}

.demo-tip_name {
  width: 55px;
  margin: 0 7px;
  font-weight: 600;
  color: #ff7400;
}

.demo-tip_online {
  color: #00ffa7;
}

.demo-tip_offline {
  color: #ccc;
}
</style>
`},{description:T(()=>[en]),highlight:T(()=>[un]),default:T(()=>[A(r)]),_:1}),pn])}var mn=H(X,[["render",cn]]);export{dn as __pageData,mn as default};
