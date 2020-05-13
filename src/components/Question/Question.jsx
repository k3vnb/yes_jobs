import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import './Question.css';

const Question = ({ questionObj, onSelectQuestion, highlighted }) => {
  const { question } = questionObj;
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSelectQuestion();
    }
  };
  return (
    <div
      tabIndex={0}
      role="button"
      className={
        highlighted ? 'question__container highlighted' : 'question__container'
      }
      onClick={onSelectQuestion}
      onKeyDown={handleKeyDown}
    >
      {question}
    </div>
  );
};

Question.propTypes = {
  questionObj: shape({
    question: string.isRequired,
    answer: string.isRequired,
  }).isRequired,
  onSelectQuestion: func.isRequired,
  highlighted: bool.isRequired,
};

export default Question;
