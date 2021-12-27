<template>
  <li
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
import { defineComponent, watch } from 'vue'
import { computed, inject } from '@vue/runtime-core'
import { TI_SELECT_PROVIDE } from '@titans-ui/utils/constants'
import { Panel } from './select.vue'

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
    const TiSelectPanel = inject<Panel>(TI_SELECT_PROVIDE)
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
    return {
      TiSelectPanel,
      isActive,
      clickItem
    }
  }
})
</script>
