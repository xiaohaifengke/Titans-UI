<template>
  <div class="time-picker-demo">
    <TiTimePicker v-model="value1" />
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
