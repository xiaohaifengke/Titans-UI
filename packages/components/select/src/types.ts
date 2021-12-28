import { SimpleFunction } from '@titans-ui/utils/shims'

export interface OptionItem {
  label: string
  value: any
}
export interface Panel {
  model: any
  pushToPanel: SimpleFunction
  inputValue: OptionItem
  multipleValue: OptionItem[]
  updatedValue: (valueWrapper: ValueWrapper<any>) => void
}

export interface ValueWrapper<T> {
  type: 'active' | 'inactive'
  value: T
  label: string
}
