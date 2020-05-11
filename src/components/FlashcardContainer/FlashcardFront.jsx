import React from 'react';
import { string, bool } from 'prop-types';
import './Flashcard.css';

function FlashcardFront({ question, flipY }) {
  return (
    <div
      className={
        flipY ? 'flashcard__title flip-y-animation' : 'flashcard__title'
      }
    >
      {question}
    </div>
  );
}

FlashcardFront.propTypes = {
  question: string.isRequired,
  flipY: bool.isRequired,
};

export default FlashcardFront;
