import './style.css';
import closeDetail from '../../assets/asset/closeIcon.png';
import { useState } from 'react';
// import log from 'video.js/dist/types/utils/log';

const RailwayVideo = (props) => {
    const [detail, showDetail] = useState(true);
    return (
        <div

        >
            <div onClick={() => { console.log(detail); }}>
                <img src={closeDetail} className='close-detail' />
            </div>
            {/* <img src={closeDetail} onClick={() => { console.log(detail); showDetail(false) }} className='close-detail' /> */}
            {detail && (<div className="railway-video">
                <img src={closeDetail} onClick={() => { showDetail(false) }} className='close-detail' />
                <video style={{ width: 500, height: 500, marginTop: 100 }} loop src="https://video.picbling.cn/zzz_20230516_348606_c8855ad5-284d-4d36-90c5-6fc6fdb79955-1080.mp4" autoPlay />
            </div>)}

        </div>
    )
};
export default RailwayVideo;