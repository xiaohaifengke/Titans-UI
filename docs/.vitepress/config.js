const guideSidebar = require('./sidebar/guide')
const componentSidebar = require('./sidebar/component')
module.exports = {
  title: 'Titans-UI',
  base: '/Titans-UI/',
  description: 'Just playing around.',
  lang: 'zh-CN',
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '首页',
        link: '/guide/introduction'
      },
      {
        text: '组件',
        link: '/component/button'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xiaohaifengke/Titans-UI'
      }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': guideSidebar,
      '/component/': componentSidebar
    }
  },
  markdown: {
    config: (md) => {
      md.use(require('vitepress-theme-demoblock').demoBlockPlugin)
    }
  }
}
