<template>
  <div class="ti-date-picker-demo">
    <p>default</p>
    <TiDatePicker v-model="value1" />
    <p>date</p>
    <TiDatePicker v-model="value2" mode="date" />
    <p>month</p>
    <TiDatePicker v-model="value3" mode="month" />
    <p>year</p>
    <TiDatePicker v-model="value4" mode="year" />
    <p>datetime</p>
    <TiDatePicker
      v-model="value5"
      mode="datetime"
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
      value5: ''
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.ti-date-picker-demo {
  height: 800px;
}
</style>
