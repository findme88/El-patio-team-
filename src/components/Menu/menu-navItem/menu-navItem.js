import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class MenuNavItem extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="menu-nav__item">
        <NavLink  activeStyle={{ color: '#F8AB11' }} to={url} >
        {itemName}
        </NavLink><span>/</span>
      </li>
    );
  }
}