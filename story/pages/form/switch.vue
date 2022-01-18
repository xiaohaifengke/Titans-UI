<template>
  <div class="switch-demo-page">
    <div class="sep">
      <ti-switch
        v-model="value"
        handle-on-color="rgba(0, 255, 255, 1)"
        handleOffColor="rgba(15, 45, 59, 1)"
      ></ti-switch>
      <ti-switch v-model="value" type="success"></ti-switch>
      <ti-switch
        v-model="value"
        type="warning"
        :width="60"
        :height="30"
      ></ti-switch>
      <ti-switch
        v-model="value"
        onColor="#c410d0"
        offColor="#666"
        type="danger"
        :width="70"
        :height="40"
      />
      <ti-switch v-model="value2" onColor="#c410d0" offColor="#666" disabled />
      <ti-switch v-model="value3" type="danger" />
    </div>
    <div class="sep">
      <ti-switch
        v-model="value3"
        on-text="开启"
        off-text="关闭"
        type="success"
      />
      <ti-switch
        v-model="value3"
        on-text="开启开启开启开启开启开启"
        off-text="关闭"
        type="success"
      />
    </div>
    <div class="sep">
      <ti-switch
        v-model="value3"
        on-text="开启"
        off-text="关闭"
        :width="70"
        :height="30"
        @change="change"
        type="success"
      />
      <ti-switch
        v-model="value3"
        on-text="开启开启开启开启开启开启"
        off-text="关闭"
        :width="70"
        :height="30"
        type="success"
      />
      <ti-switch
        v-model="switchValue"
        on-text="开启"
        off-text="关闭"
        :width="100"
        :height="30"
        type="success"
      />
    </div>

    <h4>禁用/只读</h4>
    <ti-switch
      class="disabled-demo"
      v-model="isDisabled"
      on-text="禁用/只读"
      off-text="正常"
      type="success"
    />

    <ti-switch
      class="disabled-demo"
      v-model="disableItem"
      type="success"
      on-text="开启"
      off-text="关闭"
      :disabled="isDisabled"
    ></ti-switch>

    <ti-switch
      class="disabled-demo"
      v-model="readonlyItem"
      type="success"
      on-text="开启"
      off-text="关闭"
      :readonly="isDisabled"
    ></ti-switch>

    <ti-switch
      class="disabled-demo"
      v-model="normalItem"
      type="success"
      on-text="开启"
      off-text="关闭"
    ></ti-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const switchValue = ref(false)
const change = (a) => {
  console.log(a)
}

const isDisabled = ref(false)
const disableItem = ref(false)
const readonlyItem = ref(false)
const normalItem = ref(false)
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.sep {
  margin: 10px;
}
.disabled-demo {
  margin-right: 10px;
}
</style>
