import React from 'react';
import { string } from 'prop-types';
import './Flashcard.css';

function FlashcardBack({ question, answer, type }) {
  return (
    <>
      <div>{question}</div>
      <div>{answer ? answer : 'You have not answered this question'}</div>
    </>
  );
}

FlashcardBack.propTypes = {
  question: string.isRequired,
  answer: string.isRequired,
};

export default FlashcardBack;
