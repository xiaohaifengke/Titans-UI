<template>
  <Transition
    name="arise"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="ti-tip" v-show="visible">
      <Transition name="tip">
        <div class="tip" :key="flag">
          <slot v-bind="slotProps">{{ slotProps.tip }}</slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeUnmount, computed } from 'vue'
import { TipSlotProps } from './tip-types'

export default defineComponent({
  name: 'TiTip',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  emits: ['update:modelValue', 'afterEnter', 'afterLeave'],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (val: any[]) => {
        emit('update:modelValue', val)
      }
    })
    const visible = ref(false) // 控制tip的display
    const active = ref(null) // 当前的消息 {string|object}
    const flag = ref(false) // 控制内部消息内容的切换
    const timer = ref(null)
    const slotProps = computed<TipSlotProps>(() =>
      typeof active.value === 'object'
        ? { tip: '', ...active.value }
        : { tip: active.value }
    )
    watch(
      model,
      (val) => {
        if (val.length > 0) {
          visible.value = true
        }
        // 在val.length变为0时，不需要立刻隐藏，而是等相关动画完成后3s再隐藏
      },
      {
        deep: true
      }
    )

    const beforeEnter = () => {
      active.value = model.value.shift()
    }
    const afterEnter = () => {
      timer.value = setInterval(() => {
        if (model.value.length) {
          active.value = model.value.shift()
          flag.value = !flag.value
        } else {
          visible.value = false
          clearInterval(timer.value)
          timer.value = null
        }
      }, props.interval)
      emit('afterEnter')
    }

    const afterLeave = () => {
      active.value = null
      emit('afterLeave')
    }

    onBeforeUnmount(() => {
      clearInterval(timer.value)
      timer.value = null
    })
    return {
      model,
      visible,
      active,
      flag,
      timer,
      slotProps,
      beforeEnter,
      afterEnter,
      afterLeave
    }
  }
})
</script>
