import type { App } from 'vue'
import {
  TiButton,
  TiIcon,
  TiInput,
  TiPopperTransition,
  TiTimePicker
} from '@titans-ui/components/index'

const plugins = [TiButton, TiIcon, TiInput, TiPopperTransition, TiTimePicker]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export { TiButton, TiIcon, TiInput, TiPopperTransition, TiTimePicker, install }
