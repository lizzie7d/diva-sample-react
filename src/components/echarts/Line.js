import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import React from 'react';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
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

