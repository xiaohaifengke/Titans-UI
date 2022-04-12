# 智慧森防项目目录结构

> 这里注释了项目中的关键文件或目录信息

```
forest-fire-prevention-project
├─ .editorconfig             统一IDE的配置的配置文件
├─ .eslintignore  
├─ .eslintrc.js              eslint的配置
├─ .gitattributes            git的配置文件，此处目的是统一规范文件行尾的格式
├─ .gitignore
├─ .husky                    集成lint-stage和commitlint，做相关的校验
├─ .prettierrc.js            统一代码风格的配置
├─ .stylelintrc.json         统一style的风格的配置
├─ commitlint.config.js      commit校验相关的配置
├─ config                    项目开发环境的配置
│  ├─ index.js               开发环境的端口等配置
│  └─ proxy.config.js        开发环境的本地代理配置
├─ Dockerfile                一个用来构建镜像的文本文件,文本内容包含了一条条构建镜像所需的指令和说明。
├─ docs                      项目相关的文档文件
├─ emp-config.js             类似vue-cli脚手架生成的项目中的vue.config.js文件，里面可通过webpack-chain配置webpack
├─ Jenkinsfile               以代码的形式将持续集成中的流水线构成进行保存，可理解成脚本，里面保存了持续集成各个阶段所执行的命令
├─ package.json              这个不用多说了
├─ public
├─ README.md
├─ src
│  ├─ api
│  ├─ App.vue
│  ├─ assets
│  ├─ bootstrap.ts
│  ├─ components             组件
│  ├─ icons
│  ├─ layout
│  ├─ logo.png
│  ├─ main.ts
│  ├─ router
│  ├─ shims-vue.d.ts
│  ├─ store
│  ├─ styles                 全局的样式文件
│  ├─ utils                  util模块
│  │  ├─ clipboard.ts
│  │  ├─ index.ts
│  │  ├─ ModulePart
│  │  ├─ NormalPart
│  │  ├─ request.ts
│  │  ├─ SceneManagement.js
│  │  ├─ StatePart
│  │  ├─ SystemConfigSingleton.js
│  │  ├─ validate.ts
│  │  ├─ WebSocketClient     项目中封装的websocket模块
│  │  ├─ ws-helpers          使用自己封装的websocket模块实现业务功能的模块
│  │  │  ├─ ws-all-trajectory.ts
│  │  │  ├─ ws-device.ts
│  │  │  ├─ ws-patrol.ts
│  │  │  └─ ws-trajectory.ts
│  │  └─ wsHelper.ts
│  ├─ views                  
│  │  ├─ DanbingTrailReplay  单兵轨迹回放页面
│  │  │  ├─ components
│  │  │  │  ├─ AridroneInfo.vue
│  │  │  │  └─ VideoBack.vue
│  │  │  └─ TrailReplay.vue
│  │  ├─ Home                首页
│  │  │  ├─ components
│  │  │  ├─ fonts
│  │  │  ├─ Home.vue
│  │  │  ├─ imgs
│  │  │  ├─ mixins
│  │  │  ├─ styles
│  │  │  └─ use
│  │  ├─ Icons               项目中集成的icon页面
│  │  │  ├─ element-icons.js
│  │  │  ├─ index.vue
│  │  │  └─ svg-icons.js
│  │  ├─ PlayerControlsDemo.vue   PlayerControls组件的Demo，已废弃，可以在titans-ui文档中查看更详细的用法
│  │  └─ TrailReplay         无人机轨迹回放页面
│  │     ├─ components
│  │     │  ├─ AridroneInfo.vue
│  │     │  └─ VideoBack.vue
│  │     └─ TrailReplay.vue
│  └─ vuex.d.ts
├─ tsconfig.json
└─ yarn.lock

```
