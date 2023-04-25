import './style.css';
import road from '../../assets/asset/road.png';
import music from '../../assets/asset/music.png';
import posi from '../../assets/asset/posi.png';
import spider from '../../assets/asset/spider.png';
import goal from '../../assets/asset/goal.png';
import home from '../../assets/asset/home.png';
import book from '../../assets/asset/book.png';
import lightTrain from '../../assets/asset/lightTrain.png';
import lightMusic from '../../assets/asset/lightMusic.png';
import lightPosi from '../../assets/asset/lightPosi.png';
import lightSpider from '../../assets/asset/lightSpider.png';
import lightGoal from '../../assets/asset/lightGoal.png';
import lightHome from '../../assets/asset/lightHome.png';
import lightBook from '../../assets/asset/lightBook.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { data, diva } from '../../global';
import LeftSide from '../../pages/leftSide';
import TopSide from '../../pages/TopSide';
import RightSide from '../../pages/rightSide/rightSide';
import buttomPic from '../../assets/asset/buttom-pic.png';
const Footer = () => {
    const switchScene = (scene) => {
        diva.client.applyScene(scene).then(() => {
            data.changeCode(`client.applyScene('${scene.title}')`);
        });
    }
    const titleName = [{ title: '广州地铁', index: 0 }, { title: '山脉城央', index: 3 }, { title: '云山圈层', index: 0 }, { title: '城市TOD', index: 1 }, { title: '汇聚繁华', index: 4 }, { title: '和美山居', index: 6 }, { title: '东方美学', index: 7 }];
    const titleEnglish = ['Guangzhou Metro', 'Metro Brand', 'Age White Clouds', 'City TOD', 'Converging prosperity', 'Harmony and Beauty', 'Beauty of the East'];
    const unSelectPicSrc = [road, music, posi, spider, goal, home, book];
    const selectPic = [lightTrain, lightMusic, lightPosi, lightSpider, lightGoal, lightHome, lightBook];
    const [selectIndex, setSelectIndex] = useState(0);

    useEffect(() => {
        localStorage.setItem('scene', selectIndex)
    }, [selectIndex]);

    useEffect(() => {
        diva.client?.applyScene("半鸟瞰").then(() => {
            data.changeCode(`client.applyScene('半鸟瞰')`);
        });
    })
    return (
        <div className="footer">
            {selectIndex === 3 && (<TopSide />)}
            {selectIndex === 2 && (<LeftSide />)}
            {selectIndex === 4 && (<RightSide />)}

            <div className='footer-container'>
                <div className="flex-menu" >
                    {titleName.map((item, index) => (
                        <div key={item.index} className="single-section" onClick={() => { setSelectIndex(index); switchScene(item.index); }}>
                            <div className='pic-position'>
                                <img className='pic-src' src={selectIndex === index ? selectPic[index] : unSelectPicSrc[index]} />
                            </div>
                            <div className='title-position' style={{ color: selectIndex === index ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)' }}>
                                <div className='fs-16'>{item.title}</div>
                                <div>{titleEnglish[index]}</div>

                            </div>

                        </div>))}
                </div>
                {/* <img style={{
                    width: 86,
                    height: 18
                }} src={buttomPic} /> */}
            </div >
        </div>

    )
}

export default Footer;