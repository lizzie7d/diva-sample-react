import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import React from 'react';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
import { Card } from 'antd';
export default class PieB extends React.Component {
    // componentWillMount(){
    //     echarts.registerTheme("Imooc", echartTheme) //注入主题
    // }
    getOption = () => {
        let option = {

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                top: 20,
                right: 5,
                data: ['货车', '私家车',]
            },
            series: [
                {
                    name: '交通工具',
                    type: 'pie',
                    radius: ['30%', '60%'],
                    data: [
                        { value: 1000, name: '货车' },
                        { value: 1500, name: '私家车' },
                        { value: 2000, name: '车' },
                    ],
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <Card.Grid className="pie_b">
                <ReactEcharts option={this.getOption()} />
            </Card.Grid>
        )
    }
}