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
    <TiPopperTransition
      :vClickOutsideExtraEls="[singlePicker]"
      ref="popperTransiton"
    >
      <div class="ti-date-picker_popper">
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
      </div>
    </TiPopperTransition>
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
import clickOutside from '../../utils/clickOutside'
import TiPopperTransition from '../popper-transtion/index'
// import { Instance } from '@popperjs/core/lib/types'

export default defineComponent({
  name: 'TiDateSinglePicker',
  directives: { clickOutside },
  components: {
    TiInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel,
    TiPopperTransition
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

    const model: WritableComputedRef<string | undefined> = computed({
      get: () => {
        return transferModelValueToInputValue(props.modelValue, format.value)
      },
      set: (val: string | undefined): void => {
        emit('update:modelValue', dayjs(val).format(valueFormat.value))
      }
    })

    // 控制显示隐藏日期面板及相关事件
    const { panel, updatePanelDate, updatePanelTime } = useGeneratePanel(props)
    const handleFocus = () => {
      panel.mode = props.mode === 'datetime' ? 'date' : props.mode
      panel.date = getPanelDateByInputDate(panel.value, props.mode)
      showPanel()
      createPopper(singlePicker.value, popperTransiton.value.tooltipRef, {
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
    // 时间变化时，手动修改model的时间，不在panel generator 函数中修改，不然会和range的逻辑混在一起不利于维护
    watch(
      () => panel.value,
      (value) => {
        model.value = value
        hidePanel()
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

    const showPanel = () => {
      popperTransiton.value.show()
    }

    const hidePanel = () => {
      popperTransiton.value.hide()
    }

    return {
      singlePicker,
      popperTransiton,
      model,
      classes,
      handleFocus,
      panel,
      changePanelDate,
      updatePanelDate,
      updatePanelTime,
      showPanel,
      hidePanel
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
