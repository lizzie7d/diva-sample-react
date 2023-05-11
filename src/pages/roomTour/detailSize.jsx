import { useState } from "react";
import lineButtom from '../../assets/asset/line-buttom.png';
import roomSmall from '../../assets/asset/room-small.png';
import lineBlur from '../../assets/asset/line-blur.png';
import DetailWindow from "./showWindow";

const DetailSize = () => {
    const [detail, setDetail] = useState(false);
    return (
        <div>

            {detail && (<DetailWindow prop={detail} />)}
            <div className="room-detail-box">
                <div className="three-part">
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

                    <div>
                        <img onClick={() => setDetail(true)} style={{ width: 284, height: 332 }} src={roomSmall} />
                    </div>
                    <img className='left-buttom' src={lineButtom}></img>

                </div>

            </div>
        </div>

    )
}

export default DetailSize;