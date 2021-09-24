<template>
  <div class="dialog-demo">
    <TiButton @click="showDialog">显示</TiButton>
<!--    <teleport to="body">-->
      <TiDialog
          v-model:visible="visible"
          custom-class="custom-class-test">
        <template #title>
          <div>这是 测试 title slot</div>
        </template>
<!--        <template #footer>-->
<!--          <div>这是 测试 footer slot</div>-->
<!--        </template>-->
        TiDialog的默认slot
      </TiDialog>
<!--    </teleport>-->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'dialog-demo',
  setup() {
    let visible = ref(false);
    const showDialog = () => {
      console.log('click');
      visible.value = true;
    };
    const beforeClose = (done) => {
      console.log(done);
      done();
    };
    return {
      visible,
      showDialog,
      beforeClose
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
