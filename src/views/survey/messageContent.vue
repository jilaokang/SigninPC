<template>
    <div>
        <div>
            <Row :gutter="16">
                <Col span="8">
                <Card>
                    <p slot="title" @click="aa">
                        <Icon type="ios-film-outline"></Icon>
                        留言总览
                    </p>
                    <div id="messageSurvey" style="width:100%;height:300%"></div>
                </Card>
    
                </Col>
                <Col span="16">
                <Card>
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        留言墙
                    </p>
                    <Tabs>
                        <TabPane label="待查看" icon="information-circled">
                            <Table style="border-radius: 5px" border :columns="columns7" :data="data6"></Table>
                        </TabPane>
                        <TabPane label="未解决" icon="close-round">未解决</TabPane>
                        <TabPane label="已解决" icon="checkmark-round">已解决</TabPane>
                    </Tabs>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                columns7: [{
                        title: "姓名",
                        key: "name",
                        render: (h, params) => {
                            return h("div", [
                                h("Icon", {
                                    props: {
                                        type: "person"
                                    }
                                }),
                                h("strong", params.row.name)
                            ]);
                        }
                    },
                    {
                        title: "功能",
                        key: "age"
                    },
                    {
                        title: "留言内容",
                        key: "address"
                    },
                    {
                        title: "Action",
                        key: "action",
                        width: 150,
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button", {
                                        props: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        style: {
                                            marginRight: "5px"
                                        },
                                        on: {
                                            click: () => {
                                                this.show(params.index);
                                            }
                                        }
                                    },
                                    "View"
                                ),
                                h(
                                    "Button", {
                                        props: {
                                            type: "error",
                                            size: "small"
                                        },
                                        on: {
                                            click: () => {
                                                this.remove(params.index);
                                            }
                                        }
                                    },
                                    "Delete"
                                )
                            ]);
                        }
                    }
                ],
                data6: [{
                        name: "张三",
                        age: "校车查询",
                        address: "这地图怎么画的，把我拖到黄冈去了，好了，我终于可以回家了"
                    },
                    {
                        name: "李四",
                        age: "留言版块",
                        address: "这个版块就两个内容，能不能指明一下留言的对应内容啊"
                    },
                    {
                        name: "王五",
                        age: "其他版块",
                        address: "没什么，我留言就想告诉你们，这谁吉尔开发的，太**好用了！！爱你么么哒"
                    },
                    {
                        name: "李六",
                        age: "二手版块",
                        address: "这个版块有毒，我天天趴在上面看今日进账..."
                    },                    {
                        name: "赵七",
                        age: "二手版块",
                        address: "难道我就这么没有存在感，你们为了凑数才叫我？？？"
                    }
                ]
            };
        },

        methods: {
            show(index) {
                this.$Modal.info({
                    title: "User Info",
                    content: `Name：${this.data6[index].name}<br>Age：${
                  this.data6[index].age
                }<br>Address：${this.data6[index].address}`
                });
            },
            remove(index) {
                this.data6.splice(index, 1);
            },
    
            aa() {
                var myChart = echarts.init(document.getElementById("messageSurvey"));
    
                myChart.setOption({
                    title: {
                        text: '留言概况',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['大一学生', '大二学生', '大三学生', '大四学生', '其他']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '大一学生'
                            },
    
                            {
                                value: 310,
                                name: '大二学生'
                            },
                            {
                                value: 234,
                                name: '大三学生'
                            },
                            {
                                value: 135,
                                name: '大四学生'
                            },
                            {
                                value: 1548,
                                name: '其他'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                });
    
                // 使用刚指定的配置项和数据显示图表。
                console.log("fuck u");
            }
        }
    };
</script>

<style lang="scss">
    
</style>

