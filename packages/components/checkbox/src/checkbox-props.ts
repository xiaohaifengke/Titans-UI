export const checkboxProps = {
  modelValue: [Boolean, String, Number],
  label: [String, Number],
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: 'primary'
  },
  trueLabel: [String, Number],
  falseLabel: [String, Number],
  trueValue: {
    type: [Boolean, String, Number],
    default: true
  },
  falseValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: Boolean,
  readonly: Boolean,
  width: [String, Number],
  indeterminate: {
    type: Boolean,
    default: false
  }
}
