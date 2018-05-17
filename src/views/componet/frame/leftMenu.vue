<template>
    <Menu theme="light" width="auto" :open-names="['1','2','3']"  v-on:on-select="changeTopNav">
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
            changeTopNav(name){
                this.$store.commit('topnavUpdate',name)
            }
        }

    };
</script>

<style>
    a {
        color: #495060 !important;
    }
</style>
