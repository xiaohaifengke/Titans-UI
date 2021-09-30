import { App } from 'vue';
import Button from './packages/button';
import Icon from './packages/icon';
import ButtonGroup from './packages/button-group';
import Switch from './packages/switch';
import Dialog from './packages/dialog';
declare function install(app: App): void;
declare const _default: {
    install: typeof install;
};
export default _default;
export { Button, ButtonGroup, Icon, Switch, Dialog, install };
