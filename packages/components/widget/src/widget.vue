<template>
  <component class="ti-widget" :is="name">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import voice from '@titans-ui/components/widget/src/widgets/voice/voice.vue'
import loading from '@titans-ui/components/widget/src/widgets/loading/loading.vue'
import marquee from '@titans-ui/components/widget/src/widgets/marquee/marquee.vue'

export default defineComponent({
  name: 'TiWidget',
  components: { voice, loading, marquee },
  props: {
    name: String
  }
})
</script>
