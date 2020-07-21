import React from 'react';
import './stars.scss';
import star from '../stars/images/Star.png';


function Stars() {
    
  return (
    <div className="stars">
      <img src={star} alt="star" className="stars__item" />
      <img src={star} alt="star" className="stars__item" />
      <img src={star} alt="star" className="stars__item" />
      <img src={star} alt="star" className="stars__item" />
      <img src={star} alt="star" className="stars__item" />
    </div>
  );
}

export default Stars;
