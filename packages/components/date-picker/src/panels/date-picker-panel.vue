<template>
  <div class="ti-date-picker-panel">
    <Transition :name="transitionName">
      <TiYearPanel
        v-if="panel.mode === 'year'"
        :selectedValue="model"
        :panelDate="panel.dateFormat"
        @update:panelDate="updatePanelDate"
        class="ti-date-picker_table ti-date-picker_table--year"
      >
        <slot />
      </TiYearPanel>
      <TiMonthPanel
        v-else-if="panel.mode === 'month'"
        :selectedValue="model"
        :panelDate="panel.dateFormat"
        @update:panelDate="updatePanelDate"
        class="ti-date-picker_table ti-date-picker_table--month"
      >
        <slot />
      </TiMonthPanel>
      <TiDatePanel
        :range="range"
        v-else-if="panel.mode === 'date'"
        :selectedValue="model"
        :panelDate="panel.dateFormat"
        @update:panelDate="updatePanelDate"
        class="ti-date-picker_table ti-date-picker_table--date"
      >
        <slot />
      </TiDatePanel>
      <TiDatetimePanel
        :range="range"
        v-else-if="panel.mode === 'time'"
        :modelValue="panel.time"
        @update:modelValue="updatePanelTime"
        class="ti-date-picker_table ti-date-picker_table--datetime"
      >
        <slot />
      </TiDatetimePanel>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import TiDatePanel from './date-panel.vue'
import TiMonthPanel from './month-panel.vue'
import TiYearPanel from './year-panel.vue'
import TiDatetimePanel from './time-panel.vue'

export default defineComponent({
  name: 'TiDatePickerPanel',
  components: {
    TiDatePanel,
    TiMonthPanel,
    TiYearPanel,
    TiDatetimePanel
  },
  props: {
    model: [String, Array],
    panel: {
      type: Object,
      required: true
    },
    updatePanelDate: {
      type: Function,
      default: () => () => null
    },
    updatePanelTime: {
      type: Function,
      default: () => () => null
    },
    range: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const duration = { enter: 250, leave: 250 }
    const transitionName = ref('') // fade-from-right fade-from-left
    const panelModes = ['year', 'month', 'date', 'time']
    watch(
      () => props.panel.mode,
      (cur, old) => {
        const curIndex = panelModes.indexOf(cur)
        const oldIndex = panelModes.indexOf(old)
        transitionName.value =
          curIndex > oldIndex ? 'fade-from-right' : 'fade-from-left'
      }
    )
    return {
      duration,
      transitionName
    }
  }
})
</script>
