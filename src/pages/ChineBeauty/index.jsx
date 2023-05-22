import { useEffect, useRef, useState } from "react";
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import fontLine from '../../assets/asset/font-line.png';
import Dialog from "../../components/popup";
import VideoPlayer from "../../components/videoPlayer";

const WestBeauty = () => {
    const [selectIndex, setSelectIndex] = useState(0);
    const videoOneRef = useRef();
    const [pause, setPause] = useState(true);
    const videoTwoRef = useRef();

    const metroTitle = [{ title: '建筑漫游', index: 1 }, { title: ' 园林漫游', index: 2 }];
    useEffect(() => {
        if (selectIndex === 0) {
            videoOneRef.current.addEventListener('pause', function (e) {
                localStorage.setItem('pause', true);
            })
            videoOneRef.current.addEventListener('play', function (e) {
                setPause(false);
                localStorage.setItem('pause', false);
            })
        }
    })
    return (
        <div>
            {selectIndex === 0 && (<video width={"100%"} ref={videoOneRef} controls src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E5%BB%BA%E7%AD%91%E6%BC%AB%E6%B8%B8518.mp4?Expires=1684506773&OSSAccessKeyId=TMP.3KgdfKabh4VnK7PD6VdrppXy25iD6bav6J3MrY54zCPPfp4JjDNCHc45HKJdUFs8ohfaHPm1KnczBGx498BJws7GU69km9&Signature=PKJQVJTG675TpHobrBqGTCCEFW0%3D"
            ></video>)}
            <VideoPlayer />
            {selectIndex === 1 && (<video width={"100%"} ref={videoTwoRef} controls src="https://aliyunceshishiyong.oss-cn-hangzhou.aliyuncs.com/%E5%9B%AD%E6%9E%97%E6%BC%AB%E6%B8%B8.mp4?Expires=1684506759&OSSAccessKeyId=TMP.3KgdfKabh4VnK7PD6VdrppXy25iD6bav6J3MrY54zCPPfp4JjDNCHc45HKJdUFs8ohfaHPm1KnczBGx498BJws7GU69km9&Signature=hWea7uyBGSeafSMvaCMyC%2BsyDXo%3D"
            ></video>)}
            <div className="top-side" style={{ width: 276 }}>

                {metroTitle.map((item, index) => (
                    <div
                        onClick={() => { setSelectIndex(index); }}
                        className="metro-section" key={item.index}
                        style={{
                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        <div >{item.title}</div>
                        <div style={{ marginTop: '-32px' }}><img style={{ width: 82 }} src={fontLine} /></div>

                    </div>))}


            </div>
        </div>

    )
}
export default WestBeauty;