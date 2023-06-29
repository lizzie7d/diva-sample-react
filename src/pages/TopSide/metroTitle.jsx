/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import './style.css';
import select from '../../assets/asset/right-select.png';
import unselected from '../../assets/asset/right-unselected.png';
import title from '../../assets/asset/railway/railway-font.png';
import line from '../../assets/asset/railway/line.png';
import titleLine from '../../assets/asset/railway/title-line.png';
import subTitleLeft from '../../assets/asset/right-pic.png';
import subTitleRight from '../../assets/asset/left-pic.png';
import TOD from '../../assets/asset/railway/TOD.png';
import mainline from '../../assets/asset/railway/main-buttom.png';
import pro2 from '../../assets/asset/railway/pro-right.png';
import fontLine from '../../assets/asset/font-line.png';
import logo from '../../assets/asset/logo.png';
import m1 from '../../assets/asset/2-1.png';
import m2 from '../../assets/asset/2-2.png';
import m3 from '../../assets/asset/2-3.png';
import p1 from '../../assets/asset/3-1.png';
import p2 from '../../assets/asset/3-2.png';
import p3 from '../../assets/asset/3-3.png';
import g1 from '../../assets/asset/group1.png';
import g2 from '../../assets/asset/group2.png';
import line2 from '../../assets/asset/line-2.png';



const MetroTitle = () => {
    const [selectIndex, setSelectIndex] = useState(0);
    const [metroIndex, setMetroIndex] = useState(0);
    const metroButtom = ["核心业务", "三大核心优势"];
    const metroTitle = ["品牌介绍", "广州地铁地产", "标杆项目"];
    return (
        <div>

            <div className='railway-page'>

                {selectIndex === 1 && (
                    <div className="metro-bottom" style={{ width: 250, }}>
                        {metroButtom.map((item, index) => (
                            <div
                                onClick={() => { setMetroIndex(index); console.log(index); }}
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
                            <div className='line-position'><img style={{ width: 80 }} src={fontLine} /></div>
                        </div>))
                    }
                </div >
                <div>
                    <img className='logo-style' src={logo} />

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
                <div className='subTitle-content'>
                    <img src={subTitleLeft} className='subTitle-img' />
                    <img src={subTitleRight} className='subTitle-img' />
                </div>


                {selectIndex === 1 && metroIndex === 0 && (
                    <div className="intro-flex">
                        <div className="metro-left">
                            <div className="title">
                                <img src={title} style={{ width: 369 }} />
                            </div>
                            <img src={line} />
                            <div className="intro-display">
                                <div>
                                    <div className="intro-title">
                                        大型国有企业
                                    </div>
                                    <div className="intro-title">
                                        致力成为城市轨道交通行业典范
                                    </div>
                                </div>

                                <img src={titleLine} style={{ marginTop: 8, width: 1420 }} />

                                <div className="intro-detail-shouye">
                                    <div className='intro-detail-text'>
                                        <div>
                                            <div>
                                                广州地铁集团有限公司成立于1992年，是广州政府全资大型国有企业，
                                            </div>
                                            <div>
                                                “以建设好、主导湾区、引领行业”的使命，
                                            </div>

                                        </div>
                                        <img src={subTitleRight} style={{ width: 792 }} />


                                    </div>
                                    <div className='intro-detail-text'>
                                        <div>
                                            <div >
                                                以“一张网、一张票、一串城”的理念，
                                            </div>
                                            <div>
                                                全力推动“轨道上的大湾区”建设。

                                            </div>

                                        </div>
                                        <img src={subTitleLeft} style={{ width: 792 }} />


                                    </div>
                                </div>
                            </div>
                            <div className="intro-detail-shouye">
                            </div>

                        </div>
                    </div>)}
                {selectIndex === 1 && metroIndex === 0 && (
                    <div className="intro-content">
                        <div className="title">
                            <img src={title} style={{ width: 369 }} />
                        </div>
                        <img src={line} />
                        <div className="intro-display">
                            <div className='intro-title-fix'>
                                <div>
                                    <div className="intro-title">
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>TOD</span>轨道都市美好生活运营商

                                        </div>
                                    </div>
                                    <img src={titleLine} style={{ marginTop: 8, width: 1074 }} />
                                </div>
                                <div>
                                    <div className="intro-title">
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>TOD</span>综合开发使命

                                        </div>
                                    </div>
                                    <img src={line2} style={{ marginTop: 8, width: 536 }} />
                                </div>
                            </div>

                            <div className="intro-detail-shouye">
                                <div className='intro-detail-text'>
                                    <div>
                                        <div>
                                            广州轨道交通TOD综合开发是广州地铁战略核心业务之一。
                                        </div>
                                        <div>
                                            广州地铁地产践行“轨道+物业”战略部署，
                                        </div>

                                    </div>
                                    <img src={m1} style={{ width: 536 }} />


                                </div>
                                <div className='intro-detail-text'>
                                    <div>
                                        <div >
                                            坚持“以城为本、以人为本”TOD发展理念，
                                        </div>
                                        <div>
                                            以沿线物业开发哺轨道交通建设运营，满足市民美好生活向往。

                                        </div>

                                    </div>
                                    <img src={m2} style={{ width: 536 }} />


                                </div>
                                <div className='intro-detail-text' style={{ gap: 10 }}>
                                    <div>
                                        <img src={TOD} style={{ width: 480 }} />
                                    </div>
                                    <img src={m3} style={{ width: 536 }} />


                                </div>
                            </div>
                        </div>

                    </div>
                )}
                {selectIndex === 1 && metroIndex === 1 && (
                    <div className="intro-content">
                        <div className="title">
                            <img src={title} style={{ width: 369 }} />
                        </div>
                        <img src={line} />
                        <div className="intro-display" style={{ marginBottom: 20 }}>
                            <div className='intro-title-fix'>
                                <div>
                                    <div className="intro-title">
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>TOD</span>轨道都市美好生活运营商

                                        </div>
                                    </div>
                                    <img src={titleLine} style={{ marginTop: 8, width: 1074 }} />
                                </div>

                            </div>

                        </div>
                    </div>
                )}
                {selectIndex === 1 && metroIndex === 1 && (
                    <div>
                    <div className="intro-content">
                        <div className="title">
                            <img src={title} className='title-width' />
                        </div>
                        <img src={line} />
                        <div className="intro-display">
                            <div className="intro-title">
                                TOD轨道都市美好生活运营商
                                <img src={titleLine} />
                            </div>

                        </div>


                        <div className='intro-detail-text'>
                            <div>
                                <div >
                                    坚持“以城为本、以人为本”TOD发展理念，
                                </div>
                                <div>
                                    以沿线物业开发哺轨道交通建设运营，满足市民美好生活向往。

                                </div>

                            </div>


                        </div>
                        <div className='intro-detail-text' style={{ gap: 10 }}>



                        </div>
                    </div>


            <div className='main-display-three'>
                <div className='main-three'>
                    三大核心优势
                </div>
                <img src={mainline} className='three-line' />
                <div className='intro-title-fix'>
                    <img src={p1} style={{ width: 510 }} />
                    <img src={p2} style={{ width: 510 }} />
                    <img src={p3} style={{ width: 510 }} />

                </div>
            </div>

            </div>
    )
}
{
    selectIndex === 2 && (

        <div className="intro-content">
            <div className="title">
                <img src={title} style={{ width: 369 }} />
            </div>
            <img src={line} />
            <div className="intro-display" style={{ marginBottom: 20 }}>
                <div className='intro-title-fix'>
                    <div>
                        <div className="intro-title">
                            <div>
                                30年国企担当，匠造地标作品

                            </div>
                        </div>
                        <img src={titleLine} style={{ marginTop: 8, width: 1074 }} />
                    </div>

                </div>

                <div className="intro-detail-shouye" style={{ gap: 126 }}>
                    <div className='intro-detail-text'>
                        <div>
                            <div>
                                30年耕耘，广州地铁以安全可靠、精工匠心融入空间营造，以地铁标准打造高品质生活居所，
                            </div>
                            <div>
                                通过自主及合作开发住宅、写字楼、商场等项目近20个，遍布荔湾、珠海、白云等主城区，回馈城市发展与社区建设，深受市场青睐。
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="example-project">
                <div className='pro-lef'>
                    <img className='pro-img' src={g1} />
                    <img className='pro-img' src={g2} />
                </div>
                <div >
                    <img className='pro-left' src={pro2} />
                </div>
            </div>
        </div>
    )
}
            </div >
        </div >



    )
}
export default MetroTitle;