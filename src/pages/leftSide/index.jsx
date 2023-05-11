import './style.css';
import titleImg from '../../assets/asset/title-bottom.png';
import lineButtom from '../../assets/asset/line-buttom.png';
import { useEffect } from 'react';
import logo from '../../assets/asset/logo.png';

const LeftSide = () => {
    useEffect(() => {
        console.log(localStorage.getItem('scene'), 1213);
    })
    return (
        <div>
            <div>
                <img className='logo-style' src={logo} />

            </div>
            <div className="leftside-contain">

                <div className="sectionThree">
                    <div className="left-title">
                        都市绿肺 富氧生活
                        <img src={titleImg}></img>
                    </div>
                    <div className="left-info">
                        项目坐落广州都市绿肺白云，森林植被四季常青，环抱繁华广州，值得城市一生臻藏。
                    </div>
                    <div className="left-info">
                        第一富人居住链的白云山，城市价值总是向山节节攀升，云山传承之火即将燃起。
                    </div>
                    <img className='left-buttom' src={lineButtom}></img>
                </div>

            </div>

        </div>

    )
}

export default LeftSide;