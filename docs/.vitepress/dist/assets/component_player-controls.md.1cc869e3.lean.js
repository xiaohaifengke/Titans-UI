var W=Object.defineProperty;var T=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var M=(o,a,e)=>a in o?W(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,V=(o,a)=>{for(var e in a||(a={}))X.call(a,e)&&M(o,e,a[e]);if(T)for(var e of T(a))Y.call(a,e)&&M(o,e,a[e]);return o};import{_ as Z,r as O,c as nn,a as N,w as S,V as A,b as n,d as t,e as tn,o as an}from"./app.c1aaebd6.js";const sn={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:o,createElementVNode:a,renderList:e,Fragment:B,openBlock:d,createElementBlock:m,resolveComponent:f,createVNode:v}=A,L={class:"ti-player-controls_story"},j={class:"ti-player-controls_data-demo"},G={class:"ti-player-controls_data"},I={class:"ti-player-controls_container",ref:"screenfullElement"},z={class:"ti-player-controls_content"};function $(s,q){var k;const y=f("TiPlayerControls");return d(),m("div",null,[a("div",L,[a("div",j,[a("div",null,"points("+o((k=s.points)==null?void 0:k.length)+"):",1),a("div",G,[(d(!0),m(B,null,e(s.points,F=>(d(),m("div",null,o(JSON.stringify(F)),1))),256))])]),a("div",I,[a("div",z,[a("div",null,"\u56DE\u653E\u8FDB\u5EA6\uFF1A"+o((s.progress*100).toFixed(2))+" %",1),a("div",null,"\u56DE\u653E\u901F\u7387\uFF1A"+o(2**s.rate)+" \u500D\u901F",1)]),v(y,{autoplay:s.autoplay,progress:s.progress,defaultRate:s.defaultRate,screenfullElement:s.screenfullElement,points:s.points,screenfullable:"",onOnProgressChange:s.onProgressChange,onOnRateChange:s.onRateChange,onOnPause:s.onPause,onOnPlay:s.onPlay,onOnReplay:s.onReplay,class:"ti-player-controls_component"},null,8,["autoplay","progress","defaultRate","screenfullElement","points","onOnProgressChange","onOnRateChange","onOnPause","onOnPlay","onOnReplay"])],512)])])}const{defineComponent:J}=A,{computed:w,onMounted:P,ref:c,watch:R}=A;return V({render:$},J({setup(s,{expose:q}){q();const y=(u,l=252)=>{const p=u/(l-1),C=5e3;return Array.from({length:l}).map((b,r)=>({distance:r*p,altitude:Math.random()*C}))},k=u=>{let l=Date.now();const p=c(0),C=w({get:()=>p.value/(u*1e3),set:i=>{p.value=i*u*1e3}}),b=c(6),r=c(!0),K=2,_=()=>{const i=Date.now(),Q=i-l;l=i,!r.value&&p.value<u*1e3?(p.value=Math.min(2**b.value*K*Q/1e3+p.value,u*1e3),requestAnimationFrame(_)):r.value=!0};return P(()=>{requestAnimationFrame(_)}),R(()=>r.value,i=>{i||(l=Date.now(),requestAnimationFrame(_))}),{progress:C,rate:b,pause:r}},F=c(!1),E=+(Math.random()*50).toFixed(2)+30,U=y(E),H=c(null),{progress:h,rate:D,pause:g}=k(E),x={useGeneratePoints:y,useImitateContrailReplay:k,autoplay:F,totalDistance:E,points:U,screenfullElement:H,progress:h,rate:D,pause:g,defaultRate:D,onProgressChange:u=>{h.value=u},onRateChange:u=>{D.value=u},onPause:()=>{g.value=!0},onPlay:()=>{g.value=!1},onReplay:()=>{g.value=!1,h.value=0},computed:w,onMounted:P,ref:c,watch:R};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}))}()}},hn='{"title":"PlayerControls \u8F68\u8FF9\u56DE\u653E\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"PlayerControls \u5C5E\u6027","slug":"playercontrols-\u5C5E\u6027"},{"level":2,"title":"PlayerControls \u4E8B\u4EF6","slug":"playercontrols-\u4E8B\u4EF6"}],"relativePath":"component/player-controls.md","lastUpdated":1644894246626}',on=n("h1",{id:"playercontrols-\u8F68\u8FF9\u56DE\u653E\u63A7\u4EF6",tabindex:"-1"},[t("PlayerControls \u8F68\u8FF9\u56DE\u653E\u63A7\u4EF6 "),n("a",{class:"header-anchor",href:"#playercontrols-\u8F68\u8FF9\u56DE\u653E\u63A7\u4EF6","aria-hidden":"true"},"#")],-1),en=n("p",null,"\u7528\u4E8E\u914D\u5408 GIS \u5C55\u793A\u4EBA\u5458\u6216\u65E0\u4EBA\u673A\u7B49\u8BBE\u5907\u7684\u5386\u53F2\u8F68\u8FF9\u56DE\u653E\u7684\u529F\u80FD\u3002",-1),un=n("p",null,"\u8BE5\u7EC4\u4EF6\u9664\u4E86\u6709\u548C\u89C6\u9891\u63A7\u4EF6\u7C7B\u4F3C\u7684\u529F\u80FD\u5916\uFF0C\u8FD8\u53EF\u76F4\u89C2\u7684\u5C55\u793A\u8F68\u8FF9\u7684\u9AD8\u7A0B\u53D8\u5316\u4FE1\u606F\u3002",-1),pn=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_story"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_data-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("points({{points?.length}}):"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("point in points"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          {{ JSON.stringify(point) }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_container"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("screenfullElement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u56DE\u653E\u8FDB\u5EA6\uFF1A{{ (progress * 100).toFixed(2) }} %"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u56DE\u653E\u901F\u7387\uFF1A{{ 2 ** rate }} \u500D\u901F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TiPlayerControls")]),t(`
        `),n("span",{class:"token attr-name"},":autoplay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("autoplay"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":defaultRate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("defaultRate"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":screenfullElement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("screenfullElement"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":points"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("points"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"screenfullable"),t(`
        `),n("span",{class:"token attr-name"},"@onProgressChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onProgressChange"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@onRateChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onRateChange"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@onPause"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onPause"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@onPlay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onPlay"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@onReplay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onReplay"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ti-player-controls_component"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("computed"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"useGeneratePoints"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"distance"),n("span",{class:"token operator"},":"),t(" number"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"pointsLength"),n("span",{class:"token operator"},":"),t(" number "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"252")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" perDistance "),n("span",{class:"token operator"},"="),t(" distance "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token punctuation"},"("),t("pointsLength "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" altitude "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"5000"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),t(" pointsLength"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("point"),n("span",{class:"token punctuation"},","),t(" index")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"distance"),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"*"),t(" perDistance"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"altitude"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(` altitude
      `),n("span",{class:"token comment"},"// speed: Math.random() * 3 + 15"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"useImitateContrailReplay"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"totalDistance"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"let"),t(" startTime "),n("span",{class:"token operator"},"="),t(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" distance "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// \u8DDD\u79BB\u8D77\u70B9\u4ECE0\u5F00\u59CB"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" progress "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function-variable function"},"get"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" distance"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token punctuation"},"("),t("totalDistance "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"set"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      distance`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" val "),n("span",{class:"token operator"},"*"),t(" totalDistance "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// \u6839\u636E\u8DDD\u79BB\u6A21\u62DF\u7684\u8FDB\u5EA6\u767E\u5206\u6BD4"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" rate "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// \u56DE\u653E\u65F6\u7684\u6307\u6570 \u56DE\u653E\u7684\u901F\u5EA6\u662FMath.pow(2, rate)"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" pause "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// \u662F\u5426\u6682\u505C\u7684\u53C2\u6570"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" speed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token comment"},"// \u6A21\u62DF2m/s\u7684\u524D\u8FDB\u901F\u5EA6"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"step"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" curTime "),n("span",{class:"token operator"},"="),t(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" durTime "),n("span",{class:"token operator"},"="),t(" curTime "),n("span",{class:"token operator"},"-"),t(` startTime
    startTime `),n("span",{class:"token operator"},"="),t(` curTime
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("pause"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"&&"),t(" distance"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"<"),t(" totalDistance "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      distance`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"**"),t(" rate"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"*"),t(" speed "),n("span",{class:"token operator"},"*"),t(" durTime"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"1000"),t(),n("span",{class:"token operator"},"+"),t(" distance"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
        totalDistance `),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),t(`
      `),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),t("step"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      pause`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token comment"},"// \u7ED3\u675F\u65F6"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),t("step"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" pause"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        startTime `),n("span",{class:"token operator"},"="),t(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},"// hack"),t(`
        `),n("span",{class:"token function"},"requestAnimationFrame"),n("span",{class:"token punctuation"},"("),t("step"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    progress`),n("span",{class:"token punctuation"},","),t(`
    rate`),n("span",{class:"token punctuation"},","),t(`
    pause
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" autoplay "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" totalDistance "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"+"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"30"),t(),n("span",{class:"token comment"},"// \u6A21\u62DF\u8DDD\u79BB\u5728 30km - 80km \u4E4B\u95F4"),t(`

`),n("span",{class:"token comment"},"// \u6A21\u62DF\u8F68\u8FF9\u70B9\u7684\u6570\u636E"),t(`
`),n("span",{class:"token keyword"},"const"),t(" points "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useGeneratePoints"),n("span",{class:"token punctuation"},"("),t("totalDistance"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" screenfullElement "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t("progress"),n("span",{class:"token punctuation"},","),t(" rate"),n("span",{class:"token punctuation"},","),t(" pause"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useImitateContrailReplay"),n("span",{class:"token punctuation"},"("),t("totalDistance"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" defaultRate "),n("span",{class:"token operator"},"="),t(` rate

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onProgressChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"progressVal"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  progress`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` progressVal
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onRateChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"rateVal"),n("span",{class:"token operator"},":"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  rate`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` rateVal
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onPause"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  pause`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onPlay"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  pause`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onReplay"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  pause`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
  progress`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("stylesheet/scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".ti-player-controls_story"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" auto"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #12345661"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-size"),n("span",{class:"token punctuation"},":"),t(" cover"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ti-player-controls_data-demo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" flex-start"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ti-player-controls_data"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 90px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" auto"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ti-player-controls_container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 120px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 10%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 360px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0 auto"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 30px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #fff"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #315050"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ti-player-controls_component"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),ln=tn('<h2 id="playercontrols-\u5C5E\u6027" tabindex="-1">PlayerControls \u5C5E\u6027 <a class="header-anchor" href="#playercontrols-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u662F\u5426\u663E\u793A\u63A7\u4EF6</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>autoplay</td><td>\u662F\u5426\u81EA\u52A8\u64AD\u653E</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-rate</td><td>\u521D\u59CB\u56DE\u653E\u901F\u7387\u7684\u6B21\u5E42\u3002\u82E5\u8BBE\u7F6E\u4E3A <code>n</code>\uFF0C\u5219\u5B9E\u9645\u663E\u793A\u7684\u901F\u7387\u4E3A <code>2 ** n</code></td><td>number</td><td>\u533A\u95F4\u8303\u56F4[0, 11]</td><td>6</td></tr><tr><td>points</td><td>\u8F68\u8FF9\u70B9\u6570\u7EC4,\u6BCF\u4E2A\u6570\u636E\u70B9\u5305\u542B\u8DDD\u79BB\u548C\u9AD8\u7A0B\u4FE1\u606F: <code>{distance: number, altitude: number}</code></td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>progress</td><td>\u56DE\u653E\u7684\u8FDB\u5EA6</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>screenfullable</td><td>\u662F\u5426\u663E\u793A\u5168\u5C4F\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>screenfull-element</td><td>\u5728\u70B9\u51FB\u63A7\u4EF6\u4E0A\u7684\u5168\u5C4F\u6309\u94AE\u65F6\u9700\u8981\u5168\u5C4F\u7684\u5143\u7D20\u7684ref</td><td>DOM</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="playercontrols-\u4E8B\u4EF6" tabindex="-1">PlayerControls \u4E8B\u4EF6 <a class="header-anchor" href="#playercontrols-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onProgressChange</td><td>\u5728\u8FDB\u5EA6\u53D8\u5316\u65F6\u89E6\u53D1</td><td>(currentProgress: number)</td></tr><tr><td>onRateChange</td><td>\u5728\u64AD\u653E\u901F\u7387\u53D8\u5316\u65F6\u89E6\u53D1</td><td>(currentRate: number)</td></tr><tr><td>onPause</td><td>\u5728\u6682\u505C\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>onPlay</td><td>\u5728\u64AD\u653E\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>onReplay</td><td>\u5728\u91CD\u64AD\u65F6\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',4);function rn(o,a,e,B,d,m){const f=O("render-demo-0"),v=O("demo");return an(),nn("div",null,[on,en,un,pn,N(v,{sourceCode:`
<template>
  <div class="ti-player-controls_story">
    <div class="ti-player-controls_data-demo">
      <div>points({{points?.length}}):</div>
      <div class="ti-player-controls_data">
        <div v-for="point in points">
          {{ JSON.stringify(point) }}
        </div>
      </div>
    </div>
    <div class="ti-player-controls_container" ref="screenfullElement">
      <div class="ti-player-controls_content">
        <div>\u56DE\u653E\u8FDB\u5EA6\uFF1A{{ (progress * 100).toFixed(2) }} %</div>
        <div>\u56DE\u653E\u901F\u7387\uFF1A{{ 2 ** rate }} \u500D\u901F</div>
      </div>
      <TiPlayerControls
        :autoplay="autoplay"
        :progress="progress"
        :defaultRate="defaultRate"
        :screenfullElement="screenfullElement"
        :points="points"
        screenfullable
        @onProgressChange="onProgressChange"
        @onRateChange="onRateChange"
        @onPause="onPause"
        @onPlay="onPlay"
        @onReplay="onReplay"
        class="ti-player-controls_component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'

const useGeneratePoints = (distance: number, pointsLength: number = 252) => {
  const perDistance = distance / (pointsLength - 1)
  const altitude = 5000
  return Array.from({length: pointsLength}).map((point, index) => {
    return {
      distance: index * perDistance,
      altitude: Math.random() * altitude
      // speed: Math.random() * 3 + 15
    }
  })
}

const useImitateContrailReplay = (totalDistance: number) => {
  let startTime = Date.now()
  const distance = ref(0) // \u8DDD\u79BB\u8D77\u70B9\u4ECE0\u5F00\u59CB
  const progress = computed({
    get: () => distance.value / (totalDistance * 1000),
    set: (val) => {
      distance.value = val * totalDistance * 1000
    }
  }) // \u6839\u636E\u8DDD\u79BB\u6A21\u62DF\u7684\u8FDB\u5EA6\u767E\u5206\u6BD4
  const rate = ref(6) // \u56DE\u653E\u65F6\u7684\u6307\u6570 \u56DE\u653E\u7684\u901F\u5EA6\u662FMath.pow(2, rate)
  const pause = ref(true) // \u662F\u5426\u6682\u505C\u7684\u53C2\u6570
  const speed = 2 // \u6A21\u62DF2m/s\u7684\u524D\u8FDB\u901F\u5EA6
  const step = () => {
    const curTime = Date.now()
    const durTime = curTime - startTime
    startTime = curTime
    if (!pause.value && distance.value < totalDistance * 1000) {
      distance.value = Math.min(
        (2 ** rate.value * speed * durTime) / 1000 + distance.value,
        totalDistance * 1000
      )
      requestAnimationFrame(step)
    } else {
      pause.value = true // \u7ED3\u675F\u65F6
    }
  }
  onMounted(() => {
    requestAnimationFrame(step)
  })
  watch(
    () => pause.value,
    (val) => {
      if (!val) {
        startTime = Date.now() // hack
        requestAnimationFrame(step)
      }
    }
  )
  return {
    progress,
    rate,
    pause
  }
}

const autoplay = ref(false)
const totalDistance = +(Math.random() * 50).toFixed(2) + 30 // \u6A21\u62DF\u8DDD\u79BB\u5728 30km - 80km \u4E4B\u95F4

// \u6A21\u62DF\u8F68\u8FF9\u70B9\u7684\u6570\u636E
const points = useGeneratePoints(totalDistance)

const screenfullElement = ref(null)
const {progress, rate, pause} = useImitateContrailReplay(totalDistance)
const defaultRate = rate

const onProgressChange = (progressVal: number) => {
  progress.value = progressVal
}
const onRateChange = (rateVal: number) => {
  rate.value = rateVal
}
const onPause = () => {
  pause.value = true
}
const onPlay = () => {
  pause.value = false
}
const onReplay = () => {
  pause.value = false
  progress.value = 0
}
<\/script>

<style scoped lang="scss" rel="stylesheet/scss">
.ti-player-controls_story {
  position: relative;
  height: 500px;
  overflow: auto;
  background: #12345661;
  background-size: cover;
}

.ti-player-controls_data-demo {
  display: flex;
  justify-content: flex-start;
}

.ti-player-controls_data {
  padding: 0 20px;
  height: 90px;
  overflow: auto;
}

.ti-player-controls_container {
  position: absolute;
  top: 120px;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 360px;
  margin: 0 auto;
  font-size: 30px;
  color: #fff;
  background-color: #315050;
}

.ti-player-controls_component {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

`},{highlight:S(()=>[cn]),default:S(()=>[N(f)]),_:1}),ln])}var Dn=Z(sn,[["render",rn]]);export{hn as __pageData,Dn as default};
