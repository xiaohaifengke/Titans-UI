# Tip 小提示
用于字数比较少的消息提示，如人员的上下线等。

该组件接收一个待显示的消息列表作为参数。当列表中有消息时，会从该列表中取出第一项用于显示，并将该项从原列表中删除。  
消息项可以是字符串或者对象，当为对象时，对象的 `tip` 属性对应的值为需要展示的消息。

## 基础用法

:::demo
```vue
<template>
  <div class="tip-basic">
    <ti-button @click="addMsgToTipList(1)">插入一条数据</ti-button>
    <ti-button @click="addMsgToTipList(5)">插入五条数据</ti-button>
    <div>tipList: {{ tipList }}</div>
    <ti-tip v-model="tipList"></ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const tipList = ref([])
let index = 0
const addMsgToTipList = (n: number) => {
  tipList.value.push(
    ...Array.from({ length: n }).map((item) => `第${index++}条测试信息`)
  )
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-basic {
  position: relative;
  height: 100px;
  border: 1px dashed gray;
  overflow: hidden;
}
</style>
```
:::

## 对象类型的消息

:::demo
```vue
<template>
  <div class="tip-demo">
    <ti-button @click="addObjTipToObjTipList(1)">插入一条数据</ti-button>
    <ti-button @click="addObjTipToObjTipList(5)">插入五条数据</ti-button>
    <div>
      objTipList: [
      <div v-for="(item, index) in objTipList" :key="index">
        {{ JSON.stringify(item) }}
      </div>
      ]
    </div>
    <ti-tip v-model="objTipList"></ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const objTipList = ref([])

const familyNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈']
const names = ['英', '华', '文', '玉', '秀', '明', '丽', '兰', '红', '金']
const getName = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 10)
  }
  return `${familyNames[getRandomIndex()]}${names[getRandomIndex()]}`
}
const addObjTipToObjTipList = (n: number) => {
  objTipList.value.push(
    ...Array.from({ length: n }).map(() => {
      const name = getName()
      const status = Math.random() > 0.5 ? '-1' : '0'
      return {
        name,
        status,
        tip: `${name} ${status === '0' ? '已上线' : '已下线'}`
      }
    })
  )
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-demo {
  position: relative;
  height: 250px;
  overflow: hidden;
  border: 1px dashed gray;
}
</style>
```
:::

## 作用域插槽

:::demo 如有需要，可以通过绑定style的方式修改样式，如本例中的修改 `position` 等样式。
```vue
<template>
  <div class="tip-slot-demo">
    <ti-button @click="addObjTipToSlotTipList(1)">插入一条数据</ti-button>
    <ti-button style="margin: 0 8px" @click="addObjTipToSlotTipList(5)"
    >插入五条数据</ti-button
    >
    <ti-checkbox
      v-model="customStyles"
      label="使用自定义styles"
    ></ti-checkbox>
    <div>
      slotTipList: [
      <div v-for="(item, index) in slotTipList" :key="index">
        {{ JSON.stringify(item) }}
      </div>
      ]
    </div>
    
    <ti-tip
      v-model="slotTipList"
      :interval="3000"
      :style="customStyles ? styles : {}"
    >
      <template v-slot="slotProps">
        <div>
          <TiIcon
            :class="slotProps?.status === '0' ? 'demo-tip_online' : 'demo-tip_offline'"
            :icon="slotProps?.status === '0' ? 'bell' : 'close-notification'"
          ></TiIcon>
          <span class="demo-tip_name">{{ slotProps?.name }}</span>
          <span :class="slotProps?.status === '0' ? 'demo-tip_online' : 'demo-tip_offline'">{{
            slotProps?.status === '0' ? '已上线' : '已下线'
          }}</span>
        </div>
      </template>
    </ti-tip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const slotTipList = ref([])

const familyNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈']
const names = ['英', '华', '文', '玉', '秀', '明', '丽', '兰', '红', '金']
const getName = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 10)
  }
  return `${familyNames[getRandomIndex()]}${names[getRandomIndex()]}`
}
const addObjTipToSlotTipList = (n: number) => {
  slotTipList.value.push(
    ...Array.from({ length: n }).map(() => {
      const name = getName()
      const status = Math.random() > 0.5 ? '-1' : '0'
      return {
        name,
        status,
        tip: `${name}${status === '0' ? '已上线' : '已下线'}`
      }
    })
  )
}
const customStyles = ref(false)
const styles = {
  position: 'fixed',
  background:
    'linear-gradient(90deg, rgba(138, 43, 226, 0.2), transparent, rgba(138, 43, 226, 0.2))'
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.tip-slot-demo {
  position: relative;
  height: 250px;
  overflow: hidden;
  border: 1px dashed gray;
}

.demo-tip_name {
  width: 55px;
  margin: 0 7px;
  font-weight: 600;
  color: #ff7400;
}

.demo-tip_online {
  color: #00ffa7;
}

.demo-tip_offline {
  color: #ccc;
}
</style>
```
:::

## Tip 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| model-value / v-model | 待展示的消息列表 | array | —                                |  []     |
| interval     | 消息切换的间隔时间，单位：ms | number  | —                             | 3000    |

## Tip 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| —  	      | 消息内容 （是一个作用域插槽，slotProps: { tip: string, ...customProps }）   |

## Tip 事件
| 事件名      | 说明    | 回调参数 |
| ---------- | ------ | ------- |
| afterEnter    | 在 Tip 组件进入视图后触发 | — |
| afterLeave    | 在 Tip 组件离开视图后触发 | — |