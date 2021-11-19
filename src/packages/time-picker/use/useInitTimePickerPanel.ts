import { computed, reactive, ref, SetupContext, watch } from 'vue'
import dayjs from 'dayjs'
export function parseTime(time: string) {
  const timeReg =
    /^(?<hours>(\d+))[^\d](?<minutes>(\d+))[^\d](?<seconds>(\d+))$/
  const r = time.match(timeReg)
  const { hours, minutes, seconds } = r?.groups || {}
  return { hours, minutes, seconds }
}
// 根据输入框中的值得到日期面板的值
function getPanelDateByInputDate(time: string | undefined) {
  if (time) {
    const { hours, minutes, seconds } = parseTime(time)
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

export function useInitTimePickerPanel(props: any, { emit }: { emit: any }) {
  // 显示的值
  const model = computed({
    get: () => {
      return props.modelValue && formatTime(props.modelValue, props.format)
    },
    set: (val: string) => emit('update:modelValue', val)
  })

  const panel = reactive({
    value: '',
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

  return {
    model,
    panel
  }
}
