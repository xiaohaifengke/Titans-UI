import { App } from 'vue';
import Input from './packages/input';
import Button from './packages/button';
import Icon from './packages/icon';
import ButtonGroup from "./packages/button-group";
import Toggle from "./packages/toggle";

const plugins = [
    Input,
    Button,
    ButtonGroup,
    Icon,
    Toggle
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
    Toggle,
    install
};
