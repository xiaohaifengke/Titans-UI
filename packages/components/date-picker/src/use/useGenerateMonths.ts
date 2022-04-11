import dayjs from 'dayjs'

export interface MonthInfo {
  t: any
  date: string
  m: number // 月份对应的数字
  month: string // 月份中文名
  curMonth?: boolean // 当月
  selected?: boolean // 选中的月份
}

export const useGenerateMonths = (
  date: dayjs.Dayjs | string | number | undefined,
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
