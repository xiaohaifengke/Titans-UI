import { createApp } from 'vue'
import App from './app.vue'
// import TitansUI from './entry'
import TitansUI from '../dist/titans-ui/dist/index.esm.js'
import '@titans-ui/theme-chalk/src/index.scss'
import router from './router'
const app = createApp(App)
app.use(TitansUI)
app.use(router)
app.mount('#app')
