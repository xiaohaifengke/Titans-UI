# Marquee 跑马灯

## 基础用法

:::demo
```vue
<template>
  <TiMarquee
    style="height: 50px"
    name="marquee"
    content="警告：2022-01-17 16:10:00 E 102.919 N 25.050  发现疑似森林火情 "
  ></TiMarquee>
</template>
```
:::

## 通过插槽的方式

:::demo
```vue
<template>
  <div class="ti-marquee-demo_slot">
    <div class="ti-marquee_container">
      <TiMarquee class="marquee-demo" pauseOnHover>
        <p
          style="margin-right: 38px"
          class="marquee-demo_content"
          :key="marqueeData.date"
          @click="handleMarquee(marqueeData)"
        >
          警告：
          <span class="marquee-demo_content-detail">
              {{ marqueeData.date }} {{ marqueeData.lnt }} {{ marqueeData.lat }}
            </span>
          发现疑似森林火情
        </p>
      </TiMarquee>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const marqueeData = reactive({
  date: '2022-01-20 21:12',
  lnt: 'E 102°54’',
  lat: 'N 30°05’'
})

const handleMarquee = (data) => {
  console.log(data)
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.ti-marquee-demo_slot {
  position: relative;
  height: 200px;
  border: 1px dashed gray;
}

.ti-marquee_container {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 380px;
}

.marquee-demo {
  background: linear-gradient(
      to right,
      transparent,
      rgba(242, 100, 72, 0.38),
      transparent
  );
}

.marquee-demo_content-detail {
  color: #e03a3a;
}
</style>
```
:::

## Marquee 属性
| 参数      | 说明    | 类型    | 可选值                                              | 默认值  |
| -------- | ------ | ------- | -------------------------------------------------- | ------- |
| content | 跑马灯的内容 | string | —                                                |  —      |
| pause-on-hover | 是否在鼠标悬浮时暂停 | boolean | —                                       | false  |

## Marquee 插槽
| 插槽名         	| 说明                                 |
| --------------	| ----------------------------------- |
| -  	      | 自定义内容   |