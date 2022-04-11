<template>
  <canvas ref="canvas" class="ti-degree-scale" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, watch, onMounted } from 'vue'
import useDegreeScale from '../use/use-degree-scale'

export default defineComponent({
  name: 'TiDegreeScale',
  props: {
    options: {
      type: Object,
      default: () => ({
        controlsBarUpperHeight: 38,
        controlsBarUnderHeight: 32
      })
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  emits: ['onProgressChange'],
  setup(props) {
    const canvas: HTMLCanvasElement = ref(null)
    let degreeScale
    watch(
      () => props.progress,
      (val: number) => {
        degreeScale && degreeScale.setProgress(val)
      }
    )
    onMounted(() => {
      degreeScale = useDegreeScale()
    })
    return {
      canvas
    }
  }
})
</script>
