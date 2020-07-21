import React from 'react';
import './true-cuisine.scss';

import Title from '../../layout/title/title'
import Stars from '../../layout/stars/stars'
import Description from '../../layout/description/description';


const TrueCuisine = () => {
  return (

    <div className="true_cuisine">
      <div className="true_cuisine__container">
        <div className="true_cuisine__title">
          <Title slogan="Descubre la" title="true argentine cuisine"/>
        </div>

        <Stars />
        <div className="true_cuisine__description">
          <Description 
            desc="El Patio Argentine Restaurant was opened in Rockville in 2001. We are a family owned restaurant that serves traditional home-style meals from Argentina in a casual dining atmosphere. With authentic recipes from our country El Patio is like a little piece of Argentina in Rockville."
          />
        </div>
      
      <div className="true_cuisine__footer"></div>
      </div>
    </div>
  );
}

export default TrueCuisine;
