<template>
    <MenuItem name="1">
        {{this.date}}
    </MenuItem>
</template>

<script>
    export default {
        computed: {
            date: function () {
                const now = new Date();
                let month = now.getMonth() + 1;
                let day = now.getDay();
                let hours = now.getHours();
                let min = now.getMinutes();
                let sec = now.getSeconds();
                return `时间：${month}月${day}日 ${hours}:${min}:${sec}`
            }

        },
        methods: {
        }
    }
</script>

<style scoped>

</style>