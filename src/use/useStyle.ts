import { inject, provide, computed } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";


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

interface DefaultStylePropsOption {
    shape?: StyleShape,
    size?: StyleSize,
    status?: StyleStatus
}
interface StyleComputed {
    shape?: StyleShape,
    size?: StyleSize,
    status?: StyleStatus
}

const USE_STYLE_PROVIDE = '@@USE_STYLE_PROVIDE';
export function useStyle(defaultStylePropsOption: DefaultStylePropsOption): {value: StyleComputed} {
    const ctx = getCurrentInstance()! as any;
    const defaultOptions = {
        shape: StyleShape.fillet,
        size: StyleSize.normal,
        status: StyleStatus.primary,
        ...defaultStylePropsOption
    };
    const injectProps = inject(USE_STYLE_PROVIDE, null) as null | {value: StyleComputed};
    const styleComputed = computed(() => {
        const { shape, size, status } = ctx.props;
        return {
            shape: shape || (injectProps && injectProps.value.shape) || defaultOptions.shape,
            size: size || (injectProps && injectProps.value.size) || defaultOptions.size,
            status: status || (injectProps && injectProps.value.status) || defaultOptions.status,
        };
    });
    provide(USE_STYLE_PROVIDE, styleComputed);
    return styleComputed;
}
