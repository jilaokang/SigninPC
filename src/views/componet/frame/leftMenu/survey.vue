<template>
    <Submenu name="1">
        <template slot="title">
            <Icon type="home"></Icon>
            整体概况
        </template>
        <MenuItem name="1-1">
            <router-link to="/situation">
                校园概况
            </router-link>
        </MenuItem>
        <MenuItem name="1-2">
            <router-link to="/faculty">
                院系情况
            </router-link>
        </MenuItem>
        <MenuItem name="1-3">
            <router-link to="/classBlock">
                班级情况
            </router-link>
        </MenuItem>
        <MenuItem name="1-4">
            <router-link to="/teach">
                教学情况
            </router-link>
        </MenuItem>
        <MenuItem name="1-5">
            <router-link to="/student">
                学生情况
            </router-link>
        </MenuItem>
    </Submenu>
</template>

<script>
    export default {
        methods:{
            
        }
    }
</script>

<style scoped>

</style>