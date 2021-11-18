<template>
  <div class="ti-date-single-picker" ref="singlePicker" :class="classes">
    <TiInput
      ref="singlePicker"
      class="ti-date-picker_input"
      prefix-icon="date"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
    />
    <div
      class="ti-date-picker_popper"
      ref="singlePopper"
      v-show="datePickerPanelVisible"
    >
      <TiDatePickerPanel
        :model="modelValue"
        :panel="panel"
        :updatePanelDate="updatePanelDate"
        :updatePanelTime="updatePanelTime"
      >
        <TiDatePickerPanelHeader
          :pickerMode="mode"
          :panelMode="panel.mode"
          :year="panel.year"
          :month="panel.month"
          :date="panel.dateStr"
          :time="panel.time"
          @update:panelMode="(panelMode) => (panel.mode = panelMode)"
          @changePanelDate="changePanelDate"
          class="ti-date-picker_header"
        />
      </TiDatePickerPanel>
      <div class="ti-date-picker-popper_arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, WritableComputedRef } from 'vue'
import dayjs from 'dayjs'
import {
  transferModelValueToInputValue,
  getDefaultFormatByMode,
  getPanelDateByInputDate
} from './utils'
import TiInput from '../input'
import TiDatePickerPanelHeader from './panels/date-picker-panel-header.vue'
import TiDatePickerPanel from './panels/date-picker-panel.vue'
import { useGeneratePanel } from './use/useGeneratePanel'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'TiDateSinglePicker',
  components: {
    TiInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel
  },
  props: {
    modelValue: String,
    placeholder: String,
    size: {
      type: String,
      default: 'normal'
    },
    format: {
      type: String
      // default: 'YYYY-MM-DD'
    },
    valueFormat: {
      type: String
      // default: 'YYYY-MM-DD'
    },
    mode: {
      type: String,
      default: 'date'
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
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const singlePicker = ref(null as any)
    const singlePopper = ref(null as any)
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

    const model: WritableComputedRef<string | undefined> = computed({
      get: () => {
        return transferModelValueToInputValue(props.modelValue, format.value)
      },
      set: (val: string | undefined): void => {
        emit('update:modelValue', dayjs(val).format(valueFormat.value))
      }
    })

    // 显示或隐藏日历面板
    const datePickerPanelVisible = ref(false)
    // 控制显示隐藏日期面板及相关事件
    const { panel, updatePanelDate, updatePanelTime } = useGeneratePanel(props)
    const handleFocus = () => {
      panel.mode = props.mode === 'datetime' ? 'date' : props.mode
      panel.date = getPanelDateByInputDate(panel.value, props.mode)
      datePickerPanelVisible.value = true

      const popperInstance = createPopper(
        singlePicker.value,
        singlePopper.value,
        {
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10]
              }
            }
          ]
        }
      )
      // console.log(popperInstance)
    }
    // 时间变化时，手动修改model的时间，不在panel generator 函数中修改，不然会和range的逻辑混在一起不利于维护
    watch(
      () => panel.value,
      (value) => {
        model.value = value
        datePickerPanelVisible.value = false
      }
    )

    // 切换年月。val：月份数 prevYear: -12, prevMonth: -1, nextMonth: 1, nextYear: 12
    const changePanelDate = (val: number) => {
      if (panel.mode === 'year') {
        if (val > 0) {
          panel.date = panel.date.add(10, 'year')
        } else {
          panel.date = panel.date.add(-10, 'year')
        }
      } else {
        panel.date = panel.date.add(val, 'month')
      }
    }

    const setPanelVisible = (bool: boolean) => {
      datePickerPanelVisible.value = bool
    }

    return {
      singlePicker,
      singlePopper,
      model,
      classes,
      datePickerPanelVisible,
      handleFocus,
      panel,
      changePanelDate,
      updatePanelDate,
      updatePanelTime,
      setPanelVisible
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .ti-date-single-picker {
    display: inline-block;
    width: 220px;
    height: 40px;
  }
}
</style>
