# TimePicker 选择器

用于选择或输入时分秒

## 基本用法

:::demo
```vue
<template>
  <TiTimePicker v-model="time" ></TiTimePicker>
</template>
<script setup>
import { ref } from 'vue'
const time = ref('')
</script>
```
:::

## 选择器视图类型 type
共六种类型：时分秒（ `hms` ）、时分（ `hm` ）、分秒（ `ms` ）、时（ `h` ）、分（ `m` ）、秒（ `s` ）。


:::demo 默认类型为  `hms` 。
```vue
<template>
  <TiTimePicker v-model="time1"></TiTimePicker>
  <TiTimePicker v-model="time2" type="hm" format="HH时mm分"></TiTimePicker>
  <TiTimePicker v-model="time3" type="ms" format="mm分ss秒"></TiTimePicker>
</template>
<script setup>
import { ref } from 'vue'
const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
</script>
```
:::

## TimePicker 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model    | 绑定值 | string                           | —          | —      |
| type     | 视图类型   | string  | hms / hm / ms / h / m / s                       | hms    |



