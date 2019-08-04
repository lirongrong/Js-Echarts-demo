 
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
                text: opts.title,
                subtext: opts.number,//副标题
                x: 'center',
                textStyle: {
                    color: "#555",
                    fontSize: 12,
                    fontWeight: 'normal'
                },
                subtextStyle: {
                    color: "#333",
                    fontSize:14
                },
                top: '70'
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
                top: '190'
            },
            series: [
                {
                    name: opts.title,
                    type: 'pie',
                    radius: ['30%', '55%'], 
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
        myChart.hideLoading();
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    //柱形图表
    initColumnChart: function (options) {
        var defaults = {
            title: '',
            subText: '',
            xAxisData: [],
            rotate:0,
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
                x: 'center',
                textStyle: {
                    color: "#333",
                    fontSize: 14,
                    fontWeight: 'normal'
                }, 
                //textAlign:'center',
                subtextStyle: {
                    color: "#666",
                    fontSize: 12,
                    fontWeight: 'normal'
                },
                top:'0'
            },
            color: ['#ff6633'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'cross',        // 默认为直线，可选为：'line' | 'shadow' | 'cross'//横纵指示
                    label: {
                        color: '#fff',
                        backgroundColor: '#ff6634'
                    },
                    lineStyle: {
                        color: '#ffbfaa',
                        type: 'dashed'
                    },
                    crossStyle: {
                        color: '#ffbfaa',
                        type:'dashed'
                    }
                }, 
            },
            //canvas的位置
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                top:'22%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                //背景横轴css
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f5f5f5',
                        type:'dashed'
                    }
                }, 
                //横轴文字
                axisLabel: {
                    interval: 0,//横轴信息全部显示
                    rotate: opts.rotate,
                    color:'#6d6d6d'
                },
                //横轴坐标线
                axisLine: {
                    lineStyle: {
                        color: '#f5f5f5',
                        type: 'dashed'
                    }
                },
                data: opts.xAxisData
            },
            yAxis: [
                {
                    type: 'value',
                    //背景纵轴css
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#ececec',
                            type: 'dashed', //solid,dashed,dotted
                        }
                    },
                    //纵轴文字
                    axisLabel: {
                        interval: 0,//横轴信息全部显示 
                        color: '#6d6d6d'
                    },
                    //纵轴坐标线
                    axisLine: {
                        lineStyle: {
                            show:true,
                            color: '#f5f5f5',
                            type: 'dashed'
                        }
                    },
                }
            ],
            legend: {
                data: opts.legendData
            },
            series: opts.seriesData
        };
        myChart.hideLoading();
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    
});
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
            barWidth:Number,//默认柱子宽度30px
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
                label: {
                    normal: {
                        show: true,
                        color: '#ff6634',
                        position:'top'
                    }
                },
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
        for (var i = 2013; i < nowYear+1; i++) {
            yearList.push(i);
        }
        return yearList;
    },
    //图表自适应,并且默认显示loading图标 
    initChartResize: function (id) { 
        var chart = echarts.init($('#' + id + '')[0]);
        // chart.showLoading({
        //     text: '正在加载中'
        // });
        $(window).resize(function () {
            chart.resize();
        });
    }
});

$(function () {
    //图表自适应,凡是有chartSize命名的图表都自适应
    var dom = $('.chartSize'); 
    for (var i = 0; i < dom.length; i++) { 
        $.initChartResize(dom[i].id);
    } 
});