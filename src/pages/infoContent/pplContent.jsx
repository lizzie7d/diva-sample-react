import './style.css'
import titleImg from '../../assets/asset/title-bottom.png';
import lineButtom from '../../assets/asset/line-buttom.png';
import line from '../../assets/asset/line.png';
import pic1 from '../../assets/asset/pic1.png';
import pic7 from '../../assets/asset/railway/pic7.png';
import pic8 from '../../assets/asset/railway/pic8.png';
import pic9 from '../../assets/asset/railway/pic9.png';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/asset/logo.png';

const PplContent = () => {
    const videoRef = useRef();
    const [pause, setPause] = useState(true);

    useEffect(() => {
        videoRef.current.addEventListener('pause', function (e) {
            setPause(true);
        })
        videoRef.current.addEventListener('play', function (e) {
            setPause(false);
        })

    })
    return (
        <div>
            <div>
                <img className='logo-style' src={logo} />

            </div>
            <video ref={videoRef} src="https://video.picbling.cn/zzz_20230510_348606_2be3f13c-5076-4201-9ec0-485c6984071f-1080.mp4" controls></video>

            <div className="leftside-contain" style={{ height: 640, visibility: !pause ? 'hidden' : 'unset' }}>
                <div className="sectionThree">
                    <div className="left-title">
                        锦绣生活 四大城市地标
                        <img src={titleImg}></img>
                    </div>
                    <img src={line} style={{ marginBottom: 10 }} />
                    <div className='info-manage'>
                        <div className="ppl-box">
                            <div className="info-title">
                                白云国际会议中心
                            </div>

                            <div className='info-content'>
                                大型政务会议钦定场所，年均接待国内外会议/展览/演出/宴会3000余场。曾举办亚洲能源论坛、省市人大、政协、党代会等国内外会议。

                            </div>
                            <div className='picture-part'>
                                <img src={pic1} />

                            </div>
                        </div>
                        <div className="ppl-box">
                            <div className="info-title">
                                广州市城市规划展览中心

                            </div>
                            <div className='info-content'>
                                集规划展示、公众参与、学术交流、城建档案、业务技术支持等功能于一体，是国内规划最大、功能设施最完善的规划展览馆。


                            </div>
                            <div className='picture-part'>
                                <img src={pic7} />

                            </div>
                        </div>
                    </div>


                    <img className='left-buttom' src={lineButtom}></img>
                </div>

            </div>
            <div className="rightside-contain" style={{ height: 640, visibility: !pause ? 'hidden' : 'unset' }}>
                <div className="sectionThree">
                    <div className="left-title">
                        锦绣生活 四大城市地标

                        <img src={titleImg}></img>
                    </div>
                    <img src={line} style={{ marginBottom: 10 }} />
                    <div className='info-manage'>
                        <div className="ppl-box">
                            <div className="info-title">
                                广东画院
                            </div>
                            <div className='info-content'>
                                广东省重点文化设施项目之一，将成为集国林、雕塑、建筑艺术于一体的现代化标志性建筑。

                            </div>
                            <div className='picture-part'>
                                <img src={pic8} />

                            </div>
                        </div>
                        <div className="ppl-box">
                            <div className="info-title">
                                广东体育馆
                            </div>
                            <div className='info-content'>
                                广东省重点文化设施项目之一，将成为集国林、雕塑、建筑艺术于一体的现代化标志性建筑。

                            </div>
                            <div className='picture-part'>
                                <img src={pic9} />

                            </div>
                        </div>

                    </div>


                    <img className='left-buttom' src={lineButtom}></img>
                </div>

            </div>
        </div>


    )
}
export default PplContent;