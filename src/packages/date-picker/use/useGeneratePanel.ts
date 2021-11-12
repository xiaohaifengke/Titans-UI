import {
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
  visible?: Ref<boolean>
  model: WritableComputedRef<unknown>
  valueFormat: ComputedRef<string>
  rangeValue?: Ref<Array<ComputedExtremity>>
}

export function useGeneratePanel(
  props: any,
  panelParams: GeneratePanelParams,
  rangeParams = 'start'
) {
  const modelValue = props.range ? props[rangeParams] : props.modelValue
  const panel = shallowReactive({
    mode: props.mode === 'datetime' ? 'date' : props.mode,
    date: getPanelDateByInputDate(
      modelValue,
      props.mode,
      rangeParams === 'end'
    ),
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
      panelParams.model.value = this.date
        .hour(+hours)
        .minute(+minutes)
        .second(+seconds)
        .format(panelParams.valueFormat.value)
    }
  })
  watch(
    () => props.modelValue,
    (val) => {
      panel.date = getPanelDateByInputDate(
        val,
        props.mode,
        rangeParams === 'end'
      )
    }
  )
  const handleFocus = () => {
    panel.mode = props.mode === 'datetime' ? 'date' : props.mode
    panel.date = getPanelDateByInputDate(
      props.modelValue,
      props.mode,
      rangeParams === 'end'
    )
    panelParams.visible && (panelParams.visible.value = true)
  }
  const handleBlur = () => {
    panelParams.visible && (panelParams.visible.value = false)
  }

  // 选择日期
  const updatePanelDate = (dateStr: string, isTip = false): void => {
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
        if (props.range) {
          rangeProcess()
        } else {
          panelParams.model.value = panel.date.format(
            panelParams.valueFormat.value
          )
        }
      }
    } else {
      const propsModeIndexInOrder = order.indexOf(props.mode)
      const panelModeIndexInOrder = order.indexOf(panel.mode)
      if (propsModeIndexInOrder < 0 || panelModeIndexInOrder < 0) return
      if (propsModeIndexInOrder > panelModeIndexInOrder) {
        panel.date = dayjs(dateStr)
        panel.mode = order[panelModeIndexInOrder + 1]
      } else {
        if (props.range) {
          rangeProcess()
        } else {
          panelParams.model.value = dayjs(dateStr).format(
            panelParams.valueFormat.value
          )
          panelParams.visible && (panelParams.visible.value = false)
        }
      }
    }

    function rangeProcess() {
      const value = dayjs(dateStr).format(panelParams.valueFormat.value)
      const rangeVal = panelParams.rangeValue!.value
      const selectCompleted =
        rangeVal.length === 2 &&
        rangeVal[0].status === 'selected' &&
        rangeVal[1].status === 'selected' // 已经存在选择好的范围值
      if (rangeVal.length === 0 || selectCompleted) {
        rangeVal.length = 0
        if (!isTip) {
          panelParams.rangeValue!.value.push({
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
          needReverse && rangeVal.reverse()
        } else {
          rangeVal[1] = {
            status: 'selected',
            value
          }
          needReverse && rangeVal.reverse()
          panelParams.model.value = {
            start: rangeVal[0].value,
            end: rangeVal[1].value
          }
          panelParams.visible && (panelParams.visible.value = false)
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
    handleFocus,
    handleBlur,
    panel,
    updatePanelDate,
    updatePanelTime,
    changePanelDate
  }
}
