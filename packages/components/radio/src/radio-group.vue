<template>
  <div class="ti-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'
import { TI_RADIO_GROUP_PROVIDE } from '@titans-ui/utils/constants'

export default defineComponent({
  name: 'TiRadioGroup',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      required: true
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (modelValue) => {
        emit('update:modelValue', modelValue)
        emit('change', modelValue)
      }
    })

    provide(TI_RADIO_GROUP_PROVIDE, model)

    return {
      model
    }
  }
})
</script>
