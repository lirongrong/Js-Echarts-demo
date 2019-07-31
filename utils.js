//扩展dom方法
$.fn.extend({
    //圆饼图表方法
    initRoundChart: function (options) {
        var defaults = {
            title: '',
            number: '',
            legendData: [],
            seriesData: []
        };
        var opts = $.extend(defaults, options);
        if (!$(this)[0]) {
            return false;
        }
        // 基于准备好的dom，初始化echarts实例   
        var myChart = echarts.init($(this)[0]);

        // 指定图表的配置项和数据
        var option = {
            //标题
            title: {
                //text: opts.title + '：' + opts.number,
                // subtext: '纯属虚构',//副标题
                x: 'center',
                textStyle: {
                    color: "#333",
                    fontSize: 16,
                    fontWeight: 'normal'
                },
                bottom: '90'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} ({d}%)",//{a} <br/>{b} : {c} ({d}%) 
            },
            //图例
            legend: {
                orient: 'horizontal',
                left: 'center',
                data: opts.legendData,
                textStyle: {
                    fontSize: 12,
                    color: '#666'
                },
                itemWidth: 15,
                itemHeight: 12,
                top: '240'
            },
            series: [
                {
                    name: opts.title,
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '35%'],
                    data: opts.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option); 
    },
    //柱形图表
    initColumnChart: function (options) {
        var defaults = {
            title: '',
            subText: '',
            xAxisData: [],
            rotate: 0,
            seriesData: [],
            legendData: []//图例
        };
        var opts = $.extend(defaults, options);
        if (!$(this)[0]) {
            return false;
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init($(this)[0]);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: opts.title,
                subtext: opts.subText,//副标题
                //x: 'center',
                textStyle: {
                    color: "#333",
                    fontSize: 16,
                    fontWeight: 'normal'
                }
            },
            color: ['#ff6633'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'cross',        // 默认为直线，可选为：'line' | 'shadow' | 'cross'//横纵指示
                    color: '#f5f5f5'
                }
            },
            //canvas的位置
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false
                },
                borderWidth: 0,
                borderColor: '#f5f5f5',
                axisLabel: {
                    interval: 0,//横轴信息全部显示
                    rotate: opts.rotate
                },
                data: opts.xAxisData
            },
            yAxis: [
                {
                    type: 'value'
                }
            ],
            legend: {
                data: opts.legendData
            },
            series: opts.seriesData
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

});

//扩展$元素方法
$.extend({
    //遍历月份
    monthData: function () {
        var data = [];
        for (var i = 1; i <= 12; i++) {
            data.push(i + '月');
        }
        return data;
    },
    //封装圆饼图输出data的方法
    initChartRoundData: function (arr) {
        if (!arr)
            return false;
        var legendData = [];
        var seriesData = [];
        for (var i = 0; i < arr.length; i++) {
            legendData.push(arr[i].name);
            seriesData.push({
                value: arr[i].value,
                name: arr[i].name,
                itemStyle: {
                    color: arr[i].color
                }
            });
        };
        return {
            legendData,
            seriesData
        };
    },
    //封装柱形图输出data的方法
    initChartColumnData: function (arr) {
        if (!arr)
            return false;
        var defaults = {
            name: '',
            type: 'line',
            stack: '',
            data: [],
            barWidth: 30,//默认柱子宽度30px
            color: ''
        };
        var legendData = [];
        var seriesData = [];
        var ops = [];
        for (var i = 0; i < arr.length; i++) {
            ops = $.extend(defaults, arr[i]);
            legendData.push(ops.name);
            seriesData.push({
                name: ops.name,
                type: ops.type,
                stack: ops.stack,
                data: ops.data,
                barWidth: ops.barWidth,
                itemStyle: {
                    color: ops.color
                }
            });
        }
        return {
            legendData,
            seriesData
        };
    },
    //遍历13年至今的年份
    initYearData: function () {
        var date = new Date;
        var nowYear = date.getFullYear();
        var yearList = [];
        for (var i = 2013; i < nowYear + 1; i++) {
            yearList.push(i);
        }
        return yearList;
    },
    //图表自适应
    initChartResize: function (id) {
        var chart = echarts.init($('#' + id + '')[0]);
        $(window).resize(function () {
            chart.resize();
        });
    },

})

$(function () {
    //图表自适应,凡是有chartSize命名的图表都自适应
    var dom = $('.chartSize'); 
    for (var i = 0; i < dom.length; i++) { 
        $.initChartResize(dom[i].id);
    }
});
