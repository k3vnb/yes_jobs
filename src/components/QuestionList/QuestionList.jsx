import React from 'react';
import Question from '../Question/Question';
import { initialQuestionSet } from '../../STORE';

const QuestionList = () => {
  const questionList = initialQuestionSet.map(({ question }) => (
    <Question key={question} question={question} />
  ));
  return <div>{questionList}</div>;
};

export default QuestionList;
