<template>
  <div class="ti-date-picker">
    <input class="ti-date-picker_input--date" :class="classes" type="text" />
    <span class="ti-date-picker_input--prefix"></span>
    <span class="ti-date-picker_input--suffix"></span>
    <div class="ti-date-picker_popper">
      <div class="ti-date-picker_wrapper">
        <div class="ti-date-picker_header">
          <ti-icon icon="d-arrow-left" />
          <ti-icon icon="arrow-left" />
          <span>{{ selectYear }}年</span>
          <span>{{ selectMonth }}月</span>
          <ti-icon icon="arrow-right" />
          <ti-icon icon="d-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import TiIcon from '../icon'
import { computed } from '@vue/runtime-core'

export default defineComponent({
  name: 'TiDatePicker',
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  components: { TiIcon },
  setup(props) {
    const classes = computed(() => {
      return {
        [`ti-date-picker_size--${props.size}`]: props.size
      }
    })

    const selectYear = ref(2021)
    const selectMonth = ref(10)
    return {
      selectYear,
      selectMonth,
      classes
    }
  }
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import './date-picker';
</style>
