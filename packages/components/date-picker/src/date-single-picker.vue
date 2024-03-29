<template>
  <div class="ti-date-single-picker" ref="singlePicker" :class="classes">
    <TiInput
      class="ti-date-picker_input"
      prefix-icon="date"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :readonly="readonly"
      @clear="clearHandler"
      :size="size"
    />
    <TiPopperTransition :reference="singlePicker" ref="popperTransiton">
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
import TiInput from '@titans-ui/components/input'
import TiDatePickerPanelHeader from './panels/date-picker-panel-header.vue'
import TiDatePickerPanel from './panels/date-picker-panel.vue'
import { useGeneratePanel } from './use/useGeneratePanel'
import TiPopperTransition from '@titans-ui/components/popper-transition'

export default defineComponent({
  name: 'TiDateSinglePicker',
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
        emit(
          'update:modelValue',
          (val && dayjs(val).format(valueFormat.value)) || val
        )
      }
    })

    // 控制显示隐藏日期面板及相关事件
    const { panel, updatePanelDate, updatePanelTime } = useGeneratePanel(props)

    const handleFocus = () => {
      if (props.readonly) return
      panel.mode = props.mode === 'datetime' ? 'date' : props.mode
      panel.date = getPanelDateByInputDate(panel.value, props.mode)
      showPanel()
    }
    // 时间变化时，手动修改model的时间，不在panel generator 函数中修改，不然会和range的逻辑混在一起不利于维护
    watch(
      () => panel.value,
      (value) => {
        model.value = value
        if (props.mode !== 'datetime') {
          hidePanel()
        }
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
      popperTransiton.value?.show()
    }

    const hidePanel = () => {
      popperTransiton.value?.hide()
    }

    const clearHandler = () => {
      model.value = ''
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
      hidePanel,
      clearHandler
    }
  }
})
</script>
