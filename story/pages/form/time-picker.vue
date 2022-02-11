<template>
  <div class="time-picker-demo">
    <TiTimePicker v-model="value1" format="HH时mm分ss秒" />
    <TiTimePicker v-model="value1" type="hm" />
  </div>
</template>

<script>
export default {
  name: 'TimePickerDemo',
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.time-picker-demo {
  height: 800px;
}
</style>
