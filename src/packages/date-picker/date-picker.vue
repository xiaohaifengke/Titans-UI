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
      <div class="ti-date-picker_wrapper">
        <div class="ti-date-picker_header">
          <ti-icon icon="d-arrow-left" @click="changePanelDate(-12)" />
          <ti-icon icon="arrow-left" @click="changePanelDate(-1)" />
          <span class="ti-date-picker_year">{{ panel.year }} 年</span>
          <span class="ti-date-picker_month">{{ panel.month }} 月</span>
          <ti-icon icon="d-arrow-right" @click="changePanelDate(12)" />
          <ti-icon icon="arrow-right" @click="changePanelDate(1)" />
        </div>
        <div class="ti-date-picker_body">
          <table class="ti-date-picker_table">
            <thead class="ti-date-picker_body--head">
              <tr>
                <td
                  v-for="week in weeks"
                  :key="week"
                  class="ti-date-picker_td--head"
                >
                  {{ week }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in 6" :key="row">
                <td
                  @click.stop="selectDate((row - 1) * 7 + col - 1)"
                  v-for="col in 7"
                  :key="col"
                  class="ti-date-picker_td--body"
                  :class="dates[(row - 1) * 7 + col - 1].monthFlag"
                >
                  <span
                    :class="{
                      selected: dates[(row - 1) * 7 + col - 1].selected,
                      today: dates[(row - 1) * 7 + col - 1].today
                    }"
                    >{{ dates[(row - 1) * 7 + col - 1].day }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, watch } from 'vue'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import clickOutside from '../../utils/clickOutside'
import TiIcon from '../icon'
import TiInput from '../input'
// 根据输入框中的值得到日期面板的值
function getPanelDateByInputDate(date: string | undefined) {
  const inputDate = dayjs(date)
  return date && inputDate.isValid() ? inputDate : dayjs()
}
// 显示或隐藏日历面板
const focusHandler = (props: any) => {
  const datePickerPanelVisible = ref(false)

  const panel = reactive({
    date: getPanelDateByInputDate(props.modelValue),
    get year() {
      return this.date.year()
    },
    get month() {
      return this.date.month() + 1
    }
  })
  watch(
    () => props.modelValue,
    (val) => {
      panel.date = getPanelDateByInputDate(val)
    }
  )
  const handleFocus = () => {
    // panel.date = getPanelDateByInputDate(props.modelValue)
    datePickerPanelVisible.value = true
  }
  const handleBlur = () => {
    datePickerPanelVisible.value = false
  }

  return {
    datePickerPanelVisible,
    handleFocus,
    handleBlur,
    panel
  }
}

// 生成日期列表
interface DateInfo {
  t: any
  date: string
  day: number
  week: number
  month: number
  monthFlag: string
  today?: boolean
  selected?: boolean
}
const useGenerateDays = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat?: string
): DateInfo[] => {
  const cur = dayjs(modelValue)
  const d = dayjs(date || Date.now())
  const curMonth = d.month()
  const firstDateOfCurrentMonth = d.date(1)
  const firstDayOfCurrentMonth = firstDateOfCurrentMonth.day()
  const startDate = firstDateOfCurrentMonth.subtract(
    firstDayOfCurrentMonth || 7,
    'day'
  )
  return Array.from({ length: 42 }).map((u, i) => {
    const t = startDate.add(i, 'day')
    const month = t.month()
    const monthFlag =
      month === curMonth
        ? 'current-month'
        : month > curMonth
        ? 'next-month'
        : 'prev-month'
    const selected =
      !!date && t.format('YYYY-MM-DD') === cur.format('YYYY-MM-DD')
    return {
      t,
      date: t.format(valueFormat),
      day: t.date(),
      week: t.day(),
      month: month,
      monthFlag: monthFlag,
      selected: selected,
      today:
        !selected && t.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
    }
  })
}
export default defineComponent({
  name: 'TiDatePicker',
  directives: { clickOutside },
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    },
    modelValue: {
      type: String
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    valueFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    }
  },
  emits: ['update:modelValue'],
  components: { TiIcon, TiInput },
  setup(props, { emit }) {
    const classes = computed(() => {
      return {
        [`ti-date-picker_size--${props.size}`]: props.size
      }
    })

    // 控制显示隐藏日期面板及相关事件
    const { datePickerPanelVisible, handleFocus, handleBlur, panel } =
      focusHandler(props)
    // 显示的值
    const model = computed({
      get: () => {
        const d = dayjs(props.modelValue)
        if (props.modelValue && d.isValid()) {
          return d.format(props.format)
        } else {
          return props.modelValue
        }
      },
      set: (val) =>
        emit('update:modelValue', dayjs(val).format(props.valueFormat))
    })
    // 日期列表
    const dates = computed(() =>
      useGenerateDays(panel.date, props.modelValue, props.valueFormat)
    )
    // 选择日期
    const selectDate = (index: number) => {
      const selectedDate = dates.value[index]
      model.value = selectedDate.date
      datePickerPanelVisible.value = false
    }
    // 切换年月。val：月份数 prevYear: -12, prevMonth: -1, nextMonth: 1, nextYear: 12
    const changePanelDate = (val: number) => {
      panel.date = panel.date.add(val, 'month')
    }

    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      model,
      classes,
      datePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel,
      dates,
      selectDate,
      changePanelDate
    }
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
