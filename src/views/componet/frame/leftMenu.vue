<template>
    <Menu theme="light" width="auto" :open-names="['1','2','3']" v-on:on-select="changeTopNav">
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
    import {mapMutations} from 'vuex'

    export default {
        components: {
            survey, evalueation, record, weixin
        },
        methods: {
            ...mapMutations(['NAV_UPDATE']),
            changeTopNav(name) {
                this.NAV_UPDATE(name);
            },
        },

    }

</script>

<style>
    a {
        color: #495060 !important;
    }
</style>
