import { useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import fontLine from '../../assets/asset/font-line.png';

const WestBeauty = () => {
    const [selectIndex, setSelectIndex] = useState(0);

    const metroTitle = [{ title: '建筑漫游', index: 1 }, { title: ' 园林漫游', index: 2 }];
    return (
        <div className="top-side" style={{ width: 276 }}>
            {/* <DetailSize /> */}

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
export default WestBeauty;