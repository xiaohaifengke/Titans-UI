<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body">
      <div class="ti-datetime-panel">
        <div
          class="ti-datetime-picker_panel--item"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePattern } from '../../../time-picker/src/use/usePattern'
import { useInitTimePickerPanel } from '../../../time-picker/src/use/useInitTimePickerPanel'
import TiTimePanel from '../../../time-picker/src/components/time-panel.vue'

export default defineComponent({
  name: 'TiDatetimePanel',
  components: { TiTimePanel },
  props: {
    modelValue: [String, Number],
    valueFormat: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const pattern = usePattern({ type: 'hms' })
    const { panel } = useInitTimePickerPanel(props, { emit })
    return {
      pattern,
      panel
    }
  }
})
</script>
