<template>
  <div
    class="ti-select"
    :class="{ 'ti-select--dropdown': isDropdown }"
    ref="reference"
  >
    <TiInput
      class="ti-select_input"
      suffix-icon="arrow-down"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
      :name="name"
      :autocomplete="autocomplete"
    />
    <TiPopperTransition
      :reference="reference"
      ref="popperTransiton"
      placement="bottom"
      :className="popperClass"
    >
      <div class="ti-select_panel">
        <slot></slot>
      </div>
    </TiPopperTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { ref } from '@vue/reactivity'
import { selectProps } from './select-props'
import { computed } from '@vue/runtime-core'

export default defineComponent({
  name: 'TiSelect',
  props: selectProps,
  emits: [],
  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (val: any): void => {
        emit('update:modelValue', val)
      }
    })

    const reference = ref(null)
    const popperTransiton = ref(null)
    const isDropdown = ref(false)
    const handleFocus = () => {
      popperTransiton.value?.show()
    }

    watch(
      () => popperTransiton.value?.visible,
      (val: boolean) => {
        if (val) {
          isDropdown.value = true
        } else {
          isDropdown.value = false
        }
      }
    )
    return {
      model,
      isDropdown,
      handleFocus,
      reference,
      popperTransiton
    }
  }
})
</script>
