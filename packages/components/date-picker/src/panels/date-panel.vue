<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body">
      <div class="ti-date-panel">
        <ul class="ti-date-panel_head">
          <li>
            <span
              v-for="week in weeks"
              :key="week"
              class="ti-date-panel_head--item"
            >
              {{ week }}
            </span>
          </li>
        </ul>
        <transition-group
          name="flip-date-list"
          class="ti-date-panel_body"
          tag="ul"
        >
          <li
            v-for="item in dates"
            :key="item.key"
            @click.stop="$emit('update:panelDate', item.date)"
            @mouseenter="mouseEnterHandler(item)"
            class="ti-date-panel_body--item"
            :class="{
              selected: item.selected,
              current: item.today,
              'range-selected': item.isInRange,
              'range-start': item.rangeStart,
              'range-end': item.rangeEnd,
              [item.monthFlag]: true
            }"
          >
            <div class="ti-date_panel--text">
              <span>
                {{ item.day }}
              </span>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCreateGetDataIndex } from '../use/useMethods'
import { useGenerateDates } from '../use/useGenerateDates'
import { DateInfo } from '../use/useGenerateDates'

export default defineComponent({
  name: 'TiDatePanel',
  props: {
    selectedValue: [String, Array],
    panelDate: [String, Number],
    valueFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    range: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:panelDate'],
  setup(props, { emit }) {
    const getDataIndex = useCreateGetDataIndex('date')
    // 日期列表
    const dates = computed(() =>
      useGenerateDates(
        props.panelDate,
        props.selectedValue as any,
        props.valueFormat
      )
    )
    const mouseEnterHandler = (item: DateInfo) => {
      if (props.range && item.monthFlag === 'current-month') {
        emit('update:panelDate', item.date, true)
      }
    }
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      dates,
      getDataIndex,
      mouseEnterHandler
    }
  }
})
</script>
