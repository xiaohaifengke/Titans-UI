<template>
  <div class="ti-date-picker-panel-header">
    <TiIcon
      v-if="panelMode !== 'time'"
      icon="d-arrow-left"
      @click="$emit('changePanelDate', -12)"
    />
    <TiIcon
      v-if="panelMode === 'date'"
      icon="arrow-left"
      @click="$emit('changePanelDate', -1)"
    />
    <span
      v-if="panelMode !== 'time'"
      class="ti-date-picker_year"
      @click="$emit('update:panelMode', 'year')"
      >{{ panelYearFilter(year) }}</span
    >
    <span
      v-if="panelMode === 'date'"
      class="ti-date-picker_month"
      @click="$emit('update:panelMode', 'month')"
      >{{ month }} 月</span
    >
    <span
      v-if="pickerMode === 'datetime' && panelMode === 'time'"
      class="ti-date-picker_date"
      @click="$emit('update:panelMode', 'date')"
    >
      {{ `${panelYearFilter(year)} ${month}月 ${date}日` }}
    </span>
    <span
      v-if="pickerMode === 'datetime' && panelMode === 'date'"
      class="ti-date-picker_date"
      @click="$emit('update:panelMode', 'time')"
    >
      {{ time }}
    </span>
    <TiIcon
      v-if="panelMode !== 'time'"
      icon="d-arrow-right"
      @click="$emit('changePanelDate', 12)"
    />
    <TiIcon
      v-if="panelMode === 'date'"
      icon="arrow-right"
      @click="$emit('changePanelDate', 1)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TiIcon from '../../icon'

export default defineComponent({
  name: 'TiDatePickerPanelHeader',
  components: { TiIcon },
  props: {
    pickerMode: {
      type: String,
      default: 'date'
    },
    panelMode: {
      type: String,
      default: 'date'
      // validator(val: string) {
      //   return ['year', 'month', 'date', 'time'].includes(val)
      // }
    },
    year: [String, Number],
    month: [String, Number],
    date: [String, Number],
    time: [String, Number]
  },
  emits: ['update:panelMode', 'changePanelDate'],
  setup(props) {
    const panelYearFilter = (year: number) => {
      if (props.panelMode === 'year') {
        const start = parseInt(`${year / 10}`) * 10
        const end = start + 9
        return `${start} 年 - ${end} 年`
      } else {
        return `${year} 年`
      }
    }

    return {
      panelYearFilter
    }
  }
})
</script>

<style lang="scss" rel="stylesheet/scss">
@include themes {
  .ti-date-picker-panel-header {
    padding: 5px 10px;
    font-size: map_get($defaultThemeMap, fontsize);
    font-weight: 500;
    text-align: center;

    .ti-icon-d-arrow-left,
    .ti-icon-arrow-left,
    .ti-icon-arrow-right,
    .ti-icon-d-arrow-right {
      padding: 0 3px;
      margin-top: 3px;
      cursor: pointer;

      &:hover {
        color: map-get($defaultThemeMap, primary);
      }
    }

    .ti-icon-d-arrow-left {
      float: left;
    }

    .ti-icon-arrow-left {
      float: left;
    }

    .ti-icon-arrow-right {
      float: right;
    }

    .ti-icon-d-arrow-right {
      float: right;
    }

    .ti-date-picker_year,
    .ti-date-picker_month,
    .ti-date-picker_date {
      padding: 0 3px;
      cursor: pointer;

      &:hover {
        color: map-get($defaultThemeMap, primary);
      }
    }
  }
}
</style>
