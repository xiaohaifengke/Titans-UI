<template>
  <span
    class="ti-checkbox"
    :class="classes"
    @click="handleClick"
    :style="{ width: cptWidth }"
  >
    <span class="ti-checkbox_selector"></span>
    <span class="ti-checkbox_label">{{ cptLabel }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, watch, WritableComputedRef } from 'vue'
import { checkboxProps } from './checkbox-props'
import { inject } from '@vue/runtime-core'
import { TI_CHECKBOX_GROUP_PROVIDE } from '@titans-ui/utils/constants'

export default defineComponent({
  name: 'TiCheckbox',
  props: checkboxProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // checkbox-group
    const checkboxGroupModel = inject<WritableComputedRef<any[]>>(
      TI_CHECKBOX_GROUP_PROVIDE,
      null
    )
    // basic
    const isChecked = computed(() => {
      if (checkboxGroupModel) {
        return checkboxGroupModel.value.includes(props.label)
      } else {
        return props.modelValue === props.trueValue
      }
    })
    const classes = computed(() => [
      `ti-checkbox_size--${props.size}`,
      `ti-checkbox_type--${props.type}`,
      {
        'ti-checkbox_selector--checked': isChecked.value,
        'ti-checkbox--disabled': props.disabled,
        'ti-checkbox--readonly': props.readonly
      }
    ])
    const handleClick = () => {
      if (props.disabled || props.readonly) return
      if (checkboxGroupModel) {
        // checkbox-group只支持label
        if (isChecked.value) {
          checkboxGroupModel.value = checkboxGroupModel.value.filter(
            (item) => item !== props.label
          )
        } else {
          checkboxGroupModel.value.push(props.label)
        }
      } else {
        const modelValue = isChecked.value ? props.falseValue : props.trueValue
        emit('update:modelValue', modelValue)
      }
    }
    // label
    const cptLabel = computed(
      () =>
        (isChecked.value ? props.trueLabel : props.falseLabel) || props.label
    )
    // change 事件
    watch(
      () => props.modelValue,
      (val) => {
        emit('change', val)
      }
    )
    // width
    const cptWidth = computed(() => {
      if (/^\d+$/.test(props.width)) {
        return `${props.width}px`
      }
      return props.width
    })

    return {
      isChecked,
      classes,
      handleClick,
      cptLabel,
      cptWidth
    }
  }
})
</script>
