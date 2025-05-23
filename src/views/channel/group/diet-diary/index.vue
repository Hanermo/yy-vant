<template>
    <div class="diet-diary-wrapper">
        <div class="dd-content">
            <div style="width: 90px; height: 90px;" ref="ringChartsWrapper" id="ringCharts"></div>
            <div class="box-value-right">
                <div class="r-current">
                    <i class="i-fire"></i>
                    <span class="font">423</span>
                </div>
                <div class="r-total">1542千卡</div>
            </div>
        </div>
        <div class="dd-box-footer">
            看看吃了啥
            <van-icon name="arrow" size="12px"></van-icon>
        </div>
    </div>
</template>

<script>
export default {
    name:'diet-diary',
    data(){
      return{
        chartInstance: null
      }
    },
    mounted(){
        this.$nextTick(() => {
            this.setRingCharts()
        })
    },
    beforeDestroy(){
        // 组件销毁时销毁echarts实例，避免组件销毁，而echarts实例仍尝试操作已移除的DOM
        if( this.chartInstance ){
            this.chartInstance.dispose() //销毁实例，释放资源
            this.chartInstance = null
        }
    },
    methods:{
        // 创建echarts
        setRingCharts(){
            const chartDom = this.$refs.ringChartsWrapper;
            this.chartInstance = this.$echarts.init(chartDom);
            const option = {
                // backgroundColor: "rgba(5,27,74, 1)", // 背景色
                series: [
                    {
                        type: "gauge",
                        center: ["50%", "50%"], //调整位置
                        radius: 40, //外圆半径90
                        startAngle: 200,
                        endAngle: -160, // 结束位置
                        pointer: {
                            show: false, // 是否显示仪表盘指针
                        },
                        progress: {
                            // 展示当前进度。
                            show: true, // 是否展示进度条
                            overlap: false, // 是否重叠
                            roundCap: true, // 是否圆顶
                            clip: false, // 是否裁掉超出部分
                        },
                        axisLine: {
                            // 设置线条
                            lineStyle: {
                                width: 15, // 圆环宽 15
                                color: [[1,'#D9D9D9'],[0.6,'#D9D9D9']],  //colorStyle
                            },
                            roundCap: false
                        },
                        itemStyle: {
                                //具体颜色显示
                                color: {
                                    type: "linear", // 使用径向渐变色
                                    x: 0.2, // 渐变色的起始点位置
                                    y: 1,
                                    r: 1, // 渐变半径，值为0到1之间
                                    colorStops: 
                                    [
                                        { offset: 0, color: "#1F8EFA" }, // 渐变颜色1
                                        { offset: 1, color: "#1F8EFA" }, // 渐变颜色2
                                    ],
                                
                                },
                                //饼状图阴影，值越大阴影亮度越高
                                // shadowBlur: 24, // 模糊
                                // shadowColor: "rgba(0, 255, 229, 0.5)", // 圆环阴影色
                        },
                        splitLine: {
                            // 分隔线样式。
                            show: false, // 是否显示分隔线。
                            distance: 0, // 分隔线与轴线的距离。
                            length: 10, // 分隔线线长。支持相对半径的百分比。
                        },
                        axisTick: {
                            // 刻度样式。
                            show: false, // 是否显示刻度。
                        },
                        axisLabel: {
                            //刻度标签。
                            show: false, // 是否显示标签。
                            distance: 50, // 标签与刻度线的距离。
                        },
                        // title: {  //标签
                        //     offsetCenter: [0, '10%'],
                        //     fontSize: 25,
                        //     color: 'red',
                        //     fontWeight: '600'
                        // },
                        data: [
                            {
                                value: (423 / 1542) * 100, // 可写变量  此value 对应 formatter: '{value}%' 中的Value 百分制
                                // name: 423, // 自定义总分
                            },
                        ],
                        detail: {
                            //仪表盘详情，用于显示数据 仪表盘中间数字数据。
                            // color: this.textColor, // 文本颜色，默认取数值所在的区间的颜色
                            formatter: '423', // 格式化函数或者字符串
                            // 仪表盘边框数据详情，用于显示数据。
                            valueAnimation: true, // 是否开启标签的数字动画。
                            offsetCenter: ["0%", "0%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                            fontSize: 15, // 文字的字体大小。
                            fontWeight: '500'
                        },
                    },
                ],
            };
            this.chartInstance.setOption(option,true);
        },
    }
    
}
</script>

<style lang="scss" scoped>
.diet-diary-wrapper{
    width: 100%;
    background: #fff;
    border-radius: 10px;
    .dd-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 6px;
        padding: 8px;
        .box-value-right{
            .r-current{
                display: flex;
                gap: 2px;
                .i-fire{
                    background: url('@/assets/images/svg/fire.svg') no-repeat center center / contain;
                    display: block;
                    width: 16px;
                    height: 16px;
                }
                .font{
                    color: $theme-color;
                    font-size: 15px;
                    font-weight: 600;
                }
            }
            .r-total{
                color: $value-font;
                font-size: 11px;
            }
        }
    }
    .dd-box-footer{
        font-size: 12px;
        color: $primary-color;
        text-align: right;
        padding: 0 10px 10px 0;
    }
}
</style>