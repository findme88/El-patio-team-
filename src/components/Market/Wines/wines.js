import React from 'react';
import './wines.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wines from './WinesSlider/wine-images';
import WinesSlider from './WinesSlider/wines-slider';

import Title from '../../layout/title/title';
import Description from '../../layout/description/description';
import Stars from '../../layout/stars/stars';
import Footer from "../../footer/footer";

function Wines() {
  return(
      <section className="market__wines wines" id="wines">
        <div className="market-frame"></div>
        <div className="wines__content">
          <div className="wines__title">
          <Title slogan="Nuestros vinos" title="El Patio wines" />
          </div>
          <Stars />
          <Description desc="We offer the biggest selection of argentine wines to go in the metropolitan area. We sell over 80 different brands of South American wine so you can always find a wine that matches your taste, occasion, and budget.<br></br>
            Argentina's industry produces great wine from a big variety of grapes, but its truly identity comes from Malbec and Torrontes, they are the wonderful result of Argentina's diverse landscapes, great soil and natural richness." 
          />
          <WinesSlider wines={wines} />
        </div>
          <Footer/>
        
        
      </section>
  )
}

export default Wines;