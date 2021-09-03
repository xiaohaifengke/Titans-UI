import { inject, provide, computed } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";


export enum StyleShape {
    fillet = 'fillet',
    round = 'round',
    square = 'square',
}

export enum StyleSize {
    large = 'large',
    normal = 'normal',
    small = 'small',
    mini = 'mini',
}

export enum StyleType {
    primary = 'primary',
    success = 'success',
    error = 'error',
    warn = 'warn',
    info = 'info',
}

export const StyleProps = {
    shape: {type: String},                      // fillet,round,square
    size: {type: String},                       // normal,large,mini
    type: {type: String},                     // primary,success,error,warn,info
};

interface DefaultStylePropsOption {
    shape?: StyleShape,
    size?: StyleSize,
    type?: StyleType
}
interface StyleComputed {
    shape?: StyleShape,
    size?: StyleSize,
    type?: StyleType
}

const USE_STYLE_PROVIDE = '@@USE_STYLE_PROVIDE';
export function useStyle(defaultStylePropsOption: DefaultStylePropsOption): {value: StyleComputed} {
    const ctx = getCurrentInstance()! as any;
    const defaultOptions = {
        shape: StyleShape.fillet,
        size: StyleSize.normal,
        type: StyleType.primary,
        ...defaultStylePropsOption
    };
    const injectProps = inject(USE_STYLE_PROVIDE, null) as null | {value: StyleComputed};
    const styleComputed = computed(() => {
        const { shape, size, type } = ctx.props;
        return {
            shape: shape || (injectProps && injectProps.value.shape) || defaultOptions.shape,
            size: size || (injectProps && injectProps.value.size) || defaultOptions.size,
            type: type || (injectProps && injectProps.value.type) || defaultOptions.type,
        };
    });
    provide(USE_STYLE_PROVIDE, styleComputed);
    return styleComputed;
}
