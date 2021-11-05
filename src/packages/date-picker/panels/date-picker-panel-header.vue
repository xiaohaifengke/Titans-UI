<template>
  <div class="ti-date-picker-panel-header">
    <TiIcon icon="d-arrow-left" @click="$emit('changePanelDate', -12)" />
    <TiIcon icon="arrow-left" @click="$emit('changePanelDate', -1)" />
    <span class="ti-date-picker_year" @click="$emit('update:mode', 'year')">{{
      panelYearFilter(year)
    }}</span>
    <span
      v-if="mode === 'date'"
      class="ti-date-picker_month"
      @click="$emit('update:mode', 'month')"
      >{{ month }} 月</span
    >
    <TiIcon icon="d-arrow-right" @click="$emit('changePanelDate', 12)" />
    <TiIcon icon="arrow-right" @click="$emit('changePanelDate', 1)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TiIcon from '../../icon'

export default defineComponent({
  name: 'TiDatePickerPanelHeader',
  components: { TiIcon },
  props: {
    mode: {
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
  emits: ['update:mode', 'changePanelDate'],
  setup(props) {
    const panelYearFilter = (year: number) => {
      if (props.mode === 'year') {
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

<style scoped lang="scss" rel="stylesheet/scss">
.ti-date-picker-panel-header {
  padding: 10px;
  font-size: map_get($defaultThemeMap, fontsize);
  font-weight: 500;
  text-align: center;

  .ti-icon-d-arrow-left,
  .ti-icon-arrow-left,
  .ti-icon-arrow-right,
  .ti-icon-d-arrow-right {
    padding: 0 5px;
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
  .ti-date-picker_month {
    padding: 0 3px;
    cursor: pointer;
    &:hover {
      color: map-get($defaultThemeMap, primary);
    }
  }
}
</style>
