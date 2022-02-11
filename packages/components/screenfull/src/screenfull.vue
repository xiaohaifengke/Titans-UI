<template>
  <div class="ti-screenfull" :class="slotClass" @click="click">
    <template v-if="isFullscreen">
      <slot name="exit-fullscreen-icon">
        <div class="ti-screenfull-wrapper">
          <div class="ti-screenfull-default-icon">
            <Icon icon="bottom-right"></Icon>
            <Icon icon="bottom-left"></Icon>
            <Icon icon="top-right"></Icon>
            <Icon icon="top-left"></Icon>
          </div>
        </div>
      </slot>
    </template>
    <template v-else>
      <slot name="fullscreen-icon">
        <div class="ti-screenfull-wrapper">
          <div class="ti-screenfull-default-icon">
            <Icon icon="top-left"></Icon>
            <Icon icon="top-right"></Icon>
            <Icon icon="bottom-left"></Icon>
            <Icon icon="bottom-right"></Icon>
          </div>
        </div>
      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, onMounted } from 'vue'
import screenfull from 'screenfull'
import Icon from '@titans-ui/components/icon'

export default defineComponent({
  name: 'TiScreenfull',
  components: { Icon },
  props: {
    screenfullElement: Object
  },
  setup(props, { slots }) {
    const isFullscreen = ref(false)
    const click = () => {
      if (!screenfull.isEnabled) {
        console.warn(
          '[TiWidget/screenfull] Screenfull api(requestFullscreen) is not supported in your browser!'
        )
        return false
      }
      screenfull.toggle(props.screenfullElement as Element)
    }
    const change = () => {
      isFullscreen.value = (screenfull as screenfull.Screenfull).isFullscreen
    }
    onMounted(() => {
      if (screenfull.isEnabled) {
        screenfull.on('change', change)
      }
    })
    onBeforeUnmount(() => {
      if (screenfull.isEnabled) {
        screenfull.off('change', change)
      }
    })

    return {
      isFullscreen,
      click
    }
  }
})
</script>
