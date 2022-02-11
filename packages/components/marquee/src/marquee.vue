<template>
  <div class="ti-marquee" :class="{ 'ti-marquee-pause': pauseOnHover }">
    <div class="txt" v-for="item in 2" :key="item">
      <slot>
        <div>{{ content }}</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TiMarquee',
  props: {
    content: {
      type: String,
      default: ''
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    return slots
  }
})
</script>
