import App from './app.vue'
import { createApp } from 'vue'
import TitansUI from '../src'
// import '../dist/index.css'

const app = createApp(App)
app.use(TitansUI)
app.mount('#app')
;(window as any).app = app
