import { ComponentPropsOptions, defineComponent, ExtractPropTypes, getCurrentInstance, inject, provide, SetupContext } from "vue";
import { ComponentEventHub, getComponentEmits, useEvent } from "./useEvent";

export function designComponent<
    PropsOptions extends Readonly<ComponentPropsOptions>,
    Props extends Readonly<ExtractPropTypes<PropsOptions>>,
    Emits extends { [key: string]: (...args: any[]) => boolean },
    Refer
>(options: {
    name?: string,
    props?: PropsOptions,
    provideRefer?: boolean,
    emits?: Emits,
    setup: (options: { props: Props, setupContext: SetupContext, event: ComponentEventHub<Emits> }) => {
        refer?: Refer,
        render: () => any
    }
}) {
    const { setup, provideRefer, emits, ...leftOptions } = options;

    return {
        ...defineComponent({
            ...leftOptions,
            emits: getComponentEmits(emits),
            setup(props: Props, setupContext: SetupContext) {
                const ctx = getCurrentInstance() as any;

                if (!setup) {
                    console.error('designComponent: set up is required');
                    return () => null;
                }
                const event = useEvent(emits);
                const { refer, render } = setup({ props, setupContext, event });
                if (refer) {
                    const duplicateKey = Object.keys(leftOptions.props || {})
                        .find(item => Object.prototype.hasOwnProperty.call(refer as any, item));
                    if (duplicateKey) {
                        console.error(`designComponent: duplicate key ${duplicateKey} in refer`);
                    } else {
                        Object.assign(ctx.proxy, refer);
                    }
                }
                if (provideRefer) {
                    if (!leftOptions.name) {
                        console.error('designComponent: name is required when provideRefer is true');
                    } else {
                        provide(`@@${leftOptions.name}`, refer);
                    }
                }
                return render;
            }
        } as any),
        use: {
            ref: (refName: string) => {
                const instance = getCurrentInstance()!;
                return {
                    get value() {
                        return instance.refs[refName] as Refer | null;
                    }
                };
            },
            inject: (defaultValue?: any) => {
                return inject(`@@${leftOptions.name}`, defaultValue) as Refer | any;
            }
        }
    };
}
