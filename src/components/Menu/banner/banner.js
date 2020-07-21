import React, { Component } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './banner.scss';

import BigTitle from '../../layout/big-title/big-title'
import Button from '../../layout/button/button'

export default class MenuBanner extends Component {

  render() {
  return (
    <header className="menu-banner">

      <div className="menu-banner__wrap">
    
        <div className="menu-banner__main">
          <div className="menu-banner__title">
            <BigTitle slogan="Delicioso sueño" title="menu"/>
          </div>
          <div className="menu-banner__buttons">
            <NavLink className="menu-banner__button" smooth to="/main#reservation"><Button button="book a table" /></NavLink>
            
            <NavLink className="menu-banner__button" smooth to="/catering#event"><Button button="make an order" /></NavLink>
          </div>

        </div>
      </div>
    </header>

  );
}
}
