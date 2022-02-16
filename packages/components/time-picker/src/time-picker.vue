<template>
  <div class="ti-time-picker" ref="timePicker">
    <TiInput
      class="ti-time-picker_input"
      prefix-icon="time"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
    />
    <TiPopperTransition
      :reference="timePicker"
      ref="popperTransiton"
      fit-reference-width
    >
      <div class="ti-time-picker_panel">
        <div
          class="ti-time-picker_panel--item"
          v-for="p in pattern"
          :key="p.id"
        >
          <TiTimePanel
            :start="p.start"
            :step="p.step"
            :end="p.end"
            v-model="panel[p.id]"
          />
        </div>
      </div>
    </TiPopperTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, WritableComputedRef } from 'vue'
import TiInput from '@titans-ui/components/input'
import TiTimePanel from './components/time-panel.vue'
import { TimePanel, useInitTimePickerPanel } from './use/useInitTimePickerPanel'
import { usePattern } from './use/usePattern'
import TiPopperTransition from '@titans-ui/components/popper-transition'

export type ModelAndPanel = {
  model: WritableComputedRef<string>
  panel: TimePanel
}
export default defineComponent({
  name: 'TiTimePicker',
  components: { TiInput, TiTimePanel, TiPopperTransition },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'hms' // hms/hm/ms/h/m/s
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    valueFormat: {
      type: String,
      default: 'HH:mm:ss'
    },
    teleportToBody: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const timePicker = ref(null as any)
    const popperTransiton = ref(null as any)
    const { model, panel } = useInitTimePickerPanel(props, {
      emit
    }) as ModelAndPanel
    const pattern = usePattern(props)
    const handleFocus = () => {
      showPanel()
    }
    const showPanel = () => {
      popperTransiton.value?.show()
    }
    const hidePanel = () => {
      popperTransiton.value?.hide()
    }
    return {
      timePicker,
      popperTransiton,
      model,
      handleFocus,
      showPanel,
      hidePanel,
      panel,
      pattern
    }
  }
})
</script>
