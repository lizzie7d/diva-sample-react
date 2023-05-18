import './style.css'
import titleImg from '../../assets/asset/title-bottom.png';
import lineButtom from '../../assets/asset/line-buttom.png';
import line from '../../assets/asset/line.png';
import pic1 from '../../assets/asset/pic1.png';
import pic2 from '../../assets/asset/railway/pic2.png';
import pic3 from '../../assets/asset/railway/pic3.png';
import pic4 from '../../assets/asset/railway/pic4.png';
import pic5 from '../../assets/asset/railway/pic5.png';
import pic6 from '../../assets/asset/railway/pic6.png';
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
    useEffect(() => {
        videoRef.current.addEventListener('pause', function (e) {
            setPause(true);

        })
        videoRef.current.addEventListener('play', function (e) {
            setPause(false);
        })

    })
    return (
        <div >
            <div>
                <img className='logo-style' src={logo} />

            </div>
            <video controls src="https://video.picbling.cn/zzz_20230510_348606_854e7b76-0ec5-40c7-b06c-58b700f644a0-1080.mp4"
                ref={videoRef}
            ></video>
            {/* <Education /> */}
            {buttomIndex === 1 && (< PplContent />)}

            <div className="education" style={{ width: 270, fontSize: 16, }}>
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
            </div>
            <div
                // className={!start ? "video1-bg" : "video1-bg-none"}
                // className='video1-bg'
                style={{}} >
                <div className="leftside-contain" style={{ height: 720, visibility: !pause ? 'hidden' : buttomIndex === 1 ? 'hidden' : 'unset' }}>
                    <div className="sectionThree">
                        <div className="left-title">
                            千年城脉 广州第一中轴线
                            <img src={titleImg} />
                        </div>
                        <img src={line} style={{ marginBottom: 10 }} />
                        <div className='info-manage'>
                            <div className="info-box">
                                <div className="info-title">
                                    广州新城
                                </div>
                                <div className='picture-part'>
                                    <img src={pic1} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    北京路
                                </div>
                                <div className='picture-part'>
                                    <img src={pic2} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    海珠桥
                                </div>
                                <div className='picture-part'>
                                    <img src={pic3} />

                                </div>
                            </div>
                        </div>


                        <img className='left-buttom' src={lineButtom}></img>
                    </div>

                </div>
                <div className="rightside-contain" style={{ height: 720, visibility: !pause ? 'hidden' : buttomIndex === 1 ? 'hidden' : 'unset' }}>
                    <div className="sectionThree">
                        <div className="left-title">
                            千年城脉 广州第一中轴线
                            <img src={titleImg}></img>
                        </div>
                        <img src={line} style={{ marginBottom: 10 }} />
                        <div className='info-manage'>
                            <div className="info-box">
                                <div className="info-title">
                                    广东省、广州市政府
                                </div>
                                <div className='picture-part'>
                                    <img src={pic4} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    中山纪念堂
                                </div>
                                <div className='picture-part'>
                                    <img src={pic5} />

                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    白云山
                                </div>
                                <div className='picture-part'>
                                    <img src={pic6} />

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