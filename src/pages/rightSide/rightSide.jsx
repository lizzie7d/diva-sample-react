import { useEffect, useState } from 'react';
import './style.css';
import { data, diva } from '../../global';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import { MovementMode } from '@sheencity/diva-sdk';
import fontLine from '../../assets/asset/font-line.png';
import logo from '../../assets/asset/logo.png';

const RightSide = () => {
    const [selectIndex, setSelectIndex] = useState(7);
    const title = [{ title: '多维交通', index: 5 }, { title: '繁华都会', index: 7 }, { title: '品质教育', index: 10 }, { title: '优质医疗', index: 11 }, { title: '生态休闲', index: 12 }];

    const switchScene = (scene) => {
        diva.client.applyScene(scene).then(() => {
            data.changeCode(`client.applyScene('${scene.title}')`);
        });
    }

    const educateTitle = [
        {
            title: '幼儿园',
            index: 10
        },
        {
            title: '小学',
            index: 8
        },
        {
            title: '中学',
            index: 9,
        },

    ]

    const trafficTitle = [
        {
            title: '交通',
            index: 5
        },
        {
            title: '地铁',
            index: 6,
        },
    ]

    const [eduIndex, setEduIndex] = useState(0);
    const [trafficIndex, setTrafficIndex] = useState(0);


    useEffect(() => {
        // setTrafficIndex(0);
        // setEduIndex(0);
        diva.client?.applyScene("半鸟瞰").then(() => {
            data.changeCode(`client.applyScene('半鸟瞰')`);
        });
    })

    return (
        <div>
            <div>
                <img className='logo-style' src={logo} />

            </div>
            {selectIndex === 0 && <div className="education" style={{ width: 300, }}>
                {trafficTitle.map((item, index) => (
                    <div
                        onClick={() => { setEduIndex(index); switchScene(item.index) }}
                        className="edu-title " key={item.index}
                        style={{

                            backgroundImage: eduIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: eduIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item.title}
                        <div style={{ marginTop: '-40px' }}><img className='font-line-style' src={fontLine} /></div>


                    </div>))}
            </div>}
            {selectIndex === 2 && <div className="education">
                {educateTitle.map((item, index) => (
                    <div
                        onClick={() => { setTrafficIndex(index); switchScene(item.index) }}
                        className="edu-title " key={item.index}
                        style={{
                            backgroundImage: trafficIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: trafficIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item.title}
                        <img className='font-line-style' src={fontLine} />

                    </div>))}
            </div>}
            <div className='right-style'>
                {title.map((item, index) => (<div key={item.index}
                    className='right-title'
                    onClick={() => { setSelectIndex(index); switchScene(item.index) }}
                    style={{
                        backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                        color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                    }}
                >{item.title}
                    <div style={{ marginTop: '-40px' }}><img src={fontLine} /></div>
                </div>))}
            </div>
        </div>

    )
}
export default RightSide;