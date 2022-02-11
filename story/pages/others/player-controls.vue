<template>
  <div class="ti-player-controls-story">
    <div class="container" ref="screenfullElement">
      <div class="content">{{ `${progress}`.slice(0, 7) }}</div>
      <TiPlayerControls
        :autoplay="autoplay"
        :progress="progress"
        :defaultRate="defaultRate"
        :screenfullElement="screenfullElement"
        :points="points"
        @onProgressChange="onProgressChange"
        @onRateChange="onRateChange"
        @onPause="onPause"
        @onPlay="onPlay"
        @onReplay="onReplay"
        class="player-controls-component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
const useGeneratePoints = (distance: number) => {
  const length = 252
  const perDistance = distance / (length - 1)
  const altitude = 5000
  return Array.from({ length: length }).map((point, index) => {
    return {
      distance: index * perDistance,
      altitude: Math.random() * altitude
      // speed: Math.random() * 3 + 15
    }
  })
}

const useImitateContrailReplay = (totalDistance: number) => {
  let startTime = Date.now()
  const distance = ref(0) // 距离起点从0开始
  const progress = computed({
    get: () => distance.value / (totalDistance * 1000),
    set: (val) => {
      distance.value = val * totalDistance * 1000
    }
  }) // 根据距离模拟的进度百分比
  const rate = ref(6) // 回放时的指数 回放的速度是Math.pow(2, rate)
  const pause = ref(true) // 是否暂停的参数
  const speed = 2 // 模拟2m/s的前进速度
  const step = () => {
    const curTime = Date.now()
    const durTime = curTime - startTime
    startTime = curTime
    if (!pause.value && distance.value < totalDistance * 1000) {
      distance.value = Math.min(
        (2 ** rate.value * speed * durTime) / 1000 + distance.value,
        totalDistance * 1000
      )
      requestAnimationFrame(step)
    } else {
      pause.value = true // 结束时
    }
  }
  requestAnimationFrame(step)
  watch(
    () => pause.value,
    (val) => {
      if (!val) {
        startTime = Date.now() // hack
        requestAnimationFrame(step)
      }
    }
  )
  return {
    progress,
    rate,
    pause
  }
}

const autoplay = ref(false)
const totalDistance = +(Math.random() * 50).toFixed(2) + 30

const points = useGeneratePoints(totalDistance)

const screenfullElement = ref(null)
const { progress, rate, pause } = useImitateContrailReplay(totalDistance)
const defaultRate = rate

const onProgressChange = (progressVal: number) => {
  progress.value = progressVal
}
const onRateChange = (rateVal: number) => {
  rate.value = rateVal
}
const onPause = () => {
  pause.value = true
}
const onPlay = () => {
  pause.value = false
}
const onReplay = () => {
  pause.value = false
  progress.value = 0
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.ti-player-controls-story {
  position: relative;
  height: 100vh;
  overflow: auto;
  background: #123456;
  background-size: cover;
}

.container {
  position: absolute;
  top: 350px;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 500px;
  margin: 0 auto;
  font-size: 30px;
  color: #fff;
  background-color: #315050;
}

.player-controls-component {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
