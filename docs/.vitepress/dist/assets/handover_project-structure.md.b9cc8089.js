import{_ as e,c as t,o as s,b as n,d as o}from"./app.5aaa6b63.js";const _='{"title":"\u667A\u6167\u68EE\u9632\u9879\u76EE\u76EE\u5F55\u7ED3\u6784","description":"","frontmatter":{},"headers":[],"relativePath":"handover/project-structure.md","lastUpdated":1649669389893}',i={},r=n("h1",{id:"\u667A\u6167\u68EE\u9632\u9879\u76EE\u76EE\u5F55\u7ED3\u6784",tabindex:"-1"},[o("\u667A\u6167\u68EE\u9632\u9879\u76EE\u76EE\u5F55\u7ED3\u6784 "),n("a",{class:"header-anchor",href:"#\u667A\u6167\u68EE\u9632\u9879\u76EE\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true"},"#")],-1),a=n("blockquote",null,[n("p",null,"\u8FD9\u91CC\u6CE8\u91CA\u4E86\u9879\u76EE\u4E2D\u7684\u5173\u952E\u6587\u4EF6\u6216\u76EE\u5F55\u4FE1\u606F")],-1),c=n("div",{class:"language-"},[n("pre",null,[n("code",null,`forest-fire-prevention-project
\u251C\u2500 .editorconfig             \u7EDF\u4E00IDE\u7684\u914D\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6
\u251C\u2500 .eslintignore  
\u251C\u2500 .eslintrc.js              eslint\u7684\u914D\u7F6E
\u251C\u2500 .gitattributes            git\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6B64\u5904\u76EE\u7684\u662F\u7EDF\u4E00\u89C4\u8303\u6587\u4EF6\u884C\u5C3E\u7684\u683C\u5F0F
\u251C\u2500 .gitignore
\u251C\u2500 .husky                    \u96C6\u6210lint-stage\u548Ccommitlint\uFF0C\u505A\u76F8\u5173\u7684\u6821\u9A8C
\u251C\u2500 .prettierrc.js            \u7EDF\u4E00\u4EE3\u7801\u98CE\u683C\u7684\u914D\u7F6E
\u251C\u2500 .stylelintrc.json         \u7EDF\u4E00style\u7684\u98CE\u683C\u7684\u914D\u7F6E
\u251C\u2500 commitlint.config.js      commit\u6821\u9A8C\u76F8\u5173\u7684\u914D\u7F6E
\u251C\u2500 config                    \u9879\u76EE\u5F00\u53D1\u73AF\u5883\u7684\u914D\u7F6E
\u2502  \u251C\u2500 index.js               \u5F00\u53D1\u73AF\u5883\u7684\u7AEF\u53E3\u7B49\u914D\u7F6E
\u2502  \u2514\u2500 proxy.config.js        \u5F00\u53D1\u73AF\u5883\u7684\u672C\u5730\u4EE3\u7406\u914D\u7F6E
\u251C\u2500 Dockerfile                \u4E00\u4E2A\u7528\u6765\u6784\u5EFA\u955C\u50CF\u7684\u6587\u672C\u6587\u4EF6,\u6587\u672C\u5185\u5BB9\u5305\u542B\u4E86\u4E00\u6761\u6761\u6784\u5EFA\u955C\u50CF\u6240\u9700\u7684\u6307\u4EE4\u548C\u8BF4\u660E\u3002
\u251C\u2500 docs                      \u9879\u76EE\u76F8\u5173\u7684\u6587\u6863\u6587\u4EF6
\u251C\u2500 emp-config.js             \u7C7B\u4F3Cvue-cli\u811A\u624B\u67B6\u751F\u6210\u7684\u9879\u76EE\u4E2D\u7684vue.config.js\u6587\u4EF6\uFF0C\u91CC\u9762\u53EF\u901A\u8FC7webpack-chain\u914D\u7F6Ewebpack
\u251C\u2500 Jenkinsfile               \u4EE5\u4EE3\u7801\u7684\u5F62\u5F0F\u5C06\u6301\u7EED\u96C6\u6210\u4E2D\u7684\u6D41\u6C34\u7EBF\u6784\u6210\u8FDB\u884C\u4FDD\u5B58\uFF0C\u53EF\u7406\u89E3\u6210\u811A\u672C\uFF0C\u91CC\u9762\u4FDD\u5B58\u4E86\u6301\u7EED\u96C6\u6210\u5404\u4E2A\u9636\u6BB5\u6240\u6267\u884C\u7684\u547D\u4EE4
\u251C\u2500 package.json              \u8FD9\u4E2A\u4E0D\u7528\u591A\u8BF4\u4E86
\u251C\u2500 public
\u251C\u2500 README.md
\u251C\u2500 src
\u2502  \u251C\u2500 api
\u2502  \u251C\u2500 App.vue
\u2502  \u251C\u2500 assets
\u2502  \u251C\u2500 bootstrap.ts
\u2502  \u251C\u2500 components             \u7EC4\u4EF6
\u2502  \u251C\u2500 icons
\u2502  \u251C\u2500 layout
\u2502  \u251C\u2500 logo.png
\u2502  \u251C\u2500 main.ts
\u2502  \u251C\u2500 router
\u2502  \u251C\u2500 shims-vue.d.ts
\u2502  \u251C\u2500 store
\u2502  \u251C\u2500 styles                 \u5168\u5C40\u7684\u6837\u5F0F\u6587\u4EF6
\u2502  \u251C\u2500 utils                  util\u6A21\u5757
\u2502  \u2502  \u251C\u2500 clipboard.ts
\u2502  \u2502  \u251C\u2500 index.ts
\u2502  \u2502  \u251C\u2500 ModulePart
\u2502  \u2502  \u251C\u2500 NormalPart
\u2502  \u2502  \u251C\u2500 request.ts
\u2502  \u2502  \u251C\u2500 SceneManagement.js
\u2502  \u2502  \u251C\u2500 StatePart
\u2502  \u2502  \u251C\u2500 SystemConfigSingleton.js
\u2502  \u2502  \u251C\u2500 validate.ts
\u2502  \u2502  \u251C\u2500 WebSocketClient     \u9879\u76EE\u4E2D\u5C01\u88C5\u7684websocket\u6A21\u5757
\u2502  \u2502  \u251C\u2500 ws-helpers          \u4F7F\u7528\u81EA\u5DF1\u5C01\u88C5\u7684websocket\u6A21\u5757\u5B9E\u73B0\u4E1A\u52A1\u529F\u80FD\u7684\u6A21\u5757
\u2502  \u2502  \u2502  \u251C\u2500 ws-all-trajectory.ts
\u2502  \u2502  \u2502  \u251C\u2500 ws-device.ts
\u2502  \u2502  \u2502  \u251C\u2500 ws-patrol.ts
\u2502  \u2502  \u2502  \u2514\u2500 ws-trajectory.ts
\u2502  \u2502  \u2514\u2500 wsHelper.ts
\u2502  \u251C\u2500 views                  
\u2502  \u2502  \u251C\u2500 DanbingTrailReplay  \u5355\u5175\u8F68\u8FF9\u56DE\u653E\u9875\u9762
\u2502  \u2502  \u2502  \u251C\u2500 components
\u2502  \u2502  \u2502  \u2502  \u251C\u2500 AridroneInfo.vue
\u2502  \u2502  \u2502  \u2502  \u2514\u2500 VideoBack.vue
\u2502  \u2502  \u2502  \u2514\u2500 TrailReplay.vue
\u2502  \u2502  \u251C\u2500 Home                \u9996\u9875
\u2502  \u2502  \u2502  \u251C\u2500 components
\u2502  \u2502  \u2502  \u251C\u2500 fonts
\u2502  \u2502  \u2502  \u251C\u2500 Home.vue
\u2502  \u2502  \u2502  \u251C\u2500 imgs
\u2502  \u2502  \u2502  \u251C\u2500 mixins
\u2502  \u2502  \u2502  \u251C\u2500 styles
\u2502  \u2502  \u2502  \u2514\u2500 use
\u2502  \u2502  \u251C\u2500 Icons               \u9879\u76EE\u4E2D\u96C6\u6210\u7684icon\u9875\u9762
\u2502  \u2502  \u2502  \u251C\u2500 element-icons.js
\u2502  \u2502  \u2502  \u251C\u2500 index.vue
\u2502  \u2502  \u2502  \u2514\u2500 svg-icons.js
\u2502  \u2502  \u251C\u2500 PlayerControlsDemo.vue   PlayerControls\u7EC4\u4EF6\u7684Demo\uFF0C\u5DF2\u5E9F\u5F03\uFF0C\u53EF\u4EE5\u5728titans-ui\u6587\u6863\u4E2D\u67E5\u770B\u66F4\u8BE6\u7EC6\u7684\u7528\u6CD5
\u2502  \u2502  \u2514\u2500 TrailReplay         \u65E0\u4EBA\u673A\u8F68\u8FF9\u56DE\u653E\u9875\u9762
\u2502  \u2502     \u251C\u2500 components
\u2502  \u2502     \u2502  \u251C\u2500 AridroneInfo.vue
\u2502  \u2502     \u2502  \u2514\u2500 VideoBack.vue
\u2502  \u2502     \u2514\u2500 TrailReplay.vue
\u2502  \u2514\u2500 vuex.d.ts
\u251C\u2500 tsconfig.json
\u2514\u2500 yarn.lock

`)])],-1),l=[r,a,c];function d(p,u,m,g,v,f){return s(),t("div",null,l)}var h=e(i,[["render",d]]);export{_ as __pageData,h as default};