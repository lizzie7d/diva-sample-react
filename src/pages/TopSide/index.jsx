import { useEffect, useState } from 'react';
import './style.css';
import { data, diva } from '../../global';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
const TopSide = () => {
    const [selectIndex, setSelectIndex] = useState(0);
    const switchScene = (scene) => {
        diva.client.applyScene(scene).then(() => {
            data.changeCode(`client.applyScene('${scene.title}')`);
        });
    }

    useEffect(() => {
        diva.client?.applyScene("半鸟瞰").then(() => {
            data.changeCode(`client.applyScene('半鸟瞰')`);
        });
    })

    const metroTitle = [{ title: '道路交通', index: 1 }, { title: '轨道交通', index: 2 }, { title: '双TOD上盖', index: 3 }];
    return (
        <div className="top-side">
            {metroTitle.map((item, index) => (
                <div
                    onClick={() => { setSelectIndex(index); switchScene(item.index) }}
                    className="metro-section" key={item.index}
                    style={{
                        backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                        color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                    }}>
                    {item.title}
                </div>))}
        </div>
    )
}
export default TopSide;