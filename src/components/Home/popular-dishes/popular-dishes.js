import React from 'react';
import './popular-dishes.scss';
import { NavHashLink as NavLink } from "react-router-hash-link";

import DishList from './dish-list';
import dishes from './dish/menu-servise';

import Title from '../../layout/title/title'
import Button from '../../layout/button/button'
import Stars from '../../layout/stars/stars'
import Dish from './dish/dish'

function PopularDishes() {
  return (
    <div> 
      <section className="popular-dishes" id="popular-dishes">
        <div>
          <Title slogan="Prueba nuestros" title="popular dishes"/>
          <Stars />
        </div>
        <div className="popular-dishes__menu">
          <div className="fork"></div>
          <div className="knife"></div>
          <div className="dishes">
            <DishList dishes={dishes} />
          </div>

        </div>
        <NavLink className="popular-dishes__button" smooth to="/menu#menu"><Button button="open the full menu" /> </NavLink>
      </section>
    </div>  
  );
}

export default PopularDishes;
