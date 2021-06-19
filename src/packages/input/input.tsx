import { defineComponent, ref, computed } from "vue";
import './input.scss';

export default defineComponent({
    name: 'TiInput',
    props: {
        status: {
            type: String, 
            default: 'primary'
        }
    },
    setup(props) {
        const modelValue = ref('');
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
                modelValue.value = '';
            }
        };

        return (() => (
            <div class={classes.value}>
                <input class="ti-input-inner" type="text" v-model={modelValue.value} ref={inputRef}/>
                <button onClick={methods.clear}>clear</button>
            </div>
        ));
    }
});