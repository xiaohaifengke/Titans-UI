<template>
<div class="switch-demo-page">
  <div>
    <ti-toggle v-model="value"></ti-toggle>
    <ti-toggle v-model="value" type="success"></ti-toggle>
    <ti-toggle v-model="value" type="warning" width="60" height="30"></ti-toggle>
    <ti-toggle
        v-model="value"
        onColor="#c410d0"
        offColor="#666"
        type="danger"
        width="70"
        height="40"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'toggle',
  data() {
    return {
      value: false
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
