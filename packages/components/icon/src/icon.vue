<template>
  <svg class="ti-icon" :class="`ti-icon-${icon}`" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconProps } from './icon-props'
export default defineComponent({
  name: 'TiIcon',
  props: iconProps
})
</script>

<style lang="scss" rel="stylesheet/scss">
@import './icon';
</style>
