import './toggle.scss';
import {defineComponent} from "vue";
import {computed} from "@vue/runtime-core";

export default defineComponent({
    name: 'TiToggle',
    props: {
        modelValue: {
            type: [Boolean, String, Number],
            required: true
        },
        type: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: 40
        },
        height: {
            type: Number,
            default: 20
        },
        onValue: {
            type: [Boolean, String, Number],
            default: true
        },
        offValue: {
            type: [Boolean, String, Number],
            default: false
        },
        onColor: {
            type: String
        },
        offColor: {
            type: String
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {

        const isOn = computed(() => {
            return props.modelValue === props.onValue;
        });
        const onClick = () => {
            console.log(isOn.value);
            const modelValue = isOn.value ? props.offValue : props.onValue;
            emit('update:modelValue', modelValue);
        };
        return () => (
            <div role="toggle" class="ti-toggle" onClick={onClick}
                 style={{width: props.width + 'px', height: props.height + 'px'}}>
                <span class="ti-toggle-controller"></span>
            </div>
        );
    }
});
