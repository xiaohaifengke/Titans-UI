# Widget 小零件
该组件的动效由纯 CSS 实现，不包含任何 JavaScript 逻辑。

设置 `name` 属性即可显示对应的 Widget。设置 `font-size` 属性可以控制组件的大小。

`type` 属性共五种：`default` / `primary` / `success` / `info` / `warning` / `danger` 。  
`color` 属性可自定义颜色，该颜色会覆盖`type` 属性的颜色。

## voice

:::demo `motion` 属性可以显示动画效果。
```vue
<template>
  <div>
    <TiWidget name="voice" fontSize="25px" />
    <TiWidget name="voice" motion fontSize="35px" type="primary" />
    <TiWidget name="voice" motion fontSize="45px" type="primary" color="violet" />
  </div>
  <div style="display: flex; align-items: center;">
    <span style="margin-right: 10px;">type: </span>
    <TiWidget name="voice" motion fontSize="25px" type="default" />
    <TiWidget name="voice" motion fontSize="25px" type="primary" />
    <TiWidget name="voice" motion fontSize="25px" type="success" />
    <TiWidget name="voice" motion fontSize="25px" type="info" />
    <TiWidget name="voice" motion fontSize="25px" type="warning" />
    <TiWidget name="voice" motion fontSize="25px" type="danger" />
  </div>
</template>
```
:::

## loading
`genre` 属性控制 loading 的样式。

:::demo loading 不需要设置 `motion` 属性。
```vue
<template>
  <div class="genre-round" style="display: flex; align-items: center;">
    <span style="margin-right: 10px;">genre: round</span>
    <TiWidget name="loading" fontSize="38px" type="default" />
    <TiWidget name="loading" fontSize="38px" type="primary" />
    <TiWidget name="loading" fontSize="38px" type="success" />
    <TiWidget name="loading" fontSize="38px" type="info" />
    <TiWidget name="loading" fontSize="38px" type="warning" />
    <TiWidget name="loading" fontSize="38px" type="danger" />
  </div>
  <div class="genre-linear" style="display: flex; align-items: center;">
    <span style="margin-right: 10px;">genre: linear</span>
    <TiWidget name="loading" genre="linear" fontSize="8px" type="default" />
    <TiWidget name="loading" genre="linear" fontSize="8px" type="primary" />
    <TiWidget name="loading" genre="linear" fontSize="8px" type="success" />
    <TiWidget name="loading" genre="linear" fontSize="8px" type="info" />
    <TiWidget name="loading" genre="linear" fontSize="8px" type="warning" />
    <TiWidget name="loading" genre="linear" fontSize="8px" type="danger" />
  </div>
</template>
```
:::

::: info Tip
每个 Widget 内部样式都是由 `em` 为单位实现的，所以 `font-size` 仅作为属性用来控制尺寸，与字体的 `font-size` 属性无可比性。
视觉上同样大小的两个组件的 `font-size` 值可能区别较大。
:::

## Widget 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| name     | Widget 名称 | string  | voice / loading                                | —       |
| type     | 类型 | string | default / primary / success / info / warning / danger  | default |
| color    | 自定义颜色 | string  | —                                                | —       |
| font-size | 控制 Widget 的尺寸 | string  | —                                       | —       |
| motion   | 是否有动画效果（loading 不需要设置该属性） | boolean | —                    | false   |
| genre   | loading 组件的样式（仅当 name 为 loading 时有效） | boolean | —             | false   |


    

