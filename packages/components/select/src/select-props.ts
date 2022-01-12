export const selectProps = {
  modelValue: null,
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  multipleLimit: {
    type: Number,
    default: 1000000
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  filterable: {
    type: Boolean,
    default: false
  },
  allowCreate: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: Function,
    default: (
      input: string,
      option: {
        label: string
        value: any
        disabled: boolean
      }
    ) => {
      if (!input || !input.trim()) return true
      return option.label.includes(input)
    }
  },
  remote: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Loading'
  },
  noMatchText: {
    type: String,
    default: 'No matching data'
  },
  noDataText: {
    type: String,
    default: 'No data'
  },
  reserveKeyword: {
    type: Boolean,
    default: false
  },
  teleportToBody: {
    type: Boolean,
    default: true
  },
  popperClass: String,
  name: String,
  autocomplete: String
}
