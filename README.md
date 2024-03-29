### 前言
最近在做报表类的项目，图表热门的框架有Echarts和Highcharts，两者的共同点是都是基于浏览器渲染技术的纯JS框架，且API文档全面，看着文档都能写出一个差不多的饼状图或者柱状图，但在最终做项目前，还是要看看两者的区别，来选择一个作为项目的主要框架。

### 两者区别
> Echarts已经兼容了大部分的浏览器，且是国人开发，免费，首选。

#### Echarts

* echarts是百度公司前端开发的一个图表库,
* 支持柱状图、饼状图、k线图、map图、热导向图、折线图
* 主要采用canvas画图，正式因为基于canvas绘图对于动态的增删节点是需要重新绘图加载数据，而且无法动态改变图表的尺寸，只能是缩放
* 商用免费
* 中文文档，学习成本低
* 兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等）

#### Highcharts

* highcharts是国外的一家公司开发的图表库，主要采用svg画图，对于动态的增删节点数据非常灵活，不需要重新绘图
* 英文文档，学习成本高
* 商用收费

### 对Echarts的二次封装
> 封装是结合自己的项目来更好的运用，对所有页面通用，如下，局部待完善。

### 项目效果图
![](https://user-gold-cdn.xitu.io/2019/8/4/16c5d3fbf8a2056d?w=2382&h=1032&f=png&s=157215)

### 项目功能
* 图表自适应
* 柱形图增加移上去cross指针效果
* 自定义配置

### 所用语言
Jq + Ko.js + Echarts.js + bootstrap