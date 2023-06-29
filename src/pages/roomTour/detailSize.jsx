import { useEffect, useState } from "react";
import lineButtom from '../../assets/asset/line-buttom.png';
import roomSmall from '../../assets/asset/room-small.png';
import lineBlur from '../../assets/asset/line-blur.png';
import detailIcon from '../../assets/asset/detailIcon.png';
import closeDetail from '../../assets/asset/closeIcon.png';
import roomButton from '../../assets/asset/户型按钮.png';
import RoomRight from "../roomRight";
import { data, diva } from '../../global';

const DetailSize = () => {
    const [detail, setDetail] = useState(false);
    const [scene, setScene] = useState(false);
    const [smallRoom, setSmallRoom] = useState(true);
    // const [detail, showDetail] = useState(true);
    const switchScene = (scene) => {
        diva.client.request("ApplySceneByIndex", {
            index: scene,
            camera: true,
            env: true,
            visibility: true,
            duration: 0
        })
        // diva.client.request('SetNavigationMode', {
        //     mode: 1      // 支持 0：DIVA 默认交互；1：鼠标左键绕中心旋转，中键旋转镜头，右键平移
        // })
    }

    useEffect(() => {

    }, []);
    return (
        <div>
            {scene && (<RoomRight />)}

            {/* {detail && (<DetailWindow prop={detail} />)} */}
            {smallRoom && (
            <div className="room-detail-box">
                <div className="three-part">
                    <div className="room-size">
                        <div className="company-logo">
                            <div className='small-room-title'>云璟</div>
                            <div>都市峯范</div>
                        </div>
                        <div className="size-detail">
                            <div className='room-size-title'>建筑面积约：</div>
                            <div className='small-room-title'>142m<sup>2</sup> </div>
                        </div>

                    </div>
                    <img src={lineBlur} />

                    <div style={{ fontSize: 20 }}>四房三套房</div>
                    <img src={lineBlur} />

                    <div>
                        <img onClick={() => setDetail(true)} className="room-small" src={roomSmall} />
                    </div>
                    <img className='left-buttom' src={lineButtom}></img>

                </div>

            </div>)}
            {detail && (<div>
                <div className="window-basic">
                    <img src={closeDetail} onClick={() => setDetail(false)} className='close-detail' />
                    <div><img className='room-big' src={roomSmall} /></div>
                    <div>
                        <div className="three-part" style={{ width: 200 }}>
                            <div className="room-size">
                                <div className="company-logo">
                                    <div className='small-room-title'>云璟</div>
                                    <div>都市峯范</div>
                                </div>
                                <div className="size-detail">
                                    <div className='room-size-title'>建筑面积约：</div>
                                    <div className='small-room-title'>142m<sup>2</sup> </div>
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
                    <img src={roomButton} onClick={() => { setDetail(false); setSmallRoom(false); setScene(true); switchScene(25); }} className='enter-style' />

                </div>
            </div>)}
        </div>

    )
}

export default DetailSize;