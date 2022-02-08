<template>
  <div class="ti-slider">
    <div class="ti-slider_track"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SliderProps } from './slider-props'

export default defineComponent({
  name: 'TiSlider',
  props: SliderProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    return {}
  }
})
</script>
