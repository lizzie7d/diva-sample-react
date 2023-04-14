import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nan/style.css';
import ksh33 from '../../img/images/ksh33.png';
import ksh34 from '../../img/images/ksh34.png';
import Line from '../echarts/Line';
import BarB from '../echarts/bar';
import LineA from '../echarts/multipulLine';

export default class VisualRight extends Component {
    render() {
        return (
            <div className="visual_right">
                <div className="visual_box visualSfzsfl">
                </div>
                <div className="visual_box">
                    <div className="visual_title">
                        <span>本月发生事件</span>
                        <img src={ksh33} />
                    </div>
                    <BarB />
                    <div className="swiper-container visual_swiper1 visual_chart">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" id="main3"></div>
                            <div className="swiper-slide" id="main31"></div>
                        </div>
                    </div>
                </div>
                <div className="visual_box">
                    <div className="visual_title">
                        <span>收费站收费排行</span>
                        <img src={ksh33} />
                    </div>
                    <LineA />
                    <div className="swiper-container visual_swiper2 visual_chart">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" id="main4"></div>
                            <div className="swiper-slide" id="main41"></div>
                        </div>
                    </div>
                </div>
                <div className="visual_box">
                    <div className="visual_title">
                        <span>收费站车流量</span>
                        <img src={ksh33} />
                    </div>
                    <Line />

                    {/* <div className="visual_chart sfzcll">
                        <a>运输方式</a>
                        <a>客运量</a>
                        <a>货运量</a>
                        <div className="sfzcll_pos_box">
                            <div className="sfzcll_box">
                                <img src={ksh34} />
                                <img src={ksh34} />
                                <img src={ksh34} />
                                <img src={ksh34} />


                                <label><img src="../../img/images/ksh35.png" />公路运输</label>
                                <div className="sfzcll_smallBk">
                                    <div className="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="sfzcll_smallBk">
                                    <div className="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
