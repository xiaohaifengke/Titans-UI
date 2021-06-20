import { App } from 'vue';
import TiInput from './input';

export default {
    ...TiInput,
    install(app: App) {
        app.component(TiInput.name, TiInput);
    }
};