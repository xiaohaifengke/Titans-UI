import { designComponent } from "src/use/designComponent";
import './button.scss';

export default designComponent({
    name: 'TiButton',
    props: {
        type: {
            type: String,
            default: 'primary',
            // validator(value: unknown): boolean {
            //     const types = ['primary', 'success', 'warning', 'danger', 'info'];
            //     if (!types.includes(value as string)) {
            //         console.error(`type类型只能为：${types.join('/')}`);
            //         return false;
            //     }
            //     return true;
            // }
        },
        label: {type: String}
    },
    emits: {
        click: (e: MouseEvent) => true
    },
    setup({props, setupContext, event}) {
        const classes = [
            'ti-button',
            `ti-button--${props.type}`
        ];
        return {
            render: () => (
                <button class={classes} onClick={event.emit.click}>
                    {!setupContext.slots.default ? props.label : setupContext.slots.default()}
                </button>
            )
        };
    }
});
