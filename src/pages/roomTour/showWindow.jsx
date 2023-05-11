import roomBig from '../../assets/asset/room-big.png';
import lineBlur from '../../assets/asset/line-blur.png';
import detailIcon from '../../assets/asset/detailIcon.png';
import closeDetail from '../../assets/asset/closeIcon.png';
import roomButton from '../../assets/asset/户型按钮.png';
import { useState } from 'react';

const DetailWindow = (props) => {
    const [detail, showDetail] = useState(true);
    return (
        <div>
            {props.prop && detail && (<div className="window-basic">
                <img src={closeDetail} className='close-detail' onClick={() => showDetail(false)} />
                <div><img style={{ width: 450, height: 500 }} src={roomBig} /></div>
                <div>
                    <div className="three-part" style={{ width: 200 }}>
                        <div className="room-size">
                            <div className="company-logo">
                                <div style={{ fontSize: 32 }}>云璟</div>
                                <div>都市峯范</div>
                            </div>
                            <div className="size-detail">
                                <div style={{ fontSize: 12 }}>建筑面积约：</div>
                                <div style={{ fontSize: 32 }}>142m2 </div>
                            </div>

                        </div>
                        <img src={lineBlur} />

                        <div style={{ fontSize: 20 }}>四房三套房</div>
                        <img src={lineBlur} />
                        <div className="room-detail">
                            <div>
                                <img src={detailIcon} style={{ marginRight: 10 }} />约5m多功能宽厅
                                南北通透，享阳光鲜氧
                            </div>
                            <div>
                                <img src={detailIcon} style={{ marginRight: 10 }} />LDK布局约45m一线云山会客厅
                                生活与自然交融</div>
                            <div>  <img src={detailIcon} style={{ marginRight: 10 }} />约8米奢阔大阳台
                                打造多样情景空间</div>
                            <div>  <img src={detailIcon} style={{ marginRight: 10 }} />三套房设计
                                满足三代同堂需求，和乐融融</div>
                            <div>  <img src={detailIcon} style={{ marginRight: 10 }} />豪华主卧带步入式衣帽间
                                奢阔生活品质享受</div>
                        </div>


                    </div>
                </div>
                <img src={roomButton} className='enter-style' />

            </div>)}
        </div>




    )
}

export default DetailWindow;