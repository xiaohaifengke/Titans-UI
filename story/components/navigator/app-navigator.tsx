import { defineComponent, reactive, onBeforeUnmount, provide, inject } from 'vue'

interface Route {
    path?: string,
    hash?: string,
    param?: { [k: string]: string }
}

const APP_NAVIGATOR_PROVIDER = '@@app-navigator'

/**
 * @Description: hash路由
 * @Author:  Jhail
 * @Date: 2021-01-05 23:58:27
 */
function getRoute(): Route {
    let locationHash = window.location.hash || ''
    if (locationHash.charAt(0) === '#') {
        locationHash = locationHash.slice(1)
    }
    const [path, hash] = (decodeURIComponent(locationHash)).split('#')
    return {
        path,
        hash
    }
}


function useAppNavigator(props: { defaultPath?: string }) {
    const currentRoute = getRoute()
    if(!currentRoute.path) {
        currentRoute.path = props.defaultPath
    }

    const state = reactive({
        route: currentRoute
    })

    const methods = {
        go(path: string) {
            window.location.hash = encodeURIComponent(path)
        }
    }

    const handler = {
        hashchange: () => {
            state.route = getRoute()
        }
    }

    const refer = {
        state,
        methods
    }

    window.addEventListener('hashchange', handler.hashchange)
    onBeforeUnmount(() => window.removeEventListener('hashchange', handler.hashchange))

    provide(APP_NAVIGATOR_PROVIDER, refer)

    return refer
}

export function injectAppNavigator() {
    return inject(APP_NAVIGATOR_PROVIDER) as ReturnType<typeof useAppNavigator>
}

export const AppNavigator = defineComponent({
    name: 'app-navigator',
    props: {
        defaultPath: String
    },
    setup(props, setupContext) {
        useAppNavigator(props)
        return () => setupContext.slots.default && setupContext.slots.default()
    }
})