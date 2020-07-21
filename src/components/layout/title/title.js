import React from 'react';
import './title.scss'

const Title = ({ slogan, title }) => {
    
  return (
    <div className="title">
      <h3 className="title__slogan">{ slogan }</h3>
      <h2 className="title__name">{ title }</h2>
    </div>
  );
}

export default Title;
