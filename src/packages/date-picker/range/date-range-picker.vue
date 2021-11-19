<template>
  <div class="ti-date-range-picker" ref="rangePicker" :class="classes">
    <TiRangeInput
      :start="model.start"
      :end="model.end"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      :clearable="clearable"
      :focus="panelWrapper.visible"
      @focus="handleFocus"
      @update:start="updateStart"
      @update:end="updateEnd"
      @clear="clearHandler"
    />
    <TiPopperTransition
      :vClickOutsideExtraEls="[rangePicker]"
      ref="popperTransiton"
      @after-enter="panelWrapper.visible = true"
      @after-leave="panelWrapper.visible = false"
    >
      <div class="ti-date-picker_popper">
        <TiDatePickerPanel
          range
          :model="computedStartAndEnd"
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
          :model="computedStartAndEnd"
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
    </TiPopperTransition>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  WritableComputedRef,
  ComputedRef,
  reactive,
  watch,
  ref
} from 'vue'
import TiRangeInput from './range-input.vue'
import TiDatePickerPanelHeader from '../panels/date-picker-panel-header.vue'
import TiDatePickerPanel from '../panels/date-picker-panel.vue'
import {
  getDefaultFormatByMode,
  getPanelDateByInputDate,
  transferModelValueToInputValue
} from '../utils'
import { useGeneratePanel, ComputedExtremity } from '../use/useGeneratePanel'
import dayjs from 'dayjs'
import { createPopper } from '@popperjs/core'
import TiPopperTransition from '../../popper-transtion'

interface RangeModel {
  clear?: boolean
  start?: string | undefined
  end?: string | undefined
}

// enum ComputedExtremityStatus {
//   unset = 'unset',
//   tip = 'tip',
//   selected = 'selected'
// }
export default defineComponent({
  name: 'TiDateRangePicker',
  components: {
    TiRangeInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel,
    TiPopperTransition
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
    const rangePicker = ref(null as any)
    const popperTransiton = ref(null as any)
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
        if (val.clear) {
          emit(
            'update:start',
            (val['start'] && dayjs(val['start']).format(valueFormat.value)) ||
              val['start']
          )
          emit(
            'update:end',
            (val['end'] && dayjs(val['end']).format(valueFormat.value)) ||
              val['end']
          )
          return
        }
        val['start'] != null &&
          emit('update:start', dayjs(val['start']).format(valueFormat.value))
        val['end'] != null &&
          emit('update:end', dayjs(val['end']).format(valueFormat.value))
      }
    })

    const panelWrapper = reactive({
      visible: false,
      rangeValue: [] as ComputedExtremity[]
    })
    const computedStartAndEnd: ComputedRef<Array<ComputedExtremity>> = computed(
      () => {
        const start = panelWrapper.rangeValue[0] || {
          status: 'unset',
          value: null
        }
        const end = panelWrapper.rangeValue[1] || {
          status: 'unset',
          value: null
        }
        return [start, end]
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
        rangeValue: panelWrapper.rangeValue
      },
      'start'
    )
    // generate end panel
    const {
      panel: endPanel,
      updatePanelDate: updateEndPanelDate,
      updatePanelTime: updateEndPanelTime,
      changePanelDate: changeEndPanelDate
    } = useGeneratePanel(
      props,
      {
        rangeValue: panelWrapper.rangeValue
      },
      'end'
    )
    // 时间变化时，手动修改model的时间，不在panel generator 函数中修改，不然会和range的逻辑混在一起不利于维护
    watch(
      () => panelWrapper.rangeValue,
      (value) => {
        if (
          value.length === 2 &&
          value[0].status === 'selected' &&
          value[1].status === 'selected'
        ) {
          // 如果两次均选择同一个panel，则两个panel的date可能会均不同于最终选择的值
          // 在这更新panel值，这样datetime模式选择时间时，panel的date和选择的值一致
          startPanel.date = dayjs(value[0].value)
          endPanel.date = dayjs(value[1].value)
          model.value = {
            start: value[0].value,
            end: value[1].value
          }
          if (props.mode !== 'datetime') {
            hidePanel()
          }
        }
      },
      { deep: true }
    )
    watch(
      () => startPanel.time,
      () => {
        if (model.value.start) {
          model.value = { start: startPanel.value }
        }
      }
    )
    watch(
      () => endPanel.time,
      () => {
        if (model.value.end) {
          model.value = { end: endPanel.value }
        }
      }
    )

    const handleFocus = () => {
      startPanel.mode = endPanel.mode =
        props.mode === 'datetime' ? 'date' : props.mode
      startPanel.date = getPanelDateByInputDate(props.start, props.mode, false)
      endPanel.date = getPanelDateByInputDate(props.end, props.mode, true)
      showPanel()
      createPopper(rangePicker.value, popperTransiton.value.tooltipRef, {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10]
            }
          }
        ]
      })
    }
    const updateStart = (value: string) => {
      model.value = { start: value }
    }
    const updateEnd = (value: string) => {
      model.value = { end: value }
    }

    const showPanel = () => {
      popperTransiton.value.show()
    }

    const hidePanel = () => {
      popperTransiton.value.hide()
    }

    const clearHandler = () => {
      model.value = { start: '', end: '', clear: true }
      panelWrapper.visible = false
      panelWrapper.rangeValue.length = 0
    }

    return {
      rangePicker,
      popperTransiton,
      model,
      classes,
      startPanel,
      updateStartPanelDate,
      updateStartPanelTime,
      changeStartPanelDate,
      endPanel,
      updateEndPanelDate,
      updateEndPanelTime,
      handleFocus,
      showPanel,
      hidePanel,
      changeEndPanelDate,
      panelWrapper,
      computedStartAndEnd,
      updateStart,
      updateEnd,
      clearHandler
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
