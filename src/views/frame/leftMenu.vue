<template>
    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1','2']">
        <survey></survey>
        <evalueation></evalueation>
        <record></record>
    </Menu>
</template>

<script>
    import survey from './leftMenu/survey'
    import evalueation from './leftMenu/evaluation'
    import record from './leftMenu/record'

    export default {
        components: {
            survey, evalueation, record
        }
    };
</script>

<style>
    a {
        color: #495060 !important;
    }
</style>
