<template>
  <div class="ti-time-panel-wrapper">
    <div class="ti-time-panel" @scroll="panelScroll" ref="timePanel">
      <ul class="ti-time-panel_list">
        <li
          v-for="item in list"
          :key="item.value"
          class="ti-time-panel_list--item"
          @click="$emit('update:modelValue', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { toFixed, validatorInt } from '../../../utils'
import { scrollTo } from '../../../utils/scroll-to'

export default defineComponent({
  name: 'TimePanel',
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
      return Array.from({ length }).map((item, index) => {
        item = props.start + props.step * index
        item = item > props.end ? props.end : item
        return {
          value: item,
          label: `${item}`.padStart(2, '0'),
          disabled: false
        }
      })
    })
    const scrollToModelValue = (modelValue: number, transition?: boolean) => {
      const activeIndex = list.value.findIndex(
        (item) => item.value === modelValue
      )
      const scrollTop = Math.max(activeIndex, 0) * 30
      if (transition) {
        scrollTo(timePanel.value, scrollTop)
      } else {
        timePanel.value.scrollTop = scrollTop
      }
    }
    onMounted(() => {
      scrollToModelValue(props.modelValue)
    })

    watch(
      () => props.modelValue,
      (val) => {
        scrollToModelValue(val, true)
      }
    )

    const panelScroll = () => {
      const activeIndex = toFixed(0, timePanel.value.scrollTop / 30)
      return emit('update:modelValue', list.value[+activeIndex].value)
    }
    return {
      timePanel,
      list,
      panelScroll
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@include themes {
  $panel-item: 30px;
  .ti-time-panel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    &::before {
      position: absolute;
      top: $panel-item * 3;
      left: 0;
      z-index: -1;
      box-sizing: border-box;
      width: 100%;
      height: $panel-item;
      content: '';
      background-color: transparentize(map-get($defaultThemeMap, primary), 0.8);
      border-top: 1px solid map-get($defaultThemeMap, default-border-color);
      border-bottom: 1px solid map-get($defaultThemeMap, default-border-color);
    }
  }
  .ti-time-panel {
    width: 55px;
    height: 100%;
    overflow-y: hidden;

    &:hover {
      overflow-y: auto;
    }
  }

  .ti-time-panel_list {
    padding: $panel-item * 3 0;
    margin: 0;
    cursor: pointer;
  }

  .ti-time-panel_list--item {
    height: $panel-item;
    padding-left: 10px;
    line-height: $panel-item;
    list-style: none;
  }
}
</style>
