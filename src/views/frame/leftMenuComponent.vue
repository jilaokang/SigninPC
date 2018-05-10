<template>
    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
            <template slot="title"><Icon type="ios-navigate"></Icon>整体概况</template>
            <MenuItem name="1-1">
                <router-link to="/survey/situation">总览</router-link>
            </MenuItem>
            <MenuItem name="1-2">
                <router-link to="/survey/message">
                        留言反馈
                </router-link>
            </MenuItem>                 
        </Submenu>
        <Submenu name="2">
            <template slot="title"><Icon type="ios-keypad"></Icon>应用管理</template>
                <MenuItem name="2-1">
                    <router-link to="/survey/appmanger">功能管理</router-link>
                </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
    export default {};
</script>
