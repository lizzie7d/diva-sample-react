import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import React from 'react';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
import { Card } from 'antd';

export default class BarB extends React.Component {
    getOption = () => {
        let option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['A', 'B', 'C']
            },
            xAxis: {
                data: ['酒驾', '超速', '违停',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'A',
                    type: 'bar',
                    barWidth: '15%',
                    data: [800, 1300, 2000, 2300, 1800, 1100, 500]
                },
                {
                    name: 'B',
                    type: 'bar',
                    barWidth: '15%',
                    data: [1000, 1800, 2200, 3100, 2200, 1500, 1000]
                },
                {
                    name: 'C',
                    type: 'bar',
                    barWidth: '15%',
                    data: [300, 800, 1200, 1800, 1300, 600, 200]
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <Card.Grid className="bar_b">
                <ReactEcharts option={this.getOption()} />
            </Card.Grid>
        )
    }
}