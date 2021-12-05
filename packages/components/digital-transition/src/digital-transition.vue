<template>
  <span class="ti-tickValue-transition">{{ digital }}</span>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  toRefs,
  toRef,
  watch,
  ref,
  Ref,
  computed
} from 'vue'
import { toFixed } from '@titans-ui/utils'

// 第n位小数“向上取整”
function fractionCeil(d: number, number: number) {
  if (!d) {
    return Math.ceil(number)
  }
  const numberLength = `${number}`.length
  const numberStr = `${number + 10 ** -(16 - numberLength)}` // js限制整数位数+小数位数<=16位
  const reg = new RegExp(`(^(-|\\\\+)?\\d+\\.\\d{${d}})\\d*`)
  const r = numberStr.match(reg)!
  return r && toFixed(d, +r[1] + (1 / 10 ** d) * (+r[1] > 0 ? 1 : -1))
}

export default defineComponent({
  name: 'TiDigitalTransition',
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number
    },
    step: {
      type: Number,
      default: 1
    },
    interval: {
      type: Number,
      default: 16 // ms
    },
    // 当 duration 存在时，step 参数无效。单位：ms
    duration: {
      type: Number,
      default: 3000
    },
    accuracy: {
      type: Number,
      default: 0
    }
  },
  emit: ['ended', 'updated'],
  setup(props, { slots, emit }) {
    const { start, step, interval } = toRefs(props)
    const endProp = toRef(props, 'end')
    const durationProp = toRef(props, 'duration')
    const endValue = computed(() => {
      return +(endProp.value || slots.default?.()?.[0]?.children || 0)
    })
    let tickValue = ref(start.value)
    let digital = computed(() => {
      return +toFixed(props.accuracy, tickValue.value)
    })
    const timerFn = (() => {
      let timer: ReturnType<typeof setTimeout>
      return (start: Ref<number>, end: Ref<number>, emitName: string) => {
        const sv = start.value
        const ev = end.value
        if (timer) clearInterval(timer)
        // 当duration存在时，计算step，否则使用用户传入的step
        const computedStep = computed(() => {
          return durationProp.value
            ? fractionCeil(
                6 /* hack */,
                (ev - sv) / Math.floor(durationProp.value / interval.value)
              )
            : step.value
        })
        timer = setInterval(() => {
          start.value =
            computedStep.value > 0
              ? Math.min(start.value + +computedStep.value, end.value)
              : Math.max(start.value + +computedStep.value, end.value)

          if (
            (computedStep.value > 0 && start.value >= end.value) ||
            (computedStep.value < 0 && start.value <= end.value)
          ) {
            emit(emitName, end.value)
            clearInterval(timer)
          }
        }, interval.value)
      }
    })()
    onMounted(() => {
      timerFn(tickValue, endValue, 'ended')
    })
    watch(
      () => endValue.value,
      (newVal) => {
        timerFn(tickValue, ref(newVal), 'updated')
      }
    )

    return {
      digital
    }
  }
})
</script>
