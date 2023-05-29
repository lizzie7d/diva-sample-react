import { useState } from "react";
import {
    diva, data
} from '../../global';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import fontLine from '../../assets/asset/font-line.png';
import './style.css'

const RoomRight = () => {
    const [selectIndex, setSelectIndex] = useState(-1);

    const switchScene = (scene) => {
        diva.client.request('PlayCameraTrack', {
            name: scene,    // DIVA 编辑器中漫游轨的名称
            loop: false,      // 可选，默认为 false，是否循环播放
            camera: true,     // 可选，默认为 true，是否应用预设的镜头位置
            env: true,        // 可选，默认为 true，是否应用预设的天空后期环境效果
            animation: true   // 可选，默认为 true，是否应用动画效果，注意仅对动画漫游轨中确实存在过渡动画数据的情况有效
        })
    }
    const title = [{ title: "餐客厅" },
    { title: "主卧" },
    { title: "书房" },
    { title: "卫生间" },
    { title: "厨房" },
    { title: "女孩房" },
    { title: "男孩房" }];
    return (
        <div className="room-right-title">
            {title.map((item, index) => (<div key={item.index}
                className='right-title'
                onClick={() => { setSelectIndex(index); switchScene(item.title) }}
                style={{
                    backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                    color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                }}
            >{item.title}
                <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>
            </div>))}
        </div>
    )
}
export default RoomRight;