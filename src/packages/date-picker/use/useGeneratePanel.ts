import {
  computed,
  ComputedRef,
  Ref,
  shallowReactive,
  watch,
  WritableComputedRef
} from 'vue'
import { parseTime } from '../../time-picker/use/useInitTimePickerPanel'
import dayjs from 'dayjs'
import { getPanelDateByInputDate, parseDate } from '../utils'

export interface ComputedExtremity {
  status: string
  value: string
}

interface GeneratePanelParams {
  rangeValue?: Array<ComputedExtremity>
}

export function useGeneratePanel(
  props: any,
  panelParams: GeneratePanelParams = {},
  rangeParams = 'start'
) {
  const modelValue = computed(() =>
    props.range ? props[rangeParams] : props.modelValue
  )
  const panel = shallowReactive({
    value: modelValue.value,
    mode: props.mode === 'datetime' ? 'date' : props.mode,
    date: getPanelDateByInputDate(
      modelValue.value,
      props.mode,
      rangeParams === 'end'
    ),
    get dateFormat() {
      return this.date.format()
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
      this.date = this.date
        .hour(+hours)
        .minute(+minutes)
        .second(+seconds)
      this.value = this.dateFormat
    }
  })
  watch(
    () => modelValue.value,
    (val) => {
      panel.date = getPanelDateByInputDate(
        val,
        props.mode,
        rangeParams === 'end'
      )
      panel.value = panel.dateFormat
    }
  )

  // 选择日期
  const updatePanelDate = (dateStr: string, isTip = false): void => {
    if (isTip) {
      const rangeVal = panelParams.rangeValue!
      const selectCompleted =
        rangeVal.length === 2 &&
        rangeVal[0].status === 'selected' &&
        rangeVal[1].status === 'selected' // 已经存在选择好的范围值
      if (rangeVal.length === 0 || selectCompleted) {
        return
      }
    }
    let panelDate = panel.date
    const order = ['year', 'month', 'date']
    if (props.mode === 'datetime') {
      const { year, month, date } = parseDate(dateStr)
      year && (panelDate = panelDate.year(+year))
      month && (panelDate = panelDate.month(+month - 1))
      date && (panelDate = panelDate.date(+date))
      if (!isTip) {
        panel.date = panelDate
        panel.value = panel.dateFormat
      }
      const panelModeIndexInOrder = order.indexOf(panel.mode)
      if (
        panelModeIndexInOrder >= 0 &&
        panelModeIndexInOrder < order.length - 1
      ) {
        panel.mode = order[panelModeIndexInOrder + 1]
      } else if (panelModeIndexInOrder === order.length - 1) {
        if (props.range) {
          rangeProcess()
        }
      }
    } else {
      const propsModeIndexInOrder = order.indexOf(props.mode)
      const panelModeIndexInOrder = order.indexOf(panel.mode)
      if (propsModeIndexInOrder < 0 || panelModeIndexInOrder < 0) return
      panelDate = dayjs(dateStr)
      panel.date = panelDate
      panel.value = panel.dateFormat
      if (propsModeIndexInOrder > panelModeIndexInOrder) {
        panel.mode = order[panelModeIndexInOrder + 1]
      } else {
        if (props.range) {
          rangeProcess()
        } /* else {
          panelParams.visible && (panelParams.visible.value = false)
        }*/
      }
    }

    function rangeProcess() {
      const value = panelDate.format()
      const rangeVal = panelParams.rangeValue!
      const selectCompleted =
        rangeVal.length === 2 &&
        rangeVal[0].status === 'selected' &&
        rangeVal[1].status === 'selected' // 已经存在选择好的范围值
      if (rangeVal.length === 0 || selectCompleted) {
        if (!isTip) {
          rangeVal.length = 0
          panelParams.rangeValue!.push({
            status: 'selected',
            value
          })
        }
      } else {
        const unit =
          props.mode === 'year'
            ? 'year'
            : props.mode === 'month'
            ? 'month'
            : 'date'
        const prevValue = rangeVal[0].value
        const needReverse = dayjs(value).isBefore(prevValue, unit)
        if (isTip) {
          rangeVal[1] = {
            status: 'tip',
            value
          }
        } else {
          rangeVal[1] = {
            status: 'selected',
            value
          }
          needReverse && rangeVal.reverse()
        }
      }
    }
  }
  // 选择时间
  const updatePanelTime = (time: string) => {
    panel.time = time
  }

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
    panel,
    updatePanelDate,
    updatePanelTime,
    changePanelDate
  }
}
