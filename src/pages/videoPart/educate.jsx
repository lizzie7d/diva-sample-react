import { useState } from "react";
import unselected from '../../assets/asset/right-unselected.png';
import select from '../../assets/asset/right-select.png';
import fontLine from '../../assets/asset/font-line.png';
import PplContent from "../infoContent/pplContent";
import InfoContent from "../infoContent";

const Education = () => {
    const buttomTitle = ["市政文体中轴", '人文都市'];
    const [buttomIndex, setButtomIndex] = useState(0);

    return (
        <div>
            {buttomIndex === 0 && (<InfoContent />)}
            {buttomIndex === 1 && (<PplContent />)}

            <div className="education" style={{ width: 378, fontSize: 16 }}>
                {buttomTitle.map((item, index) => (
                    <div
                        onClick={() => { setButtomIndex(index) }}
                        className="metro-section" key={index}
                        style={{

                            backgroundImage: buttomIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: buttomIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item}
                        <div style={{ marginTop: '-40px' }}><img src={fontLine} /></div>

                    </div>))}
            </div>
        </div>

    )
}
export default Education;