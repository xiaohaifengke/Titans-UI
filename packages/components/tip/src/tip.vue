<template>
  <Transition
    appear
    name="arise"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="ti-tip" v-show="visible">
      <Transition name="tip">
        <div class="tip" v-if="flag">
          <span class="name text-ellipsis">
            {{ active?.USERID }}
          </span>
          <span :class="active?.STATUS === '0' ? 'online' : 'offline'">{{
            active?.STATUS === '0' ? '已上线' : '已下线'
          }}</span>
        </div>
        <div class="tip" v-else>
          <span class="name text-ellipsis">
            {{ active?.USERID }}
          </span>
          <span :class="active?.STATUS === '0' ? 'online' : 'offline'">{{
            active?.STATUS === '0' ? '已上线' : '已下线'
          }}</span>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeUnmount, computed } from 'vue'

export default defineComponent({
  name: 'TiTip',
  props: {
    modelValue: {
      type: Array,
      default: () => []
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
    const visible = ref(false)
    const active = ref(null)
    const flag = ref(false)
    const timer = ref(null)

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
      }, 3000)
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
      beforeEnter,
      afterEnter,
      afterLeave
    }
  }
})
</script>
