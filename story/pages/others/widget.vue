<template>
  <div class="widget-demo">
    <TiWidget name="voice" />
    <br />
    <TiWidget name="voice" motion fontSize="25px" :type="type" />
    <TiWidget name="voice" motion fontSize="25px" />
    <TiWidget name="voice" motion fontSize="25px" :type="type" :color="color" />
  </div>
</template>

<script>
import { onUnmounted, ref } from 'vue'

export default {
  name: 'WidgetDemo',
  setup() {
    const types = ['default', 'primary', 'success', 'warning', 'danger', 'info']
    const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'violet']
    const type = ref(null)
    const color = ref(null)
    let i = 0
    const timer = setInterval(() => {
      type.value = types[i]
      color.value = colors[i]
      i = i < 5 ? ++i : 0
    }, 2000)

    onUnmounted(() => {
      clearInterval(timer)
    })
    return {
      type,
      color
    }
  }
}
</script>

<!--<style scoped lang="scss" rel="stylesheet/scss">

</style>-->
