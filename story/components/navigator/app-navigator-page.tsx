import { designComponent } from 'src/use/designComponent'
import { reactive, DefineComponent, markRaw, watch } from 'vue'
import { AppNavigator } from './app-navigator'

export const AppNavigatorPage = designComponent({
  setup() {
    const state = reactive({
      PageComponent: null as null | DefineComponent
    })

    const navigator = AppNavigator.use.inject()
    const utils = {
      reset: async () => {
        let { path } = navigator.state.route
        if (!path) return
        if (path.charAt(0) === '/') {
          path = path.slice(1)
        }
        const Component = (await import('story/pages/' + path)).default
        state.PageComponent = markRaw(Component)
      }
    }

    watch(() => navigator.state.route.path, utils.reset, { immediate: true })
    return {
      render: () => {
        const { PageComponent } = state
        return (
          <div class="app-navigator-page">
            {PageComponent ? <PageComponent /> : null}
          </div>
        )
      }
    }
  }
})
