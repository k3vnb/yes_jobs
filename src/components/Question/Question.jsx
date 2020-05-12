import React from 'react';
import { string } from 'prop-types';

const Question = ({ question, answer }) => {
  return <div>{question}</div>;
};

Question.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
};

export default Question;
