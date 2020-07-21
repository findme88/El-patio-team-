import React from 'react';
import './por-que.scss';

import Title from '../../layout/title/title'
import Stars from '../../layout/stars/stars'
import Description from '../../layout/description/description';


const PorQue = () => {
  return (

    <div className="por-que">
      <div className="por-que__container">
        <div className="por-que__title">
          <Title slogan="Por qué" title="el patio international"/>
        </div>

        <Stars />
        <div className="por-que__description">
          <Description 
            desc="With over 11 years of experience, we offer a great variety of choices bringing you the best taste of Latin-American cuisine in  the Washington Metropolitan area."
            />
          <br></br>
          <Description 
            desc="We offer Corporate Lunches, Buffets, Great Vegetarian Options, Hors D'oeuvres, Desserts, Rentals"
          />
        </div>
      
      <div className="por-que__footer"></div>
      </div>
    </div>
  );
}

export default PorQue;