<template>
  <li
    v-if="exist"
    class="ti-option"
    :class="{
      'ti-option_disabled': disabled,
      active: isActive
    }"
    @click.stop="clickItem"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, watch, computed, inject, DeepReadonly } from 'vue'
import { TI_SELECT_PROVIDE } from '@titans-ui/utils/constants'
import type { SelectPanel } from './types'

export default defineComponent({
  name: 'TiOption',
  props: {
    label: String,
    value: null,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const TiSelectPanel = inject<SelectPanel>(TI_SELECT_PROVIDE)
    const isActive = computed<boolean>(() => {
      return Array.isArray(TiSelectPanel.model)
        ? TiSelectPanel.model.includes(props.value)
        : TiSelectPanel.model === props.value
    })
    const clickItem = () => {
      if (!props.disabled) {
        TiSelectPanel.pushToPanel(props.value)
      }
    }
    watch(
      isActive,
      (val: boolean) => {
        TiSelectPanel.updatedValue({
          type: val ? 'active' : 'inactive',
          value: props.value,
          label: props.label
        })
      },
      {
        immediate: true
      }
    )
    // filterable
    const filterable = computed(() => TiSelectPanel.filterable)
    const filterMethod = computed(() => TiSelectPanel.filterMethod)
    const exist = computed(() => {
      if (filterable.value) {
        return filterMethod.value(TiSelectPanel.inputValue?.label, {
          label: props.label,
          value: props.value,
          disabled: props.disabled
        })
      }
      return true
    })
    return {
      TiSelectPanel,
      isActive,
      clickItem,
      exist
    }
  }
})
</script>
