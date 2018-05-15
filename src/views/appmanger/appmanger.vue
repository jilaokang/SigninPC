<template>
    <div>
        <Row :gutter="16">
            <Col span="4">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        版块选择
                    </p>
                    <Select v-model="model1" style="width:100%">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>

                    <div id="appinfomation" style="width:90%;height:200%"></div>
                </Card>
            </Col>
            <Col span="16">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        功能信息
                    </p>
                    <router-view></router-view>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cityList: [{
                    value: "New York",
                    label: "校车查询"
                },
                    {
                        value: "London",
                        label: "二手易购"
                    },
                    {
                        value: "Sydney",
                        label: "兼职查询"
                    },
                    {
                        value: "Ottawa",
                        label: "电话查询"
                    }
                ],
                model1: ""
            };
        },

        mounted: function () {
            var myChart = echarts.init(document.getElementById("appinfomation"));

            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {},
                legend: {},
                radar: {
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [{
                        name: '平均日活跃',
                        max: 10
                    },
                        {
                            name: '使用总人数',
                            max: 10
                        },
                        {
                            name: '使用频率排名',
                            max: 10
                        },
                        {
                            name: '反馈排名',
                            max: 10
                        },
                        {
                            name: '不知道写啥',
                            max: 10
                        }
                    ]
                },
                series: [{
                    name: ' ',
                    type: 'radar',
                    data: [{
                        value: [8, 7, 9, 6, 8],
                        name: ''
                    }]
                }]
            })
        }
    }
</script>

<style scoped>

</style>