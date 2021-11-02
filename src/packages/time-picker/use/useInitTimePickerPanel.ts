import { computed, reactive, ref, SetupContext, watch } from 'vue'
import dayjs from 'dayjs'

// 根据输入框中的值得到日期面板的值
function getPanelDateByInputDate(time: string | undefined) {
  if (time) {
    const timeReg =
      /^(?<hours>(\d+))[^\d](?<minutes>(\d+))[^\d](?<seconds>(\d+))$/
    const r = time.match(timeReg)
    const { hours, minutes, seconds } = r?.groups || {}
    return dayjs()
      .hour(+hours)
      .minute(+minutes)
      .second(+seconds)
  } else {
    return dayjs()
  }
}

export function formatTime(time: string | undefined, format = 'HH:mm:ss') {
  return getPanelDateByInputDate(time).format(format)
}
export function useInitTimePickerPanel(props: any, { emit }: SetupContext) {
  // 显示的值
  const model = computed({
    get: () => {
      return props.modelValue && formatTime(props.modelValue)
    },
    set: (val: string) => emit('update:modelValue', val)
  })
  const timePickerPanelVisible = ref(false)

  const panel = reactive({
    time: getPanelDateByInputDate(props.modelValue),
    get hour() {
      return this.time.hour()
    },
    set hour(hour) {
      model.value = this.time.hour(hour).format(props.valueFormat)
    },
    get minute() {
      return this.time.minute()
    },
    set minute(minute) {
      model.value = this.time.minute(minute).format(props.valueFormat)
    },
    get second() {
      return this.time.second()
    },
    set second(second) {
      model.value = this.time.second(second).format(props.valueFormat)
    }
  })
  watch(
    () => model.value,
    (val) => {
      panel.time = getPanelDateByInputDate(val)
    }
  )
  const handleFocus = () => {
    // panel.time = getPanelDateByInputDate(props.modelValue)
    timePickerPanelVisible.value = true
  }
  const handleBlur = () => {
    timePickerPanelVisible.value = false
  }

  return {
    model,
    timePickerPanelVisible,
    handleFocus,
    handleBlur,
    panel
  }
}
