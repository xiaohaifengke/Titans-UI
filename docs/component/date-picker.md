# DatePicker 日期选择器
用于选择或输入日期

## 选择日
以「日」为基本单位，基础的日期选择控件。

:::demo
```vue
<template>
  <TiDatePicker
    placeholder="请选择日期"
    v-model="date1"
  />
</template>
<script setup>
import { ref } from 'vue'
const date1 = ref('')
</script>
```
:::

## 选择日期范围
可在一个选择器中便捷地选择一个时间范围。

设置 `range` 属性即可启用范围选择，设置 `start` 属性和 `end` 属性绑定开始和结束时间。

:::demo 
```vue
<template>
  <TiDatePicker
    startPlaceholder="请选择开始日期"
    endPlaceholder="请选择结束日期"
    v-model:start="start"
    v-model:end="end"
    range
    clearable
  />
</template>
<script setup>
import { ref } from 'vue'
const start = ref(null)
const end = ref(null)
</script>
```
:::