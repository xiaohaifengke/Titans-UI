# Button 按钮
常用的操作按钮。

> 按钮是系统中出现频率最高的组件，使用方式也非常简单。


## 基础用法
基础的按钮用法。

:::demo 按钮上的内容可以通过 `label` 属性、`icon` 属性和`插槽`实现。
```vue
<template>
  <div>
    <ti-button class="demo-button" label="默认按钮"></ti-button>
    <ti-button class="demo-button" icon="reading"></ti-button>
    <ti-button class="demo-button"><ti-icon icon="search"/> 插槽内容</ti-button>
  </div>
</template>
```
:::

## 按钮类型 type
共有六种类型：主要（ `primary` ）、成功（ `success` ）、信息（ `info` ）、警告（ `warning` ）、危险（ `danger` ）、默认（ `default` ）。
:::demo
```vue
<template>
  <div>
    <ti-button>default</ti-button>
    <ti-button type="primary">primary</ti-button>
    <ti-button type="success">success</ti-button>
    <ti-button type="info">info</ti-button>
    <ti-button type="warning">warning</ti-button>
    <ti-button type="danger">danger</ti-button>
  </div>
</template>
```
:::

## 按钮模式 mode
共有四种模式：填充（ `fill` ）、朴素（ `plain` ）、轮廓（ `outline` ）、文本（ `text` ）。
:::demo
```vue
<template>
  <div>
    <div v-for="mode in modeList" :key="mode">
      <ti-button
        v-for="type in typeList"
        :key="type"
        :type="type === 'default' ? 'primary' : type"
        :mode="mode"
      >
        {{ type === 'default' ? `mode: ${mode}` : type }}
      </ti-button>
    </div>
  </div>
</template>
<script setup>
const typeList = ['default', 'primary', 'success', 'warning', 'danger', 'info']
const modeList = ['fill', 'plain', 'outline', 'text']
</script>
```
:::

## 按钮形状 shape
共有三种形状：圆角（ `fillet` ）、弧形（ `round` ）、方形（ `square` ）、圆形（ `circle` ）。
:::demo 当 `shape` 属性设置为 `circle` 时，当内容过长时会呈现椭圆形，这是故意为之的。
```vue
<template>
  <div>
    <ti-button>fillet</ti-button>
    <ti-button shape="fillet" type="primary">Primary</ti-button>
    <ti-button shape="fillet" type="success">Success</ti-button>
    <ti-button shape="fillet" type="info">Info</ti-button>
    <ti-button shape="fillet" type="warning">Warning</ti-button>
    <ti-button shape="fillet" type="danger">Danger</ti-button>
  </div>
  <div>
    <ti-button shape="round" mode="outline">round</ti-button>
    <ti-button shape="round" mode="outline" type="primary">Primary</ti-button>
    <ti-button shape="round" mode="outline" type="success">Success</ti-button>
    <ti-button shape="round" mode="outline" type="info">Info</ti-button>
    <ti-button shape="round" mode="outline" type="warning">Warning</ti-button>
    <ti-button shape="round" mode="outline" type="danger">Danger</ti-button>
  </div>
  <div>
    <ti-button shape="square" mode="plain">square</ti-button>
    <ti-button shape="square" mode="plain" type="primary">Primary</ti-button>
    <ti-button shape="square" mode="plain" type="success">Success</ti-button>
    <ti-button shape="square" mode="plain" type="info">Info</ti-button>
    <ti-button shape="square" mode="plain" type="warning">Warning</ti-button>
    <ti-button shape="square" mode="plain" type="danger">Danger</ti-button>
  </div>
  <div>
    <ti-button shape="circle" mode="outline">circle</ti-button>
    <ti-button shape="circle" mode="outline" type="primary">Primary</ti-button>
    <ti-button shape="circle" mode="outline" type="success">Success</ti-button>
    <ti-button shape="circle" mode="outline" type="info">Info</ti-button>
    <ti-button shape="circle" mode="outline" type="warning">Warning</ti-button>
    <ti-button shape="circle" mode="outline" type="danger">Danger</ti-button>
  </div>
  <div>
    <ti-button shape="circle">circle</ti-button>
    <ti-button shape="circle" mode="plain" icon="search" type="primary"></ti-button>
    <ti-button shape="circle" mode="outline" icon="edit" type="success"></ti-button>
    <ti-button shape="circle" icon="delete" type="info"></ti-button>
    <ti-button shape="circle" icon="time" type="warning"></ti-button>
    <ti-button shape="circle" icon="close" type="danger"></ti-button>
  </div>
</template>
```
:::

## 按钮大小 size
共有四种尺寸：大（large）、默认（normal）、小（small）、更小（mini）。
:::demo
```vue
<template>
  <div>
    <ti-button shape="fillet" size="large" type="primary">Primary</ti-button>
    <ti-button shape="fillet" size="normal" type="primary">Success</ti-button>
    <ti-button shape="fillet" size="small" type="primary">Info</ti-button>
    <ti-button shape="fillet" size="mini" type="primary">Warning</ti-button>
  </div>
  <div>
    <ti-button shape="round" size="large" type="primary">Primary</ti-button>
    <ti-button shape="round" size="normal" type="primary">Success</ti-button>
    <ti-button shape="round" size="small" type="primary">Info</ti-button>
    <ti-button shape="round" size="mini" type="primary">Warning</ti-button>
  </div>
  <div>
    <ti-button shape="square" mode="text" size="large" type="primary">Primary</ti-button>
    <ti-button shape="square" mode="text" size="normal" type="primary">Success</ti-button>
    <ti-button shape="square" mode="text" size="small" type="primary">Info</ti-button>
    <ti-button shape="square" mode="text" size="mini" type="primary">Warning</ti-button>
  </div>
</template>
```
:::

## 禁用状态
禁用之后按钮不可被点击。
:::demo
```vue
<template>
  <div>
    <ti-button disabled>default</ti-button>
    <ti-button disabled type="primary">primary</ti-button>
    <ti-button disabled type="success">success</ti-button>
    <ti-button disabled type="info">info</ti-button>
    <ti-button disabled type="warning">warning</ti-button>
    <ti-button disabled type="danger">danger</ti-button>
  </div>
</template>
```
:::

## 图标按钮
支持 [`TiIcon`](./icon) 组件支持的所有图标。
:::demo 可通过 `icon` 属性指定图标，也可通过插槽添加图标。 当通过 `icon` 属性指定图标时，可使用 `iconPosition` 属性控制图标在文字的左边（`prefix`）或右边(`suffix`)，默认值为 `prefix`。

```vue
<template>
  <div>
    <TiButton type="primary" icon="search"></TiButton>
    <TiButton type="warning" icon="edit">编辑</TiButton>
    <TiButton type="danger" icon="close" iconPosition="suffix">关闭</TiButton>
    <TiButton type="primary" mode="plain" icon="search" shape="circle"></TiButton>
    <TiButton type="warning" mode="outline" icon="edit" shape="square"></TiButton>
    <TiButton type="danger" mode="plain" icon="close" shape="round"></TiButton>
  </div>
</template>
```
:::

## 按钮组
以按钮组的方式出现，常用于多项类似操作。
:::demo 使用 `<ti-button-group>` 标签来嵌套你的按钮。
```vue
<template>
  <div>
    <ti-button-group>
      <ti-button type="primary" icon="edit"></ti-button>
      <ti-button type="warning" icon="share"></ti-button>
      <ti-button type="danger" icon="delete"></ti-button>
    </ti-button-group>
    <ti-button-group>
      <ti-button type="primary" icon="edit" shape="circle"></ti-button>
      <ti-button
        type="warning"
        icon="share"
        shape="circle"
        mode="outline"
      ></ti-button>
      <ti-button
        type="danger"
        icon="delete"
        shape="circle"
        mode="plain"
      ></ti-button>
    </ti-button-group>
  </div>
</template>
```
:::

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
:::demo 要设置为 loading 状态，只要设置loading属性为true即可。
```vue
<template>
  <div>
    <ti-button type="primary" loading>加载中</ti-button>
  </div>
</template>
```
:::

<br/>

::: warning Bugs
1. shape为circle时，应设置最小宽度等于高度，这样当内容很少时（如一个字母），也还是圆形。
2. mode为text时，disabled 时的样式需修复。
:::

## Button 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| label    | 按钮文字 | string | —                                                   | —      |
| type     | 类型   | string  | primary / success / warning / info / danger         | —      |
| mode     | 模式   | string  | fill / plain / outline / text                       | fill   |
| shape    | 形状   | string  | fillet / round / square / circle                    | fillet |
| size     | 尺寸   | string  | large / normal / small / mini                       | normal |
| disabled | 是否禁用状态 | boolean | —                                              | false   |
| icon     | 图标名称 | string | —                                                  | —       |
| iconPosition | 图标位置   | string | prefix / suffix                              | prefix  |
| loading  | 是否为加载中状态 | boolean | —                                           | false   |

## Button 插槽
| 插槽名      	| 说明           |
| ----------	| ------------- |
| —   	      | 自定义默认内容   |

## Button Group 插槽
| 插槽名      	| 说明           | 子标签  |
| ----------	| ------------- | ------ |
| —   	      | 自定义按钮组内容 | Button |