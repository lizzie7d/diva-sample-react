import React, { Component } from 'react';
import './index.scss';
import { diva, data } from '../../global';
import ContentBlock from '../../components/ContentBlock';
import sceneImg from '../../assets/icon/scene/scene.png';

export default class index extends Component {
  scenes = [{
    title: "测试场景01",
    index: 0,
  },
  {
    title: "测试场景02",
    index: 1,
  },

  ];

  switchScene = (scene) => {
    diva.client.applyScene(scene.index).then(() => {
      data.changeCode(`client.applyScene('${scene.title}')`);
    });
  }
  componentDidMount() {
    diva.client?.applyScene("半鸟瞰").then(() => {
      data.changeCode(`client.applyScene('半鸟瞰')`);
    });
  }
  render() {
    const scenesArr = this.scenes.map((scene) =>
      <div key={scene.index} className="content" onClick={() => this.switchScene(scene)}>
        <div className="title">{scene.title}</div>

      </div>
    )

    return (
      <div className="scene-main">
        <ContentBlock caption="" />
        {scenesArr}
      </div>
    )
  }
}
