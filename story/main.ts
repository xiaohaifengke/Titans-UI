import { createApp } from 'vue'
import App from './app.vue'
import TitansUI from '@titans-ui/titans-ui/index'
const app = createApp(App)
app.use(TitansUI)
app.mount('#app')
