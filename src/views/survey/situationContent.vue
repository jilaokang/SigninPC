<template>
    <div>
        <Row :gutter="16">
            <Col span="4">
            <Card>
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    基础概况
                </p>
                <div>
                    <h3>现在时间：{{time}}</h3>
                    <h3>今日访问人数：520</h3>
                    <h3>今日点击次数：3652</h3>
                </div>
            </Card>
            </Col>
            <Col span="8">
            <Card>
                <p slot="title">
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
        computed:{
            time(){
                let a = new Date();
                let time = `${a.getMonth()+1} 月 ${a.getDate()}日 ${a.getHours()}:${a.getMinutes()}`
    
                return time
            }
        },
        mounted: function() {
            var myChart = echarts.init(document.getElementById("allsituation"));
    
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
    };
</script>

<style scoped>
    
</style>