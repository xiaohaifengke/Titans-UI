<template>
  <component class="ti-widget" :is="name">
    <slot></slot>
    <template #exit-fullscreen-icon>
      <slot name="exit-fullscreen-icon"></slot>
    </template>
    <template #fullscreen-icon>
      <slot name="fullscreen-icon"></slot>
    </template>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import voice from '@titans-ui/components/widget/src/widgets/voice/voice.vue'
import loading from '@titans-ui/components/widget/src/widgets/loading/loading.vue'
import marquee from '@titans-ui/components/widget/src/widgets/marquee/marquee.vue'
import screenfull from '@titans-ui/components/widget/src/widgets/screenfull/screenfull.vue'

export default defineComponent({
  name: 'TiWidget',
  components: { voice, loading, marquee, screenfull },
  props: {
    name: String
  }
})
</script>
