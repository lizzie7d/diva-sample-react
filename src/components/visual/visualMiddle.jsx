import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nan/style.css';
import ksh42 from '../../img/images/ksh42.png';
import ksh43 from '../../img/images/ksh43.png';
import ksh44 from '../../img/images/ksh44.png';
import ksh45 from '../../img/images/ksh45.png';

import ksh34 from '../../img/images/ksh34.png';
import Line from '../echarts/Line';
import BarB from '../echarts/bar';
import LineA from '../echarts/multipulLine';

export default class VisualMiddle extends Component {
    render() {
        return (
            <div className="visual_con">
                <div className="visual_conTop">
                    <div className="visual_conTop_box visual_conTop1">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>67</p>

                        </div>
                    </div>
                    <div className="visual_conTop_box visual_conTop2">
                        <div>
                            <h3>区域拥堵指数</h3>
                            <p>1.4</p>

                        </div>
                    </div>
                    <div className="visual_conTop_box visual_conTop1">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>99</p>
                        </div>
                    </div>
                    <div className="visual_conTop_box visual_conTop2">
                        <div>
                            <h3>当前警情数(起)</h3>
                            <p>7421</p>

                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="visual_conBot">
                    <img className="visual_conBot_l" src={ksh42} />
                    <img className="visual_conBot_l" src={ksh43} />
                    <img className="visual_conBot_l" src={ksh44} />
                    <img className="visual_conBot_l" src={ksh45} />
                    <div className="visual_chart_text">
                        {/* <h2>交通大数据分析平台</h2> */}
                    </div>
                    <div className="visual_chart" id="main8"></div>
                    {/* <div className="visual_conBot_bot">
                        <div className="visualSssf_left">
                            <h3>今日实时收费</h3>
                            <a>上城区</a>
                            <a>拱墅区</a>
                            <a>西湖区</a>
                            <a>滨江区</a>
                            <a>萧山区</a>
                            <a>余杭区</a>
                            <a >临平区</a>
                            <a>钱塘区</a>
                            <a>富阳区</a>
                        </div>
                        <div className="visualSssf_right">
                            <div className="visualSssf_right_box" id="main5"></div>
                            <div className="visualSssf_right_box" id="main6"></div>
                            <div className="visualSssf_right_box" id="main7"></div>
                        </div>
                        <div className="clear"></div>
                    </div> */}
                </div>
            </div>
        )
    }
}
