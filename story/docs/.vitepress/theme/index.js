// import theme from 'vitepress/theme'
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './custom.css'
import './styles/index.scss'
import { registerComponents } from './register-components'
import TiTansUI from 'titans-ui'
import 'titans-ui/dist/index.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.use(TiTansUI)
    registerComponents(app)
  }
}
