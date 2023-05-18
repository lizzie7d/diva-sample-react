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
import { data, diva } from '../../global';
import LeftSide from '../../pages/leftSide';
import TopSide from '../../pages/TopSide';
import RightSide from '../../pages/rightSide/rightSide';
import footerSelect from '../../assets/asset/footer-select.png';
import VideoPart from '../../pages/videoPart';
import menu from '../../assets/asset/railway/menu.png'
import MetroTitle from '../../pages/TopSide/metroTitle';
import RoomTour from '../../pages/roomTour/roomTour';
import logo from '../../assets/asset/logo.png';
import WestBeauty from '../../pages/ChineBeauty';

const Footer = () => {
    const switchScene = (scene) => {
        console.log(scene, "山脉城杨");
        if (scene !== 3) {
            diva.client.applyScene(scene).then(() => {
            });
        }
    }
    const titleName = [{ title: '广州地铁', index: 0 }, { title: '山脉城央', index: 15 }, { title: '云山圈层', index: 0 }, { title: '城市TOD', index: 1 }, { title: '汇聚繁华', index: 4 }, { title: '和美山居', index: 6 }, { title: '东方美学', index: 7 }];
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
    });


    return (
        <div className="footer">
            {/* <Cloud /> */}

            {selectIndex === 3 && (<TopSide />)}
            {selectIndex === 0 && (<MetroTitle />)}
            {selectIndex === 2 && (<LeftSide />)}
            {selectIndex === 4 && (<RightSide />)}
            {selectIndex === 1 && (<VideoPart />)}
            {selectIndex === 5 && (<RoomTour />)}
            {selectIndex === 6 && (<WestBeauty />)}


            <div className='footer-container'>
                {/* <div className='logo-position'>
                    <img className='logo-top-style' src={logo} />

                </div> */}
                <img src={menu} />
                <div className="flex-menu" >
                    {titleName.map((item, index) => (
                        <div key={item.index} className="single-section" onClick={() => { setSelectIndex(index); switchScene(item.index); }}>
                            {selectIndex === index && (<img className='section-pic' src={footerSelect} />)}
                            <div className='title-position' style={{ color: selectIndex === index ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)' }}>
                                <img style={{ marginRight: 6 }} className='pic-src' src={selectIndex === index ? selectPic[index] : unSelectPicSrc[index]} />
                                <span> {item.title}</span>
                            </div>
                        </div>))}
                </div>

            </div >
        </div>

    )
}

export default Footer;