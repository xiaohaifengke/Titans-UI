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
            default: 'primary'
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

        const toggleClasses = computed(() => [
            'ti-toggle',
            {
                'is-on': isOn.value,
                [`ti-toggle-type-${props.type}`]: props.type
            }
        ]);

        const toggleStyles = computed(() => ({
            width: props.width + 'px',
            height: props.height + 'px',
            backgroundColor: isOn.value ? props.onColor : props.offColor,
            borderColor: isOn.value ? props.onColor : props.offColor
        }));
        const sliderStyles = computed(() => ({
            width: (props.height - 4) + 'px',
            height: (props.height - 4) + 'px',
            left: isOn.value ? '100%' : '1px',
            marginLeft: isOn.value ? -(props.height - 3) + 'px' : 0
        }));
        const onClick = () => {
            const modelValue = isOn.value ? props.offValue : props.onValue;
            emit('update:modelValue', modelValue);
        };
        return () => (
            <button role="toggle" class={toggleClasses.value} style={toggleStyles.value} onClick={onClick}>
                <span class="slider" style={sliderStyles.value}/>
            </button>
        );
    }
});
