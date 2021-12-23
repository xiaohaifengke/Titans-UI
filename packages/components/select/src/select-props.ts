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
  filterMethod: Function,
  remote: {
    type: Boolean,
    default: false
  },
  remoteMethod: Function,
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
