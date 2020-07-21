import React from 'react';
import Bake from '../Bake/bake';
import './bakery-list.scss';

export default function BakeryList ({baking}) {

      const bakeryElements = baking.map(bakery =>
          <li className="bakery__block" key = {bakery.id}><Bake bakery = {bakery}/></li>
        )
      return(
        <ul className="bakery__list container">
            {bakeryElements}
        </ul>
        );
}