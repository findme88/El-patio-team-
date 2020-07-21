import React, { Component } from 'react';
import './question.scss';

class Question extends Component {
  render() {
    const {question} = this.props
  return(
      <div className="question__wrap">
        <h2 className="question__title">{ question.title }</h2> 
        {/* <img className="question__img" src={`images/${question.image}.png`} /> */}
        <div className="question__img"></div>
        <div className="question__answer">{ question.answer }</div>
      </div>
    );
  }
}

export default Question;