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
            type: Number
        },
        height: {
            type: Number
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
        },
        disabled: {
            type: Boolean,
            default: false
        },
        onText: {
            type: String
        },
        offText: {
            type: String
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        // 未设置 width
        const noSetWidth = computed(() => {
            return props.width === undefined;
        });
        // 未设置 height
        const noSetHeight = computed(() => {
            return props.height === undefined;
        });

        const isOn = computed(() => {
            return props.modelValue === props.onValue;
        });

        const toggleClasses = computed(() => [
            'ti-toggle',
            {
                'is-on': isOn.value,
                [`ti-toggle-type-${props.type}`]: props.type,
                'ti-toggle-disabled': props.disabled
            }
        ]);

        const handleSize = computed(() => {
            return (props.height ?? 20) - 4;
        });

        const toggleStyles = computed(() => ({
            width: props.width + 'px',
            height: props.height + 'px',
            backgroundColor: isOn.value ? props.onColor : props.offColor,
            borderColor: isOn.value ? props.onColor : props.offColor,
            paddingRight: isOn.value ? (props.height ?? 20) + 'px' : (props.height ?? 20) / 2 + 'px',
            paddingLeft: isOn.value ? (props.height ?? 20) / 2 + 'px' : (props.height ?? 20) + 'px'
        }));
        const textStyles = computed(() => ({
            maxWidth: `cacl(100% - ${handleSize.value + 'px'})`,
            marginLeft: isOn.value ? handleSize.value + 'px' : 0
        }));
        const handleStyles = computed(() => ({
            width: handleSize.value + 'px',
            height: handleSize.value + 'px',
            left: isOn.value ? '100%' : '1px',
            marginLeft: isOn.value ? -(handleSize.value + 1) + 'px' : 0
        }));
        const onClick = () => {
            if (props.disabled) return;
            const modelValue = isOn.value ? props.offValue : props.onValue;
            emit('update:modelValue', modelValue);
        };
        return () => (
            <button role="switch" class={toggleClasses.value} style={toggleStyles.value} onClick={onClick}>
                <span class="ti-toggle-text">{isOn.value ? props.onText : props.offText}</span>
                <span class="ti-toggle-handle" style={handleStyles.value}/>
            </button>
        );
    }
});
