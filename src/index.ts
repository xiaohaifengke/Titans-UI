import { App, DefineComponent } from 'vue'
import Input from './packages/input'
import Button from './packages/button'
import Icon from './packages/icon'
import ButtonGroup from './packages/button-group'
import Switch from './packages/switch'
import Dialog from './packages/dialog'

const plugins = [Input, Button, ButtonGroup, Icon, Switch, Dialog]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export { Input, Button, ButtonGroup, Icon, Switch, Dialog, install }
