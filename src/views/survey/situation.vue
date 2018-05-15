<template>
    <div>
        <Row :gutter="16">
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        全校上课率
                    </p>
                    <div id="allsituation" style="width:80%;height:300%"></div>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        院系比对
                    </p>
                    <div id="allsituation2" style="width:80%;height:300%"></div>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        教学评估
                    </p>
                    <div id="allsituation3" style="width:80%;height:300%"></div>
                </Card>
            </Col>
        </Row>

        <Row :gutter="16" style="margin-top:16px;">
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        毛泽东思想课程上课率
                    </p>
                    <div id="allsituation4" style="width:80%;height:300%"></div>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        课程横向对比
                    </p>
                    <div id="allsituation5" style="width:80%;height:300%"></div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                time: ""
            };
        },

        mounted: function () {
            setInterval(() => {
                let a = new Date();

                function check(str) {
                    str = str.toString();
                    if (str.length < 2) {
                        str = "0" + str;
                    }
                    return str;
                }

                this.time = `${check(a.getHours())}:${check(a.getMinutes())}:${check(
                    a.getSeconds()
                )}`;
            }, 1000);

            var myChart = echarts.init(document.getElementById("allsituation"));

            myChart.setOption({
                title: {
                    text: ""
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["全校学生", "大一学生", "大二学生", "大三学生", "大四学生"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                toolbox: {},
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["2月28日", "3月15日", "3月30日", "4月15日", "4月30日"]
                },
                yAxis: {
                    type: "log",
                    max: 100,
                    min: 60
                },
                series: [{
                    name: "全校学生",
                    type: "line",
                    data: [95, 92, 90, 88, 86]
                },
                    {
                        name: "大一学生",
                        type: "line",
                        data: [92, 95, 95, 94, 93]
                    },
                    {
                        name: "大二学生",
                        type: "line",
                        data: [80, 85, 86, 83, 80]
                    },
                    {
                        name: "大三学生",
                        type: "line",
                        stack: "总量",
                        data: [75, 78, 80, 76, 72]
                    },
                    {
                        name: "大四学生",
                        type: "line",
                        data: [65, 68, 63, 65, 70]
                    }
                ]
            });

            var myChart2 = echarts.init(document.getElementById("allsituation2"));

            myChart2.setOption({
                title: {
                    text: "三月份大一大二学生上课率报表",
                    subtext: "纯属虚构"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: ["蒸发量", "降水量"]
                },
                toolbox: {
                    show: true
                },
                calculable: true,
                xAxis: [{
                    type: "category",
                    data: ["信息系", "法律系", "传播系", "艺术系", "会计系", "金融系"]
                }],
                yAxis: [{
                    type: "value",
                    min: 70
                }],
                series: [{
                    name: "专科",
                    type: "bar",
                    data: [85, 82, 83, 72, 90, 93],
                    markPoint: {
                        data: [{
                            type: "max",
                            name: "最大值"
                        },
                            {
                                type: "min",
                                name: "最小值"
                            }
                        ]
                    },
                    markLine: {
                        data: [{
                            type: "average",
                            name: "平均值"
                        }]
                    }
                },
                    {
                        name: "本科",
                        type: "bar",
                        data: [90, 95, 93, 75, 95, 92],
                        markPoint: {
                            data: [{
                                name: "年最高",
                                value: 182.2,
                                xAxis: 7,
                                yAxis: 183
                            },
                                {
                                    name: "年最低",
                                    value: 2.3,
                                    xAxis: 11,
                                    yAxis: 3
                                }
                            ]
                        },
                        markLine: {
                            data: [{
                                type: "average",
                                name: "平均值"
                            }]
                        }
                    }
                ]
            });

            var myChart3 = echarts.init(document.getElementById("allsituation3"));

            myChart3.setOption({
                title: {
                    text: "教学实力评估",
                    subtext: "纯属虚构"
                },
                tooltip: {},
                legend: {
                    data: ["艺术系", "会计系"]
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: "#fff",
                            backgroundColor: "#999",
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [{
                        name: "师资力量",
                        max: 10
                    },
                        {
                            name: "行政管理",
                            max: 10
                        },
                        {
                            name: "学生管理",
                            max: 10
                        },
                        {
                            name: "教学管理",
                            max: 10
                        }, {
                            name: "学生生活",
                            max: 10
                        }
                    ]
                },
                series: [{
                    name: "预算 vs 开销（Budget vs spending）",
                    type: "radar",
                    // areaStyle: {normal: {}},
                    data: [{
                        value: [7, 6, 5, 8, 7],
                        name: "艺术系评估"
                    },
                        {
                            value: [8, 9, 8, 9, 9],
                            name: "会计系评估"
                        }
                    ]
                }]
            });

            var myChart4 = echarts.init(document.getElementById("allsituation4"));

            myChart4.setOption({
                color: ['#3398DB'],
                title: {
                    title: "毛泽东思想课程上课率"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['张老师', '李老师', '王老师', '李老师', '刘老师'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    min: 75
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [95, 96, 80, 97, 96]
                }]
            })

            var myChart5 = echarts.init(document.getElementById("allsituation5"));

            myChart5.setOption({
                color: ['#921123'],
                title: {
                    title: "毛泽东思想课程上课率"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['毛概', '思修', '计算机基础', '网络基础', '软件工程'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    min: 75,
                    max: 95
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [93, 92, 82, 93, 92]
                }]
            })
        }
    };
</script>

<style scoped>

</style>