// 生成日期列表
import dayjs from 'dayjs'

// 显示的值
export function transferModelValueToInputValue(
  val: string | undefined | dayjs.Dayjs,
  format: string
): string | undefined {
  const d = dayjs(val)
  if (val && d.isValid()) {
    return d.format(format)
  } else {
    return val as string | undefined
  }
}
interface EndOffset {
  value: number
  unit: string
}
function getRangeEndOffset(mode: string): EndOffset {
  let offset: EndOffset
  switch (mode) {
    case 'year':
      offset = {
        value: 10,
        unit: 'year'
      }
      break
    case 'month':
      offset = {
        value: 1,
        unit: 'year'
      }
      break
    default:
      offset = {
        value: 1,
        unit: 'month'
      }
  }
  return offset
}
// 根据输入框中的值得到日期面板的值
export function getPanelDateByInputDate(
  date: string | undefined,
  mode: string,
  isEnd?: boolean // range时，end 会比 start 多出的一个月。单位：month
): dayjs.Dayjs {
  const inputDate = dayjs(date)
  if (date && inputDate.isValid()) {
    return inputDate
  } else if (isEnd) {
    const { value, unit } = getRangeEndOffset(mode)
    return dayjs().add(value, unit)
  }
  return dayjs()
}

// 正则方式由字符串解析出年月日
export function parseDate(dateStr: string) {
  const dateReg =
    /^(?<year>(\d{4}))(?:[^\d]*(?<month>(\d{2}))(?:[^\d](?<date>(\d{2})))?)?$/
  const r = dateStr.match(dateReg)
  const { year, month, date } = r?.groups || {}
  return { year, month, date }
}

// 定义默认的mode
export function getDefaultFormatByMode(mode: string): string {
  switch (mode) {
    case 'year':
      return 'YYYY'
    case 'month':
      return 'YYYY-MM'
    case 'date':
      return 'YYYY-MM-DD'
    case 'datetime':
      return 'YYYY-MM-DD HH:mm:ss'
    default:
      return 'YYYY-MM-DD'
  }
}
