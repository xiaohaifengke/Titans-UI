<template>
  <div class="ti-date-range-picker" :class="classes">
    <TiRangeInput
      :start="model.start"
      :end="model.end"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      :clearable="clearable"
      :class="{ 'ti-range-input-focus': panelVisible }"
      @focus="handleFocus"
    />
    <div class="ti-date-picker_popper" v-if="panelVisible">
      <TiDatePickerPanel
        range
        :model="start"
        :panel="startPanel"
        :updatePanelDate="updateStartPanelDate"
        :updatePanelTime="updateStartPanelTime"
      >
        <TiDatePickerPanelHeader
          :pickerMode="mode"
          :panelMode="startPanel.mode"
          :year="startPanel.year"
          :month="startPanel.month"
          :date="startPanel.dateStr"
          :time="startPanel.time"
          @update:panelMode="(panelMode) => (startPanel.mode = panelMode)"
          @changePanelDate="changeStartPanelDate"
          class="ti-date-picker_header"
        />
      </TiDatePickerPanel>
      <TiDatePickerPanel
        range
        :model="end"
        :panel="endPanel"
        :updatePanelDate="updateEndPanelDate"
        :updatePanelTime="updateEndPanelTime"
      >
        <TiDatePickerPanelHeader
          :pickerMode="mode"
          :panelMode="endPanel.mode"
          :year="endPanel.year"
          :month="endPanel.month"
          :date="endPanel.dateStr"
          :time="endPanel.time"
          @update:panelMode="(panelMode) => (endPanel.mode = panelMode)"
          @changePanelDate="changeEndPanelDate"
          class="ti-date-picker_header"
        />
      </TiDatePickerPanel>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  watch,
  ref,
  WritableComputedRef,
  ComputedRef
} from 'vue'
import TiRangeInput from './range-input.vue'
import TiDatePickerPanelHeader from '../panels/date-picker-panel-header.vue'
import TiDatePickerPanel from '../panels/date-picker-panel.vue'
import {
  getDefaultFormatByMode,
  transferModelValueToInputValue
} from '../utils'
import { useGeneratePanel, ComputedExtremity } from '../use/useGeneratePanel'

interface RangeModel {
  start: string | undefined
  end: string | undefined
}
interface ComputedStartOrEnd {
  start: ComputedExtremity
  end: ComputedExtremity
}
enum ComputedExtremityStatus {
  unset = 'unset',
  tip = 'tip',
  selected = 'selected'
}
export default defineComponent({
  name: 'TiDateRangePicker',
  components: {
    TiRangeInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel
  },
  props: {
    start: String,
    end: String,
    mode: {
      type: String,
      default: 'date'
    },
    format: String,
    valueFormat: String,
    size: {
      type: String,
      default: 'normal'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:start', 'update:end'],
  setup(props, { emit }) {
    const format = computed(() => {
      return props.format || getDefaultFormatByMode(props.mode)
    })
    const valueFormat = computed(() => {
      return props.valueFormat || getDefaultFormatByMode(props.mode)
    })
    const classes = computed(() => {
      return {
        [`ti-date-picker_size--${props.size}`]: props.size
      }
    })
    const model: WritableComputedRef<RangeModel> = computed({
      get: () => {
        return {
          start: transferModelValueToInputValue(props.start, format.value),
          end: transferModelValueToInputValue(props.end, format.value)
        }
      },
      set: (val: RangeModel): void => {
        debugger
        emit('update:start', val['start'])
        emit('update:end', val['end'])
      }
    })

    const panelVisible = ref(false)
    const panelRangeValue = ref([])
    const computedStartAndEnd: ComputedRef<ComputedStartOrEnd> = computed(
      () => {
        return {
          start: panelRangeValue.value[0] || {
            status: 'unset',
            value: '5000-01-01'
          },
          end: panelRangeValue.value[1] || {
            status: 'unset',
            value: '1000-01-01'
          }
        }
      }
    )
    watch(
      () => panelVisible.value,
      (val) => {
        if (val) {
          panelRangeValue.value.length = 0
        }
      }
    )
    // generate start panel
    const {
      panel: startPanel,
      updatePanelDate: updateStartPanelDate,
      updatePanelTime: updateStartPanelTime,
      changePanelDate: changeStartPanelDate
    } = useGeneratePanel(
      props,
      {
        model,
        valueFormat,
        rangeValue: panelRangeValue
      },
      'start'
    )
    // generate end panel
    const {
      handleFocus,
      handleBlur,
      panel: endPanel,
      updatePanelDate: updateEndPanelDate,
      updatePanelTime: updateEndPanelTime,
      changePanelDate: changeEndPanelDate
    } = useGeneratePanel(
      props,
      {
        visible: panelVisible,
        model,
        valueFormat,
        rangeValue: panelRangeValue
      },
      'end'
    )

    const setPanelVisible = (bool: boolean) => {
      panelVisible.value = bool
    }

    return {
      model,
      classes,
      panelVisible,
      startPanel,
      updateStartPanelDate,
      updateStartPanelTime,
      changeStartPanelDate,
      endPanel,
      updateEndPanelDate,
      updateEndPanelTime,
      handleFocus,
      handleBlur,
      setPanelVisible,
      changeEndPanelDate,
      panelRangeValue
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .ti-date-range-picker {
    display: inline-block;
    width: 400px;
    height: 40px;
  }
}
</style>
