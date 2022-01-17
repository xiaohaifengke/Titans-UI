import { SimpleFunction } from '@titans-ui/utils/shims'

export interface OptionItem {
  label: string
  value: any
}
export interface SelectPanel {
  filterable: boolean
  filterMethod: SimpleFunction
  model: any
  pushToPanel: SimpleFunction
  inputValue: OptionItem
  multipleValue: OptionItem[]
  updatedValue: (valueWrapper: ValueWrapper<any>) => void
  noMatchDataVisible: boolean
  displayNoMatchData: (bool: boolean) => void
}

export interface ValueWrapper<T> {
  type: 'active' | 'inactive'
  value: T
  label: string
}
