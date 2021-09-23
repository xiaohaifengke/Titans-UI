import './switch.scss';
import {defineComponent, getCurrentInstance, ref, watch, withModifiers} from "vue";
import {computed} from "@vue/runtime-core";
import {useMethodsToInstance} from "../../use/useMethodsToInstance";

export default defineComponent({
    name: 'TiSwitch',
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
    emits: ['update:modelValue', 'change'],
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

        const switchClasses = computed(() => [
            'ti-switch',
            {
                'is-on': isOn.value,
                [`ti-switch-type-${props.type}`]: props.type,
                'ti-switch-disabled': props.disabled
            }
        ]);

        const handleSize = computed(() => {
            return (props.height ?? 20) - 4;
        });

        const switchStyles = computed(() => ({
            width: props.width + 'px',
            height: props.height + 'px',
            backgroundColor: isOn.value ? props.onColor : props.offColor,
            borderColor: isOn.value ? props.onColor : props.offColor,
            paddingRight: isOn.value ? (props.height ?? 20) + 'px' : (props.height ?? 20) / 2 + 'px',
            paddingLeft: isOn.value ? (props.height ?? 20) / 2 + 'px' : (props.height ?? 20) + 'px'
        }));
        const handleStyles = computed(() => ({
            width: handleSize.value + 'px',
            height: handleSize.value + 'px',
            left: isOn.value ? '100%' : '1px',
            marginLeft: isOn.value ? -(handleSize.value + 1) + 'px' : 0
        }));
        const handleChange = (e: Event) => {
            if (props.disabled) return;
            const modelValue = isOn.value ? props.offValue : props.onValue;
            emit('update:modelValue', modelValue);
        };
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === 'Space') {
                handleChange(e);
            } else if (e.key === 'ArrowLeft') {
                emit('update:modelValue', props.offValue);
            } else if (e.key === 'ArrowRight') {
                emit('update:modelValue', props.onValue);
            }
        };
        const switchRef = ref(null as null | HTMLButtonElement);
        const focus = () => {
            switchRef.value && switchRef.value.focus();
        };
        const blur = () => {
            switchRef.value && switchRef.value.blur();
        };
        // change 事件
        watch(() => props.modelValue, (val) => {
            emit('change', val);
        });

        useMethodsToInstance({
            focus,
            blur
        });

        return () => (
            <button
                role="switch"
                ref={switchRef}
                class={switchClasses.value}
                style={switchStyles.value}
                onKeydown={withModifiers(handleKeydown, ['Enter', 'prevent', 'self'])}
                onClick={handleChange}>
                <span class="ti-switch-text">{isOn.value ? props.onText : props.offText}</span>
                <span class="ti-switch-handle" style={handleStyles.value}/>
            </button>
        );
    }
});
