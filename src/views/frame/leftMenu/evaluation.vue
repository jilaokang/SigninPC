<template>
    <Submenu name="2">
        <template slot="title">
            <Icon type="pie-graph"></Icon>
            综合评估
        </template>
        <MenuItem name="2-1">
            <router-link to="/appmanger">管理评估</router-link>
        </MenuItem>
        <MenuItem name="2-2">
            <router-link to="/appmanger">师资评估</router-link>
        </MenuItem>
        <MenuItem name="2-3">
            <router-link to="/appmanger">教学评估</router-link>
        </MenuItem>
    </Submenu>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>