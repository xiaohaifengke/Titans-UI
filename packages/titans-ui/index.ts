import type { App } from 'vue'
import {
  TiButton,
  TiButtonGroup,
  TiIcon,
  TiSwitch,
  TiDialog,
  TiDigitalTransition,
  TiInput,
  TiPopperTransition,
  TiTimePicker,
  TiDatePicker,
  TiWidget,
  TiSelect,
  TiOptionGroup,
  TiOption,
  TiCheckbox,
  TiCheckboxGroup
} from '@titans-ui/components/index'

const plugins = [
  TiButton,
  TiButtonGroup,
  TiIcon,
  TiSwitch,
  TiDialog,
  TiDigitalTransition,
  TiInput,
  TiPopperTransition,
  TiTimePicker,
  TiDatePicker,
  TiWidget,
  TiSelect,
  TiOptionGroup,
  TiOption,
  TiCheckbox,
  TiCheckboxGroup
]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install
}

export {
  TiButton,
  TiButtonGroup,
  TiIcon,
  TiSwitch,
  TiDialog,
  TiDigitalTransition,
  TiInput,
  TiPopperTransition,
  TiTimePicker,
  TiDatePicker,
  TiWidget,
  TiSelect,
  TiOptionGroup,
  TiOption,
  TiCheckbox,
  TiCheckboxGroup,
  install
}
