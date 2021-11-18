<template>
  <div class="ti-date-picker-demo">
    <p>default</p>
    <TiDatePicker v-model="value1" />
    <!--    <p>date</p>-->
    <!--    <TiDatePicker v-model="value2" mode="date" />-->
    <!--    <p>month</p>-->
    <!--    <TiDatePicker v-model="value3" mode="month" />-->
    <!--    <p>year</p>-->
    <!--    <TiDatePicker v-model="value4" mode="year" />-->
    <p>date</p>
    <TiDatePicker
      v-model="dateValue"
      mode="date"
      format="YYYY-MM-DD HH:mm:ss"
    />
    <p>datetime</p>
    <TiDatePicker
      v-model="value5"
      mode="datetime"
      format="YYYY-MM-DD HH:mm:ss"
    />
    <p>datetime range</p>
    <TiDatePicker
      v-model:start="datetimeRangeValue.start"
      v-model:end="datetimeRangeValue.end"
      range
      mode="datetime"
      format="YYYY-MM-DD HH:mm:ss"
      @update:start="test"
    />
    <span>start: {{ datetimeRangeValue.start }}</span>
    <span>end: {{ datetimeRangeValue.end }}</span>
    <p>date range</p>
    <TiDatePicker
      v-model:start="rangeValue.start"
      v-model:end="rangeValue.end"
      range
      mode="date"
      format="YYYY-MM-DD"
    />
    <span>start: {{ rangeValue.start }}</span>
    <span>end: {{ rangeValue.end }}</span>
    <p>date</p>
    <TiDatePicker
      v-model="dateValue"
      mode="date"
      format="YYYY-MM-DD HH:mm:ss"
    />
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      dateValue: '',
      value5: '',
      datetimeRangeValue: {
        start: null,
        end: null
      },
      rangeValue: {
        start: null,
        end: null
      }
    }
  },
  methods: {
    test(p) {
      console.log('@update:start ->', p)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.ti-date-picker-demo {
  height: 800px;
}
</style>
