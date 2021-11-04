<template>
  <div class="widget-demo">
    <h2>voice</h2>
    <TiWidget name="voice" />
    <TiWidget name="voice" motion fontSize="25px" :type="type" />
    <TiWidget name="voice" motion fontSize="25px" />
    <TiWidget name="voice" motion fontSize="25px" :type="type" :color="color" />
    <h2>loading</h2>
    <h3>genre: round</h3>
    <TiWidget name="loading" />
    <TiWidget name="loading" motion fontSize="50px" :type="type" />
    <TiWidget name="loading" motion fontSize="50px" />
    <TiWidget
      name="loading"
      motion
      fontSize="50px"
      :type="type"
      :color="color"
    />
    <h3>genre: linear</h3>
    <TiWidget name="loading" genre="linear" />
    <TiWidget
      name="loading"
      motion
      fontSize="30px"
      :type="type"
      genre="linear"
    />
    <TiWidget name="loading" motion fontSize="30px" genre="linear" />
    <TiWidget
      name="loading"
      motion
      fontSize="30px"
      genre="linear"
      :type="type"
      :color="color"
    />
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
    }, 1800)

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

<style scoped lang="scss" rel="stylesheet/scss">
.ti-widget + .ti-widget {
  margin-left: 50px;
}
</style>
