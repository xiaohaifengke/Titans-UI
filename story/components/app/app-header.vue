<template>
  <div class="app-header">
    <div class="title" @click="goHome">TitansUI</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  padding-left: 15px;
  background-color: #fff;
  border-bottom: 1px solid rgba(60, 60, 67, 0.12);

  .title {
    line-height: 60px;
    cursor: pointer;
  }
}
</style>
