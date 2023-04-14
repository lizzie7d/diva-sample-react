import React, { Component } from 'react'
import './index.scss'
import {
  diva, data
} from '../../global';
import ContentBlock from '../../components/ContentBlock'
import { WeatherName } from '@sheencity/diva-sdk';
export default class index extends Component {

  weathers = [
    {
      title: "晴天",
      typeName: WeatherName.Sunny,
    },
    {
      title: "小雨",
      typeName: WeatherName.Rain,
    },
    {
      title: "雪天",
      typeName: WeatherName.Snow,
    },
  ];

  switchWeather = (weather) => {
    if (!weather.typeName) return;
    diva.client.setWeather(weather.typeName).then(() => {
    });
  }
  componentDidMount() {
    diva.client.applyScene("天气控制").then(() => {
    });
  }
  render() {
    const weatherArr = this.weathers.map((weather) =>
      <div key={weather.typeName} className="content" onClick={() => this.switchWeather(weather)}>
        <div className="title">{weather.title}</div>
        {/* <div className="icon">
          <img alt="天气控制" src={require(`/src/assets/icon/weather/${weather.typeName}.png`)} />
        </div> */}
      </div>
    )

    return (
      <div className="weather-main">
        <ContentBlock caption="" />
        {weatherArr}
      </div>
    )
  }
}
