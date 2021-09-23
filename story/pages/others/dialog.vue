<template>
  <div class="dialog-demo">
    <TiButton @click="showDialog">显示</TiButton>
    <TiDialog v-model:visible="visible">
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
    const showDialog = () => {
      console.log('click');
      visible.value = true;
    };
    return {
      visible,
      showDialog
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
