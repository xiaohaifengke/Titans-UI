<template>
  <Transition name="fadeInUp">
    <div class="ti-player-controls" v-show="visible">
      <svg class="altitude-path-supporter">
        <clipPath id="altitudePath">
          <path :d="d"></path>
        </clipPath>
      </svg>
      <div ref="controlsBar" class="controls-bar">
        <DegreeScale :options="options" v-bind="$attrs" :progress="progress" />
        <div class="player-controls-bar-top"></div>
        <div class="player-controls-bar-bottom">
          <Speed v-bind="$attrs" :progress="progress" ref="speedRef" />
          <div class="right-panel">
            <div class="distance-text item">
              <span class="cur">{{ curDistance }}</span>
              <span class="sep">/</span>
              <span class="total">{{ totalDistance }}km</span>
            </div>
            <Screenfull
              v-if="screenfullable"
              class="item"
              :screenfullElement="screenfullElement"
            />
            <Icon icon="refresh-right" @click.stop="emitReplay" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import DegreeScale from './components/degree-scale.vue'
import Speed from './components/speed.vue'
import Screenfull from '@titans-ui/components/screenfull'
import Icon from '@titans-ui/components/icon'
import { PolarValue } from './types'

export default defineComponent({
  name: 'TiPlayerControls',
  components: { DegreeScale, Speed, Screenfull, Icon },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({
        controlsBarUpperHeight: 38,
        controlsBarUnderHeight: 32
      })
    },
    points: {
      type: Array
    },
    screenfullElement: {
      type: Object
    },
    progress: {
      type: Number,
      default: 0
    },
    screenfullable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onReplay'],
  setup(props, { emit }) {
    const { controlsBar, d } = useGeneratorPath(props.points)
    const { totalDistance, curDistance } = useGetDistance(props)

    const speedRef = ref(null as any)
    const emitReplay = () => {
      speedRef.value.setPauseStatus('play')
      emit('onReplay')
    }

    return {
      d,
      controlsBar,
      totalDistance,
      curDistance,
      emitReplay,
      speedRef
    }
  }
})

function useGetDistance(props) {
  const totalDistance =
    +props.points[props.points.length - 1].distance.toFixed(2)
  const curDistance = computed(() =>
    (props.progress * totalDistance).toFixed(2)
  )
  return {
    totalDistance,
    curDistance
  }
}

function useGeneratorPath(points) {
  const polarValue: PolarValue = points.reduce(
    (prev, point) => {
      if (point.altitude > prev.maxAltitude) {
        prev.maxAltitude = point.altitude
      }
      if (point.altitude < prev.minAltitude) {
        prev.minAltitude = point.altitude
      }
      return prev
    },
    { minDistance: 0, maxDistance: 0, minAltitude: Infinity, maxAltitude: 0 }
  )
  polarValue.minDistance = points[0].distance
  polarValue.maxDistance = points[points.length - 1].distance
  const altitudeDispersion = polarValue.maxAltitude - polarValue.minAltitude
  const distanceDispersion = polarValue.maxDistance - polarValue.minDistance
  const controlsBar = ref<Element>(null)
  const d = ref('')

  function mountedCb() {
    const controlsBarWidth =
      controlsBar.value.parentElement.parentElement.offsetWidth
    const controlsBarHeight =
      controlsBar.value.parentElement.parentElement.offsetHeight
    const altitudeHeight = 30
    d.value = points.reduce((prev, point, index) => {
      const x =
        ((point.distance - polarValue.minDistance) / distanceDispersion) *
        controlsBarWidth
      const y =
        altitudeDispersion === 0
          ? 0
          : (1 -
              (point.altitude - polarValue.minAltitude) / altitudeDispersion) *
            altitudeHeight
      return `${prev} ${index ? 'L' : 'M'} ${x} ${y}`
    }, '')
    d.value += `L ${controlsBarWidth} ${controlsBarHeight} L 0 ${controlsBarHeight}`
  }

  onMounted(() => {
    mountedCb()
    window.addEventListener('resize', mountedCb)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', mountedCb)
  })
  return { d, controlsBar }
}
</script>
