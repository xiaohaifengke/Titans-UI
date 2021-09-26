<template>
  <AppNavigator defaultPath="normal/button" ref="navigator">
    <article class="app-home">
      <section
        class="app-header"
        :style="{ height: HomeConfig.headSize + 'px' }"
      >
        <span @click="goHome">Titans-UI</span>
      </section>
      <section
        class="app-menu"
        :style="{
          width: HomeConfig.menuSize + 'px',
          top: HomeConfig.headSize + 'px'
        }"
      >
        <app-menu />
      </section>
      <section
        class="app-content"
        :style="{
          paddingTop: HomeConfig.headSize + 20 + 'px',
          paddingLeft: HomeConfig.menuSize + 20 + 'px'
        }"
      >
        <app-navigator-page />
      </section>
    </article>
  </AppNavigator>
</template>

<script lang="ts">
import { AppNavigator } from './components/navigator/app-navigator'
import { AppNavigatorPage } from './components/navigator/app-navigator-page'
import AppMenu from './components/app/app-menu.vue'
import { defineComponent } from '@vue/runtime-core'
const HomeConfig = {
  headSize: 60,
  menuSize: 300
}

export default defineComponent({
  components: {
    AppMenu,
    AppNavigator,
    AppNavigatorPage
  },
  name: 'app',
  data() {
    return {
      HomeConfig
    }
  },
  methods: {
    goHome() {
      console.log(this.$refs.navigator)
      ;(this.$refs.navigator as any).$._refer.methods.go('home')
    }
  }
})
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

.app-home {
  .app-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: white;
    border-bottom: solid 1px #f2f2f2;
  }

  .app-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    border-right: solid 1px #f2f2f2;
  }

  .app-content {
    box-sizing: border-box;
    min-height: 100vh;
  }
}
</style>
