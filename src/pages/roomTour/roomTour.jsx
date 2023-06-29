import { useEffect, useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import DetailSize from "./detailSize";
import fontLine from '../../assets/asset/font-line.png';
import { data, diva } from '../../global';
import roomSmall from '../../assets/asset/room-small.png';
import lineBlur from '../../assets/asset/line-blur.png';
import roomPic from '../../assets/picSmall1.png';
import lineButtom from '../../assets/asset/line-buttom.png';

const RoomTour = () => {
    const [selectIndex, setSelectIndex] = useState(-1);

    const metroTitle = [{ title: '云熙', index: 27 }, { title: '云璟', index: 26 }, { title: '云鼎', index: 28 },];

    return (
        <div>
            {selectIndex === 1 && (<DetailSize />)}
{selectIndex ===0 &&(
     <div className="room-detail-box">
     <div className="three-part">
         <div className="room-size">
             <div className="company-logo">
                 <div className='small-room-title'>云熙</div>
                 <div>向阳宽景</div>
             </div>
             <div className="size-detail">
                 <div className='room-size-title'>建筑面积约：</div>
                 <div className='small-room-title'>127m<sup>2</sup> </div>
             </div>

         </div>
         <img src={lineBlur} />

         <div style={{ fontSize: 20 }}>四房三套房</div>
         <img src={lineBlur} />

         <div>
             <img className="room-small" src={roomPic} />
         </div>
         <img className='left-buttom' src={lineButtom}></img>
     </div>

 </div>
)}
            <div className="top-side">
                {metroTitle.map((item, index) => (
                    <div
                        onClick={() => {
                            setSelectIndex(index);
                            diva.client?.applyScene(item.index).then(() => {
                            });
                        }
                        }
                        className="metro-section" key={item.index}
                        style={{
                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        <div >{item.title}</div>
                        <div className="line-position"><img style={{ width: 82 }} src={fontLine} /></div>

                    </div>))}

            </div>

            {/* <RoomRight /> */}

        </div>

    )
}

export default RoomTour;