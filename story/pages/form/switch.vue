<template>
  <div class="switch-demo-page">
    <div class="sep">
      <ti-switch v-model="value"></ti-switch>
      <ti-switch v-model="value" type="success"></ti-switch>
      <ti-switch v-model="value" type="warning" :width="60" :height="30"></ti-switch>
      <ti-switch
          v-model="value"
          onColor="#c410d0"
          offColor="#666"
          type="danger"
          :width="70"
          :height="40"/>
      <ti-switch
          v-model="value2"
          onColor="#c410d0"
          offColor="#666"
          disabled/>
      <ti-switch
          v-model="value3"
          type="danger"/>
    </div>
    <div class="sep">
      <ti-switch
          v-model="value3"
          on-text="开启"
          off-text="关闭"
          type="success"/>
      <ti-switch
          v-model="value3"
          on-text="开启开启开启开启开启开启"
          off-text="关闭"
          type="success"/>
    </div>
    <div class="sep">
      <ti-switch
          v-model="value3"
          on-text="开启"
          off-text="关闭"
          :width="70"
          :height="30"
          @change="change"
          type="success"/>
      <ti-switch
          v-model="value3"
          on-text="开启开启开启开启开启开启"
          off-text="关闭"
          :width="70"
          :height="30"
          type="success"/>
      <ti-switch
          v-model="switchValue"
          ref="switchRef"
          on-text="开启"
          off-text="关闭"
          :width="100"
          :height="30"
          type="success"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switch-demo',
  data() {
    return {
      value: false,
      value2: true,
      value3: true,
      switchValue: true
    };
  },
  mounted() {
    this.$refs.switchRef.focus();
    // this.$refs.switchRef.blur();
  },
  methods: {
    change(a) {
      console.log(a);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.sep {
  margin: 10px;
}
</style>
