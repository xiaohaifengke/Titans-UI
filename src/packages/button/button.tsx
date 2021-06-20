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
    setup(props, setupContext) {
        const classes = [
            'ti-button',
            `ti-button-status-${props.status}`
        ];
        return {
            render: () => (
                <button class={classes}>
                    {!setupContext.slots.default ? props.label : setupContext.slots.default()}
                </button>
            )
        };
    }
});