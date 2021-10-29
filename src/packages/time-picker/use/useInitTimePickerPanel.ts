import { reactive, ref, watch } from 'vue'
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
export function useInitTimePickerPanel(props: any) {
  const timePickerPanelVisible = ref(false)

  const panel = reactive({
    time: getPanelDateByInputDate(props.modelValue),
    get hour() {
      return this.time.hour()
    },
    get minute() {
      return this.time.minute()
    },
    get second() {
      return this.time.second()
    }
  })
  watch(
    () => props.modelValue,
    (val) => {
      panel.time = getPanelDateByInputDate(val)
    }
  )
  const handleFocus = () => {
    panel.time = getPanelDateByInputDate(props.modelValue)
    timePickerPanelVisible.value = true
  }
  const handleBlur = () => {
    timePickerPanelVisible.value = false
  }

  return {
    timePickerPanelVisible,
    handleFocus,
    handleBlur,
    panel
  }
}
