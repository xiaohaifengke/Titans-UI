import { installPlugins } from '@titans-ui/utils/installPlugins'
import Select from './src/select.vue'
import OptionGroup from './src/option-group.vue'
import Option from './src/option.vue'

export const TiOption = installPlugins(Option)
export const TiOptionGroup = installPlugins(OptionGroup)
export const TiSelect = installPlugins(Select)
export default TiSelect
