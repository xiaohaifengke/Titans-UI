import { computed } from 'vue'
interface PatternItem {
  id: string
  start: number
  step: number
  end: number
}
enum TimeFlag {
  H = 'h',
  M = 'm',
  S = 's'
}
type PatternItemsMap = {
  [k in TimeFlag]: PatternItem
}
export function usePattern(props: any) {
  const patternItemsMap: PatternItemsMap = {
    h: { id: 'hour', start: 0, step: 1, end: 23 },
    m: { id: 'minute', start: 0, step: 1, end: 59 },
    s: { id: 'second', start: 0, step: 1, end: 59 }
  }
  return computed((): PatternItem[] =>
    [TimeFlag.H, TimeFlag.M, TimeFlag.S].reduce(
      (p: PatternItem[], tf: TimeFlag) => {
        if (props.type.includes(tf)) {
          p.push(patternItemsMap[tf])
        }
        return p
      },
      []
    )
  )
}
