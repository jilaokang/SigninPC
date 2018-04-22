<template>
    <div>
        <Row :gutter="16">
            <Col span="6">
                <Card>
                    <p slot="title" @click="aa">
                        <Icon type="ios-film-outline"></Icon>
                        使用情况
                    </p>
                    <div id="allsituation" style="width:100%;height:300%"></div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
  methods: {
    aa() {
      var myChart = echarts.init(document.getElementById("allsituation"));

      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>

<style scoped>

</style>