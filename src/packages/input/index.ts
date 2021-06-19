import { App } from 'vue';
import Input from './input';
console.log(Input);
export default {
    ...Input,
    install(app: App) {
        console.log(Input.name, Input);
        app.component(Input.name, Input);
    }
};