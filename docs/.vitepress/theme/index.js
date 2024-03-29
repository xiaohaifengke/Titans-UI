import theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './custom.css'
import './styles/index.scss'
import { registerComponents } from './register-components'
import TiTansUI from 'titans-ui'
import 'titans-ui/dist/index.css'
import IconList from '../../component/icon/icon-list.vue'

export default {
  ...theme,
  async enhanceApp({ app, router, siteData }) {
    app.use(TiTansUI)
    app.component('IconList', IconList)
    registerComponents(app)
  }
}
