# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

:::demo 默认情况下，输入框如块级元素一样会占据其父元素(容器)的整个水平空间。可通过 style 控制输入框的宽度。
```vue
<template>
  <div>
    <ti-input v-model="value" placeholder="请输入内容" style="width: 220px;" />
  </div>
  <ti-input v-model="value" placeholder="请输入内容" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 禁用/只读
通过 `disabled` 属性和 `readonly` 属性指定是否禁用/只读 input 组件。

:::demo
```vue
<template>
  <div>
    <ti-input v-model="value" disabled  placeholder="请输入内容" />
  </div>
  <div>
    <ti-input v-model="value" readonly  placeholder="请输入内容" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 可清空
使用 `clearable` 属性即可得到一个可清空的输入框。

:::demo
```vue
<template>
  <ti-input v-model="value" clearable placeholder="请输入内容" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 带 icon 的输入框
添加图标以显示输入框类型。

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。
另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

:::demo
```vue
<template>
  <div>
    使用属性的方式：
    <ti-input v-model="value" prefix-icon="search" clearable placeholder="请输入内容" style="width: 220px;" />
    <ti-input v-model="value" suffix-icon="search" clearable placeholder="请输入内容" style="width: 220px;" />
  </div>
  <div>
    使用插槽的方式：
    <ti-input v-model="value" clearable placeholder="请输入内容" style="width: 220px;" >
      <template #prefix>
        <ti-icon icon="search"/>
      </template>
    </ti-input>
    <ti-input v-model="value" clearable placeholder="请输入内容" style="width: 220px;" >
      <template #suffix>
        <ti-icon icon="search"/>
      </template>
    </ti-input>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 不同尺寸的输入框
共有四种尺寸：大（large）、默认（normal）、小（small）、更小（mini）。

:::demo
```vue
<template>
  <ti-input v-model="value" size="large" placeholder="请输入内容" style="width: 200px;" />
  <ti-input v-model="value" size="normal" placeholder="请输入内容" style="width: 200px;" />
  <ti-input v-model="value" size="small" prefix-icon="search" placeholder="请输入内容" style="width: 200px;" />
  <ti-input v-model="value" size="mini" suffix-icon="search" placeholder="请输入内容" style="width: 200px;" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

<br/>

::: warning Bugs
1. 禁用状态时，鼠标悬停不应显示hover效果
2. clearable 图标和suffix-icon有冲突
:::

## Input 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model | 绑定值 | string / number | —                              |  —      |
| size     | 输入框尺寸 | string  | large / normal / small / mini                    | normal |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| readonly | 是否只读状态 | boolean | —                                              | false   |
| prefix-icon | 自定义前缀图标 | string  | —                                         | —       |
| suffix-icon | 自定义后缀图标 | string  | —                                         | —       |
| placeholder | 输入框占位文本 | string  | —                                         | —       |
| clearable | 是否显示清除按钮 | boolean | —                                         | false   |
| type      | 类型           | string  | 	text / password / textarea              | text    |
| name      | 原生属性       | string   | —                                         | —       |
| max      | 原生属性，设置最大值 | —     | —                                         | —       |
| min      | 原生属性，设置最大值 | —     | —                                         | —       |
| step     | 原生属性，原生属性，设置输入字段的合法数字间隔 | —     | —                    | —       |

## Input 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| prefix  	      | 输入框头部内容，只对 type="text" 有效   |
| suffix  	      | 输入框尾部内容，只对 type="text" 有效   |

## Input 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| focus    | 在 Input 失去焦点时触发 | (event: Event) |
| blur    | 在 Input 获得焦点时触发 | (event: Event) |
| change    | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input    | 	在 Input 值改变时触发 | (value: string \| number) |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 | — |