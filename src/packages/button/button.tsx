import { designComponent } from "src/use/designComponent";
import './button.scss';

export default designComponent({
    name: 'TiButton',
    props: {
        status: {
            type: String,
            default: 'primary'
        },
        label: {type: String}
    },
    emits: {
        click: (e: MouseEvent) => true
    },
    setup({props, setupContext, event}) {
        const classes = [
            'ti-button',
            `ti-button-status-${props.status}`
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