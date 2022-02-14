# DatePicker 日期时间选择器
用于选择或输入日期时间

## 选择日期
基础的日期选择控件。

:::demo
```vue
<template>
  <TiDatePicker v-model="date1" placeholder="请选择日期" ></TiDatePicker>
</template>
<script setup>
import { ref } from 'vue'
const date1 = ref('')
</script>
```
:::

## 选择器模式 mode
共有四种模式：年份（ `year` ）、月份（ `month` ）、日期（ `date` ）、日期时间（ `datetime` ）。

`mode="datetime"` 时可以在同一个选择器里选择日期和时间。

:::demo
```vue
<template>
  <TiDatePicker clearable placeholder="请选择年份" v-model="date1" mode="year" />
  <TiDatePicker clearable placeholder="请选择月份" v-model="date2" mode="month" />
  <TiDatePicker clearable placeholder="请选择日期" v-model="date3" mode="date" />
  <TiDatePicker clearable placeholder="请选择日期时间" v-model="date4" mode="datetime" />
</template>
<script setup>
import { ref } from 'vue'
const date1 = ref('')
const date2 = ref('')
const date3 = ref('')
const date4 = ref('')
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
    v-model:start="startDate"
    v-model:end="endDate"
    range
    clearable
  />
  <TiDatePicker
    startPlaceholder="请选择开始日期时间"
    endPlaceholder="请选择结束日期时间"
    v-model:start="startDateTime"
    v-model:end="endDateTime"
    range
    mode="datetime"
    clearable
  />
</template>
<script setup>
import { ref } from 'vue'
const startDate = ref(null)
const endDate = ref(null)
const startDateTime = ref(null)
const endDateTime = ref(null)
</script>
```
:::

## 日期格式
使用 `format` 指定输入框的格式。 使用 `value-format` 指定绑定值的格式。

默认情况下，组件接受并返回的格式为：年份（YYYY）、月份（YYYY-MM）、日期（YYYY-MM-DD）、日期时间（YYYY-MM-DD HH:mm:ss）。

在 [这里](https://day.js.org/docs/zh-CN/display/format) 查看 Day.js 支持的 format 参数。

<br/>

::: warning Bugs
1. mode为 year,month时的样式问题待修复
:::

## DatePicker 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model    | 绑定值 | string                           | —          | —      |
| mode     | 类型   | string  | year / month / date / datetime                      | primary |
| placeholder    | 非范围选择时的占位内容 | string | —                                 | —      |
| start-placeholder  | 范围选择时开始日期的占位内容 | string | —                        | —      |
| end-placeholder    | 范围选择时结束日期的占位内容 | string | —                        | —      |
| size     | 多选框尺寸 | string  | large / normal / small / mini                    | normal |
| format    | 显示在输入框中的格式（年份（YYYY）、月份（YYYY-MM）、日期（YYYY-MM-DD）、日期时间（YYYY-MM-DD HH:mm:ss）） | string | 请查看 [日期格式](https://xiaohaifengke.github.io/Titans-UI/component/date-picker.html#日期格式) | —      |
| value-format    | 可选，绑定值的格式。 不指定时同 `format` 。 | string | 请查看 [日期格式](https://xiaohaifengke.github.io/Titans-UI/component/date-picker.html#日期格式) | —      |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |
| clearable | 是否显示清除按钮 | boolean | —                                          | false   |
| range     | 是否选择范围   | boolean  | —                                          | false   |
| start     | 选择范围时的开始日期的绑定值   | string  | —                              | —       |
| end       | 选择范围时的结束日期的绑定值   | string  | —                              | —       |
| range-separator | 选择范围时的分隔符     | string  | —                              | ~       |

## DatePicker 事件
| 事件名        | 说明                        | 回调参数                 |
| ----------   | -------------------------- | ----------------------- |
| update:start | 在选择范围时的开始日期变化时触发 | 选择范围时的开始日期的绑定值 |
| update:end   | 在选择范围时的结束日期变化时触发 | 选择范围时的结束日期的绑定值 |
| clear        | 在清除选择器中的值时触发       | —                       |