# DigitalTransition 数字累加

## 基础用法
设置 end 属性或通过默认插槽传入值
:::demo 通过 `step` 属性控制每次变化的步长。
```vue
<template>
  <ti-digital-transition :step="5" :duration="0" :end="1000"/>
  <ti-digital-transition :step="5" :duration="0">360</ti-digital-transition>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>
```
:::

## 过渡的持续时长
通过 `step` 属性控制可能会有总过渡时间过长的问题。  
通过设置 `duration` 属性控制过渡的时长，当设置了 `duration` 属性时，会自动计算步长，设置的 `step` 属性会失效。

:::demo
```vue
<template>
  <div>
    <ti-digital-transition
      :duration="2000"
      :end="digital"
      @ended="ended"
      @updated="updated"
      style="color: red;"
    />
  </div>

  <ti-button @click="changeValue(100)">增加 100</ti-button>
  <ti-button @click="changeValue(-100)">减小 100</ti-button>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const digital = ref(1000)
const changeValue = (val: number) => {
  digital.value += val
}
const ended = (val: number) => {
  console.log('ended: ', val);
}
const updated = (val: number) => {
  console.log('updated: ', val);
}
</script>
```
:::

## DigitalTransition 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| start     | 过渡的起始值 | number  | —                                             | 0       |
| end     | 过渡的最终值，也可通过默认插槽传入该最终值 | number  | —                       | —       |
| step     | 过渡的步长 | number  | —                                                | 1       |
| interval     | 过渡过程中每步的间隔时间，单位：ms | number  | —                        | 16      |
| duration     | 过渡的持续时间 | number  | —                                        | —       |
| accuracy     | 过渡过程中每步值的精度（保留的小数位数） | number  | —                   | 0       |

## DigitalTransition 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| —       	      | 过渡的最终值的另一种传入方式，可替代 `end` 属性  |

## DigitalTransition 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| ended      | 在过渡结束时触发，参数为过渡的最终值 | (val: number) |
| updated    | 在过渡更新过程的结束时触发，参数为过渡的最终值 | (val: number) |