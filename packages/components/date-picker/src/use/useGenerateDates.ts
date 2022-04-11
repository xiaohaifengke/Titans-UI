import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { ComputedExtremity } from './useGeneratePanel'
dayjs.extend(isBetween)

export interface DateInfo {
  t: any
  date: string
  day: number
  week: number
  month: number
  monthFlag: string
  today?: boolean
  selected?: boolean
}

export const useGenerateDates = (
  date: dayjs.Dayjs | string | number | undefined,
  modelValue: string | Array<ComputedExtremity>,
  valueFormat: string
): DateInfo[] => {
  const panelDate = dayjs(date || Date.now())
  const firstDateOfCurrentMonth = panelDate.date(1)
  const firstDayOfCurrentMonth = firstDateOfCurrentMonth.day()
  const startDate = firstDateOfCurrentMonth.subtract(
    firstDayOfCurrentMonth || 7,
    'day'
  )

  return Array.from({ length: 42 }).map((u, i, arr: any[]) => {
    const k = i - firstDayOfCurrentMonth
    const key = k < 0 ? arr.length + k : k
    const t = startDate.add(i, 'day')
    let rangeStart = false
    let rangeEnd = false
    let isInRange = false
    let selected
    if (Array.isArray(modelValue)) {
      const needReverse = dayjs(modelValue[1].value).isBefore(
        modelValue[0].value
      )
      const start = needReverse ? modelValue[1] : modelValue[0]
      const end = needReverse ? modelValue[0] : modelValue[1]
      rangeStart = t.isSame(start.value, 'date')
      rangeEnd = t.isSame(end.value, 'date')
      selected = rangeStart || rangeEnd
      isInRange =
        !!start.value &&
        !!end.value &&
        t.isBetween(start.value, end.value, 'date', '[]')
    } else {
      const sel = dayjs(modelValue)
      selected = !!date && t.isSame(sel, 'date')
    }
    const dateStr = t.format(valueFormat)
    const day = t.date()
    const week = t.day()
    const month = t.month()
    const monthFlag = t.isSame(panelDate, 'month')
      ? 'current-month'
      : t.isAfter(panelDate, 'month')
      ? 'next-month'
      : 'prev-month'
    return {
      key,
      t,
      date: dateStr,
      day,
      week,
      month: month,
      monthFlag: monthFlag,
      selected: selected,
      today: !selected && t.isSame(dayjs(), 'date'),
      rangeStart,
      rangeEnd,
      isInRange
    }
  })
}
