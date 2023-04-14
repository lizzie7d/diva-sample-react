import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nan/style.css';
import ksh33 from '../../img/images/ksh33.png';
import ksh34 from '../../img/images/ksh34.png';
import Line from '../echarts/Line';
import PieB from '../echarts/Pie';

export default class VisualLeft extends Component {
    render() {
        return (
            <div className="visual_left">
                <div className="visual_box">
                    <div className="visual_title">
                        <span>交通流量</span>

                        <img src={ksh33} />

                    </div>
                    <Line />
                </div>
                <div className="visual_box">
                    <div className="visual_title">
                        <span>交通工具流量</span>
                        <img src={ksh33} />
                    </div>
                    <PieB />

                </div>

            </div>
        )
    }
}
