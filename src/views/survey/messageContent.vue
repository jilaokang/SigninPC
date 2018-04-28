<template>
  <div>
    <Row :gutter="16">
      <Col span="6">
      <Card>
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          留言总览
        </p>
        <div id="messageSurvey" style="width:90%;height:300%"></div>
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
    <template>
      <Modal
          v-model="replay.modal"
          title="留言反馈"
          @on-ok="ok"
          @on-cancel="cancel">
          <div style="margin:1em 0;line-height:2">
            <p>{{this.data[this.replay.key].name}}-{{this.data[this.replay.key].effet}}</p>
            <p>{{this.data[this.replay.key].content}}</p>
          </div>
        <Input v-model="replay.content" type="textarea" :rows="4" placeholder="请输入留言"></Input>
      </Modal>
</template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        replay:{
          modal:false,
          key:0,
          content:''
        },
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
            }]
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
                          this.showModal(params.row.key)
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
                          this.showModal(params.row.key)
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
            key: 0,
            name: "张三",
            effet: "校车查询",
            content: "这地图怎么画的，把我拖到黄冈去了，好了，我终于可以回家了",
            replay: "",
            completed: 0
          },
          {
            key: 1,
            name: "李四",
            effet: "留言版块",
            content: "这个版块就两个内容，能不能指明一下留言的对应内容啊",
            replay: "",
            completed: 0
  
          },
          {
            key: 2,
            name: "王五",
            effet: "其他版块",
            content: "没什么，我留言就想告诉你们，这谁吉尔开发的，太**好用了！！爱你么么哒",
            replay: "",
            completed: 0
          },
          {
            key: 3,
            name: "李六",
            effet: "二手版块",
            content: "这个版块有毒，我天天趴在上面看今日进账...",
            replay: "",
            completed: 0
          },
          {
            key: 4,
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
  
      remove(index) {
        return this.data[index].completed = 1;
      },
      showModal(index){
        this.replay.modal=true;
        this.replay.key = index;
      },

      ok() {
        let index =this.replay.key;
        this.$Message.info('回复成功');
        this.data[index].replay = this.replay.content;
        this.replay.content='';
        return this.data[index].completed = 2;
      },

      cancel() {
        this.$Message.info('取消回复');
      }
    }
  };
</script>

<style lang="scss">
  
</style>

