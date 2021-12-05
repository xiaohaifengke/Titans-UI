<template>
  <div class="ti-time-panel-wrapper">
    <div class="ti-time-panel" @scroll="panelScroll" ref="timePanel">
      <ul class="ti-time-panel_list">
        <li
          tabindex="0"
          v-for="item in list"
          :key="item.value"
          class="ti-time-panel_list--item"
          :class="{ selected: modelValue === item.value }"
          @click="handleClick(item.value)"
          @keydown.enter="handleClick(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { toFixed, validatorInt } from '@titans-ui/utils'
import { scrollTo } from '@titans-ui/utils/scroll-to'
export interface PanelItem {
  disabled: boolean
  label: string
  value: number
}
export default defineComponent({
  name: 'TiTimePanel',
  props: {
    modelValue: {
      type: Number,
      default: 0,
      validator: validatorInt
    },
    start: {
      type: Number,
      default: 0,
      validator: validatorInt
    },
    step: {
      type: Number,
      default: 1,
      validator: validatorInt
    },
    end: {
      type: Number,
      required: true,
      validator: validatorInt
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const timePanel = ref(null)
    const list = computed(() => {
      const length = Math.ceil((props.end - props.start) / props.step + 1)
      return Array.from({ length }).map((u, index): PanelItem => {
        let item = props.start + props.step * index
        item = item > props.end ? props.end : item
        return {
          value: item,
          label: `${item}`.padStart(2, '0'),
          disabled: false
        }
      })
    })
    // panelScrollDisable用于在scroll期间不触发scroll中的事件
    //
    const panelScrollDisable = ref(false)
    const scrollToModelValue = (
      modelValue: number,
      transition?: boolean,
      disableScrollEvent?: boolean // 滚动时禁止触发滚动事件
    ) => {
      if (disableScrollEvent) panelScrollDisable.value = true
      const activeIndex = list.value.findIndex(
        (item) => item.value === modelValue
      )
      const scrollTop = Math.max(activeIndex, 0) * 30
      if (transition) {
        scrollTo(timePanel.value!, scrollTop, 300, () => {
          setTimeout(() => {
            panelScrollDisable.value = false
          }, 20) // hack: 尽量确保在callback在最后一次scroll事件之后执行
        })
      } else {
        ;(timePanel.value as any).scrollTop = scrollTop
        setTimeout(() => {
          panelScrollDisable.value = false
        }, 20) // hack: 尽量确保在此期间不会触发scroll事件
      }
    }
    onMounted(() => {
      scrollToModelValue(props.modelValue, false, true)
    })

    const panelScroll = () => {
      if (!panelScrollDisable.value) {
        const activeIndex = toFixed(0, (timePanel.value as any).scrollTop / 30)
        const activeValue = list.value[+activeIndex].value
        // hack: 值未改变时不触发,这样即使触发了scroll事件，但是若未滚动，即值未改变，也不会触发事件
        if (props.modelValue !== activeValue) {
          emit('update:modelValue', activeValue)
        }
      }
    }

    const handleClick = (value: number) => {
      emit('update:modelValue', value)
      if (props.modelValue !== value) {
        scrollToModelValue(value, true, true)
      }
    }
    return {
      timePanel,
      list,
      panelScroll,
      handleClick
    }
  }
})
</script>
