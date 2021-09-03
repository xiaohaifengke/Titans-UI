import {designComponent} from "../../../../src/use/designComponent";
import {StyleProps, StyleType, useStyle} from "../../../../src/use/useStyle";
import {computed} from 'vue';

export const DemoUseStyleChild = designComponent({
    props: {
        ...StyleProps,
    },
    setup() {

        const styleComputed = useStyle({type: StyleType.primary});
        const classes = computed(() => [
            'ti-use-style-child',
            `ti-use-style-child-status-${styleComputed.value.type}`
        ]);

        return {
            render: () => (
                <div class={classes.value}>
                    CHILD
                </div>
            )
        };
    },
});
