<template>
  <div class="ti-date-picker">
    <!--    <TiDateRangePicker v-if="range" v-bind="$attrs" />-->
    <!--    <TiDateSinglePicker v-else v-bind="$attrs" />-->
    <component :is="name" v-bind="$attrs" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import TiDateSinglePicker from './date-single-picker.vue'
import TiDateRangePicker from './range/date-range-picker.vue'

export default defineComponent({
  name: 'TiDatePicker',
  inheritAttrs: false,
  props: {
    range: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TiDateSinglePicker,
    TiDateRangePicker
  },
  setup(props) {
    const name = computed(() =>
      props.range ? 'TiDateRangePicker' : 'TiDateSinglePicker'
    )
    return {
      name
    }
  }
})
</script>
