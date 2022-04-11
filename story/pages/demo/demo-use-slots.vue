<template>
  <demo-use-slots-component>
    <template #[slotName]>
      <div style="color: red">这是测试动态插槽的</div>
    </template>
    <template #default>
      <p style="color: cyan">这是默认的插槽哦.</p>
    </template>
  </demo-use-slots-component>
  <button @click="changeSlot">change slot</button>
</template>
<script>
import { ref } from '@vue/reactivity'
import DemoUseSlotsComponent from './demo-use-slots-component/demo-use-slots-component.tsx'
export default {
  components: { DemoUseSlotsComponent },
  setup() {
    const slotName = ref('head')
    const changeSlot = () => {
      slotName.value = 'foot'
    }
    return {
      slotName,
      changeSlot
    }
  }
}
</script>
