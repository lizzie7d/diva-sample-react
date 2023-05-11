import { useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import DetailSize from "./detailSize";

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

                </div>))}

        </div>
    )
}

export default RoomTour;