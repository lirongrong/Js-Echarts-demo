var ChartViewModel = function(){
    var that = this;
    //初始化页面
    that.init = function(){
        //加载饼图
        that.loadRound();
        //加载柱形
        that.loadColumn();
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
            title: "",
            legendData: $.initChartRoundData(data).legendData,
            seriesData: $.initChartRoundData(data).seriesData
        }); 
    },
    that.loadColumn = function(){
        var data = [
            {
                name:'01',
                type:'bar',
                color:'#4285f4',
                data:[12,22,33]
            },
            {
                name:'02',
                type:'line',
                color:'#e94335',
                data:[12,22,40]
            }
        ];
        $('#chart_02').initColumnChart({
            title: "",
            legendData: $.initChartColumnData(data).legendData,
            seriesData: $.initChartColumnData(data).seriesData
        }); 
    }
}
var vm = new ChartViewModel();
ko.applyBindings(vm);
vm.init();