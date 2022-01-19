<template>
  <div class="ti-checkbox-story">
    <h4>basic</h4>
    <ti-checkbox
      v-model="checkbox1"
      label="checkbox1"
      true-label="true-label1"
      false-label="falselabel1"
      size="large"
    />
    <ti-checkbox
      v-model="checkbox1"
      label="checkbox1"
      true-label="true-label1"
      false-label="falselabel1"
      type="success"
    />
    <ti-checkbox
      v-model="checkbox1"
      label="checkbox1"
      true-label="true-label1"
      false-label="falselabel1"
      type="warning"
    />
    <ti-checkbox
      v-model="checkbox1"
      label="checkbox1"
      true-label="true-label1"
      false-label="falselabel1"
      size="small"
      type="danger"
    />
    <ti-checkbox
      v-model="checkbox1"
      label="checkbox1"
      true-label="true-label1"
      false-label="falselabel1"
      size="small"
      type="info"
    />
    <h4>真假值</h4>
    <ti-checkbox
      v-model="customValue"
      label="自定义真假值"
      false-value="falseValue"
      true-value="trueValue"
    />
    <span>{{ customValue }}</span>

    <h4>禁用/只读</h4>
    <ti-checkbox v-model="isDisabled" label="禁用/只读" />
    <ti-checkbox v-model="disableItem" label="禁用" :disabled="isDisabled" />
    <ti-checkbox v-model="readonlyItem" label="只读" :readonly="isDisabled" />
    <ti-checkbox v-model="normalItem" label="参考项" />
    <h4>设置width</h4>
    <ti-checkbox
      width="10em"
      v-model="value"
      true-label="这label很长很长很长很长很长很长很长很长"
      false-label="这label很短"
    />
    <ti-checkbox
      v-model="value"
      true-label="这label很长很长很长很长很长很长很长很长"
      false-label="参考项"
    />
    <h4>复选框组</h4>
    <ti-checkbox-group v-model="checkedList" @change="testGroupChange">
      <ti-checkbox v-for="weekday in week" :label="weekday" :key="weekday" />
    </ti-checkbox-group>
    <span> {{ checkedList }}</span>
    <h4>全选/反选</h4>
    <ti-checkbox
      v-model="checkAll"
      label="中间状态"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <ti-checkbox-group v-model="checkedNums" @change="handleCheckedNumsChange">
      <ti-checkbox v-for="num in nums" :label="num" :key="num" />
    </ti-checkbox-group>
    <span> {{ checkedNums }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkbox1 = ref(false)
const customValue = ref('trueValue')
const isDisabled = ref(false)
const disableItem = ref(false)
const readonlyItem = ref(false)
const normalItem = ref(false)

const value = ref(false)

const week = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日'
]
const checkedList = ref(['星期二', '星期六'])
const testGroupChange = (val: string[]) => {
  console.log(val)
}

const checkAll = ref(false)
const isIndeterminate = ref(true)
const nums = [1, 2, 3, 4, 5]
const checkedNums = ref([2, 5])
const handleCheckAllChange = (val: boolean) => {
  checkedNums.value = val ? nums : []
  isIndeterminate.value = false
}
const handleCheckedNumsChange = (list: number[]) => {
  const checkedCount = list.length
  checkAll.value = checkedCount === nums.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < nums.length
}
</script>

<!--<style scoped lang="scss" rel="stylesheet/scss">-->

<!--</style>-->
