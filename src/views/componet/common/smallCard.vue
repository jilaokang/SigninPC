<template>
    <Row type="flex" justify="center" align="middle" class="diyCard">
        <Col span="8">
            <Icon type="ios-bell"></Icon>
        </Col>
        <Col span="16">
            <h1>205人</h1>
            <p>（今日上课）</p>
        </Col>
    </Row>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .diyCard {
        height: 120px;
        text-align: center;
        border: #dde5eb 1px solid;
        border-radius: 5px;
    }

    .diyCard .ivu-icon {
        font-size: 3.5em;
        color: #1f9bed;
    }
</style>