<template>
  <ti-button class="demo-button" label="label"></ti-button>
  <ti-button class="demo-button">primary</ti-button>
  <h4>状态</h4>
  <ti-button v-for="item in statusList" :key="item" :status="item">{{item}}</ti-button>
</template>

<script>
export default {
  name: 'demo-button',
  data() {
    return {
      statusList: ["primary", "success", "warn", "error", "info"]
    };
  }
};
</script>

<style lang="scss">
.demo-button {
  margin-right: 8px;
}
.ti-button {
  margin-right: 8px;
}
</style>