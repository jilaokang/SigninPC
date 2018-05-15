<template>
    <Menu mode="horizontal" theme="dark">
        <logo></logo>
        <div class="layout-nav">
            <Time></Time>
            <exit></exit>
        </div>
    </Menu>
</template>

<script>
    import exit from './topMenu/exit';
    import logo from './topMenu/logo';
    import Time from './topMenu/time'

    export default {
        components: {
            exit, logo, Time
        }
    };
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>