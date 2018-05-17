<template>
    <Row type="flex" justify="center" align="middle" class="diyCard">
        <Col span="8">
            <Icon :type="this.card.icon"></Icon>
        </Col>
        <Col span="16">
            <h1>{{this.card.content}} </h1>
            <p>{{this.card.title}}</p>
        </Col>
    </Row>
</template>

<script>
    export default {
        props: {
            card: {
                require: true,
                type: Object
            }
        },
        data() {
            return {}
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