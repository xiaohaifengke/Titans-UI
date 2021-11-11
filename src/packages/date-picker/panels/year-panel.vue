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
import { useGenerateYears } from '../utils'

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

<style lang="scss" rel="stylesheet/scss">
.ti-year-panel-wrapper {
  padding: 0 15px;
}
.ti-year-panel {
  width: 100%;
  height: 225px;
  text-align: center;
  table-layout: fixed;

  .current-decade {
    .ti-year_panel--text {
      display: inline-block;
      padding: 3px;
      line-height: 20px;
      border-radius: 50px;

      &:hover {
        color: map-get($defaultThemeMap, primary);
        background-color: transparentize(
          map-get($defaultThemeMap, primary),
          0.8
        );
      }

      & > span {
        display: inline-block;
        width: 58px;
        line-height: 28px;
        border-radius: 50px;
      }

      &.selected {
        color: #fff;
        background-color: transparentize(
          map-get($defaultThemeMap, primary),
          0.8
        );

        & > span {
          background-color: map-get($defaultThemeMap, primary);
        }
      }
    }
  }
}
</style>
