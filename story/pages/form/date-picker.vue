<template>
  <div class="ti-date-picker-demo">
    <TiDatePicker v-model="value1" />
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.ti-date-picker-demo {
  height: 800px;
}
</style>
