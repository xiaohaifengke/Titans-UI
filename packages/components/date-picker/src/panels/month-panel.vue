<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body ti-month-panel-wrapper">
      <table class="ti-month-panel">
        <tbody>
          <tr v-for="row in 4" :key="row">
            <td
              @click.stop="
                $emit('update:panelDate', months[getDataIndex(row, col)].date)
              "
              v-for="col in 3"
              :key="col"
              class="ti-date-picker_td--body"
            >
              <div
                class="ti-month_panel--text"
                :class="{
                  selected: months[getDataIndex(row, col)].selected,
                  current: months[getDataIndex(row, col)].curMonth
                }"
              >
                <span>
                  {{ months[getDataIndex(row, col)].month }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCreateGetDataIndex } from '../use/useMethods'
import { useGenerateMonths } from '../use/useGenerateMonths'

export default defineComponent({
  name: 'TiMonthPanel',
  props: {
    selectedValue: String,
    panelDate: [String, Number],
    valueFormat: {
      type: String,
      default: 'YYYY-MM'
    }
  },
  emits: ['update:panelDate'],
  setup(props) {
    const getDataIndex = useCreateGetDataIndex('month')
    // 日期列表
    const months = computed(() =>
      useGenerateMonths(props.panelDate, props.selectedValue, props.valueFormat)
    )
    return {
      months,
      getDataIndex
    }
  }
})
</script>
