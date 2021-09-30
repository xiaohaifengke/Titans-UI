import { App } from 'vue'
import Button from './packages/button'
import Icon from './packages/icon'
import ButtonGroup from './packages/button-group'
import Switch from './packages/switch'
import Dialog from './packages/dialog'

const plugins = [Button, ButtonGroup, Icon, Switch, Dialog]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export { Button, ButtonGroup, Icon, Switch, Dialog, install }
