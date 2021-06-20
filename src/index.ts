import { App } from 'vue';
import TiInput from '@/packages/input';

const plugins = [
    TiInput
];

function install (app: App) {
    plugins.forEach(app.use);
}

export default {
    install
};

export {
    TiInput,
    install
};