import React, { Component } from "react";
import "./banner.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";

import BigTitle from "../../layout/big-title/big-title";
import Button from "../../layout/button/button";

export default class Banner extends Component {
  render() {
    return (
      <header className="banner">
        <div className="banner__wrap">
          <div className="banner__main">
            <div className="banner__title">
              <BigTitle slogan="Bienvenido a" title="El Patio International" />
            </div>
            <div className="banner__buttons">
              <NavLink className="banner__button" smooth to="/main#reservation">
                <Button button="book a table" />
              </NavLink>
              <NavLink className="banner__button" smooth to="/menu#menu">
                <Button button="discover menu" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

// export default Banner;
