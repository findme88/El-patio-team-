import React, { Component } from "react";
import DishesListItem from './dishes-list-item/dishes-list-item'
import './dishes-list.scss'
import dishes from '../../../Home/popular-dishes/dish/menu-servise'

export default class DishesList extends Component {
  render() {
    return (

      <div className="col-5">
        <h2>Title</h2>
        <ul>
          {dishes.filter((item) => {
            if (window.location.toString().includes(item.url)) {
              return item
            }
          }).map((el) => {
            return <DishesListItem name={el.dishName} desc={el.dishDesc} price={el.price.regular} large={el.price.large} />
          })}
        </ul>
      </div>
    )
  }
}