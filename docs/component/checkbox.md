# Checkbox 多选框
复选框与单选按钮不同，用户通过点击就可以实现选中或取消，而且不限制选中的数量。

## 基础用法
单独使用可以表示两种状态之间的切换。

:::demo 通过 `label` 属性定义多选框的名称。
```vue
<template>
  <ti-checkbox v-model="checked" label="多选框"></ti-checkbox>
  <span>当前值：{{checked}}</span>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```
:::

## 多选框的类型 type
共五种类型：主要（ `primary` ）、成功（ `success` ）、信息（ `info` ）、警告（ `warning` ）、危险（ `danger` ）。

:::demo
```vue
<template>
  <ti-checkbox v-model="checked" label="primary" size="large"></ti-checkbox>
  <ti-checkbox v-model="checked" label="success" type="success"></ti-checkbox>
  <ti-checkbox v-model="checked" label="info" type="info"></ti-checkbox>
  <ti-checkbox v-model="checked" label="warning" type="warning"></ti-checkbox>
  <ti-checkbox v-model="checked" label="danger" type="danger"></ti-checkbox>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```
:::

## 真假 label 与真假 value
通过 `true-label` 属性与 `false-label` 属性定义真假 `label`；通过 `true-value` 属性与 `false-value` 属性定义真假 `value`。

:::demo
```vue
<template>
  <ti-checkbox v-model="checked" true-label="true-label" false-label="false-label" true-value="trueValue" false-value="falseValue"/>
  <span>当前值：{{checked}}</span>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref('trueValue')
</script>
```
:::

## 禁用/只读
多选框禁用状态和只读状态。

设置 `disabled` 属性和 `readonly` 属性即可。

:::demo
```vue
<template>
  <ti-checkbox v-model="isDisabled" label="禁用/只读" />
  <ti-checkbox v-model="disableItem" label="禁用项示例" :disabled="isDisabled" />
  <ti-checkbox v-model="readonlyItem" label="只读项示例" :readonly="isDisabled" />
  <ti-checkbox v-model="referenceItem" label="参考项" />
</template>
<script setup>
import { ref } from 'vue'
const isDisabled = ref(false)
const disableItem = ref(false)
const readonlyItem = ref(false)
const referenceItem = ref(false)
</script>
```
:::

## 设置宽度 width
当 `label` 过长时，可设置 `width` 属性加以控制。

:::demo
```vue
<template>
  <ti-checkbox
    width="10em"
    v-model="checked"
    true-label="这label很长很长很长很长很长很长很长很长"
    false-label="这label很短"
  />
  <ti-checkbox
    v-model="checked"
    true-label="这label很长很长很长很长很长很长很长很长"
    false-label="参考项"
  />
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```
:::

## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `ti-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。
在 `ti-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 `checkbox` 按钮后的介绍。
`label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

:::demo
```vue
<template>
  <ti-checkbox-group v-model="checkedList" @change="handleGroupChange">
    <ti-checkbox v-for="weekday in week" :label="weekday" :key="weekday" />
  </ti-checkbox-group>
  <span> checkedList：{{ checkedList }}</span>
</template>
<script setup>
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
const checkedList = ref(['星期二', '星期六'])
const handleGroupChange = (val) => {
  console.log(val)
}
</script>
```
:::

## 全选/反选以及中间状态
`indeterminate` 属性用以表示 `checkbox` 的不确定状态，一般用于实现全选的效果。

:::demo
```vue
<template>
  <ti-checkbox
    v-model="checkAll"
    :label="isIndeterminate ? '中间状态' : checkAll ? '全选' : '未选'"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  />
  <ti-checkbox-group v-model="checkedNums" @change="handleCheckedNumsChange">
    <ti-checkbox v-for="num in nums" :label="num" :key="num" />
  </ti-checkbox-group>
  <span> checkedNums：{{ checkedNums }}</span>
</template>
<script setup>
import { ref } from 'vue'
const checkAll = ref(false)
const isIndeterminate = ref(true)
const nums = [1, 2, 3, 4, 5]
const checkedNums = ref([2, 5])
const handleCheckAllChange = (val) => {
  checkedNums.value = val ? nums : []
  isIndeterminate.value = false
}
const handleCheckedNumsChange = (list) => {
  const checkedCount = list.length
  checkAll.value = checkedCount === nums.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < nums.length
}
</script>
```
:::

## Checkbox 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model    | 选中项绑定值 | string / number / boolean    | —          | —      |
| label    | 多选框名称 | string / number | —                                         | —      |
| size     | 多选框尺寸 | string  | large / normal / small                            | normal |
| type     | 类型   | string  | primary / success / info / warning / danger         | primary |
| true-label | 选中时的名称 | string / number  | —                                    | —      |
| false-label | 没有选中时的名称 | string / number  | —                               | —      |
| true-value | 选中时的值 | string / number / boolean  | —                           | true   |
| false-value | 没有选中时的值 | string / number / boolean  | —                       | false  |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |
| width  | 多选框名称的宽度（可带单位。不带单位时，单位默认为 px。） | string / number | —   | —       |
| indeterminate | 是否中间状态，只负责样式控制 | boolean | —                            | false   |

## Checkbox 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| change    | 当绑定值变化时触发的事件 | value |

## Checkbox 插槽
| 插槽名      	| 说明           |
| ----------	| ------------- |
| —   	      | 自定义默认内容   |

## Checkbox-Group 属性
| 参数                      | 说明    | 类型     | 可选值                             | 默认值  |
| ------------------------ | ------ | ------- | ---------------------------------- | ------- |
| model-value / v-model    | 绑定值  | array   | —                                  | []      |

## Checkbox-Group 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| change    | 当绑定值变化时触发的事件 | value |

## Checkbox-Group 插槽
| 插槽名      	| 说明           |
| ----------	| ------------- |
| —   	      | 自定义默认内容   |
