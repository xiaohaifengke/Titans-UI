<template>
  <div class="ti-tip-story">
    <h4>基础用法</h4>
    <div class="ti-tip-story-basic">
      <ti-button @click="addMsgToTipList(1)">插入一条数据</ti-button>
      <ti-button @click="addMsgToTipList(5)">插入五条数据</ti-button>
      <div>tipList: {{ tipList }}</div>
      <ti-tip v-model="tipList"></ti-tip>
    </div>

    <h4>对象类型的消息</h4>
    <div class="ti-tip-story-slot">
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

    <h4>作用域插槽</h4>
    <p>此外，也可通过直接绑定style修改样式</p>
    <div class="ti-tip-story-slot">
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
        v-slot="slotProps"
        :interval="3000"
        :style="customStyles ? styles : null"
      >
        <div>
          <TiIcon
            :class="slotProps.status === '0' ? 'online' : 'offline'"
            :icon="slotProps.status === '0' ? 'bell' : 'close-notification'"
          ></TiIcon>
          <span class="name">{{ slotProps.name }}</span>
          <span :class="slotProps.status === '0' ? 'online' : 'offline'">{{
            slotProps.status === '0' ? '已上线' : '已下线'
          }}</span>
        </div>
      </ti-tip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// basic
const tipList = ref([])
let index = 0
const addMsgToTipList = (n: number) => {
  tipList.value.push(
    ...Array.from({ length: n }).map((item) => `第${index++}条测试信息`)
  )
}

const familyNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈']
const names = ['英', '华', '文', '玉', '秀', '明', '丽', '兰', '红', '金']
const getName = () => {
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 10)
  }
  return `${familyNames[getRandomIndex()]}${names[getRandomIndex()]}`
}
// obj tip
const objTipList = ref([])

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
// slot
const slotTipList = ref([])

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
.ti-tip-story-basic {
  position: relative;
  height: 100px;
  border: 1px dashed gray;
}
.ti-tip-story-slot {
  position: relative;
  height: 250px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px dashed gray;

  .name {
    width: 55px;
    margin: 0 7px;
    font-weight: 600;
    color: #ff7400;
  }

  .online {
    color: #00ffa7;
  }

  .offline {
    color: #ccc;
  }
}
</style>
