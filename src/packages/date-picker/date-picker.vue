<template>
  <div class="ti-date-picker">
    <TiDateRangePicker v-if="range" v-bind="$attrs" ref="rangeRef" />
    <TiDateSinglePicker v-else v-bind="$attrs" ref="singleRef" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import clickOutside from '../../utils/clickOutside'
import TiDateSinglePicker from './date-single-picker.vue'
import TiDateRangePicker from './range/date-range-picker.vue'

export default defineComponent({
  name: 'TiDatePicker',
  inheritAttrs: false,
  directives: { clickOutside },
  props: {
    range: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TiDateSinglePicker,
    TiDateRangePicker
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
