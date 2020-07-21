import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import "./banner.scss";

import BigTitle from "../../layout/big-title/big-title";
import Button from "../../layout/button/button";

export default class CateringBanner extends Component {
  render() {
    return (
      <header className="catering-banner">
        <div className="catering-banner__wrap">
          <div className="catering-banner__main">
            <div className="banner__title">
              <BigTitle slogan="El Patio International" title="CATERING" />
            </div>
            <div className="catering-banner__buttons">
              <NavLink
                className="catering-banner__button"
                smooth
                to="/catering#event"
              >
                <Button button="make an order" />
              </NavLink>
              <NavLink
                className="catering-banner__button"
                smooth
                to="/menu#menu"
              >
                <Button button="discover menu" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
