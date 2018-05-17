<template>
    <Content  :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <router-view></router-view>
    </Content>
</template>

<style scoped>
    .bg{
        background-image: url("../../static/img/bg.jpg")  !important;
    }
</style>