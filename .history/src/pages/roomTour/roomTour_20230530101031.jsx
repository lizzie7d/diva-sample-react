import { useEffect, useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import DetailSize from "./detailSize";
import fontLine from '../../assets/asset/font-line.png';
import RoomRight from "../roomRight";
import { data, diva } from '../../global';
import { RenderMode } from '@sheencity/diva-sdk';
const RoomTour = () => {
    const [selectIndex, setSelectIndex] = useState(-1);

    const metroTitle = [{ title: '云熙', index: 1 }, { title: '云璟', index: 2 }, { title: '云鼎', index: 3 },];

    useEffect(() => {
        if (selectIndex === 1) {

            diva.client.request('SetEntityRenderMode', {
                id: "E739519C4A3C7C37797E0883339E365F",  // 目标对象的 entityId
                mode: "highlight"                        // 叠色高亮模式
            })
            diva.client.request('SetEntityRenderMode', {
                id: "82A272F44593FD2E5CAF3AACB96809A6",  // 目标对象的 entityId
                mode: "highlight"                        // 叠色高亮模式
            })
            diva.client.request('SetEntityRenderMode', {
                id: "49414ADE40C9A803A5B1E9911C2EA803",  // 目标对象的 entityId
                mode: "highlight"                        // 叠色高亮模式
            })
            diva.client.request('SetHighlightStyle', {
                color: [65, 150, 255, 55],                // 叠加颜色，[r,g,b,a]，元素范围是 0 ~ 255，以 alpha 值设置透明度
                borderColor: [0, 0, 0],                 // 可选, 边缘色，[r,g,b]，取值范围 [0,0,0]~[255,255,255]，默认 [0,0,0]
                borderSize: 0                       // 可选, 边缘宽，值域[0, 10]，默认 0
            })
        }
        return () => {
            diva.client.request('SetEntityRenderMode', {
                id: "E739519C4A3C7C37797E0883339E365F",  // 目标对象的 entityId
                mode: "default"                        // 叠色高亮模式
            })
            diva.client.request('SetEntityRenderMode', {
                id: "82A272F44593FD2E5CAF3AACB96809A6",  // 目标对象的 entityId
                mode: "default"                        // 叠色高亮模式
            })
            diva.client.request('SetEntityRenderMode', {
                id: "49414ADE40C9A803A5B1E9911C2EA803",  // 目标对象的 entityId
                mode: "default"                        // 叠色高亮模式
            })
        };
    })
    return (
        <div>
            {selectIndex === 1 && (<DetailSize />)}

            <div className="top-side">
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

            {/* <RoomRight /> */}

        </div>

    )
}

export default RoomTour;