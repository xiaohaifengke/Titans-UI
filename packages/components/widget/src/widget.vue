<template>
  <component class="ti-widget" :is="name">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import voice from './widgets/voice/voice.vue'
import loading from './widgets/loading/loading.vue'

export default defineComponent({
  name: 'TiWidget',
  components: { voice, loading },
  props: {
    name: String
  }
})
</script>
