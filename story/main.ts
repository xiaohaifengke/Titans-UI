import { createApp } from 'vue'
import App from './app.vue'
import TiIcon from '@titans-ui/components/icon'
const app = createApp(App)
app.use(TiIcon)
app.mount('#app')
