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
import { useEffect, useRef, useState } from 'react';
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
import fontLine from '../../assets/asset/font-line.png';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';

const Footer = () => {
    const videoRef = useRef();
    const [pause, setPause] = useState(true);
    const switchScene = (scene) => {
        if (scene !== 3) {
            diva.client.applyScene(scene).then(() => {
            });
        }

    }
    const [westSelect, setWestSelect] = useState(0);

    const titleName = [{ title: '广州地铁', index: 0 }, { title: '山脉城央', index: 15 }, { title: '云山圈层', index: 0 }, { title: '城市TOD', index: 1 }, { title: '汇聚繁华', index: 4 }, { title: '和美山居', index: 28 }, { title: '东方美学', index: 7 }];
    const unSelectPicSrc = [road, music, posi, spider, goal, home, book];
    const selectPic = [lightTrain, lightMusic, lightPosi, lightSpider, lightGoal, lightHome, lightBook];
    const [selectIndex, setSelectIndex] = useState(0);
    const metroTitle = [
        { title: '建筑漫游', index: 1 }, { title: ' 园林漫游', index: 2 }];
    const videoTwoRef = useRef();
    const videoOneRef = useRef();

    const onPlayVideo = (index) => {
        if (index === 1) {
            videoRef.current.play();

        }
        if (index === 2) {
            videoOneRef.current.play();

        }
        if (index === 3) {
            videoTwoRef.current.play();

        }
    }

    useEffect(() => {
        diva.client?.applyScene("半鸟瞰").then(() => {
            data.changeCode(`client.applyScene('半鸟瞰')`);
        });
    });
    useEffect(() => {
        if (selectIndex === 1) {
            videoRef.current.addEventListener('pause', function (e) {
                setPause(true);

            })
            videoRef.current.addEventListener('play', function (e) {
                setPause(false);
            })
        }
        if (selectIndex === 6) {
            if (westSelect === 0) {
                videoOneRef.current.addEventListener('pause', function (e) {
                    setPause(true);

                })
                videoOneRef.current.addEventListener('play', function (e) {
                    setPause(false);
                })
            }
            if (westSelect === 1) {
                videoTwoRef.current.addEventListener('pause', function (e) {
                    setPause(true);

                })
                videoTwoRef.current.addEventListener('play', function (e) {
                    setPause(false);
                })
            }

        }


    },)

    return (
        <div className="footer">
            {/* <Cloud /> */}

            {selectIndex === 3 && (<TopSide />)}
            {selectIndex === 0 && (<MetroTitle />)}
            {selectIndex === 2 && (<LeftSide />)}
            {selectIndex === 4 && (<RightSide />)}
            {selectIndex === 1 && (<VideoPart />)}
            {selectIndex === 5 && (<RoomTour />)}

            {selectIndex === 1 && (
                <video autoPlay style={{ width: '100%' }}
                    src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E5%BA%90%E5%8C%BA%E4%BD%8D%E6%80%BB%E5%9B%BE0518.m4v?Expires=1685459062&OSSAccessKeyId=TMP.3KkXjqNAB16uHuZj2zoZkKy87CfckGTHUUHXLjNuJ1ooT1s6W5BMRfAEWBKg2PR2QPRJTaH5SqpUWf7gGtwjKZRDmBqdE9&Signature=VguK3Nfa3IHG%2FnQuYLbmXFo2cnA%3D"
                    ref={videoRef} loop
                    controls
                ></video>
            )
            }
            <div className='footer-container' style={{ visibility: !pause ? 'hidden' : 'unset' }}>
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
            {
                selectIndex === 6 && (<div>
                    {westSelect === 0 && (
                        <div>
                            <video width={"100%"}
                                ref={videoOneRef}
                                controls src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E5%BB%BA%E7%AD%91%E6%BC%AB%E6%B8%B8518.mp4?Expires=1685363062&OSSAccessKeyId=TMP.3KgiY2qSsocRuqt77LktSqzb1prjMty7X5azMapFyQeSM49tA5mBqpSBGCJ3djez1uwQSVLz3WmbqJdMErVPkss95qK5vm&Signature=QzTacWIMr2%2FpZkIdzi5CGpvNaxk%3D"
                            ></video>

                        </div>
                    )}
                    {westSelect === 1 && (
                        <div>
                            <video width={"100%"}
                                ref={videoTwoRef}
                                controls src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E5%9B%AD%E6%9E%97%E6%BC%AB%E6%B8%B8.mp4?Expires=1685363016&OSSAccessKeyId=TMP.3KgiY2qSsocRuqt77LktSqzb1prjMty7X5azMapFyQeSM49tA5mBqpSBGCJ3djez1uwQSVLz3WmbqJdMErVPkss95qK5vm&Signature=BwAOZ6itkppajOWNXlExszSauac%3D"
                            ></video>

                        </div>
                    )}
                    <div className="top-side" style={{ width: 276 }}>

                        {metroTitle.map((item, index) => (
                            <div
                                onClick={() => { setWestSelect(index); }}
                                className="metro-section" key={item.index}
                                style={{
                                    backgroundImage: westSelect === index ? `url(${unselected})` : `url(${select})`,
                                    color: westSelect === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                                }}>
                                <div >{item.title}</div>
                                <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>

                            </div>))}


                    </div>



                </div>)
            }
        </div >

    )
}

export default Footer;