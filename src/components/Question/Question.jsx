import React from 'react';
import { shape, string } from 'prop-types';
import './Question.css';

const Question = ({ questionObj }) => {
  const { question } = questionObj;
  return <div className="question__container">{question}</div>;
};

Question.propTypes = {
  questionObj: shape({
    question: string.isRequired,
    answer: string.isRequired,
  }).isRequired,
};

export default Question;
