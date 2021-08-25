import {designComponent} from "../../../../src/use/designComponent";
import {StyleProps, StyleStatus, useStyle} from "../../../../src/use/useStyle";
import {computed} from 'vue';
import {useSlots} from "../../../../src/use/useSlots";

export const DemoUseStyleParent = designComponent({
    props: {
        ...StyleProps,
    },
    setup() {

        const slots = useSlots();
        const styleComputed = useStyle({status: StyleStatus.primary});
        const classes = computed(() => [
            'ti-use-style-parent',
            `ti-use-style-parent-status-${styleComputed.value.status}`
        ]);

        return {
            render: () => (
                <div class={classes.value}>
                    <div>PARENT</div>
                    <div>
                        {slots.default()}
                    </div>
                </div>
            )
        };
    },
});