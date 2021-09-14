<template>
  <ul class="icon-list">
    <li
        v-for="icon in icons"
        :key="icon"
        class="icon-wrapper">
      <ti-icon :icon="icon" />
      <div class="name">{{icon}}</div>
    </li>
  </ul>
</template>

<script setup>
import { icons } from './icons';
</script>

<style scoped lang="scss">
.icon-list {
  margin: 0;
  padding: 0;
}
.icon-wrapper {
  display: inline-block;
  width: 100px;
  font-size: 12px;
  text-align: center;
}
:deep(.ti-icon) {
  font-size: 42px;
  height: 76px;
  line-height: 76px;
}
.name {
  line-height: 24px;
}
</style>
