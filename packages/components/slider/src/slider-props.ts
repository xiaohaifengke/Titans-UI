export const SliderProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  },
  step: {
    type: Number,
    default: 1
  },
  size: {
    type: String,
    default: 'normal'
  },
  showStops: {
    type: Boolean,
    default: false
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  formatTooltip: {
    type: Function,
    default: (val: any) => val
  },
  range: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  height: [Number, String],
  tooltipClass: String,
  marks: {
    type: Object,
    default: () => ({})
  }
}
