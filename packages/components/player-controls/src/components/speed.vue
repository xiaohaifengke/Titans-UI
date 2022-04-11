<template>
  <div class="ti-speed">
    <Icon class="el-icon-minus" icon="minus" @click="subtract" />
    <Icon
      class="play"
      :icon="'video-' + statusIcon"
      @click="playOrPause"
    ></Icon>
    <Icon class="el-icon-plus" icon="plus" @click="add" />
    <div class="current-speed">{{ currentSpeed }}x</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed, ref, watch, onMounted } from 'vue'
import Icon from '@titans-ui/components/icon'

export default defineComponent({
  name: 'TiSpeed',
  components: { Icon },
  props: {
    defaultRate: {
      type: Number,
      default: 6
      // validator: (rate) => {
      //   const rateStr = rate + ''
      //   if (/^\d+$/.test(rateStr) && rate <= 11) {
      //     return true
      //   }
      //   return false
      // }
    },
    progress: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onRateChange', 'onPause', 'onPlay'],
  setup(props, { emit }) {
    const currentSpeed = computed(() => 2 ** rate.value)
    const rate = ref(props.defaultRate)
    const add = () => {
      if (rate.value < 11) {
        rate.value += 1
      }
      emit('onRateChange', rate.value)
    }
    const subtract = () => {
      if (rate.value > 0) {
        rate.value -= 1
      }
      emit('onRateChange', rate.value)
    }

    const status = ref('')

    const statusIcon = computed(() => {
      if (status.value) {
        return status.value === 'play' ? 'pause' : 'play'
      } else {
        return props.autoplay ? 'pause' : 'play'
      }
    })
    const playOrPause = () => {
      if (props.progress < 1) {
        if (status.value === 'play') {
          status.value = 'pause'
          emit('onPause', rate.value)
        } else {
          status.value = 'play'
          emit('onPlay', rate.value)
        }
      }
    }
    const setPauseStatus = (val: 'play' | 'pause') => {
      if (['play', 'pause'].includes(val)) {
        status.value = val
      }
    }
    watch(
      () => props.progress,
      (value: number) => {
        if (value >= 1) {
          setPauseStatus('pause')
        }
      }
    )

    onMounted(() => {
      if (props.autoplay) playOrPause()
    })
    return {
      currentSpeed,
      status,
      statusIcon,
      add,
      subtract,
      playOrPause,
      setPauseStatus
    }
  }
})
</script>
