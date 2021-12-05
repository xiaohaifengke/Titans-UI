<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body ti-year-panel-wrapper">
      <table class="ti-year-panel">
        <tbody>
          <tr v-for="row in 4" :key="row">
            <td
              @click.stop="
                $emit('update:panelDate', years[getDataIndex(row, col)].date)
              "
              v-for="col in 3"
              :key="col"
              class="ti-date-picker_td--body"
              :class="years[getDataIndex(row, col)].yearFlag"
            >
              <div
                class="ti-year_panel--text"
                :class="{
                  selected: years[getDataIndex(row, col)].selected,
                  current: years[getDataIndex(row, col)].curYear
                }"
              >
                <span>
                  {{ years[getDataIndex(row, col)].y }}
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
import { useGenerateYears } from '../use/useGenerateYears'

export default defineComponent({
  name: 'TiYearPanel',
  props: {
    selectedValue: String,
    panelDate: [String, Number],
    valueFormat: {
      type: String,
      default: 'YYYY'
    }
  },
  emits: ['update:panelDate'],
  setup(props) {
    const getDataIndex = useCreateGetDataIndex('year')
    // 日期列表
    const years = computed(() =>
      useGenerateYears(props.panelDate, props.selectedValue, props.valueFormat)
    )
    return {
      years,
      getDataIndex
    }
  }
})
</script>
