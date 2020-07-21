import React, { Component } from "react";
import NavItem from "./nav-item/nav-item";
import './navigation.scss';

export default class Navigation extends Component {

  menu = [
    { name: "restaurant", url: "/main", id: 1 },
    { name: "menu", url: "/menu", id: 2 },
    { name: "bakery", url: "/bakery", id: 3 },
    { name: "catering", url: "/catering", id: 4 },
    { name: "market&wines", url: "/market", id: 5 },
    { name: "contact", url: "/contact", id: 6 },
  ];
  render() {
    return (
      <div className="burger">
        <input type="checkbox" id="menu1" className="navigation__input"/>
       <label for="menu1" className="navigation__menu">
        <i className="burger-menu"><span></span></i>
       </label>
      
        <ul className="navmenu">
          {this.menu.map((item) => {
            return (
              <NavItem itemName={item.name} url={item.url} key={item.id} />
            );
          })}
        </ul>
      </div>
      
    );
  }
}
