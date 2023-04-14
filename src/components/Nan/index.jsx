import React, { useEffect, useState, Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import './style.css';

export default class Nan extends Component {

  render() {
    return (

      <div className="ksh">
        <div className="nav-main"
          style={{
            position: 'absolute',
            top: 5,
            right: 5
          }}>
          <div className="nav-list">
            <div className="nav-item">
              <NavLink activeClassName="selected" to="/scene" className="nav-block" ><span>场景</span></NavLink>
              <NavLink activeClassName="selected" to="/weather" className="nav-block" ><span>天气</span></NavLink>
            </div>
          </div>
        </div>
        <div className="visual_right">

        </div>
      </div>

      // </div>

    )
  }
}