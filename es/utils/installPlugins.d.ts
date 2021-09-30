import { App, Plugin } from 'vue';
export declare function installPlugins<T extends {
    name: string;
}>(Component: T, plugins?: Plugin[]): T & {
    install(app: App): void;
};
