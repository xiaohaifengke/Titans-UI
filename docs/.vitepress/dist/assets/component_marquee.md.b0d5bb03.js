var M=Object.defineProperty;var F=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var B=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))N.call(t,s)&&B(e,s,t[s]);if(F)for(var s of F(t))T.call(t,s)&&B(e,s,t[s]);return e};import{_ as V,r as g,c as w,a as k,w as d,b as a,d as n,e as S,o as $,V as q}from"./app.c1aaebd6.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:u}=q;function c(r,p){const l=e("TiMarquee");return s(),u("div",null,[t(l,{style:{height:"50px"},name:"marquee",content:"\u8B66\u544A\uFF1A2022-01-17 16:10:00 E 102.919 N 25.050  \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5 "})])}return h({render:c},{})}(),"render-demo-1":function(){const{toDisplayString:e,createElementVNode:t,createTextVNode:s,openBlock:u,createElementBlock:c,resolveComponent:m,withCtx:r,createVNode:p}=q,l={class:"ti-marquee-demo_slot"},C={class:"ti-marquee_container"},y=s(" \u8B66\u544A\uFF1A "),E={class:"marquee-demo_content-detail"},x=s(" \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5 ");function A(o,i){const D=m("TiMarquee");return u(),c("div",null,[t("div",l,[t("div",C,[p(D,{class:"marquee-demo",pauseOnHover:""},{default:r(()=>[(u(),c("p",{style:{"margin-right":"38px"},class:"marquee-demo_content",key:o.marqueeData.date,onClick:i[0]||(i[0]=f=>o.handleMarquee(o.marqueeData))},[y,t("span",E,e(o.marqueeData.date)+" "+e(o.marqueeData.lnt)+" "+e(o.marqueeData.lat),1),x]))]),_:1})])])])}const{reactive:_}=q;return h({render:A},{setup(o,{expose:i}){i();const v={marqueeData:_({date:"2022-01-20 21:12",lnt:"E 102\xB054\u2019",lat:"N 30\xB005\u2019"}),handleMarquee:b=>{console.log(b)},reactive:_};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}()}},Q='{"title":"Marquee \u8DD1\u9A6C\u706F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F","slug":"\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F"},{"level":2,"title":"Marquee \u5C5E\u6027","slug":"marquee-\u5C5E\u6027"},{"level":2,"title":"Marquee \u63D2\u69FD","slug":"marquee-\u63D2\u69FD"}],"relativePath":"component/marquee.md","lastUpdated":1644894774516}',H=a("h1",{id:"marquee-\u8DD1\u9A6C\u706F",tabindex:"-1"},[n("Marquee \u8DD1\u9A6C\u706F "),a("a",{class:"header-anchor",href:"#marquee-\u8DD1\u9A6C\u706F","aria-hidden":"true"},"#")],-1),j=a("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),P=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("TiMarquee")]),n(`
    `),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),n(" 50px")]),a("span",{class:"token punctuation"},'"')])]),n(`
    `),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("marquee"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"content"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u8B66\u544A\uFF1A2022-01-17 16:10:00 E 102.919 N 25.050  \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5 "),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("TiMarquee")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),U=a("h2",{id:"\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F",tabindex:"-1"},[n("\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F "),a("a",{class:"header-anchor",href:"#\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F","aria-hidden":"true"},"#")],-1),z=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ti-marquee-demo_slot"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ti-marquee_container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("TiMarquee")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("marquee-demo"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"pauseOnHover"),a("span",{class:"token punctuation"},">")]),n(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),n(`
          `),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"margin-right"),a("span",{class:"token punctuation"},":"),n(" 38px")]),a("span",{class:"token punctuation"},'"')])]),n(`
          `),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("marquee-demo_content"),a("span",{class:"token punctuation"},'"')]),n(`
          `),a("span",{class:"token attr-name"},":key"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("marqueeData.date"),a("span",{class:"token punctuation"},'"')]),n(`
          `),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("handleMarquee(marqueeData)"),a("span",{class:"token punctuation"},'"')]),n(`
        `),a("span",{class:"token punctuation"},">")]),n(`
          \u8B66\u544A\uFF1A
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("span")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("marquee-demo_content-detail"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
              {{ marqueeData.date }} {{ marqueeData.lnt }} {{ marqueeData.lat }}
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("span")]),a("span",{class:"token punctuation"},">")]),n(`
          \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("TiMarquee")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" reactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`
`),a("span",{class:"token keyword"},"const"),n(" marqueeData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"reactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"date"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'2022-01-20 21:12'"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"lnt"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'E 102\xB054\u2019'"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"lat"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'N 30\xB005\u2019'"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"handleMarquee"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"data"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
  console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("data"),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),n(),a("span",{class:"token attr-name"},"scoped"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("scss"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("stylesheet/scss"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[n(`
`),a("span",{class:"token selector"},".ti-marquee-demo_slot"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"position"),a("span",{class:"token punctuation"},":"),n(" relative"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),n(" 200px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"border"),a("span",{class:"token punctuation"},":"),n(" 1px dashed gray"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".ti-marquee_container"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"position"),a("span",{class:"token punctuation"},":"),n(" absolute"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"top"),a("span",{class:"token punctuation"},":"),n(" 10px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"right"),a("span",{class:"token punctuation"},":"),n(" 15px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),n(" 380px"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".marquee-demo"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"background"),a("span",{class:"token punctuation"},":"),n(),a("span",{class:"token function"},"linear-gradient"),a("span",{class:"token punctuation"},"("),n(`
      to right`),a("span",{class:"token punctuation"},","),n(`
      transparent`),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token function"},"rgba"),a("span",{class:"token punctuation"},"("),n("242"),a("span",{class:"token punctuation"},","),n(" 100"),a("span",{class:"token punctuation"},","),n(" 72"),a("span",{class:"token punctuation"},","),n(" 0.38"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
      transparent
  `),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".marquee-demo_content-detail"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" #e03a3a"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=S('<h2 id="marquee-\u5C5E\u6027" tabindex="-1">Marquee \u5C5E\u6027 <a class="header-anchor" href="#marquee-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u8DD1\u9A6C\u706F\u7684\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>pause-on-hover</td><td>\u662F\u5426\u5728\u9F20\u6807\u60AC\u6D6E\u65F6\u6682\u505C</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="marquee-\u63D2\u69FD" tabindex="-1">Marquee \u63D2\u69FD <a class="header-anchor" href="#marquee-\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',4);function I(e,t,s,u,c,m){const r=g("render-demo-0"),p=g("demo"),l=g("render-demo-1");return $(),w("div",null,[H,j,k(p,{sourceCode:`<template>
  <TiMarquee
    style="height: 50px"
    name="marquee"
    content="\u8B66\u544A\uFF1A2022-01-17 16:10:00 E 102.919 N 25.050  \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5 "
  ></TiMarquee>
</template>
`},{highlight:d(()=>[P]),default:d(()=>[k(r)]),_:1}),U,k(p,{sourceCode:`<template>
  <div class="ti-marquee-demo_slot">
    <div class="ti-marquee_container">
      <TiMarquee class="marquee-demo" pauseOnHover>
        <p
          style="margin-right: 38px"
          class="marquee-demo_content"
          :key="marqueeData.date"
          @click="handleMarquee(marqueeData)"
        >
          \u8B66\u544A\uFF1A
          <span class="marquee-demo_content-detail">
              {{ marqueeData.date }} {{ marqueeData.lnt }} {{ marqueeData.lat }}
            </span>
          \u53D1\u73B0\u7591\u4F3C\u68EE\u6797\u706B\u60C5
        </p>
      </TiMarquee>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const marqueeData = reactive({
  date: '2022-01-20 21:12',
  lnt: 'E 102\xB054\u2019',
  lat: 'N 30\xB005\u2019'
})

const handleMarquee = (data) => {
  console.log(data)
}
<\/script>
<style scoped lang="scss" rel="stylesheet/scss">
.ti-marquee-demo_slot {
  position: relative;
  height: 200px;
  border: 1px dashed gray;
}

.ti-marquee_container {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 380px;
}

.marquee-demo {
  background: linear-gradient(
      to right,
      transparent,
      rgba(242, 100, 72, 0.38),
      transparent
  );
}

.marquee-demo_content-detail {
  color: #e03a3a;
}
</style>
`},{highlight:d(()=>[z]),default:d(()=>[k(l)]),_:1}),G])}var R=V(O,[["render",I]]);export{Q as __pageData,R as default};
