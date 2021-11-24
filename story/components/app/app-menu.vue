<template>
  <div v-for="module in menus" :key="module.name">
    <div
      v-for="menu in module.children"
      :key="menu.name"
      @click.stop="handleClickMenu({ path: `${module.path}/${menu.path}` })"
    >
      <span>{{ menu.meta.title }}</span>
      <span>{{ menu.meta.subtitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { AppMenu, MENUS } from './menus'
import { inject } from 'vue'
export default {
  name: 'app-menu',
  props: {
    currentPath: { type: String }
  },
  setup() {
    const navigator = inject(`@@app-navigator`)

    return {
      menus: MENUS,
      handleClickMenu(menu: AppMenu) {
        console.log(menu)

        // (navigator as any).methods.go(menu.path)
      }
    }
  }
}
</script>
