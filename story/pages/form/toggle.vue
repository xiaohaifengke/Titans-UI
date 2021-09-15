<template>
  <div class="switch-demo-page">
    <ti-toggle v-model="value"></ti-toggle>
  </div>
</template>

<script>
export default {
  name: 'toggle',
  data() {
    return {
      value: 'true'
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
