<template>
  <div>
    <Row :gutter="16">
      <Col span="8">
      <Card>
        <p slot="title">
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
            <Table style="border-radius: 5px" border :columns="unFinshMessage.columns" :data="unFinshDate"></Table>
          </TabPane>
          <TabPane label="未解决" icon="close-round">
            <Table style="border-radius: 5px" border :columns="waitFinshMessage.columns" :data="waitFinshDate"></Table>
          </TabPane>
          <TabPane label="已解决" icon="checkmark-round">
            <Table style="border-radius: 5px" border :columns="hasFinshMessage.columns" :data="hasFinshDate"></Table>
          </TabPane>
        </Tabs>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hasFinshMessage: {
          columns: [{
              title: "姓名",
              key: "name"
            },
            {
              title: "功能",
              key: "effet"
            },
            {
              title: "留言内容",
              key: "content"
            }, {
              title: "回复内容",
              key: "replay"
            }
          ]
        },
  
        unFinshMessage: {
          columns: [{
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
              key: "effet"
            },
            {
              title: "留言内容",
              key: "content"
            },
            {
              title: "操作",
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
                          this.show(params.row.key);
                        }
                      }
                    },
                    "回复"
                  ),
                  h(
                    "Button", {
                      props: {
                        type: "error",
                        size: "small"
                      },
                      on: {
                        click: () => {
                          this.remove(params.row.key);
                        }
                      }
                    },
                    "待办"
                  )
                ]);
              }
            }
          ],
        },
  
  
  
        waitFinshMessage: {
          columns: [{
              title: "姓名",
              key: "name"
            },
            {
              title: "功能",
              key: "effet"
            },
            {
              title: "留言内容",
              key: "content"
            }, {
              title: "操作",
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
                          this.show(params.row.key);
                        }
                      }
                    },
                    "回复"
                  )
                ]);
              }
            }
          ]
        },
  
        data: [{
          key:0,
            name: "张三",
            effet: "校车查询",
            content: "这地图怎么画的，把我拖到黄冈去了，好了，我终于可以回家了",
            replay: "",
            completed: 0
          },
          {
            key:1,
            name: "李四",
            effet: "留言版块",
            content: "这个版块就两个内容，能不能指明一下留言的对应内容啊",
            replay: "",
            completed: 0
  
          },
          {
            key:2,
            name: "王五",
            effet: "其他版块",
            content: "没什么，我留言就想告诉你们，这谁吉尔开发的，太**好用了！！爱你么么哒",
            replay: "",
            completed: 0
          },
          {
            key:3,
            name: "李六",
            effet: "二手版块",
            content: "这个版块有毒，我天天趴在上面看今日进账...",
            replay: "",
            completed: 0
          },
          {
            key:4,
            name: "赵七",
            effet: "二手版块",
            content: "难道我就这么没有存在感，你们为了凑数才叫我？？？",
            replay: "",
            completed: 0
          }
        ],
  
      };
    },
  
    computed: {
      unFinshDate() {
        return this.data.filter(data => data.completed === 0)
      },
      waitFinshDate() {
        return this.data.filter(data => data.completed === 1)
      },
      hasFinshDate() {
        return this.data.filter(data => data.completed === 2)
      }
    },
    mounted: function() {
      var myChart = echarts.init(document.getElementById("messageSurvey"));
  
      myChart.setOption({
        title: {
          text: "留言概况",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["大一学生", "大二学生", "大三学生", "大四学生", "其他"]
        },
        series: [{
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [{
              value: 335,
              name: "大一学生"
            },
  
            {
              value: 310,
              name: "大二学生"
            },
            {
              value: 234,
              name: "大三学生"
            },
            {
              value: 135,
              name: "大四学生"
            },
            {
              value: 1548,
              name: "其他"
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      });
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: "留言信息",
          content: `姓名：${this.data[index].name}<br>功能：${
                this.data[index].effet
              }<br>留言：${this.data[index].content}
                <br/>回复：<Input id="replayInput" type="textarea" ></Input>`
        });

        document.getElementById('replayInput')


        return this.data[index].completed = 2;
      },
      remove(index) {
        return this.data[index].completed = 1;
      }
    }
  };
</script>

<style lang="scss">
  
</style>

