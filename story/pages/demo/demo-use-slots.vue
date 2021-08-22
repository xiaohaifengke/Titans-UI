<template>
    <demo-use-slots-component>
        <template v-slot:head>
            <div>test slot head</div>
        </template>
    </demo-use-slots-component>
</template>
<script>
import DemoUseSlotsComponent from './demo-use-slots-component/demo-use-slots-component.tsx';
export default {
    components: { DemoUseSlotsComponent }
};
</script>