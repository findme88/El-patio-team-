import React from 'react'
import Question from './question'

export default function QuestionList({questions}) {
      const questionElements = questions.map(question =>
          <li className="question" key = {question.id}><Question question = {question}/></li>
        )
      return(
          <ul className="faq__questions">
            {questionElements}
          </ul>
        );
}