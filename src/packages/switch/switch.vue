<template>
  <button
    role="switch"
    ref="switchRef"
    :class="switchClasses"
    :style="switchStyles"
    @keydown.prevent.self="handleKeydown"
    @click="handleChange"
  >
    <span class="ti-switch-text"> {{ isOn ? onText : offText }} </span>
    <span class="ti-switch-handle" :style="handleStyles" />
  </button>
</template>

<script lang="ts">
import { ref, watch, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TiSwitch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      required: true
    },
    type: {
      type: String,
      default: 'primary'
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    onValue: {
      type: [Boolean, String, Number],
      default: true
    },
    offValue: {
      type: [Boolean, String, Number],
      default: false
    },
    onColor: {
      type: String
    },
    offColor: {
      type: String
    },
    handleOnColor: {
      type: String
    },
    handleOffColor: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String
    },
    offText: {
      type: String
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // 未设置 width
    const noSetWidth = computed(() => {
      return props.width === undefined
    })
    // 未设置 height
    const noSetHeight = computed(() => {
      return props.height === undefined
    })

    const isOn = computed(() => {
      return props.modelValue === props.onValue
    })

    const switchClasses = computed(() => [
      'ti-switch',
      {
        'is-on': isOn.value,
        [`ti-switch-type-${props.type}`]: props.type,
        'ti-switch-disabled': props.disabled
      }
    ])

    const handleSize = computed(() => {
      return (props.height ?? 16) - 4
    })

    const switchStyles = computed(() => ({
      width: props.width + 'px',
      height: props.height + 'px',
      backgroundColor: isOn.value ? props.onColor : props.offColor,
      borderColor: isOn.value ? props.onColor : props.offColor,
      paddingRight: isOn.value
        ? (props.height ?? 20) + 'px'
        : (props.height ?? 20) / 2 + 'px',
      paddingLeft: isOn.value
        ? (props.height ?? 20) / 2 + 'px'
        : (props.height ?? 20) + 'px'
    }))
    const handleStyles = computed(() => ({
      width: handleSize.value + 'px',
      height: handleSize.value + 'px',
      left: isOn.value ? '100%' : '1px',
      marginLeft: isOn.value ? -(handleSize.value + 1) + 'px' : 0,
      backgroundColor: isOn.value ? props.handleOnColor : props.handleOffColor
    }))
    const handleChange = (e: Event) => {
      if (props.disabled) return
      const modelValue = isOn.value ? props.offValue : props.onValue
      emit('update:modelValue', modelValue)
    }
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Space') {
        handleChange(e)
      } else if (e.key === 'ArrowLeft') {
        emit('update:modelValue', props.offValue)
      } else if (e.key === 'ArrowRight') {
        emit('update:modelValue', props.onValue)
      }
    }
    const switchRef = ref<any>(null)
    const focus = () => {
      switchRef.value && switchRef.value.focus()
    }
    const blur = () => {
      switchRef.value && switchRef.value.blur()
    }
    // change 事件
    watch(
      () => props.modelValue,
      (val) => {
        emit('change', val)
      }
    )

    return {
      isOn,
      switchClasses,
      handleSize,
      switchStyles,
      handleStyles,
      handleChange,
      handleKeydown,
      switchRef,
      focus,
      blur
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@import './switch';
</style>
