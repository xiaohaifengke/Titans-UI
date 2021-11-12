import dayjs from 'dayjs'

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

export const useGenerateDates = (
  date: dayjs.Dayjs | string | number | undefined,
  modelValue: any,
  valueFormat: string
): DateInfo[] => {
  const currentDateFormat = dayjs().format('YYYY-MM-DD')
  const sel = dayjs(modelValue)
  const selFormat = sel.format('YYYY-MM-DD')
  const d = dayjs(date || Date.now())
  const panelDigitalFormat = +d.format('YYYYMM')
  const firstDateOfCurrentMonth = d.date(1)
  const firstDayOfCurrentMonth = firstDateOfCurrentMonth.day()
  const startDate = firstDateOfCurrentMonth.subtract(
    firstDayOfCurrentMonth || 7,
    'day'
  )
  return Array.from({ length: 42 }).map((u, i, arr: any[]) => {
    const k = i - firstDayOfCurrentMonth
    const key = k < 0 ? arr.length + k : k
    const t = startDate.add(i, 'day')
    const tDigitalFormat = +t.format('YYYYMM')
    const tFormat = t.format('YYYY-MM-DD')
    const month = t.month()
    const monthFlag =
      tDigitalFormat === panelDigitalFormat
        ? 'current-month'
        : tDigitalFormat > panelDigitalFormat
        ? 'next-month'
        : 'prev-month'
    const selected = !!date && tFormat === selFormat
    return {
      key,
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
