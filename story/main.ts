import App from './app.vue'
import { createApp } from 'vue'
import TitansUI from '../src'

const app = createApp(App)
app.use(TitansUI)
app.mount('#app')
;(window as any).app = app
