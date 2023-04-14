import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import React from 'react';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import ReactEcharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
import { Card } from 'antd';

class LineA extends React.Component {

    getOption = () => {
        let option = {
            title: {
                text: '折线图三',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // orient: 'vertical',
                top: 20,
                right: 50,
                data: ['A', 'B', 'C']
            },
            xAxis: {
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'A',
                    type: 'line',
                    data: [800, 1300, 2000, 2300, 1800, 1100, 500]
                },
                {
                    name: 'B',
                    type: 'line',
                    data: [1000, 1800, 2200, 3100, 2200, 1500, 1000]
                },
                {
                    name: 'C',
                    type: 'line',
                    data: [300, 800, 1200, 1800, 1300, 600, 200]
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <Card.Grid className="line_c">
                <ReactEcharts option={this.getOption()} />
            </Card.Grid>
        )
    }
}
export default LineA;