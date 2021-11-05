<template>
  <table class="ti-month-panel">
    <tbody>
      <tr v-for="row in 4" :key="row">
        <td
          @click.stop="
            $emit('update:panelDate', months[getDataIndex(row, col)].m)
          "
          v-for="col in 3"
          :key="col"
          class="ti-date-picker_td--body"
        >
          <span
            class="ti-date-picker_panel--text"
            :class="{
              selected: months[getDataIndex(row, col)].selected,
              current: months[getDataIndex(row, col)].curMonth
            }"
            >{{ months[getDataIndex(row, col)].month }}</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCreateGetDataIndex } from '../use/useMethods'
import { useGenerateMonths } from '../utils'

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
  emits: [],
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

<style lang="scss" rel="stylesheet/scss">
.ti-month-panel {
  width: 100%;
  height: 288px;
  text-align: center;
  .ti-date-picker_panel--text {
    display: inline-block;
    padding: 3px 5px;
    line-height: 20px;
    border-radius: 2px;

    &:hover {
      color: map-get($defaultThemeMap, primary);
      background-color: #f6f6f6;
    }
    &.selected {
      color: #fff;
      background-color: map-get($defaultThemeMap, primary);
    }
  }
}
</style>
