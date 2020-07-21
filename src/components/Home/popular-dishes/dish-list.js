import React from 'react';
import Dish from './dish/dish';

export default function DishList ({dishes}) {

      const dishesElements = dishes.filter(dish => {if (dish.popularDishes === true) return dish})
      .filter(el => {if (el.dishFor.toLocaleLowerCase() === "lunch"){return el}})
      .map(dishes => 
      <Dish key={dishes.id} dishes={dishes} />)

      return(
        <ul className="dishes__list row">
            {dishesElements}
        </ul>
        );
}

