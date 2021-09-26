import { useModel } from '../../use/useModel'
import { designComponent } from 'src/use/designComponent'
import { ref, computed, watch, isRef } from 'vue'
import './input.scss'

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
    updateModelValue: (value: any) => true
  },
  setup({ props, event }) {
    const model = useModel(() => props.modelValue, event.emit.updateModelValue)
    const inputRef = ref(null as null | HTMLInputElement)

    const classes = computed(() => [
      'ti-input',
      `ti-input-status-${props.status}`
    ])
    const methods = {
      focus: () => {
        inputRef.value!.focus()
      },
      clear: () => {
        model.value = ''
      }
    }

    watch(
      () => props.modelValue,
      (value) => (model.value = value)
    )
    return {
      refer: {
        methods,
        model
      },
      render: () => (
        <div class={classes.value}>
          <input
            class="ti-input-inner"
            type="text"
            v-model={model.value}
            ref={inputRef}
          />
          <button onClick={methods.clear}>clear</button>
        </div>
      )
    }
  }
})
