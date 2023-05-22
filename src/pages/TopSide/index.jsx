import { useEffect, useState } from 'react';
import './style.css';
import { data, diva } from '../../global';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import fontLine from '../../assets/asset/font-line.png';
import logo from '../../assets/asset/logo.png';
import closeDetail from '../../assets/asset/closeIcon.png';
import RailwayVideo from '../railwayVideo';
import { Modal } from 'antd';
import { Player } from 'video-react';

const TopSide = () => {
    const [visible, setVisible] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);
    const switchScene = (scene) => {
        diva.client.applyScene(scene).then(() => {
            data.changeCode(`client.applyScene('${scene.title}')`);
        });
    }

    useEffect(() => {
        diva.client?.applyScene("半鸟瞰").then(() => {
        });
    })

    const explore = async () => {
        await diva.client.request('SetTransformAnimation', {
            id: "1BF3E772423520093009D7B5133D7F8D",                   // 目标对象的 entityId
            duration: 2.0,                          // 必填，动画持续时间，单位（秒）
            loop: false,                             // 可选，是否循环，默认false
            position: [-8051.5, -43675.21875, -2614.677734],            // 非CIM模式下必填，目标位置，[x, y, z] 默认[0.0,0.0,0.0]，单位cm
            //coordinate: [116.445,39.918,0],        // 仅CIM模式下可用，目标位置，[经度,纬度,高度(单位: m)] 
            rotation: [0.0, 0.0, 0.0],                 // 可选，目标对象的旋转角度 [roll,pitch,yaw]
            scale: [1.0, 1.0, 1.0]                     // 可选，目标对象的缩放 [scaleX,scaleY,scaleZ]
        })
    }

    const close = async () => {
        await diva.client.request('SetTransformAnimation', {
            id: "1BF3E772423520093009D7B5133D7F8D",                   // 目标对象的 entityId
            duration: 2.0,                          // 必填，动画持续时间，单位（秒）
            loop: false,                             // 可选，是否循环，默认false
            position: [-8051.5, -43675.21875, -384.496094],            // 非CIM模式下必填，目标位置，[x, y, z] 默认[0.0,0.0,0.0]，单位cm
            //coordinate: [116.445,39.918,0],        // 仅CIM模式下可用，目标位置，[经度,纬度,高度(单位: m)] 
            rotation: [0.0, 0.0, 0.0],                 // 可选，目标对象的旋转角度 [roll,pitch,yaw]
            scale: [1.0, 1.0, 1.0]                     // 可选，目标对象的缩放 [scaleX,scaleY,scaleZ]
        })
    }

    const onClickTheTitle = (index, item) => {
        console.log(index);
        if (index === 3) {
            explore();
            setVisible(true);
        }
        if (index === 2) {
            close();
        }
        if (index === 0 || index === 1) {
            setVisible(false);

        }

        setSelectIndex(index);
        switchScene(item);
    }


    const metroTitle = [{ title: '道路交通', index: 1 }, { title: '轨道交通', index: 2 }, { title: ['双TOD上盖', '内部结构'], index: 3 },];
    return (
        <div>

            {visible && (<div className="railway-video">
                <img src={closeDetail} onClick={() => { setVisible(false) }} className='close-detail' />
                <video style={{ width: 500, height: 300, marginTop: 30 }} loop src="https://video.picbling.cn/zzz_20230516_348606_c8855ad5-284d-4d36-90c5-6fc6fdb79955-1080.mp4" autoPlay />
            </div>)}
            <div>
                <img className='logo-style' src={logo} />

            </div>
            <div className="top-side">
                {metroTitle.map((item, index) => (
                    <div
                        onClick={() => { onClickTheTitle(index, item.index) }}
                        className="metro-section" key={item.index}
                        style={{
                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item.title.length !== 2 ?
                            <div >{item.title}
                                <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>
                            </div> : (
                                <div className='flex-title'>
                                    <div>{item.title[0]}
                                        <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>
                                    </div>
                                    {selectIndex === 2 && (<div
                                        onClick={() => onClickTheTitle(3, item.index)}
                                        style={{
                                            borderRadius: 70,
                                            height: 38,
                                            fontSize: 14,
                                            opacity: 0.7,
                                            // width
                                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                                            backgroundRepeat: 'no-repeat'
                                        }}>{item.title[1]}
                                        <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>

                                    </div>)}
                                </div>
                            )}
                    </div>))}

            </div>
        </div>


    )
}
export default TopSide;