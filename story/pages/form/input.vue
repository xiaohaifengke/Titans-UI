<template>
  <ti-input></ti-input>
  <h4>状态</h4>
  <ti-input
    v-for="item in statusList"
    :key="item"
    :status="item"
    style="margin-right: 8px"
  ></ti-input>
  <h4>类型提示</h4>
  <ti-input ref="myInput"></ti-input>
  <button @click="outerClear">outer clear</button>
  <button @click="outerFocus">outer focus</button>
</template>
<script lang="ts">
import { TiInput } from '../../../src';
export default {
  name: "demo-input",
  data() {
    return {
      statusList: ["primary", "success", "warn", "error", "info"],
    };
  },
  setup() {
      const inputRef = TiInput.use.ref('myInput');

      return {
          outerClear() {
              inputRef.value.methods.clear();
          },
          outerFocus() {
              inputRef.value.methods.focus();
          }
      };
  }
};
</script>
