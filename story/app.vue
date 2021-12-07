<template>
  <AppHeader class="header" />
  <AppMenu class="sidebar" />
  <div class="app-container">
    <AppContent></AppContent>
  </div>
</template>

<script>
import AppHeader from './components/app/app-header.vue'
import AppMenu from './components/app/app-menu.vue'
import AppContent from './components/app/app-content.vue'
export default {
  name: 'app',
  components: {
    AppMenu,
    AppHeader,
    AppContent
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-container {
  position: relative;
  display: block;
  padding-top: 60px;
  padding-left: 320px;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 100;
  width: 320px;
  height: calc(100vh - 60px);
  border-right: 1px solid rgba(60, 60, 67, 0.12);
}
</style>
