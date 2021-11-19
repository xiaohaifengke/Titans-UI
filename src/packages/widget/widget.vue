<template>
  <div class="ti-widget">
    <component :is="name" v-bind="$attrs"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import voice from './widgets/voice/voice.vue'
import loading from './widgets/loading/loading.vue'

export default defineComponent({
  name: 'TiWidget',
  inheritAttrs: false,
  components: { voice, loading },
  props: {
    name: String
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@import './widget';
</style>
