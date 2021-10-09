<template>
  <div class="digital-transition-demo">
    <ti-button
      @click="changeEndValue(1)"
      :type="value === 1000 ? 'primary' : 'warning'"
      >增加</ti-button
    >
    <ti-button
      @click="changeEndValue"
      :type="value === 1000 ? 'primary' : 'warning'"
      >减少</ti-button
    >
    <ti-digital-transition
      :step="2"
      :duration="2000"
      @ended="ended"
      @updated="updated"
      >{{ value }}</ti-digital-transition
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'digital-transition',
  data() {
    return {
      value: 520
    }
  },
  methods: {
    ended(t) {
      console.log('监听到结束事件:', t)
    },
    updated(t) {
      console.log('监听到updated事件:', t)
    },
    changeEndValue(p) {
      if (p === 1) {
        this.value += 1000
      } else {
        this.value -= 1000
      }
    }
  }
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.digital-transition-demo {
  color: red;
}
</style>
