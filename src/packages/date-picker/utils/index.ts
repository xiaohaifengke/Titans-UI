// 生成日期列表
import dayjs, { Dayjs } from 'dayjs'

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
interface MonthInfo {
  t: any
  date: string
  m: number // 月份对应的数字
  month: string // 月份中文名
  curMonth?: boolean // 当月
  selected?: boolean // 选中的月份
}
interface YearInfo {
  t: any
  date: string
  y: number
  yearFlag: string
  curYear?: boolean
  selected?: boolean
}

export const useGenerateDays = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat: string
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

export const useGenerateMonths = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat: string
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

export const useGenerateYears = (
  date: Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat: string
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
