import { useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import DetailSize from "./detailSize";
import fontLine from '../../assets/asset/font-line.png';

const RoomTour = () => {
    const [selectIndex, setSelectIndex] = useState(0);

    const metroTitle = [{ title: '云熙', index: 1 }, { title: '云璟', index: 2 }, { title: '云鼎', index: 3 },];
    return (
        <div className="top-side">
            <DetailSize />

            {metroTitle.map((item, index) => (
                <div
                    onClick={() => { setSelectIndex(index); }}
                    className="metro-section" key={item.index}
                    style={{
                        backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                        color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                    }}>
                    <div >{item.title}</div>
                    <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>

                </div>))}

        </div>
    )
}

export default RoomTour;