import { useEffect, useState } from 'react';
import './style.css';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import title from '../../assets/asset/railway/railway-font.png';
import line from '../../assets/asset/railway/line.png';
import titleLine from '../../assets/asset/railway/title-line.png';
import subTitleLeft from '../../assets/asset/railway/subTitle-left.png';
import subTitleRight from '../../assets/asset/railway/subTitle-right.png';
import TOD from '../../assets/asset/railway/TOD.png';
import rightTop from '../../assets/asset/railway/right-top.png';
import rightMiddle from '../../assets/asset/railway/right-middle.png';
import rightButtom from '../../assets/asset/railway/right-bottom.png';
import mainline from '../../assets/asset/railway/main-buttom.png';
import mainone from '../../assets/asset/railway/mainone.png';
import maintwo from '../../assets/asset/railway/maintwo.png';
import mainthree from '../../assets/asset/railway/mainthree.png';
import pro1 from '../../assets/asset/railway/pro1.png';
import pro2 from '../../assets/asset/railway/pro-right.png';
import pro3 from '../../assets/asset/railway/Rectangle.png';
import fontLine from '../../assets/asset/font-line.png';
import logo from '../../assets/asset/logo.png';



const MetroTitle = () => {
    const [selectIndex, setSelectIndex] = useState(0);
    const [metroIndex, setMetroIndex] = useState(0);
    const metroButtom = ["核心业务", "三大核心优势"];
    const metroTitle = ["品牌介绍", "广州地铁地产", "标杆项目"];
    return (

        <div className='railway-page'>

            {selectIndex === 1 && (<div className="metro-bottom" style={{ width: 300, }}>
                {metroButtom.map((item, index) => (
                    <div
                        onClick={() => { setMetroIndex(index); }}
                        className="edu-title " key={index}
                        style={{
                            backgroundImage: metroIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: metroIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item}
                    </div>))}
            </div>)}
            <div className="railway-top" >
                {metroTitle.map((item, index) => (
                    <div
                        onClick={() => { setSelectIndex(index) }}
                        className="metro-section" key={index}
                        style={{
                            marginTop: 16,
                            backgroundImage: selectIndex === index ? `url(${unselected})` : `url(${select})`,
                            color: selectIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}>
                        {item}
                        <div style={{ marginTop: '-32px' }}><img style={{ width: 80 }} src={fontLine} /></div>
                    </div>))
                }
            </div >
            <div>
                <img className='logo-style' src={logo} />

            </div>
            {selectIndex === 0 && (<div className="intro-content">
                <div className="title">
                    <img src={title} />
                </div>
                <img src={line} />
                <div className="intro-display">
                    <div className="intro-title">
                        大型国有企业
                    </div>
                    <div className="intro-title">
                        致力成为城市轨道交通行业典范
                        <img src={titleLine} />
                    </div>

                    <div className="intro-detail">
                        广州地铁集团有限公司成立于1992年，是广州政府全资大型国有企业，
                        <div>
                            “以建设好、主导湾区、引领行业”的使命，
                        </div>
                        <div>
                            以“一张网、一张票、一串城”的理念，
                        </div>
                        <div>
                            全力推动“轨道上的大湾区”建设。
                        </div>
                    </div>
                </div>
                <img src={subTitleLeft} />
                <img src={subTitleRight} />
            </div>)}
            {selectIndex === 1 && metroIndex === 0 && (
                <div className="intro-flex">
                    <div className="metro-left">
                        <div className="title">
                            <img src={title} />
                        </div>
                        <img src={line} />
                        <div className="intro-display">
                            <div className="intro-title">
                                TOD轨道都市美好生活运营商
                                <img src={titleLine} />
                            </div>

                            <div className="intro-detail">
                                广州轨道交通TOD综合开发是广州地铁战略核心业务之一。
                                <div>
                                    广州地铁地产践行“轨道+物业”战略部署，
                                </div>
                                <div>
                                    坚持“以城为本、以人为本”TOD发展理念，
                                </div>
                                <div>
                                    以沿线物业开发哺轨道交通建设运营，满足市民美好生活向往。
                                </div>
                            </div>

                            <div className="intro-title" style={{ marginTop: 80 }}>
                                TOD综合开发使命
                                <img src={TOD} style={{ width: 640, height: 150 }} />
                            </div>
                        </div>


                    </div>
                    <div className='metro-right'>
                        <div className='metro-card' style={{ backgroundImage: `url(${rightTop})` }}>
                            <div className="metro-detial">
                                {/* 123 */}
                            </div>
                        </div>
                        <div className='metro-card' style={{ backgroundImage: `url(${rightMiddle})` }}></div>
                        <div className='metro-card' style={{ backgroundImage: `url(${rightButtom})` }}></div>


                    </div>
                </div>
            )}
            {selectIndex === 1 && metroIndex === 1 && (
                <div className="intro-content">
                    <div className="title">
                        <img src={title} />
                    </div>
                    <img src={line} />
                    <div className="intro-display">
                        <div className="intro-title">
                            TOD轨道都市美好生活运营商
                            <img src={titleLine} />
                        </div>

                        <div className="intro-detail">
                            广州地铁地产践行“轨道+物业”战略部署，
                            广州轨道交通TOD综合开发是广州地铁战略核心业务之一。
                            <div>
                                坚持“以城为本、以人为本”TOD发展理念， 以沿线物业开发哺轨道交通建设运营，满足市民美好生活向往。
                            </div>
                        </div>


                    </div>
                    <div className='main-display-three'>
                        <div className='main-three'>
                            三大核心优势
                        </div>
                        <img src={mainline} style={{ marginTop: 12, marginBottom: 12, width: 1200 }} />
                        <div className="main-content" style={{ width: 1200 }}>
                            <img className='main-pic' src={mainone} />
                            <img className='main-pic' src={maintwo} />
                            <img className='main-pic' src={mainthree} />
                        </div>
                    </div>

                </div>
            )}
            {selectIndex === 2 && (
                <div className="intro-content">
                    <div className="title">
                        <img src={title} />
                    </div>
                    <img src={line} />
                    <div className="intro-display">
                        <div className="intro-title">
                            30轨年国企担当，匠造地标作品
                            <img src={titleLine} />
                        </div>

                        <div className="intro-detail">
                            30年耕耘，广州地铁以安全可靠、精工匠心融入空间营造，以地铁标准打造高品质生活居所，
                            <br />  通过自主及合作开发住宅、写字楼、商场等项目近20个，遍布荔湾、海珠、白云等主城区，回馈城市发展与社区建设,深受市场青睐。
                        </div>

                    </div>
                    <div className="example-project">
                        <div className='pro-lef'>
                            <img className='pro-img' src={pro1} />
                            <div className='pro-content'>经营项目：万胜广场、荔胜广场、地铁金融城、云胜广场等经营规模达90万m2</div>

                            <img className='pro-img' src={pro3} />
                            <div className='pro-content'>经营项目：万胜广场、荔胜广场、地铁金融城、云胜广场等经营规模达90万m2</div>


                        </div>
                        <div className='pro-left'>
                            <img style={{ height: 400, width: 600 }} src={pro2} />
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}
export default MetroTitle;