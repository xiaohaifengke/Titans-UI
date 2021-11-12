import dayjs from 'dayjs'

interface YearInfo {
  t: any
  date: string
  y: number
  yearFlag: string
  curYear?: boolean
  selected?: boolean
}

export const useGenerateYears = (
  date: dayjs.Dayjs | string | number | undefined,
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
