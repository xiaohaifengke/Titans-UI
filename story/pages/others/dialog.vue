<template>
  <div class="dialog-demo">
    <div
      style="
        position: fixed;
        top: 800px;
        left: 800px;
        width: 1px;
        height: 1px;
        background-color: red;
      "
    ></div>
    <TiButton @click="dragable = !dragable">dragable 取反</TiButton>
    <TiButton @click="showDialog">显示</TiButton>
    <TiDialog
      @drag="onDrag"
      :dragable="dragable"
      v-model:visible="visible"
      custom-class="custom-class-test"
    >
      <template #title>
        <div>这是 测试 title slot</div>
      </template>
      TiDialog的默认slot
    </TiDialog>

    <!--    <TiButton @click="showDialog1">显示1</TiButton>
    <TiDialog
      destroyOnClose
      v-model:visible="visible1"
      custom-class="custom-class-test"
    >
      <template #title>
        <div>这是 测试 title slot</div>
      </template>
      <AirdronePanel />
    </TiDialog>-->

    <TiButton @click="showDialog1">显示1</TiButton>
    <TiDialog
      destroyOnClose
      :overlay="false"
      noPointerEventsOnOverlay
      v-model:visible="visible1"
      custom-class="custom-class-test"
    >
      <template #title>
        <div>这是 测试 title slot</div>
      </template>
      <AirdronePanel />
    </TiDialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import AirdronePanel from '../../components/AirdronePanel/index.vue'

export default {
  name: 'dialog-demo',
  components: {
    AirdronePanel
  },
  setup() {
    let visible = ref(false)
    let visible1 = ref(false)
    const showDialog = () => {
      console.log('click')
      visible.value = true
    }
    const showDialog1 = () => {
      console.log('click')
      visible1.value = true
    }
    const beforeClose = (done) => {
      console.log(done)
      done()
    }
    const dragable = ref(false)
    const onDrag = (e) => {
      console.log(Date.now())
    }
    return {
      visible,
      visible1,
      showDialog,
      showDialog1,
      beforeClose,
      dragable,
      onDrag
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
//
</style>
