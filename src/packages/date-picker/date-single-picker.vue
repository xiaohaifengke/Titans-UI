<template>
  <div class="ti-date-single-picker" ref="singlePicker" :class="classes">
    <TiInput
      ref="singlePicker"
      class="ti-date-picker_input"
      prefix-icon="date"
      @focus="handleFocus"
      :modelValue="model"
      @change="(val) => (model = val)"
    />

    <Teleport to="body">
      <Transition
        name="popper-slide"
        :duration="250"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div
          class="ti-date-picker_popper-wrapper"
          ref="singlePopper"
          v-show="datePickerPanelVisible"
          v-click-outside="{
            handler: handleBlur,
            extraEls: [singlePicker],
            isActive: active
          }"
        >
          <div class="ti-date-picker_popper">
            <TiDatePickerPanel
              :model="modelValue"
              :panel="panel"
              :updatePanelDate="updatePanelDate"
              :updatePanelTime="updatePanelTime"
            >
              <TiDatePickerPanelHeader
                :pickerMode="mode"
                :panelMode="panel.mode"
                :year="panel.year"
                :month="panel.month"
                :date="panel.dateStr"
                :time="panel.time"
                @update:panelMode="(panelMode) => (panel.mode = panelMode)"
                @changePanelDate="changePanelDate"
                class="ti-date-picker_header"
              />
            </TiDatePickerPanel>
          </div>
          <div class="ti-date-picker-popper_arrow" data-popper-arrow></div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, WritableComputedRef } from 'vue'
import dayjs from 'dayjs'
import {
  transferModelValueToInputValue,
  getDefaultFormatByMode,
  getPanelDateByInputDate
} from './utils'
import TiInput from '../input'
import TiDatePickerPanelHeader from './panels/date-picker-panel-header.vue'
import TiDatePickerPanel from './panels/date-picker-panel.vue'
import { useGeneratePanel } from './use/useGeneratePanel'
import { createPopper } from '@popperjs/core'
import clickOutside from '../../utils/clickOutside'
// import { Instance } from '@popperjs/core/lib/types'

export default defineComponent({
  name: 'TiDateSinglePicker',
  directives: { clickOutside },
  components: {
    TiInput,
    TiDatePickerPanelHeader,
    TiDatePickerPanel
  },
  props: {
    modelValue: String,
    placeholder: String,
    size: {
      type: String,
      default: 'normal'
    },
    format: {
      type: String
      // default: 'YYYY-MM-DD'
    },
    valueFormat: {
      type: String
      // default: 'YYYY-MM-DD'
    },
    mode: {
      type: String,
      default: 'date'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const singlePicker = ref(null as any)
    const singlePopper = ref(null as any)
    const format = computed(() => {
      return props.format || getDefaultFormatByMode(props.mode)
    })
    const valueFormat = computed(() => {
      return props.valueFormat || getDefaultFormatByMode(props.mode)
    })
    const classes = computed(() => {
      return {
        [`ti-date-picker_size--${props.size}`]: props.size
      }
    })

    const model: WritableComputedRef<string | undefined> = computed({
      get: () => {
        return transferModelValueToInputValue(props.modelValue, format.value)
      },
      set: (val: string | undefined): void => {
        emit('update:modelValue', dayjs(val).format(valueFormat.value))
      }
    })

    // 显示或隐藏日历面板
    const datePickerPanelVisible = ref(false)
    // 控制显示隐藏日期面板及相关事件
    const { panel, updatePanelDate, updatePanelTime } = useGeneratePanel(props)
    const handleFocus = () => {
      panel.mode = props.mode === 'datetime' ? 'date' : props.mode
      panel.date = getPanelDateByInputDate(panel.value, props.mode)
      datePickerPanelVisible.value = true
      createPopper(singlePicker.value, singlePopper.value, {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10]
            }
          }
        ]
      })
    }
    // 时间变化时，手动修改model的时间，不在panel generator 函数中修改，不然会和range的逻辑混在一起不利于维护
    watch(
      () => panel.value,
      (value) => {
        model.value = value
        datePickerPanelVisible.value = false
      }
    )

    // 切换年月。val：月份数 prevYear: -12, prevMonth: -1, nextMonth: 1, nextYear: 12
    const changePanelDate = (val: number) => {
      if (panel.mode === 'year') {
        if (val > 0) {
          panel.date = panel.date.add(10, 'year')
        } else {
          panel.date = panel.date.add(-10, 'year')
        }
      } else {
        panel.date = panel.date.add(val, 'month')
      }
    }

    const setPanelVisible = (bool: boolean) => {
      datePickerPanelVisible.value = bool
    }

    const handleBlur = () => {
      setPanelVisible(false)
    }
    const active = ref(false)
    const afterEnter = (el: HTMLElement) => {
      el.classList.add('popper-slide-enter-after')
      active.value = true
    }

    const afterLeave = (el: HTMLElement) => {
      el.classList.remove('popper-slide-enter-after')
      active.value = false
    }

    return {
      singlePicker,
      singlePopper,
      model,
      classes,
      datePickerPanelVisible,
      handleFocus,
      handleBlur,
      panel,
      changePanelDate,
      updatePanelDate,
      updatePanelTime,
      setPanelVisible,
      afterEnter,
      afterLeave,
      active
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .ti-date-single-picker {
    display: inline-block;
    width: 220px;
    height: 40px;
  }
}
.ti-date-picker_popper {
  transition: all 0.25s ease;
  transform-origin: top center;
}
.popper-slide-enter-active,
.popper-slide-leave-active {
  opacity: 1;
  transition: opacity 0.25s ease;
  .ti-date-picker_popper {
    transform: scaleY(1);
  }
}
.popper-slide-enter-from,
.popper-slide-leave-to {
  opacity: 0;
  .ti-date-picker_popper {
    transform: scaleY(0);
  }
}
</style>
