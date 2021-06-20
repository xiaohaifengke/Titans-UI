<template>
    <div v-for="module in menus" :key="module.name">
        <div
         v-for="menu in module.children"
          :key="menu.name"
           @click.stop="handleClickMenu({path: `${module.path}/${menu.path}`})">
            <span>{{menu.meta.title}}</span>
            <span>{{menu.meta.subtitle}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {AppNavigator} from '../navigator/app-navigator';
import {AppMenu, MENUS} from './menus';
export default {
    name: 'app-menu',
    props: {
        currentPath: {type: String}
    },
    setup() {
        const navigator = AppNavigator.use.inject();

        return {
            menus: MENUS,
            handleClickMenu(menu: AppMenu) {
                console.log(menu);
                
                navigator.methods.go(menu.path);
            }
        };
    }
};
</script>