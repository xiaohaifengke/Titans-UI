import { App } from 'vue';
import Input from './packages/input';
import Button from './packages/button';
import Icon from './packages/icon';
import ButtonGroup from "./packages/button-group";

const plugins = [
    Input,
    Button,
    ButtonGroup,
    Icon
];

function install (app: App) {
    plugins.forEach(app.use);
}

export default {
    install
};

export {
    Input,
    Button,
    ButtonGroup,
    Icon,
    install
};
