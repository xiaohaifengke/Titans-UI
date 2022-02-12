# Radio 单选框
在一组备选项中进行单选

## 基础用法
单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置 `v-model` 绑定变量， 选中意味着变量的值为相应 Radio `label` 属性的值， `label` 可以是 `String`、`Number` 或 `Boolean`。

:::demo 通过默认插槽传入单选框名称。若未通过插槽传入名称，则默认显示 `label` 属性的值。
```vue
<template>
  <div>
    <ti-radio v-model="radioValue" label="first"></ti-radio>
    <ti-radio v-model="radioValue" label="second"></ti-radio>
  </div>
  <div>
    <ti-radio v-model="radioValue" label="first">第一项</ti-radio>
    <ti-radio v-model="radioValue" label="second">第二项</ti-radio>
  </div>
  <span>当前值：{{radioValue}}</span>
</template>
<script setup>
import { ref } from 'vue'
const radioValue = ref('first')
</script>
```
:::

## 单选框的类型 type
共五种类型：主要（ `primary` ）、成功（ `success` ）、信息（ `info` ）、警告（ `warning` ）、危险（ `danger` ）。

:::demo
```vue
<template>
  <ti-radio v-model="radioValue" label="primary" size="large"></ti-radio>
  <ti-radio v-model="radioValue" label="success" type="success"></ti-radio>
  <ti-radio v-model="radioValue" label="info" type="info"></ti-radio>
  <ti-radio v-model="radioValue" label="warning" type="warning"></ti-radio>
  <ti-radio v-model="radioValue" label="danger" type="danger"></ti-radio>
</template>
<script setup>
import { ref } from 'vue'
const radioValue = ref(true)
</script>
```
:::

## 禁用/只读
单选框禁用状态和只读状态。

设置 `disabled` 属性和 `readonly` 属性即可。

:::demo
```vue
<template>
  <ti-checkbox v-model="isDisabled" label="禁用/只读" />
  <ti-radio v-model="radioValue" label="禁用" :disabled="isDisabled" />
  <ti-radio v-model="radioValue" label="只读" :readonly="isDisabled" />
  <ti-radio v-model="radioValue" label="参考项" />
</template>
<script setup>
import { ref } from 'vue'
const isDisabled = ref(false)
const radioValue = ref('')
</script>
```
:::

## 设置宽度 width
当 `label` 过长时，可设置 `width` 属性加以控制。

:::demo
```vue
<template>
  <ti-radio
    width="10em"
    v-model="radioValue"
    label="这label很长很长很长很长很长很长很长很长"
  />
  <ti-radio
    width="120"
    v-model="radioValue"
    label="这label更长长长长长长长长长长长长长长长长长长长长长"
  />
  <ti-radio width="110px" v-model="radioValue" label="这label很短很短很短很短" />
</template>
<script setup>
import { ref } from 'vue'
const radioValue = ref('这label很长很长很长很长很长很长很长很长')
</script>
```
:::

## 单选框组
适用于在多个互斥的选项中选择的场景。

结合 `ti-radio-group` 元素和子元素 `ti-radio` 可以实现单选组，为 `ti-radio-group` 绑定 `v-model`，
再为 每一个 `ti-radio` 设置好 `label` 属性即可，另外，还可以通过 `change` 事件来响应变化，
它会传入一个参数 `value` 来表示改变之后的值。

:::demo
```vue
<template>
  <ti-radio-group v-model="radioValue" @change="handleGroupChange">
    <ti-radio v-for="weekday in week" :label="weekday" :key="weekday" />
  </ti-radio-group>
  <span> radio value：{{ radioValue }}</span>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const week = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日'
]
const radioValue = ref('星期二')
const handleGroupChange = (val: string) => {
  console.log(`radio changed: ${val}`)
}
</script>
```
:::

::: warning Bugs
1. 单选框的名称通过默认插槽传入，为传入时显示 label 。
:::

## Radio 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model    | 选中项绑定值 | string / number / boolean    | —          | —      |
| label    | 单选框对应的值(如果未通过插槽传入单选框的名称时，会作为单选框的名称显示) | string / number | —    | —      |
| size     | 单选框尺寸 | string  | large / normal / small                            | normal |
| type     | 类型   | string  | primary / success / info / warning / danger         | primary |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |
| width  | 单选框名称的宽度（可带单位。不带单位时，单位默认为 px。） | string / number | —   | —       |

## Radio 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| change    | 当绑定值变化时触发的事件 | value |

## Radio 插槽
| 插槽名      	| 说明           |
| ----------	| ------------- |
| —   	      | 单选框名称   |

## Radio-Group 属性
| 参数                      | 说明    | 类型                         | 可选值         | 默认值   |
| ------------------------ | ------ | --------------------------- | -------------- | ------- |
| model-value / v-model    | 绑定值  | string / number / boolean   | —              | —       |

## Radio-Group 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| change    | 当绑定值变化时触发的事件 | value |

## Radio-Group 插槽
| 插槽名      	| 说明           |
| ----------	| ------------- |
| —   	      | 自定义默认内容   |
