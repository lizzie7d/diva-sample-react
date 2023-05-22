import './style.css'
import titleImg from '../../assets/asset/title-bottom.png';
import lineButtom from '../../assets/asset/line-buttom.png';
import line from '../../assets/asset/line.png';
import pic1 from '../../assets/left1.png';
import pic2 from '../../assets/left2.png';
import pic3 from '../../assets/left3.png';
import pic4 from '../../assets/right1.png';
import pic5 from '../../assets/right2.png';
import pic6 from '../../assets/right3.png';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import unselected from '../../assets/asset/right-unselected.png';
import select from '../../assets/asset/right-select.png';
import fontLine from '../../assets/asset/font-line.png';
import PplContent from './pplContent';
import logo from '../../assets/asset/logo.png';

const InfoContent = () => {
    const videoRef = useRef();
    const [pause, setPause] = useState(true);
    const buttomTitle = ["市政文体中轴", '人文都市'];
    const [buttomIndex, setButtomIndex] = useState(0);

    return (
        <div >
            <div>
                <img className='logo-style' src={logo} />

            </div>
            {/* <video controls style={{ width: '100%' }} src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E5%BA%90%E5%8C%BA%E4%BD%8D%E6%80%BB%E5%9B%BE0518.m4v?Expires=1684506710&OSSAccessKeyId=TMP.3KgdfKabh4VnK7PD6VdrppXy25iD6bav6J3MrY54zCPPfp4JjDNCHc45HKJdUFs8ohfaHPm1KnczBGx498BJws7GU69km9&Signature=MvuP6%2FtB%2F76BE5v5WYB3sM%2BGaCM%3D"
                ref={videoRef}
            ></video> */}
            {/* <Education /> */}
            {buttomIndex === 1 && (< PplContent />)}

            {/* <div className="education" style={{ width: 270, fontSize: 16, }}>
                {buttomTitle.map((item, index) => (
                    <div
                        onClick={() => { setButtomIndex(index) }}
                        className="metro-section" key={index}
                        style={{

                            backgroundImage: buttomIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: buttomIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item}
                        <div style={{ marginTop: '-32px' }}><img style={{ width: 80 }} src={fontLine} /></div>

                    </div>))}
            </div> */}
            <div
                // className={!start ? "video1-bg" : "video1-bg-none"}
                // className='video1-bg'
                style={{}} >
                <div className="leftside-contain" style={{ height: 720, visibility: !pause ? 'hidden' : buttomIndex === 1 ? 'hidden' : 'unset' }}>
                    <div className="sectionThree">
                        <div className="left-title">
                            白云新城
                            <img src={titleImg} />
                        </div>
                        <img src={line} style={{ marginBottom: 10 }} />
                        <div className='info-manage'>
                            <div className="info-box">
                                <div className="info-title">
                                    5号停机坪购物广场
                                </div>
                                <div className='picture-part'>
                                    <img src={pic1} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    城市规划展览中心
                                </div>
                                <div className='picture-part'>
                                    <img src={pic2} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    广州新体育馆
                                </div>
                                <div className='picture-part'>
                                    <img src={pic3} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                        </div>


                        <img className='left-buttom' src={lineButtom}></img>
                    </div>

                </div>
                <div className="rightside-contain" style={{ height: 720, visibility: !pause ? 'hidden' : buttomIndex === 1 ? 'hidden' : 'unset' }}>
                    <div className="sectionThree">
                        <div className="left-title">
                            珠江新城
                            <img src={titleImg}></img>
                        </div>
                        <img src={line} style={{ marginBottom: 10 }} />
                        <div className='info-manage'>
                            <div className="info-box">
                                <div className="info-title">
                                    广州塔
                                </div>
                                <div className='picture-part'>
                                    <img src={pic4} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    正佳广场
                                </div>
                                <div className='picture-part'>
                                    <img src={pic5} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    中信广场
                                </div>
                                <div className='picture-part'>
                                    <img src={pic6} style={{ width: 284, height: 168 }} />

                                </div>
                            </div>
                        </div>
                        <img className='left-buttom' src={lineButtom}></img>
                    </div>

                </div>
            </div>
        </div >


    )
}
export default InfoContent;