import { App } from 'vue';
import TiInput from './packages/input';
import TiButton from './packages/button';
import TiIcon from './packages/icon';

const plugins = [
    TiInput,
    TiButton,
    TiIcon
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
    TiIcon,
    install
};
