import { App } from 'vue';
import Input from './packages/input';
import Button from './packages/button';
import Icon from './packages/icon';
import ButtonGroup from "./packages/button-group";
import Switch from "./packages/switch";

const plugins = [
    Input,
    Button,
    ButtonGroup,
    Icon,
    Switch
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
    Switch,
    install
};
