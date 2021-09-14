<template>
  <div class="button-demo-page">
    <ti-button class="demo-button"></ti-button>
    <ti-button class="demo-button" label="label"></ti-button>
    <ti-button class="demo-button">primary</ti-button>
    <ti-button @click="testClick">测试click</ti-button>
    <h4>按钮类型 type</h4>
    <ti-button v-for="type in typeList" :key="type" :type="type">{{type}}</ti-button>
    <h4>按钮模式 mode</h4>
    <ti-button mode="text">text按钮</ti-button>
    <ti-button mode="plain">plain按钮</ti-button>
    <ti-button mode="outline">outline按钮</ti-button>
    <div>
      <div v-for="mode in modeList" :key="mode" style="margin-bottom: 20px;">
        <ti-button v-for="type in typeList" :key="type" :type="type" :mode="mode">{{type === 'default'?mode:type}}</ti-button>
      </div>
    </div>
    <h4>按钮形状 shape</h4>
    <ti-button mode="text" shape="round">text按钮</ti-button>
    <ti-button type="primary" shape="square">fill按钮</ti-button>
    <ti-button mode="plain" type="primary" shape="fillet">plain按钮</ti-button>
    <ti-button mode="outline" type="primary" shape="round" >outline按钮</ti-button>
    <div>
      <div v-for="shape in shapeList" :key="shape" style="margin-bottom: 20px;">
        <ti-button v-for="type in typeList" :key="type" :type="type" :shape="shape">{{type === 'default'?shape:type}}</ti-button>
      </div>
    </div>
    <h4>按钮大小 size</h4>
    <ti-button mode="text" shape="round">text按钮</ti-button>
    <ti-button type="primary" shape="square">fill按钮</ti-button>
    <ti-button mode="plain" type="primary" shape="fillet">plain按钮</ti-button>
    <ti-button mode="outline" type="primary" shape="round" >outline按钮</ti-button>
    <div>
      <div v-for="size in sizeList" :key="size" style="margin-bottom: 20px;">
        <ti-button v-for="type in typeList" :key="type" :type="type" :size="size">{{type === 'default'?size:type}}</ti-button>
      </div>
    </div>
    <h4>禁用状态</h4>
    <div>
      <ti-button v-for="type in typeList" :key="type" :type="type" disabled>{{type}}</ti-button>
    </div>
    <h4>图标按钮</h4>
    <div>
      <div>
        <TiButton type="primary" icon="search"></TiButton>
        <TiButton type="warning" icon="edit">编辑</TiButton>
        <TiButton type="danger" icon="close" iconPosition="suffix">关闭</TiButton>
      </div>
      <div>
        <TiButton type="primary" icon="search" shape="circle"></TiButton>
        <TiButton type="warning" icon="edit" shape="circle"></TiButton>
        <TiButton type="danger" icon="close" shape="circle"></TiButton>
      </div>
      <div>
        <TiButton type="primary" icon="search" shape="circle" size="large" mode="plain"></TiButton>
        <TiButton type="warning" icon="edit" shape="circle" size="small" mode="outline"></TiButton>
        <TiButton type="danger" icon="close" shape="circle" size="mini"></TiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-button',
  data() {
    return {
      typeList: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      modeList: ['fill','plain','outline','text'],
      shapeList: ['fillet','round','square'],
      sizeList: ['large', 'normal', 'small', 'mini']
    };
  },
  methods: {
    testClick(f) {
      console.log(f);
    }
  }
};
</script>

<style lang="scss">
.button-demo-page {
  padding: 20px;
}
.demo-button {
  margin-right: 8px;
}
.ti-button {
  margin-right: 8px;
}
</style>
