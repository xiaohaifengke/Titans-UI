<template>
  <div class="app-container">
    this is story's app component
    <TiIcon icon="loading"></TiIcon>
    <IconDemo></IconDemo>
  </div>
</template>

<script>
import IconDemo from './pages/normal/icon.vue'
export default {
  name: 'app',
  components: { IconDemo }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-container {
  display: block;
}
</style>
