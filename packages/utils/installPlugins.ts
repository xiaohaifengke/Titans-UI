import type { App, Plugin } from 'vue'

export type TiComponentPlugin<T> = T & Plugin

export function installPlugins<T>(Component: T) {
  ;(Component as TiComponentPlugin<T>).install = function (app: App) {
    app.component((Component as any).name, Component)
  }
  return Component as TiComponentPlugin<T>
}
