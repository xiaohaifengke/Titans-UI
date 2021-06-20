import { installPlugins } from '../../utils/installPlugins';
import { App } from 'vue';
import TiInput from './input';

console.log('加载了 TiInput 组件');

export default installPlugins(TiInput);