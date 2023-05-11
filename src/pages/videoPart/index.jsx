import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import { useState } from 'react';
import InfoContent from '../infoContent';
import PplContent from '../infoContent/pplContent';
import { useEffect } from 'react';
import Cloud from '../cloud';
import fontLine from '../../assets/asset/font-line.png';
import Education from './educate';

const VideoPart = () => {
    const topTitle = ["城脉中轴", '云山城央'];
    const [selectIndex, setSelectIndex] = useState(0);

    return (
        <div>
            {selectIndex === 0 && (<InfoContent />)}
            {/* {selectIndex === 0 && <Education />} */}
            {selectIndex === 1 && (< Cloud />)}

            <div className="top-side" style={{ width: 378 }}>
                {topTitle.map((item, index) => (
                    <div
                        onClick={() => setSelectIndex(index)}
                        className="metro-section" key={index}
                        style={{
                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item}
                        <div style={{ marginTop: '-40px' }}><img src={fontLine} /></div>

                    </div>))}


            </div>

        </div>

    )
}
export default VideoPart;