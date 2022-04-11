# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法
绑定 `v-model` 到一个 `Boolean` 类型的变量。

:::demo 
```vue
<template>
  <ti-switch v-model="value" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## 开关的类型 type
共五种类型：主要（ `primary` ）、成功（ `success` ）、信息（ `info` ）、警告（ `warning` ）、危险（ `danger` ）。

:::demo 
```vue
<template>
  <ti-switch v-model="value" type="primary"/>
  <ti-switch v-model="value" type="success"/>
  <ti-switch v-model="value" type="info"/>
  <ti-switch v-model="value" type="warning"/>
  <ti-switch v-model="value" type="danger"/>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## 自定义颜色
除了通过 `type` 属性控制颜色外，还可以自由的设置开关的颜色。

可以使用 `on-color` 属性与 `off-color` 属性来设置开关的背景色。
使用 `handle-on-color` 属性与 `handle-off-color` 属性来设置开关按钮的颜色。
设置的颜色会覆盖 `type` 属性控制的颜色。
:::demo 
```vue
<template>
  <div>
    <ti-switch v-model="value" />
    <ti-switch
      v-model="value"
      on-color="rgba(150, 0, 255, 1)"
      off-color="rgba(130, 90, 155, 1)"
    />
    <ti-switch
      v-model="value"
      on-color="rgba(22, 226, 226, 0.2)"
      off-color="rgba(15, 73, 100, 0.6)"
      handle-on-color="rgba(0, 255, 255, 1)"
      handle-off-color="rgba(48, 105, 105, 1)"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## 自定义尺寸
设置 `width` 和 `height` 属性指定宽和高。

:::demo
```vue
<template>
  <ti-switch
    v-model="value"
    type="warning"
    :width="60"
    :height="30"
  />
  <ti-switch
    v-model="value"
    type="danger"
    width="80"
    height="40"
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## 文字描述
使用 `on-text` 属性与 `off-text` 属性来设置开关的文字描述。

:::demo
```vue
<template>
  <ti-switch v-model="value" on-text="开启" off-text="关闭" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## 禁用/只读
开关的禁用状态和只读状态。

设置 `disabled` 属性和 `readonly` 属性即可。

:::demo
```vue
<template>
  <ti-switch
    v-model="isDisabled"
    on-text="禁用/只读开启"
    off-text="禁用/只读关闭"
  />

  <ti-switch
    v-model="disableItem"
    on-text="禁用项开启"
    off-text="禁用项关闭"
    :disabled="isDisabled"
  />

  <ti-switch
    v-model="readonlyItem"
    on-text="只读项开启"
    off-text="只读项关闭"
    :readonly="isDisabled"
  />

  <ti-switch
    class="disabled-demo"
    v-model="referenceItem"
    type="success"
    on-text="参考项开启"
    off-text="参考项关闭"
  />
</template>
<script setup>
import { ref } from 'vue'
const isDisabled = ref(true)
const disableItem = ref(true)
const readonlyItem = ref(true)
const referenceItem  = ref(false)
</script>
```
:::

## 扩展的 value 类型
设置 `on-value` 和 `off-value` 属性，接受 `Boolean`, `String` 或 `Number` 类型的值。

:::demo
```vue
<template>
  <ti-switch
    v-model="value"
    on-text="ON"
    off-text="OFF"
    on-value="开启"
    off-value="关闭"
    width="75"
    height="30"
  />
  <span style="margin-left: 10px;">绑定值: {{value}}</span>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
:::

## Switch 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model    | 绑定值     | string / number / boolean    | —          | false   |
| type     | 类型   | string  | primary / success / info / warning / danger         | primary |
| on-color    | switch的状态为 on 时的背景色 | string | —                                 | —       |
| off-color   | switch的状态为 off 时的背景色 | string | —                                | —       |
| handle-on-color    | switch的状态为 on 时开关按钮的颜色 | string | —                     | —       |
| handle-off-color   | switch的状态为 off 时开关按钮的颜色 | string | —                    | —       |
| width   | switch的宽度，无需带单位，自动带上单位 px | string / number | —                | —       |
| height   | switch的宽度，无需带单位，自动带上单位 px | string / number | —               | —       |
| on-value    | switch的状态为 on 时的值     | string / number / boolean    | —         | true    |
| off-value    | switch的状态为 off 时的值  | string / number / boolean    | —         | false   |
| on-text    | switch的状态为 on 时的文字描述  | string                      | —        | —       |
| off-text   | switch的状态为 off 时的文字描述  | string                      | —       | —       |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |

## Switch 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| change    | 当绑定值变化时触发的事件 | value |