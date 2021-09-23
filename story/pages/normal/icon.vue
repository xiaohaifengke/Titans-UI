<template>
  <ti-icon icon="close" @click="testClick" />
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
const testClick = (e) => {
  console.log('icon click', e);
};
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
  cursor: pointer;
}
:deep(.ti-icon) {
  font-size: 42px;
  height: 76px;
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
