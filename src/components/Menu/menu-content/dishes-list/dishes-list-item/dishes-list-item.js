import React, { Component } from "react";

export default class DishesListItem extends Component {
  render() {
    const {name} = this.props
    return(
      <li>
        <div>
    <h3>{name}</h3>
          <p></p>
        </div>
        <div>
          <p>Regular</p>
          <p>/  Large</p>
        </div>
      </li>
    )
  }
}