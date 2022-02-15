# PlayerControls 轨迹回放控件
用于配合 GIS 展示人员或无人机等设备的历史轨迹回放的功能。

该组件除了有和视频控件类似的功能外，还可直观的展示轨迹的高程变化信息。

## 基础用法

:::demo

```vue

<template>
  <div class="ti-player-controls_story">
    <div class="ti-player-controls_data-demo">
      <div>points({{points?.length}}):</div>
      <div class="ti-player-controls_data">
        <div v-for="point in points">
          {{ JSON.stringify(point) }}
        </div>
      </div>
    </div>
    <div class="ti-player-controls_container" ref="screenfullElement">
      <div class="ti-player-controls_content">
        <div>回放进度：{{ (progress * 100).toFixed(2) }} %</div>
        <div>回放速率：{{ 2 ** rate }} 倍速</div>
      </div>
      <TiPlayerControls
        :autoplay="autoplay"
        :progress="progress"
        :defaultRate="defaultRate"
        :screenfullElement="screenfullElement"
        :points="points"
        screenfullable
        @onProgressChange="onProgressChange"
        @onRateChange="onRateChange"
        @onPause="onPause"
        @onPlay="onPlay"
        @onReplay="onReplay"
        class="ti-player-controls_component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'

const useGeneratePoints = (distance: number, pointsLength: number = 252) => {
  const perDistance = distance / (pointsLength - 1)
  const altitude = 5000
  return Array.from({length: pointsLength}).map((point, index) => {
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
  onMounted(() => {
    requestAnimationFrame(step)
  })
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
const totalDistance = +(Math.random() * 50).toFixed(2) + 30 // 模拟距离在 30km - 80km 之间

// 模拟轨迹点的数据
const points = useGeneratePoints(totalDistance)

const screenfullElement = ref(null)
const {progress, rate, pause} = useImitateContrailReplay(totalDistance)
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
.ti-player-controls_story {
  position: relative;
  height: 500px;
  overflow: auto;
  background: #12345661;
  background-size: cover;
}

.ti-player-controls_data-demo {
  display: flex;
  justify-content: flex-start;
}

.ti-player-controls_data {
  padding: 0 20px;
  height: 90px;
  overflow: auto;
}

.ti-player-controls_container {
  position: absolute;
  top: 120px;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 360px;
  margin: 0 auto;
  font-size: 30px;
  color: #fff;
  background-color: #315050;
}

.ti-player-controls_component {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

```
:::

## PlayerControls 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| visible | 是否显示控件 | boolean | —                                                |  true   |
| autoplay | 是否自动播放 | boolean | —                                               |  false  |
| default-rate | 初始回放速率的次幂。若设置为 `n`，则实际显示的速率为 `2 ** n` | number | 区间范围[0, 11]   |  6      |
| points | 轨迹点数组,每个数据点包含距离和高程信息: `{distance: number, altitude: number}` | array  | —        | []    |
| progress | 回放的进度 | number | —                                                 | 0      |
| screenfullable | 是否显示全屏按钮 | boolean | —                                       | false  |
| screenfull-element  | 在点击控件上的全屏按钮时需要全屏的元素的ref | DOM      | —      | —      |



## PlayerControls 事件
| 事件名      | 说明        | 回调参数  |
| ---------- | ---------- | ------- |
| onProgressChange    | 在进度变化时触发 | (currentProgress: number) |
| onRateChange    | 在播放速率变化时触发 | (currentRate: number) |
| onPause    | 在暂停时触发 | —       |
| onPlay     | 在播放时触发 | —       |
| onReplay   | 在重播时触发 | —       |


