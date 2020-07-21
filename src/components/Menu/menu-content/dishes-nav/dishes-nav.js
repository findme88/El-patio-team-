import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './dishes-nav.scss'
import menuNavItems from '../../menu-links'


export default class DishesNav extends Component {

  render() {
    return (
      <div className='col-3 dises-nav'>
        <ul className='dises-nav__list'>
          {menuNavItems.filter((item) => {
            if (window.location.toString().includes(item.url)) {
              return item
            }
          }).map((elem) => {
            return (
              <NavLink className="dises-nav__item" activeStyle={{ color: '#F8AB11' }} to={elem.newUrl} key={elem.id} >
                {elem.name}
              </NavLink>
            )
          })}
        </ul>
      </div>

    )

  }
}