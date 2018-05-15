<template>
    <div>
        <div>
            <Row :gutter="16">
                <Col span="6">
                    <Card>
                        <div>
                            <Row class="marginBottom16" :gutter="16" type="flex" justify="center" align="middle">
                                <Col span="6">
                                    <img src="../../static/img/avatar.jpg" alt="头像">
                                </Col>
                                <Col span="18">
                                    <h3>张老师</h3>
                                    <h4>{{this.welcomeStr}}</h4>
                                </Col>
                            </Row>
                            <hr/>
                            <Row :gutter="16" class="marginTop16">
                                <Col span="24">
                                    <div>
                                        <p>上次登录时间：2018-5-13 18:30</p>
                                        <p>上次登录地点：武汉</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span="9">
                    <Col span="12">
                        <Row type="flex" justify="center" align="middle" class="diyCard">
                            <Col span="8" class="backgroundColor">
                                <Icon type="ios-bell"></Icon>
                            </Col>
                            <Col span="16">
                                <h1>205人</h1>
                                <p>（今日上课）</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="12">
                        <Row type="flex" justify="center" align="middle" class="diyCard">
                            <Col span="8">
                                <Icon type="ios-person"></Icon>
                            </Col>
                            <Col span="16">
                                <h1>198人</h1>
                                <p>（今日签到）</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="24" class="marginTop16">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                今日报表
                            </p>
                            <div id="report"></div>
                        </Card>
                    </Col>
                </Col>
                <Col span="9">
                    <Card>
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            我的通知
                        </p>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>5月11号软工1501班签到情况</span>
                                    <span style="float: right">5月11日</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>5月6号软工1501班签到情况</span>
                                    <span style="float: right">5月6日</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>5月3号软工1501班签到情况</span>
                                    <span style="float: right">5月3日</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>5月2号软工1501班签到情况</span>
                                    <span style="float: right">5月2日</span>
                                </a>
                            </li>
                        </ul>
                    </Card>
                    <Card class="marginTop16">
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            我的微信接口
                        </p>
                        <Table border :columns="columns1" :data="data1"></Table>
                    </Card>
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                welcomeStr: "",
                columns1: [
                    {
                        title: '内容',
                        key: 'name'
                    },
                    {
                        title: '板块',
                        key: 'age'
                    }
                ],
                data1: [
                    {
                        name: '软件工程1501班每日考勤信息',
                        age: "学生情况",
                    },
                    {
                        name: '信息系腾讯精英班考勤报表',
                        age: "班级情况",
                    },
                    {
                        name: '信息系教师教学考情报表',
                        age: "教学情况",
                    }
                ]
            }
        }
        ,
        mounted: function () {
            let now = new Date();
            let hours = now.getHours();
            if (hours < 6) {
                this.welcomeStr = "深夜了，注意休息哦~"
            } else if (hours < 12) {
                this.welcomeStr = "早上好，美好的一天开始啦！"
            } else if (hours < 17) {
                this.welcomeStr = "下午好，忙碌的一天就要结束了"
            } else {
                this.welcomeStr = "晚上好，注意早点休息哦"
            }

            const myChart = echarts.init(document.getElementById("report"));

            myChart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['软工1501班', '软工1502班', '软工1503班', '物联网1501班', '物联网1601班', '物联网1701班'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [34, 36, 35, 42, 36, 40]
                    }
                ]
            })
        }
    }
</script>

<style scoped>
    .center {
        text-align: center;
    }

    .left {
        text-align: left;
    }

    .diyCard {
        height: 120px;
        text-align: center;
        border: aliceblue 1px solid;
        border-radius: 5px;
    }

    .diyCard .ivu-icon {
        font-size: 3.5em;
        color: cornflowerblue;
    }

    .marginTop16 {
        margin-top: 16px;
    }

    .marginBottom16 {
        margin-bottom: 16px;
    }

    p, ul li a span {
        line-height: 2 !important;
    }

    img {
        width: 80%;
        border-radius: 50%;
    }

    ul {
        list-style: none;
    }

    ul li a span {
        color: #1f9bed;
    }

    #report {
        width: 80%;
        line-height: 3;
        height: 300px;
    }
</style>