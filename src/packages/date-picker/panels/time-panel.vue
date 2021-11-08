<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePattern } from '../../time-picker/use/usePattern'
import { useInitTimePickerPanel } from '../../time-picker/use/useInitTimePickerPanel'
import TiTimePanel from '../../time-picker/components/time-panel.vue'

export default defineComponent({
  name: 'TiDatetimePanel',
  components: { TiTimePanel },
  props: {
    selectedValue: String,
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

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .ti-datetime-panel {
    display: flex;
    width: 165px;
    height: 210px;
    margin: 0 auto;
    border-radius: map-get($defaultThemeMap, default-border-radius);
  }
  .ti-datetime-picker_panel--item {
    flex-grow: 1;
    height: 100%;
  }
}
</style>
