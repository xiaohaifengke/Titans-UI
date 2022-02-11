<template>
  <div class="widget-demo" ref="widgetDemoPage">
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
    <div class="linear-container">
      <TiWidget name="loading" genre="linear" />
      <TiWidget name="loading" fontSize="8px" :type="type" genre="linear" />
      <TiWidget name="loading" fontSize="8px" genre="linear" />
      <TiWidget
        name="loading"
        fontSize="8px"
        genre="linear"
        :type="type"
        :color="color"
      />
    </div>
    <h2>screenfull</h2>
    <h4>basic</h4>
    <div>
      <TiWidget
        name="screenfull"
        :screenfullElement="widgetDemoPage"
      ></TiWidget>
    </div>
    <h4>icon slot</h4>
    <TiWidget name="screenfull" :screenfullElement="widgetDemoPage">
      <template #exit-fullscreen-icon>
        <TiIcon icon="switch-button"></TiIcon>
      </template>
      <template #fullscreen-icon>
        <TiIcon icon="full-screen"></TiIcon>
      </template>
    </TiWidget>
    <h2>marquee</h2>
    <h4>basic</h4>
    <TiWidget
      style="height: 50px"
      name="marquee"
      content="警告：2022-01-17 16:10:00 E 102.919 N 25.050  发现疑似森林火情 "
    ></TiWidget>
    <h4>slot</h4>
    <div class="marquee-demo-slot">
      <div class="header-marquee">
        <TiWidget class="marquee-demo" name="marquee" pauseOnHover>
          <p
            style="margin-right: 38px"
            class="marquee-content"
            :key="marqueeData.date"
            @click="handleMarquee(marqueeData)"
          >
            警告：
            <span class="marquee-content-detail">
              {{ marqueeData.date }} {{ marqueeData.lnt }} {{ marqueeData.lat }}
            </span>
            发现疑似森林火情
          </p>
        </TiWidget>
      </div>
    </div>
  </div>
</template>

<script>
import { onUnmounted, reactive, ref } from 'vue'

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

    const marqueeData = reactive({
      date: '2022-01-20 21:12',
      lnt: 'E 102°54’',
      lat: 'N 30°05’'
    })

    const handleMarquee = (data) => {
      console.log(data)
    }

    // screenfull
    const widgetDemoPage = ref(null)

    return {
      type,
      color,
      marqueeData,
      handleMarquee,
      widgetDemoPage
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.widget-demo {
  background-color: #fff;
}
.ti-widget + .ti-widget {
  margin-left: 50px;
}

.linear-container {
  display: flex;
  align-items: center;
  height: 38px;
}

.marquee-demo {
  background: linear-gradient(
    to right,
    transparent,
    rgba(242, 100, 72, 0.38),
    transparent
  );
}

.marquee-demo-slot {
  position: relative;
  height: 200px;
  border: 1px dashed gray;

  .header-marquee {
    position: absolute;
    top: 10px;
    right: 15px;
    width: 380px;
  }

  .marquee-content-detail {
    color: #e03a3a;
  }
}
</style>
