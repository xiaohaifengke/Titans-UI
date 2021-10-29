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
          <span class="ti-date-picker_year" @click="panel.mode = 'year'">{{
            panelYearFilter(panel.year)
          }}</span>
          <span
            v-if="panel.mode === 'date'"
            class="ti-date-picker_month"
            @click="panel.mode = 'month'"
            >{{ panel.month }} 月</span
          >
          <ti-icon icon="d-arrow-right" @click="changePanelDate(12)" />
          <ti-icon icon="arrow-right" @click="changePanelDate(1)" />
        </div>
        <div class="ti-date-picker_body">
          <table
            v-if="panel.mode === 'year'"
            class="ti-date-picker_table ti-date-picker_table--year"
          >
            <tbody>
              <tr v-for="row in 4" :key="row">
                <td
                  @click.stop="selectDate(getDataIndex(row, col))"
                  v-for="col in 3"
                  :key="col"
                  class="ti-date-picker_td--body"
                  :class="dates[getDataIndex(row, col)].yearFlag"
                >
                  <span
                    class="ti-date-picker_panel--text"
                    :class="{
                      selected: dates[getDataIndex(row, col)].selected,
                      current: dates[getDataIndex(row, col)].curYear
                    }"
                    >{{ dates[getDataIndex(row, col)].y }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table
            v-else-if="panel.mode === 'month'"
            class="ti-date-picker_table ti-date-picker_table--month"
          >
            <tbody>
              <tr v-for="row in 4" :key="row">
                <td
                  @click.stop="selectDate(getDataIndex(row, col))"
                  v-for="col in 3"
                  :key="col"
                  class="ti-date-picker_td--body"
                >
                  <span
                    class="ti-date-picker_panel--text"
                    :class="{
                      selected: dates[getDataIndex(row, col)].selected,
                      current: dates[getDataIndex(row, col)].curMonth
                    }"
                    >{{ dates[getDataIndex(row, col)].month }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table v-else class="ti-date-picker_table ti-date-picker_table--date">
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
                  @click.stop="selectDate(getDataIndex(row, col))"
                  v-for="col in 7"
                  :key="col"
                  class="ti-date-picker_td--body"
                  :class="dates[getDataIndex(row, col)].monthFlag"
                >
                  <span
                    class="ti-date-picker_panel--text"
                    :class="{
                      selected: dates[getDataIndex(row, col)].selected,
                      current: dates[getDataIndex(row, col)].today
                    }"
                    >{{ dates[getDataIndex(row, col)].day }}</span
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
    mode: 'date',
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
    panel.mode = 'date'
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
  const currentDateFormat = dayjs().format('YYYY-MM-DD')
  const sel = dayjs(modelValue)
  const selFormat = sel.format('YYYY-MM-DD')
  const d = dayjs(date || Date.now())
  const panelMonth = d.month()
  const firstDateOfCurrentMonth = d.date(1)
  const firstDayOfCurrentMonth = firstDateOfCurrentMonth.day()
  const startDate = firstDateOfCurrentMonth.subtract(
    firstDayOfCurrentMonth || 7,
    'day'
  )
  return Array.from({ length: 42 }).map((u, i) => {
    const t = startDate.add(i, 'day')
    const tFormat = t.format('YYYY-MM-DD')
    const month = t.month()
    const monthFlag =
      month === panelMonth
        ? 'current-month'
        : month > panelMonth
        ? 'next-month'
        : 'prev-month'
    const selected = !!date && tFormat === selFormat
    return {
      t,
      date: t.format(valueFormat),
      day: t.date(),
      week: t.day(),
      month: month,
      monthFlag: monthFlag,
      selected: selected,
      today: !selected && tFormat === currentDateFormat
    }
  })
}

interface MonthInfo {
  t: any
  date: string
  m: number // 月份对应的数字
  month: string // 月份中文名
  curMonth?: boolean // 当月
  selected?: boolean // 选中的月份
}

const useGenerateMonths = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat?: string
): MonthInfo[] => {
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ]
  const sel = dayjs(modelValue)
  const selFormat = sel.format('YYYY-MM')
  const d = dayjs(date || Date.now())
  const firstMonthOfCurrentYear = d.month(0)
  const currentMonthFormat = dayjs().format('YYYY-MM')

  return months.map((month, index) => {
    const t = firstMonthOfCurrentYear.add(index, 'month')
    const tFormat = t.format('YYYY-MM')
    const selected = !!date && tFormat === selFormat
    return {
      t,
      date: t.format(valueFormat),
      m: index,
      month,
      selected,
      curMonth: !selected && tFormat === currentMonthFormat
    }
  })
}

interface YearInfo {
  t: any
  date: string
  y: number
  yearFlag: string
  curYear?: boolean
  selected?: boolean
}
const useGenerateYears = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat?: string
): YearInfo[] => {
  const currentYear = dayjs().year()
  const sel = dayjs(modelValue)
  const selYear = sel.year()
  const d = dayjs(date || Date.now())
  const panelYear = d.year()
  const firstYearOfCurrentDecade = d.year(parseInt(`${panelYear / 10}`) * 10)
  const startYear = firstYearOfCurrentDecade.subtract(1, 'year')

  return new Array(12).fill(null).map((u, index) => {
    const t = startYear.add(index, 'year')
    const y = t.year()
    const yearFlag =
      index === 0
        ? 'prev-decade'
        : index === 11
        ? 'next-decade'
        : 'current-decade'
    const selected = selYear === y
    const curYear = !selected && currentYear === y
    return {
      t,
      date: t.format(valueFormat),
      y,
      yearFlag,
      selected,
      curYear
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
    const dates = computed(() => {
      if (panel.mode === 'year') {
        return useGenerateYears(panel.date, props.modelValue, props.valueFormat)
      } else if (panel.mode === 'month') {
        return useGenerateMonths(
          panel.date,
          props.modelValue,
          props.valueFormat
        )
      }
      return useGenerateDays(panel.date, props.modelValue, props.valueFormat)
    })
    // 选择日期
    const selectDate = (index: number) => {
      const selectedDate = dates.value[index]
      if (panel.mode === 'year') {
        panel.date = selectedDate.t
        panel.mode = 'month'
      } else if (panel.mode === 'month') {
        panel.date = selectedDate.t
        panel.mode = 'date'
      } else {
        // date
        model.value = selectedDate.date
        datePickerPanelVisible.value = false
      }
    }
    // 切换年月。val：月份数 prevYear: -12, prevMonth: -1, nextMonth: 1, nextYear: 12
    const changePanelDate = (val: number) => {
      panel.date = panel.date.add(val, 'month')
    }

    // 获取面板每一项对应数据列表的索引
    const getDataIndex = (row: number, col: number): number => {
      if (panel.mode === 'year') {
        return (row - 1) * 3 + col - 1
      } else if (panel.mode === 'month') {
        return (row - 1) * 3 + col - 1
      } else {
        return (row - 1) * 7 + col - 1
      }
    }
    const panelYearFilter = (year: number) => {
      if (panel.mode === 'year') {
        const start = parseInt(`${year / 10}`) * 10
        const end = start + 9
        return `${start} 年 - ${end} 年`
      } else {
        return `${year} 年`
      }
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
      changePanelDate,
      getDataIndex,
      panelYearFilter
    }
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
