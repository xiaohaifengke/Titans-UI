import { createApp } from 'vue'
import App from './app.vue'
import TitansUI from './entry'
import '@titans-ui/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(TitansUI)
app.mount('#app')
