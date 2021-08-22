import {designComponent} from "../../../../src/use/designComponent";
import {useSlots} from "../../../../src/use/useSlots";
import {computed} from 'vue';

export default designComponent({
    name: 'demo-use-slots-component',
    props: {},
    setup({ setupContext }) {

        const slots = useSlots(setupContext, [
            'head',
            'foot'
        ]);

        const classes = computed(() => [
            'demo-use-slots-component',
            {
                'demo-use-slots-component-has-slot-head': slots.head.isExist()
            }
        ]);

        return {
            render() {
                return (
                    <div class={classes.value}>
                        <div class="demo-use-slots-component-head">
                            {slots.head('default head')}
                        </div>
                        <div class="demo-use-slots-component-body">
                            {slots.default(
                                <h1>default body</h1>
                            )}
                        </div>
                        <div class="demo-use-slots-component-foot">
                            {slots.foot('default foot')}
                        </div>
                    </div>
                );
            },
        };
    },
});