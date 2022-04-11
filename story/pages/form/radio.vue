<template>
  <div class="ti-radio-story">
    <h4>basic</h4>
    <ti-radio
      v-model="radio1"
      label="radio1"
      true-label="true-label1"
      false-label="falselabel1"
      size="large"
    />
    <ti-radio
      v-model="radio1"
      label="radio1"
      true-label="true-label1"
      false-label="falselabel1"
      type="success"
    />
    <ti-radio
      v-model="radio1"
      label="radio1"
      true-label="true-label1"
      false-label="falselabel1"
      type="warning"
    />
    <ti-radio
      v-model="radio1"
      label="radio1"
      true-label="true-label1"
      false-label="falselabel1"
      size="small"
      type="danger"
    />
    <ti-radio
      v-model="radio1"
      label="radio1"
      true-label="true-label1"
      false-label="falselabel1"
      size="small"
      type="info"
    />

    <h4>禁用/只读</h4>
    <ti-checkbox v-model="isDisabled" label="禁用/只读" />
    <ti-radio v-model="radio2" label="禁用" :disabled="isDisabled" />
    <ti-radio v-model="radio2" label="只读" :readonly="isDisabled" />
    <ti-radio v-model="radio2" label="参考项" />
    <h4>设置width</h4>
    <ti-radio
      width="10em"
      v-model="value"
      label="这label很长很长很长很长很长很长很长很长"
    />
    <ti-radio
      width="120"
      v-model="value"
      label="这label更长长长长长长长长长长长长长长长长长长长长长"
    />
    <ti-radio width="110px" v-model="value" label="这label很短很短很短很短" />
    <h4>单选框组</h4>
    <ti-radio-group v-model="checkedList" @change="testGroupChange">
      <ti-radio v-for="weekday in week" :label="weekday" :key="weekday" />
    </ti-radio-group>
    <span> {{ checkedList }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref(false)

const isDisabled = ref(false)
const radio2 = ref('禁用')

const value = ref('这label很长很长很长很长很长很长很长很长')

const week = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日'
]
const checkedList = ref('星期二')
const testGroupChange = (val: string[]) => {
  console.log('GroupChange event', val)
}
</script>

<!--<style scoped lang="scss" rel="stylesheet/scss">-->

<!--</style>-->
