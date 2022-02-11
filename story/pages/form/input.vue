<template>
  <button @click="testbutton">focus</button>
  <button @click="testClear">clear</button>
  <ti-input
    @clear="handleClear"
    ref="tInput"
    @change="testchange"
    prefix-icon="edit"
    @input="testInputEvent"
    v-model="num"
    clearable
  ></ti-input>
  <h4>slot</h4>
  <ti-input type="number" v-model="value">
    <template #prefix>
      <ti-icon icon="paperclip"></ti-icon>
    </template>
    <template #suffix>
      <ti-icon icon="reading"></ti-icon>
    </template>
  </ti-input>

  <h4>disabled</h4>
  <ti-input
    v-model="value"
    disabled
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
  ></ti-input>
  <h4>readonly</h4>
  <ti-input
    v-model="value"
    readonly
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
  ></ti-input>
  <h4>prefix or suffix icon</h4>
  <ti-input
    v-model="value"
    prefix-icon="edit"
    suffix-icon="warning-outline"
    placeholder="请输入"
    style="width: 220px; margin-right: 8px"
  ></ti-input>
  <h4>size</h4>
  <ti-input
    placeholder="请输入"
    v-for="item in sizeList"
    :key="item"
    :size="item"
    style="width: 220px; margin-right: 8px"
  ></ti-input>

  <h4>类型提示</h4>
  <ti-input ref="myInput"></ti-input>
  <!--  <button @click="outerClear">outer clear</button>-->
  <!--  <button @click="outerFocus">outer focus</button>-->
  <!--  <ti-button @click="changeValue">change value</ti-button>-->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { Input } from '../../../src'
export default defineComponent({
  name: 'demo-input',
  data() {
    return {
      num: 123,
      value: 'test',
      sizeList: ['', 'large', 'normal', 'small', 'mini']
    }
  },
  methods: {
    testClear() {
      this.$refs.tInput.clear()
    },
    handleClear() {
      console.log('test clear')
    },
    testbutton() {
      // console.log('click button')
      console.log(this.$refs.tInput)
      this.$refs.tInput.focus()
    },
    testchange(value) {
      console.log('testchange', value)
    },
    testInputEvent(value) {
      console.log('testInputEvent', value)
    }
  }
  // setup() {
  //   const inputRef = Input.use.ref('myInput')
  //   return {
  //     outerClear() {
  //       inputRef.value!.methods.clear()
  //     },
  //     outerFocus() {
  //       inputRef.value!.methods.focus()
  //     }
  //   }
  // },
  // methods: {
  //   changeValue() {
  //     console.log(this, this.value, this.statusList)
  //     this.value = '成功'
  //   }
  // }
})
</script>
