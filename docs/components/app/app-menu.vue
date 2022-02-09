<template>
  <div class="app-menu">
    <div class="module" v-for="module in menus" :key="module.name">
      <div class="module-title">{{ module.name }}</div>
      <div
        class="module-item"
        v-for="menu in module.children"
        :key="menu.name"
        @click.stop="handleClickMenu({ path: `${module.path}/${menu.path}` })"
      >
        <span>{{ menu.meta.title }}</span>
        <span>{{ menu.meta.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AppMenu, MENUS } from './menus'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'app-menu',
  props: {
    currentPath: { type: String }
  },
  setup() {
    // const navigator = inject(`@@app-navigator`)
    const router = useRouter()

    return {
      menus: MENUS,
      handleClickMenu(menu: AppMenu) {
        router.push(menu)
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-menu {
  box-sizing: border-box;
  padding-left: 15px;
}
.module-title {
  margin: 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.module-item {
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
}
</style>
