<template>
    <Row :gutter="16">
        <Col span="12">
            <Col span="12">
                <smallCard :card="myWeixinApiNumber"></smallCard>
                <Card class="marginTop16">
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        推送接口
                    </p>
                    <div>
                        推送内容
                        <Cascader :data="data" change-on-select></Cascader>
                    </div>
                    <div class="marginTop16">
                        推送频率
                        <Cascader :data="date" change-on-select></Cascader>
                    </div>
                    <Button class="marginTop16" type="primary" shape="circle">提交</Button>
                </Card>
            </Col>
            <Col span="12">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        推送接口
                    </p>
                </Card>
            </Col>
        </Col>
    </Row>
</template>

<script>
    import smallCard from '../common/smallCard'

    export default {
        components: {
            smallCard
        },
        data() {
            return {
                myWeixinApiNumber: {
                    title: "我的微信接口",
                    content: "8个",
                    icon: "ios-cloud-upload"
                },

                data: [{
                    value: 'colloge',
                    label: '校园概况',
                    children: [
                        {
                            value: 'collegevalue1',
                            label: '全校到课率（本月）'
                        },
                        {
                            value: 'collegevalue2',
                            label: '全校院系到课率分析走势图（本月）'
                        }
                    ]
                }, {
                    value: 'faculty',
                    label: '院系情况',
                    children: [
                        {
                            value: 'nanjing',
                            label: '信息系',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '本月到课率',
                                }, {
                                    value: 'fuzimiao',
                                    label: '系部班级横向对比分析',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '会计系',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '本月到课率',
                                },
                                {
                                    value: 'shizilin',
                                    label: '教师横向对比分析',
                                }
                            ]
                        }
                    ],
                }],
                date: [{
                    value: 'colloge',
                    label: '每天'
                }, {
                    value: 'colloge',
                    label: '每周'
                }, {
                    value: 'colloge',
                    label: '每月'
                }, {
                    value: 'colloge',
                    label: '每学期'
                }]
            }
        }
    }
</script>

<style scoped>
    .marginTop16 {
        margin-top: 18px;
    }
</style>