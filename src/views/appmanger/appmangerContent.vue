<template>
    <div>
        <Row :gutter="16">
            <Col span="6">
            <Card>
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    版块选择
                </p>
                <Select v-model="model1" style="width:200px" @change="aa">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>

                <div id="appinfomation" style="width:100%;height:300%"></div>
                <p>今日使用：20人</p>
            </Card>
            </Col>
            <Col span="18">
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
                        label: "London"
                    },
                    {
                        value: "Sydney",
                        label: "Sydney"
                    },
                    {
                        value: "Ottawa",
                        label: "Ottawa"
                    },
                    {
                        value: "Paris",
                        label: "Paris"
                    },
                    {
                        value: "Canberra",
                        label: "Canberra"
                    }
                ],
                model1: ""
            };
        },
        methods: {
            aa() {
                var myChart = echarts.init(document.getElementById("appinfomation"));
    
                myChart.setOption({
                    xAxis: {
                        type: "category",
                        data: ["1月", "2月", "3月", "4月", "5月", "6月"]
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line"
                    }]
                });
            }
        }
    };
</script>

<style scoped>
    
</style>