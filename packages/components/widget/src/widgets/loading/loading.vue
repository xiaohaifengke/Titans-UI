<template>
  <div
    class="ti-loading"
    :class="classes"
    :style="{
      fontSize: fontSize,
      color: color
    }"
  ></div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TiLoading',
  props: {
    /* loading 不支持motion属性 */
    type: {
      type: String,
      default: 'default'
    },
    color: String,
    fontSize: String,
    genre: {
      type: String,
      default: 'round'
    }
  },
  setup(props) {
    const classes = computed(() => [
      `ti-loading_type--${props.type}`,
      `ti-loading_genre--${props.genre}`
    ])

    return {
      classes
    }
  }
})
</script>
