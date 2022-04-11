<template>
  <ClientOnly>
    <ul class="icon-list">
      <li v-for="icon in icons" :key="icon" class="icon-wrapper">
        <ti-icon :icon="icon" />
        <div class="name">{{ icon }}</div>
      </li>
    </ul>
  </ClientOnly>
</template>

<script setup lang="ts">
import {icons} from './icons'
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.icon-list {
  padding: 0;
  margin: 0;
}

.icon-wrapper {
  display: inline-block;
  width: 100px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}

:deep(.ti-icon) {
  height: 76px;
  font-size: 42px;
  line-height: 76px;
  color: #333;
  transition: font-size 0.25s linear, width 0.25s linear;

  &:hover {
    font-size: 100px;
  }
}

.name {
  line-height: 24px;
  color: #666;
}
</style>
