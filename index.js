var ChartViewModel = function(){
    var that = this;
    //初始化页面
    that.init = function(){
        //加载饼图
        that.loadRound();
        //加载柱形
        that.loadColumn();
        //加载线形
         that.loadColumn02();
         that.loadColumn03();
    },
    that.loadRound = function(){
        var data = [
            {
                value:10,
                name:'01',
                color:'#4285f4'
            },
            {
                value:20,
                name:'02',
                color:'#e94335'
            },
            {
                value:5,
                name:'03',
                color:'#fbbc05'
            }
        ];
        $('#chart_01').initRoundChart({
            title: "圆饼图",
            legendData: $.initChartRoundData(data).legendData,
            seriesData: $.initChartRoundData(data).seriesData
        }); 
    },
    that.loadColumn = function(){
        var data = [
            {
                name:'类型一',
                type:'bar',
                color:'#4285f4', 
                data:[12,22,33]
            },
            {
                name:'类型二',
                type:'bar',
                color:'#e94335', 
                data:[12,22,40]
            }
        ];
        $('#chart_02').initColumnChart({
            title: "",
            xAxisData:$.initYearData(),
            legendData:$.initChartColumnData(data).legendData,
            seriesData: $.initChartColumnData(data).seriesData
        }); 
    },
    that.loadColumn02 = function(){
        var data = [
            {
                name:'类型一',
                type:'line',
                color:'#4285f4',
                data:[12,22,33]
            },
            {
                name:'类型二',
                type:'line',
                color:'#e94335',
                data:[12,22,40]
            }
        ];
        $('#chart_03').initColumnChart({
            title: "",
            xAxisData:$.initYearData(),
            legendData: $.initChartColumnData(data).legendData,
            seriesData: $.initChartColumnData(data).seriesData
        }); 
    },
    that.loadColumn03 = function(){
        var data = [
            {
                name:'类型一',
                type:'line',
                color:'#4285f4',
                data:[12,22,33]
            },
            {
                name:'类型二',
                type:'bar',
                color:'#e94335',
                data:[18,10,70]
            }
        ];
        $('#chart_04').initColumnChart({
            title: "",
            xAxisData:$.initYearData(),
            legendData: $.initChartColumnData(data).legendData,
            seriesData: $.initChartColumnData(data).seriesData
        }); 
    }
}
var vm = new ChartViewModel();
ko.applyBindings(vm);
vm.init();