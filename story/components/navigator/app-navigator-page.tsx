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

}