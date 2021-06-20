import { App } from 'vue';
import TiInput from './packages/input';
import TiButton from './packages/button';

const plugins = [
    TiInput,
    TiButton
];

function install (app: App) {
    plugins.forEach(app.use);
}

export default {
    install
};

export {
    TiInput,
    TiButton,
    install
};