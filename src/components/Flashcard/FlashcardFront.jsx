import React from 'react';
import { string, bool } from 'prop-types';
import './Flashcard.css';

function FlashcardFront({ question, flipY }) {
  return (
    <div
      className={
        flipY
          ? 'flashcard__content-container flex-container--centered flip-y-animation'
          : 'flashcard__content-container flex-container--centered'
      }
    >
      <h4 className="flashcard__title">{question}</h4>
    </div>
  );
}

FlashcardFront.propTypes = {
  question: string,
  flipY: bool.isRequired,
};

FlashcardFront.defaultProps = {
  question: '',
};

export default FlashcardFront;
