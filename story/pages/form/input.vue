<template>
    <ti-input></ti-input>
    <h4>状态</h4>
    <ti-input
     v-for="item in statusList"
     :key="item"
     :status="item"
     style="margin-right: 8px;"></ti-input>
</template>
<script>
export default {
    name: 'demo-input',
    data() {
        return {
            statusList: ['primary', 'success', 'warn', 'error', 'info']
        };
    }
};
</script>