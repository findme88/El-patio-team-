import React from 'react';
import './food-slider.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FoodSlide from './FoodSlide/food-slide';

export default function FoodSlider ({market}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
  }

      const marketElements = market.map(item =>
          <li className="food__image" key = {item.id}>
            <FoodSlide item={item} />
          </li>
        )
      return(
        <ul className="food__list">
          <Slider {...settings}>
            {marketElements}
          </Slider>
        </ul>
        );
}