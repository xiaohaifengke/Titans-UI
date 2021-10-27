<template>
  <div class="ti-date-picker" v-click-outside="hidePanel">
    <TiInput prefix-icon="date" @focus="handleFocus" />
    <!--    <input class="ti-date-picker_input&#45;&#45;date" :class="classes" type="text" />-->
    <!--    <span class="ti-date-picker_input&#45;&#45;prefix"></span>-->
    <!--    <span class="ti-date-picker_input&#45;&#45;suffix"></span>-->
    <div class="ti-date-picker_popper" v-if="datePickerPanelVisible">
      <div class="ti-date-picker_wrapper">
        <div class="ti-date-picker_header">
          <ti-icon icon="d-arrow-left" />
          <ti-icon icon="arrow-left" />
          <span>{{ selectYear }}年</span>
          <span>{{ selectMonth }}月</span>
          <ti-icon icon="arrow-right" />
          <ti-icon icon="d-arrow-right" />
        </div>
        <div class="ti-date-picker_body">
          <table>
            <thead class="ti-date-picker_body--head">
              <tr>
                <td>日</td>
                <td>一</td>
                <td>二</td>
                <td>三</td>
                <td>四</td>
                <td>五</td>
                <td>六</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in 6" :key="row">
                <td v-for="col in 7" :key="col">
                  {{ dates[(row - 1) * 6 + col - 1].day }}
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
import { defineComponent, ref, computed } from 'vue'
import dayjs from 'dayjs'
import clickOutside from '../../utils/clickOutside'
import TiIcon from '../icon'
import TiInput from '../input'

// 显示或隐藏日历面板
const focusHandler = () => {
  const datePickerPanelVisible = ref(false)
  const handleFocus = () => {
    datePickerPanelVisible.value = true
  }
  const hidePanel = () => {
    console.log('hidePanel')
    datePickerPanelVisible.value = false
  }

  return {
    datePickerPanelVisible,
    handleFocus,
    hidePanel
  }
}

// 生成日期列表
interface DateInfo {
  t: any
  date: string
  day: number
  week: number
  month: number
}
const useGenerateDays = (date?: string | number | undefined): DateInfo[] => {
  date = date || Date.now()
  console.log(dayjs(date))
  const firstDateOfCurrentMonth = dayjs().date(1)
  const firstDayOfCurrentMonth = firstDateOfCurrentMonth.day()
  const startDate = firstDateOfCurrentMonth.subtract(
    firstDayOfCurrentMonth || 7,
    'day'
  )
  const dates = Array.from({ length: 42 }).map((d, i) => {
    const t = startDate.add(i, 'day')
    return {
      t,
      date: t.format('YYYY-MM-DD'),
      day: t.date(),
      week: t.day(),
      month: t.month() + 1
    }
  })
  console.log(dates)
  return dates
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
    }
  },
  components: { TiIcon, TiInput },
  setup(props) {
    const classes = computed(() => {
      return {
        [`ti-date-picker_size--${props.size}`]: props.size
      }
    })

    const selectYear = ref(2021)
    const selectMonth = ref(10)

    const showPanel = focusHandler()
    const dates = useGenerateDays()

    return {
      selectYear,
      selectMonth,
      classes,
      ...showPanel,
      dates
    }
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
