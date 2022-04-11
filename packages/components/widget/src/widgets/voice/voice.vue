<template>
  <span
    class="ti-voice"
    :class="classes"
    :style="{
      fontSize: fontSize,
      borderColor: color,
      background: `radial-gradient(circle 0.14em at top left,${color} 100%,transparent)`
    }"
  ></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TiVoice',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    motion: {
      type: Boolean,
      default: false
    },
    color: String,
    fontSize: String
  },
  setup(props) {
    const classes = computed(() => [
      `ti-voice_type--${props.type}`,
      {
        'ti-voice--motion': props.motion
      }
    ])
    return {
      classes
    }
  }
})
</script>
