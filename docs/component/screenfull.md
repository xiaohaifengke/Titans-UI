# Screenfull 全屏组件

## 基础用法

:::demo 
```vue
<template>
  <!--  <div ref="screenfullElement">anyone else Element</div>-->
  <TiScreenfull
    style="font-size: 30px;"
    name="screenfull"
    :screenfullElement="screenfullElement"
  />
</template>
<script setup>
import { ref } from 'vue'
const screenfullElement = ref(null)
</script>
```
:::

## Screenfull 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| screenfull-element | 需要全屏的元素 | DOM | —                                       | `<html>`  |
