import React from 'react';
import './faq.scss';
import QuestionList from './questionList'

import questions from './questions';

function FAQ() {
  return (
    <div className="faq">
      <h2 className="faq__title">Q&A</h2>
      <div><QuestionList questions={questions}/></div>
    </div>
  );
}

export default FAQ;