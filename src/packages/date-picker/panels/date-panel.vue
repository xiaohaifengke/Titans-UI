<template>
  <div class="ti-date-picker_wrapper">
    <slot></slot>
    <div class="ti-date-picker_body">
      <table class="ti-date-panel" cellpadding="0" cellspacing="0">
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
              <div
                class="ti-date_panel--text"
                :class="{
                  selected: dates[getDataIndex(row, col)].selected,
                  current: dates[getDataIndex(row, col)].today
                }"
              >
                <span>
                  {{ dates[getDataIndex(row, col)].day }}
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
@include themes {
  .ti-date-panel {
    //width: 100%;
    //height: 288px;
    margin: 0 auto;
    text-align: center;
    table-layout: fixed;

    .ti-date-picker_td--head {
      height: 30px;
      border-bottom: 1px solid #eee;
    }

    .current-month {
      .ti-date_panel--text {
        display: inline-block;
        padding: 3px;
        border-radius: 50%;

        &:hover {
          color: map-get($defaultThemeMap, primary);
          background-color: transparentize(
            map-get($defaultThemeMap, primary),
            0.8
          );
        }

        & > span {
          $size: 24px;

          display: inline-block;
          width: $size;
          height: $size;
          line-height: $size;
          border-radius: 50%;
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
}
</style>
