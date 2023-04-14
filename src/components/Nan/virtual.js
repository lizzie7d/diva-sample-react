import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import React from 'react';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
// const Echartstest = (props) => {
//     let [main, setMain] = useState('')
//     const option = {
//         title: {
//             text: '某站点用户访问来源',
//             subtext: '纯属虚构',
//             left: 'center'
//         },
//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         legend: {
//             orient: 'vertical',
//             left: 'left',
//             data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
//         },
//         series: [
//             {
//                 name: '访问来源',
//                 type: 'pie',
//                 radius: '55%',
//                 center: ['50%', '60%'],
//                 data: [
//                     { value: 335, name: '直接访问' },
//                     { value: 310, name: '邮件营销' },
//                     { value: 234, name: '联盟广告' },
//                     { value: 135, name: '视频广告' },
//                     { value: 1548, name: '搜索引擎' }
//                 ],
//                 emphasis: {
//                     itemStyle: {
//                         shadowBlur: 10,
//                         shadowOffsetX: 0,
//                         shadowColor: 'rgba(0, 0, 0, 0.5)'
//                     }
//                 }
//             }
//         ]
//     };

//     // const data = {
//     //     id: "multipleBarsLines",
//     //     legendBar: ["高速公路", "城镇公路"],
//     //     symbol: " ", //数值是否带百分号        --默认为空 ''
//     //     legendLine: ["环比", "同比"],
//     //     xAxis: ["2014", "2015", "2016", "2017", "2018", "2019"],
//     //     yAxis: [
//     //         [8, 10, 10, 11, 4, 13],
//     //         [10, 7, 8, 8, 7, 9],
//     //     ],
//     //     lines: [
//     //         [10, 10, 9, 11, 7, 4],
//     //         [6, 12, 12, 2, 4, 4],
//     //     ],
//     //     barColor: ["#009883", "#e66922"], //柱子颜色 必填参数
//     //     lineColor: ["#fd6665", "#fba73b"], // 折线颜色
//     // };


//     // const option = {
//     //     title: {
//     //         show: true,
//     //         text: data.title,
//     //         subtext: data.subTitle,
//     //         link: "1111",
//     //     },
//     //     tooltip: {
//     //         trigger: "axis",
//     //         // formatter: function (params) {
//     //         //     var time = "";
//     //         //     var str = "";
//     //         //     for (var i of params) {
//     //         //         time = i.name.replace(/\n/g, "") + "<br/>";
//     //         //         if (i.data == "null" || i.data == null) {
//     //         //             str += i.seriesName + "：无数据" + "<br/>";
//     //         //         } else {
//     //         //             str += i.seriesName + "：" + i.data + symbol + "%<br/>";
//     //         //         }
//     //         //     }
//     //         //     return time + str;
//     //         // },
//     //         axisPointer: {
//     //             type: "none",
//     //         },
//     //     },
//     //     legend: {
//     //         right: data.legendRight || "30%",
//     //         top: 0,
//     //         right: 10,
//     //         itemGap: 16,
//     //         itemWidth: 10,
//     //         itemHeight: 10,
//     //         // data: myData.legendArr,
//     //         textStyle: {
//     //             color: "#fff",
//     //             fontStyle: "normal",
//     //             fontFamily: "微软雅黑",
//     //             fontSize: 12,
//     //         },
//     //     },
//     //     grid: {
//     //         x: 0,
//     //         y: 30,
//     //         x2: 0,
//     //         y2: 25,
//     //     },
//     //     xAxis: {
//     //         type: "category",
//     //         data: data.xAxis,
//     //         axisTick: {
//     //             show: false,
//     //         },

//     //         axisLine: {
//     //             show: false,
//     //         },
//     //         axisLabel: {
//     //             //轴标
//     //             show: true,
//     //             interval: "0",
//     //             textStyle: {
//     //                 lineHeight: 5,
//     //                 padding: [2, 2, 0, 2],
//     //                 height: 50,
//     //                 fontSize: 12,
//     //                 color: "#fff",
//     //             },
//     //             rich: {
//     //                 Sunny: {
//     //                     height: 50,
//     //                     // width: 60,
//     //                     padding: [0, 5, 0, 5],
//     //                     align: "center",
//     //                 },
//     //             },
//     //             formatter: function (params, index) {
//     //                 var newParamsName = "";
//     //                 var splitNumber = 5;
//     //                 var paramsNameNumber = params && params.length;
//     //                 if (paramsNameNumber && paramsNameNumber <= 4) {
//     //                     splitNumber = 4;
//     //                 } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
//     //                     splitNumber = 4;
//     //                 } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
//     //                     splitNumber = 5;
//     //                 } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
//     //                     splitNumber = 5;
//     //                 } else {
//     //                     params = params && params.slice(0, 15);
//     //                 }

//     //                 var provideNumber = splitNumber; //一行显示几个字
//     //                 var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
//     //                 if (paramsNameNumber > provideNumber) {
//     //                     for (var p = 0; p < rowNumber; p++) {
//     //                         var tempStr = "";
//     //                         var start = p * provideNumber;
//     //                         var end = start + provideNumber;
//     //                         if (p == rowNumber - 1) {
//     //                             tempStr = params.substring(start, paramsNameNumber);
//     //                         } else {
//     //                             tempStr = params.substring(start, end) + "\n";
//     //                         }
//     //                         newParamsName += tempStr;
//     //                     }
//     //                 } else {
//     //                     newParamsName = params;
//     //                 }
//     //                 params = newParamsName;
//     //                 return "{Sunny|" + params + "}";
//     //             },
//     //             color: "#687284",
//     //         },
//     //     },
//     //     yAxis: {
//     //         axisLine: {
//     //             show: false,
//     //         },
//     //         axisTick: {
//     //             show: false,
//     //         },
//     //         axisLabel: {
//     //             show: false,
//     //         },
//     //         splitLine: {
//     //             show: true,
//     //             lineStyle: {
//     //                 color: "#F1F3F5",
//     //                 type: "solid",
//     //             },
//     //             interval: 2,
//     //         },
//     //         splitNumber: 4,
//     //     },
//     //     // series: myData.seriesArr,
//     // };
//     useEffect(() => {
//         var node = document.getElementById('main')
//         setMain(node)
//     }, [main])
//     if (main !== "") {
//         var myChart = echarts.init(main);
//         myChart.setOption(option);
//     }
//     return (
//         <div style={{
//             width: 377,
//             height: 192,
//         }} id="main"></div>
//     )
// }
export default class Line extends React.Component {
    getOption = () => {
        let option = {
            xAxis: {
                data: ['12', '27', '78', '89', '100', '134', '456'],
                // 隐藏x轴
                axisLine: {
                    show: false,
                },
                // 刻度线
                axisTick: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                // 去除网格线
                splitLine: false,
                // 刻度线
                axisTick: {
                    show: false
                },
                // 隐藏y轴
                axisLine: {
                    show: false
                },
                // 隐藏刻度值
                axisLabel: {
                    show: false
                },
            },

            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };
        return option
    }

    render() {
        return (
            <div className='wrapper'>
                <ReactEcharts option={this.getOption()} style={{}} />
            </div>
        )
    }
}

