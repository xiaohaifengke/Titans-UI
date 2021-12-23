<template>
  <li
    class="ti-option"
    :class="{ 'ti-option_disabled': disabled }"
    @click.stop="clickItem"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  emits: ['clickItem'],
  setup(props, { emit }) {
    const clickItem = () => {
      if (!props.disabled) {
        emit('clickItem', props.value)
      }
    }

    return {
      clickItem
    }
  }
})
</script>
