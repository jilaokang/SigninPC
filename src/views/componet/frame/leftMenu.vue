<template>
    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1','2','3']">
        <survey></survey>
        <evalueation></evalueation>
        <weixin></weixin>
        <record></record>
    </Menu>
</template>

<script>
    import survey from './leftMenu/survey'
    import evalueation from './leftMenu/evaluation'
    import record from './leftMenu/record'
    import weixin from './leftMenu/weixin'

    export default {
        components: {
            survey, evalueation, record, weixin
        },
        methods: {
            dd() {
                store.state.topnav[0] = '测试版块'
            }
        }
    };
</script>

<style>
    a {
        color: #495060 !important;
    }
</style>
