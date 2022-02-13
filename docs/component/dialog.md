# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

:::demo
```vue
<template>
  <TiButton @click="showDialog" type="primary" mode="plain">点击显示对话框</TiButton>

  <TiDialog v-model:visible="visible" >
    这是对话框的基础用法，对话框的内容可以是任何东西。
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
</script>
```
:::

## 自定义标题

:::demo
```vue
<template>
  <TiButton
    @click="showDialog"
    type="primary"
    mode="plain">
    通过title属性自定义标题
  </TiButton>
  <TiButton
    @click="showDialog2"
    type="primary"
    mode="plain">
    通过title插槽自定义标题
  </TiButton>

  <TiDialog v-model:visible="visible" title="自定义标题" width="600px">
    Dialog的标题可以通过 title 属性或 title 插槽控制
  </TiDialog>

  <TiDialog v-model:visible="visible2" width="600px">
    <template #title>
      <span><TiIcon icon="info"/> 通过 title 插槽自定义标题</span>
    </template>
    Dialog的标题可以通过 title 属性或 title 插槽控制
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const showDialog = () => {
  visible.value = true
}
const showDialog2 = () => {
  visible2.value = true
}
</script>
```
:::

## 对话框 footer
设置 `show-footer` 属性可以显示默认的按钮操作区的内容。
通过 `ok` 属性和 `cancel` 属性分别设置确认按钮和取消按钮的处理函数，
通过 `ok-text` 属性和 `cancel-text` 属性分别设置确认按钮和取消按钮的显示名称。

可以通过 footer 插槽自定义设置对话框的按钮操作区的内容，注意此时仍然由 `show-footer` 属性控制 footer 部分是否显示。

:::demo
```vue
<template>
  <TiButton
    @click="showDefaultFooterDialog"
    type="primary"
    mode="plain">
    显示默认footer的Dialog
  </TiButton>
  <TiButton
    @click="showCustomFooterDialog"
    type="primary"
    mode="plain">
    显示自定义footer的Dialog
  </TiButton>

  <TiDialog
    v-model:visible="defaultFooterDialogvisible"
    show-footer
    ok-text="确认"
    cancel-text="关闭"
  >
    <div>balabala</div>
    <div>BALABALA</div>
  </TiDialog>

  <TiDialog v-model:visible="customFooterDialogvisible" show-footer>
    <div>balabala</div>
    <div>BALABALA</div>

    <template #footer>
      <span class="dialog-footer">
        <ti-button @click="customFooterDialogvisible = false" style="margin-right: 8px;">Cancel</ti-button>
        <ti-button type="primary" @click="customFooterDialogvisible = false">Confirm</ti-button>
      </span>
    </template>
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const defaultFooterDialogvisible = ref(false)
const customFooterDialogvisible = ref(false)
const showDefaultFooterDialog = () => {
  defaultFooterDialogvisible.value = true
}
const showCustomFooterDialog = () => {
  customFooterDialogvisible.value = true
}
</script>
```
:::

## Dialog 销毁控制
如果需要在关闭时销毁内容实例，设置 `destroy-on-close` 属性为 `true` 即可，默认为 `false` 。

:::demo
```vue
<template>
  <TiButton
    type="primary"
    mode="plain"
    @click="showDialog"
  >点击显示对话框</TiButton>

  <TiDialog v-model:visible="visible" destroy-on-close>
    对话框的内容可以是任何东西
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
</script>
```
:::

::: info Tips
销毁的不仅仅是内容，而是整个 Dialog 。
:::

## 遮罩层设置
默认情况下，会显示遮罩层，点击遮罩层可以关闭对话框。

设置 `overlay` 属性为 `false` 可以不显示遮罩层。但此时点击 Dialog 外仍然可以关闭 Dialog。所以此时并不能直接点击到 Dialog 下层的元素。  
设置 `close-on-click-overlay` 属性为 `false` 可以禁用点击遮罩的时候关闭 Dialog 的功能。
设置 `overlay` 属性为 `false` 和 `no-pointer-events-on-overlay` 属性为 `true` 可以在显示 Dialog 的同时能点击到 Dialog 下面的元素。

:::demo
```vue
<template>
  <div>
    <TiButton @click="showDialog" type="primary" mode="plain">overlay：false</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog2" type="primary" mode="plain">close-on-click-overlay：false</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog3" type="primary" mode="plain">overlay 和 close-on-click-overlay 均为 false</TiButton>
  </div>
  <div>
    <TiButton @click="showDialog4" type="primary" mode="plain">overlay 属性为 false，no-pointer-events-on-overlay 属性为 true</TiButton>
  </div>

  <TiDialog
    v-model:visible="visible"
    :overlay="false"
    title="overlay：false"
  >
    设置 overlay 属性为 false 可以不显示遮罩层。但此时点击 Dialog 外仍然可以关闭 Dialog。所以此时并不能直接点击到 Dialog 下层的元素。
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible2"
    :close-on-click-overlay="false"
    title="close-on-click-overlay：false"
  >
    设置 close-on-click-overlay 属性为 false 可以禁用点击遮罩的时候关闭 Dialog 的功能。
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible3"
    :overlay="false"
    :close-on-click-overlay="false"
  >
    overlay 和 close-on-click-overlay 均为 false 的 case
  </TiDialog>
  
  <TiDialog
    v-model:visible="visible4"
    :overlay="false"
    no-pointer-events-on-overlay
    top="30vh"
  >
    设置 overlay 属性为 false，no-pointer-events-on-overlay 属性为 true时，可以在显示 Dialog 的同时能点击到 Dialog 下面的元素。
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const showDialog = () => {
  visible.value = true
}
const showDialog2 = () => {
  visible2.value = true
}
const showDialog3 = () => {
  visible3.value = true
}
const showDialog4 = () => {
  visible4.value = true
}
</script>
```
:::

## 可拖拽设置
设置 `dragable` 属性为 `true` 可以启用 Dialog 的拖拽功能。

:::demo
```vue
<template>
  <TiButton @click="showDialog" type="primary" mode="plain">点击显示对话框</TiButton>

  <TiDialog v-model:visible="visible" dragable>
    Dialog 的 header 部分可以拖拽
  </TiDialog>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showDialog = () => {
  visible.value = true
}
</script>
```
:::

## Dialog 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| visible / v-model:visible | 是否显示 Dialog | boolean | —                          |  false  |
| title | Dialog 的标题 | string  | —                                               | 提示      |
| top | Dialog CSS 中的 margin-top 值 | string  | —                                 | 15vh     |
| width | Dialog 的宽度 | string / number  | —                                      | 520px    |
| overlay | 是否显示遮罩层 | boolean | —                                             | true     |
| close-on-click-overlay | 是否可以通过点击遮罩层关闭 Dialog | boolean | —              | true     |
| no-pointer-events-on-overlay | 是否不遮挡正常文档流（Dialog 下层）的点击事件 | boolean | —              | false    |
| ok      | 确认按钮的处理函数 | function     | —                                     | —       |
| cancel      | 取消按钮的处理函数 | function   | —                                   | —       |
| ok-text     | 确认按钮的显示名称 | string     | —                                   | 确定     |
| cancel-text | 取消按钮的显示名称 | string     | —                                   | 取消     |
| custom-class | Dialog 的自定义类名 | string     | —                                | —       |
| show-close | 是否显示右上角的关闭按钮 | boolean | —                                  | true     |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(close)，close 用于关闭 Dialog   | —       | —       |
| after-close | 关闭后的回调 | function    | —                                                       | —       |
| destroy-on-close | 当关闭 Dialog 时，销毁整个 Dialog | boolean    | —                               | false   |
| show-header | 是否显示 Dialog 的 header | boolean | —                                             | true     |
| show-footer | 是否显示 Dialog 的 footer | boolean | —                                             | false    |
| dragable   | 为 Dialog 启用可拖拽功能 | boolean | —                                             | false    |

## Dialog 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| —  	            | Dialog 的内容                        |
| title  	        | Dialog 标题区的内容                   |
| footer  	      | Dialog 按钮操作区的内容                |

## Dialog 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| drag       | Dialog 被拖拽的事件 | (event: Event) |