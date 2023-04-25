import { Emissive, Marker, Model, POI, POIIcon } from '@sheencity/diva-sdk';
import { deg2rad, Euler, Quaternion, Vector3 } from '@sheencity/diva-sdk-math';
import { Component } from 'react';
import deleteImg from '../../assets/icon/overlay/delete.png';
import ContentBlock from '../../components/ContentBlock';
import DropDown from '../../components/DropDown';
import InputNumber from '../../components/InputNumber';
import { data, diva } from '../../global';
import {
  EmissionType,
  EmissiveOverlay,
  MarkerOverlay,
  OverlayType,
  POIOverlay
} from '../../models/overlay.model';
import { LocalStorageService } from "../../services/localStorage.service";
import './index.scss';
import { Button } from 'antd';

export default class index extends Component {

  state = {
    corrdinateX: -133464.40625,
    corrdinateY: 12815.23046875,
    corrdinateZ: 3069.65625,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    selectedType: {
      value: OverlayType.POI,
      placeholder: 'POI',
    },
    content: "",
    title: "",
    color: "#ff0000",
    borderColor: "#ffffff",
    scale: 1.0,
    opacity: 1.0,
    border: 0.0,
    selectedId: null,
    emission: 1.0,
    speed: 2.0,
    typeOptions: [],
    alignOptions: [],
    emissiveOptions: [],
    iconOptions: [],
    overlays: []
  }

  async componentDidMount() {
    this.setState({
      overlays: this.store.getAllOverlays()
    })
    await diva.client.applyScene('覆盖物');

    if (this.state.overlays.length > 0) {
      this.state.overlays.map(async (overlay) => {
        const entity = await diva.client.getEntityById(overlay.id);
        entity.setVisibility(true);
      });
    }
    console.log(this.state.overlays, 'overlays');

  }
  // client.request("CreateEntity", {
  //   group: "/覆盖物/三维图片",
  //   rotation: [0,0,0],
  //   scale: [1,1,1],
  //   property:{
  //     color: [255,255,255]
  //     emissive: 1,
  //     opacity: 1,
  //     url: file://路径/道路交通-标签.png,
  //   }
  // });
  render() {
    const overlayArr = this.state.overlays.map((overlay) =>
      <div key={overlay.id} className="overlay-list" >
        <div className={['overlay-item', this.state.selectedId === overlay.id ? 'selected' : null].join(' ')} >
        </div>
      </div>
    )
    return (
      <div className="overlay-main">
        <div style={{ marginTop: '20px' }}>
          {overlayArr}
        </div>
        <Button onClick={() => console.log(1, this.state.overlays)}>123123</Button>

      </div >
    )
  }
}
