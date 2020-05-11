import React from 'react';
import { string } from 'prop-types';
import './Flashcard.css';

function FlashcardBack({ question, answer, type }) {
  return (
    <div className="flashcard__content-container">
      <h4 className="flashcard__title">{question}</h4>
      <div className="flashcard-back__answer-section">
        <div className="flashcard-back__answer-section--left">
          {answer || 'You have not answered this question'}
        </div>
        <div className="flashcard-back__answer-section--right">Hey Hi</div>
      </div>
    </div>
  );
}

FlashcardBack.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
};

export default FlashcardBack;
