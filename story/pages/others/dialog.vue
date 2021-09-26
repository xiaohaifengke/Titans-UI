<template>
  <div class="dialog-demo">
    <TiButton @click="showDialog">显示</TiButton>
    <TiDialog
        v-model:visible="visible"
        custom-class="custom-class-test">
      <template #title>
        <div>这是 测试 title slot</div>
      </template>
      TiDialog的默认slot
    </TiDialog>
    <TiButton @click="showDialog1">显示1</TiButton>
    <TiDialog
        destroyOnClose
        v-model:visible="visible1"
        custom-class="custom-class-test">
      <template #title>
        <div>这是 测试 title slot</div>
      </template>
      TiDialog的默认slot
    </TiDialog>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'dialog-demo',
  setup() {
    let visible = ref(false);
    let visible1 = ref(false);
    const showDialog = () => {
      console.log('click');
      visible.value = true;
    };
    const showDialog1 = () => {
      console.log('click');
      visible1.value = true;
    };
    const beforeClose = (done) => {
      console.log(done);
      done();
    };
    return {
      visible,
      visible1,
      showDialog,
      showDialog1,
      beforeClose
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
