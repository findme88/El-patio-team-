import React, { Component } from 'react';
import './dish-item.scss'

export default class DishItem extends Component {

    render() {

        const { dishName, dishDesc, price } = this.props;

        return (
            <li className="dish-item">
                <h4 className="dish-item__title">{dishName}</h4>
                <p className="dish-item__desc">{dishDesc}</p>
                <span className="dish-item__price">${price.regular} / ${price.large}</span>
            </li>
        );
    }
}
