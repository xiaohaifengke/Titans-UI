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
      <div class="ti-time-picker_panel">
        <div class="ti-time-picker_panel--item">
          <TimePanel :start="0" :step="1" :end="23" v-model="panel.hour" />
        </div>
        <div class="ti-time-picker_panel--item">
          <TimePanel :start="0" :step="1" :end="59" v-model="panel.minute" />
        </div>
        <div class="ti-time-picker_panel--item">
          <TimePanel :start="0" :step="1" :end="59" v-model="panel.second" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import clickOutside from '../../utils/clickOutside'
import TiInput from '../input'
import TimePanel from './components/time-panel'
import {
  useInitTimePickerPanel,
  formatTime
} from './use/useInitTimePickerPanel'

export default defineComponent({
  name: 'TiTimePicker',
  directives: { clickOutside },
  components: { TiInput, TimePanel },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    valueFormat: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  setup(props, { emit }) {
    const { model, timePickerPanelVisible, handleFocus, handleBlur, panel } =
      useInitTimePickerPanel(props, { emit })

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
