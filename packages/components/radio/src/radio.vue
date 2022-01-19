<template>
  <span
    class="ti-radio"
    :class="classes"
    @click="handleClick"
    :style="{ width: cptWidth }"
  >
    <span class="ti-radio_selector"></span>
    <span class="ti-radio_label">{{ label }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef, inject } from 'vue'
import { radioProps } from './radio-props'
import { TI_RADIO_GROUP_PROVIDE } from '@titans-ui/utils/constants'

export default defineComponent({
  name: 'TiRadio',
  props: radioProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // radio-group
    const radioGroupModel = inject<
      WritableComputedRef<string | number | boolean>
    >(TI_RADIO_GROUP_PROVIDE, null)
    // basic
    const isChecked = computed(() => {
      if (radioGroupModel) {
        return radioGroupModel.value === props.label
      } else {
        return props.modelValue === props.label
      }
    })

    const classes = computed(() => [
      `ti-radio_size--${props.size}`,
      `ti-radio_type--${props.type}`,
      {
        'ti-radio_selector--checked': isChecked.value,
        'ti-radio--disabled': props.disabled,
        'ti-radio--readonly': props.readonly
      }
    ])
    const handleClick = () => {
      if (props.disabled || props.readonly || isChecked.value) return
      if (radioGroupModel) {
        // radio-group只支持label
        radioGroupModel.value = props.label
      } else {
        emit('update:modelValue', props.label)
        // change 事件
        emit('change', props.label)
      }
    }

    // width
    const cptWidth = computed(() => {
      if (/^\d+$/.test(`${props.width}`)) {
        return `${props.width}px`
      }
      return props.width
    })

    return {
      isChecked,
      classes,
      handleClick,
      cptWidth
    }
  }
})
</script>
