<template>
  <h4>basic</h4>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>

  <h4>multiple</h4>
  <ti-select
    type="number"
    multiple
    :multipleLimit="8"
    v-model="multipleValue"
    popperClass="test-custom-select-popper-class"
    clearable
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>

  <h4>size</h4>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="large"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="normal"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="small"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>
  <ti-select
    type="number"
    v-model="value"
    class="test-custom-select-class"
    popperClass="test-custom-select-popper-class"
    clearable
    size="mini"
  >
    <ti-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></ti-option>
  </ti-select>

  <!--  <h4>disabled</h4>-->
  <!--  <ti-select-->
  <!--    v-model="value"-->
  <!--    disabled-->
  <!--    placeholder="请输入"-->
  <!--    style="width: 220px; margin-right: 8px"-->
  <!--  ></ti-select>-->
  <!--  <h4>readonly</h4>-->
  <!--  <ti-select-->
  <!--    v-model="value"-->
  <!--    readonly-->
  <!--    placeholder="请输入"-->
  <!--    style="width: 220px; margin-right: 8px"-->
  <!--  ></ti-select>-->
  <!--  <h4>prefix or suffix icon</h4>-->
  <!--  <ti-select-->
  <!--    v-model="value"-->
  <!--    prefix-icon="edit"-->
  <!--    suffix-icon="warning-outline"-->
  <!--    placeholder="请输入"-->
  <!--    style="width: 220px; margin-right: 8px"-->
  <!--  ></ti-select>-->
  <!--  <h4>size</h4>-->
  <!--  <ti-select-->
  <!--    placeholder="请输入"-->
  <!--    v-for="item in sizeList"-->
  <!--    :key="item"-->
  <!--    :size="item"-->
  <!--    style="width: 220px; margin-right: 8px"-->
  <!--  ></ti-select>-->

  <!--  <h4>类型提示</h4>-->
  <!--  <ti-select ref="myInput"></ti-select>-->
</template>
<script setup lang="ts">
import { ref } from '@vue/reactivity'

const value = ref('')
const multipleValue = ref('')
const options = ref([
  {
    label: '第一行',
    value: '第1行',
    disabled: false
  },
  {
    label: '第二行',
    value: '第2行',
    disabled: false
  },
  {
    label: '第三行',
    value: '第3行',
    disabled: true
  },
  {
    label: '第四行',
    value: '第4行',
    disabled: false
  },
  {
    label: '第五行',
    value: '第5行',
    disabled: false
  },
  {
    label: '第六行',
    value: '第6行',
    disabled: false
  },
  {
    label: '第七行',
    value: '第7行',
    disabled: false
  },
  {
    label: '第八行',
    value: '第8行',
    disabled: false
  },
  {
    label: '第九行',
    value: '第9行',
    disabled: false
  }
])
</script>
