import React, { Component } from "react";
import MenuNavItem from '../menu-navItem/menu-navItem'
import './menu-nav.scss'

export default class MenuNav extends Component {
  menuItems = [
    { name: "lunch", url: "/menu/lunch", id: 1 },
    { name: "dinner", url: "/menu/dinner", id: 2 },
    { name: "wine list", url: "/menu/wine", id: 3 }
  ]

  render() {
    return(
      <div className="menu-nav">
        <ul className="menu-nav__list">
          {this.menuItems.map((item) => {
            return (
              <MenuNavItem itemName={item.name} url={item.url} key={item.id}/>
            )
          })}
        </ul>
      </div>
    )
  }
}