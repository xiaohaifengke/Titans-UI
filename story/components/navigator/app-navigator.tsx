import { designComponent } from '@/use/designComponent';
import { defineComponent, reactive, onBeforeUnmount, provide, inject, getCurrentInstance } from 'vue';

interface Route {
    path?: string,
    hash?: string,
    param?: { [k: string]: string }
}

/**
 * @Description: hash路由
 * @Author:  Jhail
 * @Date: 2021-01-05 23:58:27
 */
function getRoute(): Route {
    let locationHash = window.location.hash || '';
    if (locationHash.charAt(0) === '#') {
        locationHash = locationHash.slice(1);
    }
    const [path, hash] = (decodeURIComponent(locationHash)).split('#');
    return {
        path,
        hash
    };
}


function useAppNavigator(props: { defaultPath?: string }) {
    const ctx = getCurrentInstance();
    const currentRoute = getRoute();
    if(!currentRoute.path) {
        currentRoute.path = props.defaultPath;
    }

    const state = reactive({
        route: currentRoute
    });

    const methods = {
        go(path: string) {
            window.location.hash = encodeURIComponent(path);
        }
    };

    const handler = {
        hashchange: () => {
            state.route = getRoute();
        }
    };

    const refer = {
        state,
        methods
    };
    
    (ctx as any)._refer = refer;
    window.addEventListener('hashchange', handler.hashchange);
    onBeforeUnmount(() => window.removeEventListener('hashchange', handler.hashchange));

    return refer;
}

export const AppNavigator = designComponent({
    name: 'app-navigator',
    props: {
        defaultPath: String
    },
    provideRefer: true,
    setup(props, setupContext) {
        return {
            refer: useAppNavigator(props),
            render: () => setupContext.slots.default && setupContext.slots.default()
        };
    }
});
