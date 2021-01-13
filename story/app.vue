<template>
    <AppNavigator defaultPath="normal/button">
        <div class="app-home">
            <app-navigator-page/>
        </div>
    </AppNavigator>
</template>

<script>
import {AppNavigator} from './components/navigator/app-navigator'
import {AppNavigatorPage} from './components/navigator/app-navigator-page'
    export default {
        name: "app",
        components: {
            AppNavigator,
            AppNavigatorPage
        }
    }
</script>

<style lang="scss">

</style>