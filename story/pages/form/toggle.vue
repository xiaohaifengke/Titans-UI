<template>
  <div class="toggle-demo-page">
    <div class="sep">
      <ti-toggle v-model="value"></ti-toggle>
      <ti-toggle v-model="value" type="success"></ti-toggle>
      <ti-toggle v-model="value" type="warning" :width="60" :height="30"></ti-toggle>
      <ti-toggle
          v-model="value"
          onColor="#c410d0"
          offColor="#666"
          type="danger"
          :width="70"
          :height="40"/>
      <ti-toggle
          v-model="value2"
          onColor="#c410d0"
          offColor="#666"
          disabled/>
      <ti-toggle
          v-model="value3"
          type="danger"/>
    </div>
    <div class="sep">
      <ti-toggle
          v-model="value3"
          on-text="开启"
          off-text="关闭"
          type="success"/>
      <ti-toggle
          v-model="value3"
          on-text="开启开启开启开启开启开启"
          off-text="关闭"
          type="success"/>
    </div>
    <div class="sep">
      <ti-toggle
          v-model="value3"
          on-text="开启"
          off-text="关闭"
          :width="70"
          :height="30"
          @change="change"
          type="success"/>
      <ti-toggle
          v-model="value3"
          on-text="开启开启开启开启开启开启"
          off-text="关闭"
          :width="70"
          :height="30"
          type="success"/>
      <ti-toggle
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
  name: 'toggle',
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
