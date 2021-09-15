<template>
  <div class="switch-demo-page">
    <ti-toggle v-model="value"></ti-toggle>
    <ti-toggle v-model="value" width="60" height="30"></ti-toggle>
    <ti-toggle v-model="value" width="70" height="40"></ti-toggle>
  </div>
</template>

<script>
export default {
  name: 'toggle',
  data() {
    return {
      value: true
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
