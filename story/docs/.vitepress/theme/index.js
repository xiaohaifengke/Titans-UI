// import DefaultTheme from 'vitepress/theme'
// import './custom.css'
//
// export default DefaultTheme

import TiTansUI from 'titans-ui'
import 'titans-ui/dist/index.css'
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
// import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { registerComponents } from './register-components'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.use(TiTansUI)
    registerComponents(app)
  }
}
