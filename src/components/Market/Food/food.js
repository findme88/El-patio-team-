import React from 'react';
import './food.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import market from './FoodSlider/food-images';
import FoodSlider from './FoodSlider/food-slider';

import Title from '../../layout/title/title';
import Description from '../../layout/description/description';
import Stars from '../../layout/stars/stars';
import Footer from "../../footer/footer";

function Food() {
  return(
      <section className="market__food food" id="food">
        <div className="market-frame"></div>
        <div className="food__content">
          <div className="food__title">
          <Title slogan="Nuestro mercado" title="El Patio market" />
          </div>
          <Stars />
          <Description desc="El Patio offers a wide range of gourmet products from Argentina, Uruguay and Paraguay for you to take home. Our great selection includes some of the most respected brands of argentine classics like Dulce de Leche, Dulce de Batata (sweet potato jam), Dulce de Membrillo (quince jam), Chorizos, Morcillas, Sal Parrillera, empanadas and quiche dough, Chimichurri, Alfajores,Yerba Mate, traditional teas and much more." 
          />
          <br />
          <Description desc="With our great variety of products, you can now share with your family and friends a genuine piece of Argentina. Try some of the finest dulce de leche in the world or experience the popularity of yerba mate. You can also find the traditional mates (goure), bombillas (straws) and thermos for your mate needs. " 
          />
          <FoodSlider market={market} />
          </div>
          <Footer/>
      </section>
  )
}

export default Food;