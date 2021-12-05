<template>
  <div class="app-container">
    this is story's app component
    <TiIcon icon="loading"></TiIcon>
    <IconDemo></IconDemo>
    <ButtonDemo></ButtonDemo>
    <TimePickerDemo></TimePickerDemo>
  </div>
</template>

<script>
import IconDemo from './pages/normal/icon.vue'
import ButtonDemo from './pages/form/button.vue'
import TimePickerDemo from './pages/form/time-picker.vue'
export default {
  name: 'app',
  components: { IconDemo, ButtonDemo, TimePickerDemo }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-container {
  display: block;
}
</style>
