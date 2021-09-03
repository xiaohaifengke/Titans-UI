import './button.scss';
import { defineComponent } from 'vue';

enum StyleShape {
    fillet = 'fillet',
    round = 'round',
    square = 'square',
}

enum StyleSize {
    large = 'large',
    normal = 'normal',
    small = 'small',
    mini = 'mini',
}

enum StyleType {
    default = 'default',
    primary = 'primary',
    success = 'success',
    warning = 'warning',
    danger = 'danger',
    info = 'info',
}

export default defineComponent({
    name: 'TiButton',
    props: {
        label: {type: String},
        // 按钮类型: default/primary/success/warning/danger/info
        type: {
            type: String,
            default: 'default',
            // validator(value: unknown): boolean {
            //     const types = ['primary', 'success', 'warning', 'danger', 'info'];
            //     if (!types.includes(value as string)) {
            //         console.error(`type类型只能为：${types.join('/')}`);
            //         return false;
            //     }
            //     return true;
            // }
        },
        // 按钮模式: fill/plain/outline/text
        mode: {
            type: String,
            default: 'fill'
        },
        // 按钮形状: fillet/round/square
        shape: {type: String, default: 'fillet'},
        // 按钮大小: large/normal/small/mini
        size: {type: String, default: 'normal'},
        icon: {type: String},
        disabled: {type: Boolean},
        loading: {type: Boolean}

    },
    emits: {
        click: (e: MouseEvent) => true
    },
    setup(props, {slots, emit}) {
        const classes = [
            'ti-button',
            `ti-button-type-${props.type}`,
            `ti-button-mode-${props.mode}`,
            `ti-button-shape-${props.shape}`,
            `ti-button-size-${props.size}`
        ];
        return () => (
            <button class={classes} onClick={(e) => emit('click', e)}>
                {!slots.default ? props.label : slots.default()}
            </button>
        );
    }
});
