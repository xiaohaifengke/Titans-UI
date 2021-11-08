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
        <div
          class="ti-time-picker_panel--item"
          v-for="p in pattern"
          :key="p.id"
        >
          <TiTimePanel
            :start="p.start"
            :step="p.step"
            :end="p.end"
            v-model="panel[p.id]"
          />
        </div>
        <!--<div class="ti-time-picker_panel&#45;&#45;item">
          <TimePanel :start="0" :step="1" :end="59" v-model="panel.minute" />
        </div>
        <div class="ti-time-picker_panel&#45;&#45;item">
          <TimePanel :start="0" :step="1" :end="59" v-model="panel.second" />
        </div>-->
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
import TiTimePanel from './components/time-panel.vue'
import {
  useInitTimePickerPanel,
  formatTime
} from './use/useInitTimePickerPanel'
import { usePattern } from '../../packages/time-picker/use/usePattern'

export default defineComponent({
  name: 'TiTimePicker',
  directives: { clickOutside },
  components: { TiInput, TiTimePanel },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'hms' // hms/hm/ms/h/m/s
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    valueFormat: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  setup(props, { emit }) {
    const { model, timePickerPanelVisible, handleFocus, handleBlur, panel } =
      useInitTimePickerPanel(props, { emit })
    const pattern = usePattern(props)
    return {
      model,
      timePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel,
      pattern
    }
  }
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import './time-picker';
</style>
