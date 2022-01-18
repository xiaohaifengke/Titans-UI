<template>
  <div class="ti-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'
import { TI_CHECKBOX_GROUP_PROVIDE } from '@titans-ui/utils/constants'

export default defineComponent({
  name: 'TiCheckboxGroup',
  props: {
    modelValue: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (modelValue) => {
        emit('update:modelValue', modelValue)
      }
    })

    provide(TI_CHECKBOX_GROUP_PROVIDE, model)

    return {
      model
    }
  }
})
</script>
