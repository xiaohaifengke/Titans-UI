import { inject, provide, computed } from "@vue/runtime-core";
import { ComputedRef } from "vue";

type StylePropsType = {
    shape?: string,
    size?: string,
    status?: string
}
type StyleComputed = {
    shape?: any,
    size?: any,
    status?: any
}
declare type StylePropsTypeKey = keyof StylePropsType
export function useStyle(props: any, styleProps: StylePropsType): StyleComputed {
    const propKeys = Object.keys(styleProps) as StylePropsTypeKey[];
    const styleComputed = propKeys.reduce((propsComputed, propKey) => {
        const injectProps: ComputedRef<any> | undefined = inject(`@@style-prop-${propKey}`);
        const propComputed = computed(() => {
            return props[propKey] || (injectProps && injectProps.value) || styleProps[propKey];
        });
        
        provide(`@@style-prop-${propKey}`, propComputed);
        propsComputed[propKey] = propComputed;
        return propsComputed;
    }, {} as StyleComputed);
    return styleComputed;
}

export enum StyleShape {
    fillet = 'fillet',
    round = 'round',
    square = 'square',
}

export enum StyleSize {
    normal = 'normal',
    large = 'large',
    mini = 'mini',
}

export enum StyleStatus {
    primary = 'primary',
    success = 'success',
    error = 'error',
    warn = 'warn',
    info = 'info',
}

export const StyleProps = {
    shape: {type: String},                      // fillet,round,square
    size: {type: String},                       // normal,large,mini
    status: {type: String},                     // primary,success,error,warn,info
};