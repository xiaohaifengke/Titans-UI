<template>
  <ul class="ti-option-group" v-if="optionGroup.groupVisible">
    <li class="ti-option-group_title">{{ label }}</li>
    <li>
      <ul class="ti-option-group_children" ref="slotRef">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch, inject, reactive, provide } from 'vue'
import {
  TI_SELECT_PROVIDE,
  TI_SELECT_GROUP_PROVIDE
} from '@titans-ui/utils/constants'
import type { SelectPanel } from './types'
import { OptionGroup } from './types'

export default defineComponent({
  name: 'TiOptionGroup',
  props: {
    label: String
  },
  setup(props, { slots }) {
    const TiSelectPanel = inject<SelectPanel>(TI_SELECT_PROVIDE)
    const optionGroup = reactive({
      groupVisible: true,
      displayGroup(bool: boolean) {
        this.groupVisible = bool
      }
    })
    watch(
      () => TiSelectPanel.inputValue?.label,
      (label: string) => {
        optionGroup.groupVisible = !label
      }
    )
    provide<OptionGroup>(TI_SELECT_GROUP_PROVIDE, optionGroup)
    return {
      optionGroup
    }
  }
})
</script>
