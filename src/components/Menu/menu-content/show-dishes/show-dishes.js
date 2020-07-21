import React, { Component } from 'react';
import './show-dishes.scss'

import dishes from '../../../Home/popular-dishes/dish/menu-servise';
import DishItem from './dish-item/dish-item';

export default class ShowDishes extends Component {
    showDishes = () => {
        const { menu, filter } = this.props;
        let arr = [];
        // console.log(dishes.length);

        for (let i = 0; i < dishes.length; i++) {
            let dish = dishes[i];
            if (dish.dishFor === menu)
                if (dish.dishType === filter || filter === '')
                    arr.push(
                        <DishItem dishName={dish.dishName} dishDesc={dish.dishDesc} price={dish.price} />
                    );
        }

        return arr;
    }

    render() {

        const { menu, filter } = this.props;
        console.log(menu, filter)

        return (
            <div className="show-dishes__container">
                <ul className="show-dishes__list">
                    <span className="show-dishes__prices">Regular / Large</span>
                    {this.showDishes()}
                </ul>
            </div>
        );
    }
}
