<template>
  <div class="ti-date-picker" v-click-outside="handleBlur">
    <TiInput
      class="ti-date-picker_input"
      prefix-icon="date"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
    />
    <div class="ti-date-picker_popper" v-if="datePickerPanelVisible">
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, shallowReactive, watch } from 'vue'
import dayjs from 'dayjs'
import clickOutside from '../../utils/clickOutside'
import TiInput from '../input'
import TiDatePickerPanelHeader from './panels/date-picker-panel-header.vue'
import TiDatePickerPanel from './panels/date-picker-panel.vue'
import { parseTime } from '../time-picker/use/useInitTimePickerPanel'

// 根据输入框中的值得到日期面板的值
function getPanelDateByInputDate(date: string | undefined): dayjs.Dayjs {
  const inputDate = dayjs(date)
  return date && inputDate.isValid() ? inputDate : dayjs()
}

function getDefaultFormatByMode(mode: string): string {
  switch (mode) {
    case 'year':
      return 'YYYY'
    case 'month':
      return 'YYYY-MM'
    case 'date':
      return 'YYYY-MM-DD'
    case 'datetime':
      return 'YYYY-MM-DD HH:mm:ss'
    default:
      return 'YYYY-MM-DD'
  }
}

function parseDate(dateStr: string) {
  const dateReg =
    /^(?<year>(\d{4}))(?:[^\d]*(?<month>(\d{2}))(?:[^\d](?<date>(\d{2})))?)?$/
  const r = dateStr.match(dateReg)
  const { year, month, date } = r?.groups || {}
  return { year, month, date }
}

export default defineComponent({
  name: 'TiDatePicker',
  directives: { clickOutside },
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
    }
  },
  emits: ['update:modelValue'],
  components: {
    TiInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel
  },
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

    // 显示的值
    const model = computed({
      get: () => {
        const d = dayjs(props.modelValue)
        if (props.modelValue && d.isValid()) {
          return d.format(format.value)
        } else {
          return props.modelValue
        }
      },
      set: (val) =>
        emit('update:modelValue', dayjs(val).format(valueFormat.value))
    })

    // 显示或隐藏日历面板
    const focusHandler = (props: any) => {
      const datePickerPanelVisible = ref(false)

      const panel = shallowReactive({
        mode: props.mode === 'datetime' ? 'date' : props.mode,
        date: getPanelDateByInputDate(props.modelValue),
        get dateFormat() {
          return this.date.format('YYYY-MM-DD HH:mm:ss')
        },
        get year() {
          return this.date.year()
        },
        get month() {
          return this.date.month() + 1
        },
        get dateStr() {
          return this.date.date()
        },
        get hour() {
          return `${this.date.hour()}`.padStart(2, '0')
        },
        get minute() {
          return `${this.date.minute()}`.padStart(2, '0')
        },
        get second() {
          return `${this.date.second()}`.padStart(2, '0')
        },
        get time() {
          return `${this.hour}:${this.minute}:${this.second}`
        },
        set time(time) {
          const { hours, minutes, seconds } = parseTime(time)
          model.value = this.date
            .hour(+hours)
            .minute(+minutes)
            .second(+seconds)
            .format(valueFormat.value)
        }
      })
      watch(
        () => props.modelValue,
        (val) => {
          panel.date = getPanelDateByInputDate(val)
        }
      )
      const handleFocus = () => {
        panel.mode = props.mode === 'datetime' ? 'date' : props.mode
        // 此时不更新 panel 的值
        panel.date = getPanelDateByInputDate(props.modelValue)
        datePickerPanelVisible.value = true
      }
      const handleBlur = () => {
        datePickerPanelVisible.value = false
      }

      // 选择日期
      const updatePanelDate = (dateStr: string) => {
        const order = ['year', 'month', 'date']
        if (props.mode === 'datetime') {
          const { year, month, date } = parseDate(dateStr)
          year && (panel.date = panel.date.year(+year))
          month && (panel.date = panel.date.month(+month - 1))
          date && (panel.date = panel.date.date(+date))
          const panelModeIndexInOrder = order.indexOf(panel.mode)
          if (
            panelModeIndexInOrder >= 0 &&
            panelModeIndexInOrder < order.length - 1
          ) {
            panel.mode = order[panelModeIndexInOrder + 1]
          } else if (panelModeIndexInOrder === order.length - 1) {
            model.value = panel.date.format(valueFormat.value)
          }
        } else {
          const propsModeIndexInOrder = order.indexOf(props.mode)
          const panelModeIndexInOrder = order.indexOf(panel.mode)
          if (propsModeIndexInOrder < 0 || panelModeIndexInOrder < 0) return
          if (propsModeIndexInOrder > panelModeIndexInOrder) {
            panel.date = dayjs(dateStr)
            panel.mode = order[panelModeIndexInOrder + 1]
          } else {
            model.value = dayjs(dateStr).format(valueFormat.value)
            datePickerPanelVisible.value = false
          }
        }
      }
      // 选择时间
      const updatePanelTime = (time: string) => {
        panel.time = time
      }
      return {
        datePickerPanelVisible,
        handleFocus,
        handleBlur,
        panel,
        updatePanelDate,
        updatePanelTime
      }
    }
    // 控制显示隐藏日期面板及相关事件
    const {
      datePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel,
      updatePanelDate,
      updatePanelTime
    } = focusHandler(props)

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

    return {
      model,
      classes,
      datePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel,
      changePanelDate,
      updatePanelDate,
      updatePanelTime
    }
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
