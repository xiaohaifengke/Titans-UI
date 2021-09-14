<template>
  <ti-input v-model="value"></ti-input>

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
  <ti-button @click="changeValue">change value</ti-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Input } from "../../../src";
export default defineComponent({
  name: "demo-input",
  data() {
    return {
      value: "test",
      statusList: ["", "primary", "success", "warn", "error", "info"],
    };
  },
  setup() {
    const inputRef = Input.use.ref("myInput");
    return {
      outerClear() {
        inputRef.value!.methods.clear();
      },
      outerFocus() {
        inputRef.value!.methods.focus();
      },
    };
  },
  methods: {
    changeValue() {
      console.log(this,this.value, this.statusList);
      this.value = "成功";
    },
  },
});
</script>
