<template>
  <div class="ti-time-picker" v-click-outside="handleBlur">
    <TiInput
      class="ti-time-picker_input"
      prefix-icon="time"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
    />
    <div class="ti-time-picker_popper" v-if="timePickerPanelVisible">
      <div class="ti-time-picker_panel"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import clickOutside from '../../utils/clickOutside'
import TiInput from '../input'
import {
  useInitTimePickerPanel,
  formatTime
} from './use/useInitTimePickerPanel'

export default defineComponent({
  name: 'TiTimePicker',
  directives: { clickOutside },
  components: { TiInput },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 显示的值
    const model = computed({
      get: () => {
        return props.modelValue && formatTime(props.modelValue)
      },
      set: (val) =>
        emit('update:modelValue', dayjs(val).format(props.valueFormat))
    })

    const { timePickerPanelVisible, handleFocus, handleBlur, panel } =
      useInitTimePickerPanel(props)
    return {
      model,
      timePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel
    }
  }
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import './time-picker';
</style>
