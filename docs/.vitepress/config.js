const guideSidebar = require('./sidebar/guide')
const componentSidebar = require('./sidebar/component')
const handoverSidebar = require('./sidebar/handover')
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
        text: 'GitLab',
        link: 'http://192.168.0.17/frontend/Titans-UI'
      },
      {
        text: '交接文档',
        link: '/handover/ffp'
      }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': guideSidebar,
      '/component/': componentSidebar,
      '/handover/': handoverSidebar,
    }
  },
  markdown: {
    config: (md) => {
      md.use(require('vitepress-theme-demoblock').demoBlockPlugin)
    }
  }
}
