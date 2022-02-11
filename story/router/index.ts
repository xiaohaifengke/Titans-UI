import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/else/home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Home }]
})

const modules = import.meta.glob('../pages/**/**.vue')
router.beforeEach(async (to, from) => {
  if (!to.meta.loaded && to.matched.length === 0) {
    router.addRoute({
      path: to.path,
      name: to.path,
      meta: {
        loaded: true
      },
      component:
        modules[`../pages${to.path}.vue`] || modules['../pages/else/404.vue']
    })
    return to.fullPath
  }
})

export default router
