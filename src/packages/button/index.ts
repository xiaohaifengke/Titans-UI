import { installPlugins } from '../../utils/installPlugins';
import { App } from 'vue';
import TiButton from './button';

console.log('加载了 TiButton 组件');

export default installPlugins(TiButton);