import { ComponentPropsOptions, ExtractPropTypes, SetupContext } from 'vue';
import { ComponentEventHub } from './useEvent';
export declare function designComponent<PropsOptions extends Readonly<ComponentPropsOptions>, Props extends Readonly<ExtractPropTypes<PropsOptions>>, Emits extends {
    [key: string]: (...args: any[]) => boolean;
}, Refer>(options: {
    name?: string;
    props?: PropsOptions;
    provideRefer?: boolean;
    emits?: Emits;
    setup: (options: {
        props: Props;
        setupContext: SetupContext;
        event: ComponentEventHub<Emits>;
    }) => {
        refer?: Refer;
        render: () => any;
    };
}): {
    use: {
        ref: (refName: string) => {
            readonly value: Refer | null;
        };
        inject: (defaultValue?: any) => any;
    };
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
    setup?: ((this: void, props: Readonly<{}>, ctx: SetupContext<{}>) => void | object | import("vue").RenderFunction | Promise<object>) | undefined;
    name: string;
    template?: string | object | undefined;
    render?: Function | undefined;
    components?: Record<string, import("vue").Component<any, any, any, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions>> | undefined;
    directives?: Record<string, import("vue").Directive<any, any>> | undefined;
    inheritAttrs?: boolean | undefined;
    emits?: ThisType<void> | (string[] & ThisType<void>) | undefined;
    expose?: string[] | undefined;
    serverPrefetch?(): Promise<any>;
    compilerOptions?: import("vue").RuntimeCompilerOptions | undefined;
    call: (<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A) => void) & ((this: unknown, ...args: unknown[]) => never);
    __defaults?: {} | undefined;
    compatConfig?: (Partial<Record<import("vue").DeprecationTypes, boolean | "suppress-warning">> & {
        MODE?: 2 | 3 | ((comp: import("vue").ComponentOptions<any, any, any, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } | null) => 2 | 3) | undefined;
    }) | undefined;
    data?: ((this: import("vue").ComponentPublicInstance<Readonly<unknown>, {}, {}, {}, import("vue").MethodOptions, {}, Readonly<unknown>, {}, false, import("vue").ComponentOptionsBase<Readonly<unknown>, {}, {}, {}, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}>>, vm: import("vue").ComponentPublicInstance<Readonly<unknown>, {}, {}, {}, import("vue").MethodOptions, {}, Readonly<unknown>, {}, false, import("vue").ComponentOptionsBase<Readonly<unknown>, {}, {}, {}, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}>>) => {}) | undefined;
    computed?: Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>> | undefined;
    methods?: import("vue").MethodOptions | undefined;
    watch?: Record<string, string | import("vue").WatchCallback<any, any> | ({
        handler: string | import("vue").WatchCallback<any, any>;
    } & import("vue").WatchOptions<boolean>) | (string | import("vue").WatchCallback<any, any> | ({
        handler: string | import("vue").WatchCallback<any, any>;
    } & import("vue").WatchOptions<boolean>))[]> | undefined;
    provide?: Function | Record<string, unknown> | undefined;
    inject?: string[] | Record<string | symbol, string | symbol | {
        from?: string | symbol | undefined;
        default?: unknown;
    }> | undefined;
    filters?: Record<string, Function> | undefined;
    mixins?: import("vue").ComponentOptionsMixin[] | undefined;
    extends?: import("vue").ComponentOptionsMixin | undefined;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    beforeDestroy?(): void;
    beforeUnmount?(): void;
    destroyed?(): void;
    unmounted?(): void;
    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | undefined;
    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | undefined;
    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | undefined;
    delimiters?: [string, string] | undefined;
    __differentiator?: string | number | undefined;
    __isBuiltIn?: boolean | undefined;
    __file?: string | undefined;
    key?: string | number | symbol | undefined;
    ref?: string | import("vue").Ref<any> | ((ref: object | null, refs: Record<string, any>) => void) | undefined;
    onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    class?: unknown;
    style?: unknown;
};
