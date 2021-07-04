import { designComponent } from "src/use/designComponent";
import { ref, computed, watch, handleError } from "vue";
import './input.scss';

export default designComponent({
    name: 'TiInput',
    props: {
        modelValue: {
            type: null
        },
        status: {
            type: String, 
            default: 'primary'
        }
    },
    emits: {
        updateModelValue: (value) => true
    },
    setup({props, event}) {
        const model = ref(props.modelValue);
        const inputRef = ref(null as null | HTMLInputElement);

        const classes = computed(() => [
            'ti-input',
            `ti-input-status-${props.status}`
        ]);
        const methods = {
            focus: () => {
                inputRef.value!.focus();
            },
            clear: () => {
                model.value = '';
            }
        };

        const handler = {
            onInput(e: Event) {
                model.value = (e.target as HTMLInputElement).value;
                event.emit.updateModelValue((e.target as HTMLInputElement).value);
            }
        };

        watch(() => props.modelValue, (value) => model.value = value);
        return {
            refer: {
                methods,
                model
            },
            render: () => (
                <div class={classes.value}>
                    <input class="ti-input-inner" type="text" value={model.value} onInput={handler.onInput} ref={inputRef}/>
                    <button onClick={methods.clear}>clear</button>
                </div>
            )
        };
    }
});