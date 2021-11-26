import type { App } from 'vue'
import { TiButton, TiIcon } from '@titans-ui/components/index'

const plugins = [TiButton, TiIcon]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export { TiButton, TiIcon, install }
