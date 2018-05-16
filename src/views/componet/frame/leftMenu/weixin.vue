<template>
    <Submenu name="3">
        <template slot="title">
            <Icon type="paper-airplane"></Icon>
            微信接收
        </template>
        <MenuItem name="2-1">
            <router-link to="/weixinuser">账号添加</router-link>
        </MenuItem>
        <MenuItem name="2-2">
            <router-link to="/weixinpush">推送内容</router-link>
        </MenuItem>
        <MenuItem name="2-3">
            <router-link to="/weixinmessage">反馈内容</router-link>
        </MenuItem>
    </Submenu>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>