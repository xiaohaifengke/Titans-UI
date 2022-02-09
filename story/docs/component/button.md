# Button 按钮
常用的操作按钮。
按钮是系统中出现频率最高的组件，使用方式也非常简单。

```vue
<template>
  <button>按钮</button>
</template>
```
## 基础用法
基础的按钮用法。

:::demo 使用type、plain、round和circle属性来定义 Button 的样式。
```vue
<template>
  <ti-button>默认按钮</ti-button>
  <ti-button type="primary">主要按钮</ti-button>
  <ti-button type="success">成功按钮</ti-button>
  <ti-button type="info">信息按钮</ti-button>
  <ti-button type="warning">警告按钮</ti-button>
  <ti-button type="danger">危险按钮</ti-button>
</template>
```
:::