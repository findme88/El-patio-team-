import React from 'react';
import './wines-slider.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WinesSlide from './WinesSlide/wines-slide';

export default function WinesSlider ({wines}) {
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

      const winesElements = wines.map(item =>
          <li className="wines__image" key = {item.id}>
            <WinesSlide item={item} />
          </li>
        )
      return(
        <ul className="wines__list">
          <Slider {...settings}>
            {winesElements}
          </Slider>
        </ul>
        );
}