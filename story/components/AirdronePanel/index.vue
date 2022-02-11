<template>
  <div class="airdrone-panel">
    <div class="header">
      <div class="title">无人机</div>
      <svg-icon class="close" iconClass="close"></svg-icon>
    </div>
    <div class="airdrone-info">
      <div class="info-item">
        <div class="label">名称</div>
        <div class="value">无人机-89757</div>
      </div>
      <div class="info-item">
        <div class="label">型号</div>
        <div class="value num">UAV-HB-0982A</div>
      </div>
      <div class="info-item">
        <div class="label">最近起飞</div>
        <div class="value num">2021/07/29 09:01</div>
      </div>
      <div class="info-item">
        <div class="label">状态</div>
        <div class="value status">
          飞行中
          <svg-icon class="icon" iconClass="airdrone_video_live"></svg-icon>
        </div>
      </div>
    </div>
    <div class="horizontal-sep"></div>
    <ul class="list">
      <li class="list-item" v-for="item in 3" :key="item">
        <div class="info-item">
          <div class="label">任务编号</div>
          <div class="value serial-number">21-973972</div>
        </div>
        <div class="info-item">
          <div class="label">开始时间</div>
          <div class="value">2021/07/28 11:09</div>
        </div>
        <div class="info-item">
          <div class="label">结束时间</div>
          <div class="value">2021/07/28 11:56</div>
        </div>
        <div class="info-item">
          <div class="label">持续时间</div>
          <div class="value time">47m</div>
        </div>
        <div class="info-item icon">
          <svg-icon
            iconClass="airdrone_video_replay"
            @click="gotoTrailReplay"
          ></svg-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AirdronePanel',
  setup() {
    const gotoTrailReplay = () => {
      //
    }
    return {
      gotoTrailReplay
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.airdrone-panel {
  position: relative;
  width: 480px;
  height: 296px;
  background: rgba(5, 35, 53, 0.8);
  border: 1px solid;
  border-image: linear-gradient(0deg, #fff, #00c6ff, #007bff) 10 10;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.8);
}

.header {
  position: relative;
  padding: 10px 30px 10px 10px;
  font-family: PingFang SC;
  font-size: 13px;
  font-weight: 500;
  color: #0ff;
  // line-height: 12px;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.airdrone-info {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  .info-item {
    min-width: 70px;
    .label {
      font-family: PingFang SC;
      font-size: 12px;
      font-weight: 400;
      color: #7fdcff;
    }
    .value {
      font-family: PingFang SC;
      font-size: 13px;
      line-height: 13px;
      color: #fff;

      &.num {
        font-family: D-DIN;
        font-size: 14px;
        font-weight: bold;
        line-height: 14px;
      }

      &.status {
        position: relative;
        font-family: PingFang SC;
        font-size: 13px;
        font-weight: 500;
        line-height: 13px;
        color: #00ff7e;

        .icon {
          position: absolute;
          top: -5px;
          right: 0;
          font-size: 23px;
        }
      }
    }
  }
}

.horizontal-sep {
  height: 1px;
  margin: 15px 30px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 198, 255, 0.7) 50%,
    transparent
  );
}

.list {
  padding: 0 10px 10px 10px;

  .list-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    margin-bottom: 5px;
    background: rgba(0, 15, 24, 0.6);
    &:last-child {
      margin-bottom: 0;
    }

    .info-item {
      &.icon {
        font-size: 20px;
        line-height: 29px;
        color: rgba(0, 255, 255, 1);
        cursor: pointer;
      }
      .label {
        font-family: PingFang SC;
        font-size: 12px;
        font-weight: 400;
        color: #7fdcff;
      }
      .value {
        font-family: D-DIN;
        font-size: 14px;
        line-height: 14px;
        color: #fff;

        &.serial-number {
          font-weight: bold;
          color: #0ff;
        }

        &.time {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
