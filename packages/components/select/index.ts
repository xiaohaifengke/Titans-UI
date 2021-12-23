import { installPlugins } from '@titans-ui/utils/installPlugins'
import Select from './src/select.vue'
import Option from './src/option.vue'

export const TiOption = installPlugins(Option)
export const TiSelect = installPlugins(Select)
export default TiSelect
