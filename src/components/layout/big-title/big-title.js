import React from 'react';
import './big-title.scss'

const BigTitle = ({ slogan, title }) => {
    
  return (
    <div className="big-title">
      <h3 className="big-title__slogan">{ slogan }</h3>
      <h2 className="big-title__name">{ title }</h2>
    </div>
  );
}

export default BigTitle;
