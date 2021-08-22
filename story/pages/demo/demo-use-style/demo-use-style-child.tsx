import {designComponent} from "../../../../src/use/designComponent";
import {StyleProps, StyleStatus, useStyle} from "../../../../src/use/useStyle";
import {computed} from 'vue';

export const DemoUseStyleChild = designComponent({
    props: {
        ...StyleProps,
    },
    setup({props}) {

        const styleComputed = useStyle(props, {status: StyleStatus.primary});
        const classes = computed(() => [
            'ti-use-style-child',
            `ti-use-style-child-status-${styleComputed.status.value}`
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