<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body">
      <table class="ti-date-panel">
        <thead class="ti-date-picker_body--head">
          <tr>
            <td
              v-for="week in weeks"
              :key="week"
              class="ti-date-picker_td--head"
            >
              {{ week }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in 6" :key="row">
            <td
              @click.stop="
                $emit('update:panelDate', dates[getDataIndex(row, col)].date)
              "
              v-for="col in 7"
              :key="col"
              class="ti-date-picker_td--body"
              :class="dates[getDataIndex(row, col)].monthFlag"
            >
              <span
                class="ti-date-picker_panel--text"
                :class="{
                  selected: dates[getDataIndex(row, col)].selected,
                  current: dates[getDataIndex(row, col)].today
                }"
                >{{ dates[getDataIndex(row, col)].day }}</span
              >
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
import { useGenerateDays } from '../utils'

export default defineComponent({
  name: 'TiDatePanel',
  props: {
    selectedValue: String,
    panelDate: [String, Number],
    valueFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    }
  },
  emits: ['update:panelDate'],
  setup(props) {
    const getDataIndex = useCreateGetDataIndex('date')
    // 日期列表
    const dates = computed(() =>
      useGenerateDays(props.panelDate, props.selectedValue, props.valueFormat)
    )
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      dates,
      getDataIndex
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
.ti-date-panel {
  width: 100%;
  height: 288px;
  text-align: center;

  .ti-date-picker_td--head {
    height: 30px;
  }

  .current-month {
    .ti-date-picker_panel--text {
      display: inline-block;
      width: 20px;
      height: 20px;
      padding: 3px;
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
}
</style>
