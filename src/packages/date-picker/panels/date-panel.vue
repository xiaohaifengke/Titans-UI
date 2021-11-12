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
            class="ti-date-panel_body--item"
            :class="item.monthFlag"
          >
            <div
              class="ti-date_panel--text"
              :class="{
                selected: item.selected,
                current: item.today
              }"
            >
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
    margin: 0 auto;
    text-align: center;
    table-layout: fixed;

    .ti-date-panel_head,
    .ti-date-panel_body {
      @include plainTagResetMixin;
    }

    .ti-date-panel_body {
      padding-top: 5px;
    }

    .ti-date-panel_head--item {
      display: inline-block;
      width: 32px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #eee;
    }

    .ti-date-panel_body--item {
      @include plainTagResetMixin;

      display: inline-block;
      padding: 1px;
      cursor: pointer;

      .ti-date_panel--text {
        display: inline-block;
        padding: 3px;
        border-radius: 50%;

        & > span {
          $size: 24px;

          display: inline-block;
          width: $size;
          height: $size;
          line-height: $size;
          border-radius: 50%;
        }
      }
    }

    .current-month {
      .ti-date_panel--text {
        &:hover {
          color: map-get($defaultThemeMap, primary);
          background-color: transparentize(
            map-get($defaultThemeMap, primary),
            0.8
          );
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

.flip-date-list-move {
  transition: transform 0.25s ease-out;
}
</style>
