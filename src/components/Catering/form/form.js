import React from 'react';
import './form.scss';

import Title from '../../layout/title/title';
import Button from '../../layout/button/button';

const Form = () => {
  return (
    <div className="form">
      <div className="form__title">
          <Title slogan="¡Solo pregunta!" title="Still have a question?"/>
      </div>

      <form action="#" className="form__form">
        <div className="form__contacts">
          <input className="form__name" placeholder="Name" type="text"></input>
          <input className="form__email" placeholder="Email" type="text"></input>
        </div>
        <input className="form__text" placeholder="Just Ask!" type="text"></input>
        <div className="form__button"><Button button="Send" /></div>
      </form>
    </div>
  )
};

export default Form;