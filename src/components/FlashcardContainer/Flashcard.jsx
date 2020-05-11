import React, { useState } from 'react';
import { initialQuestionSet } from '../../STORE';
import FlashCardFront from './FlashcardFront';
import FlashCardBack from './FlashcardBack';
import Timer from '../Timer/Timer';
import './Flashcard.css';

const Flashcard = () => {
  const randomQuestionIndex = () =>
    Math.ceil(Math.random() * initialQuestionSet.length) - 1;
  const [answerIsShown, setAnswerIsShown] = useState(false);
  const [flipXAnimation, setFlipXAnimation] = useState(false);
  const [flipYAnimation, setFlipYAnimation] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(
    randomQuestionIndex()
  );
  const removeAnimation = (callback) => setTimeout(() => callback(false), 500);
  const toggleAnswerIsShown = () => {
    setFlipXAnimation(true);
    removeAnimation(setFlipXAnimation);
    setAnswerIsShown(!answerIsShown);
  };
  const handleNextQuestion = () => {
    setAnswerIsShown(false);
    setFlipYAnimation(true);
    removeAnimation(setFlipYAnimation);
    setCurrentQuestionNumber(randomQuestionIndex());
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleAnswerIsShown();
    }
  };
  const { question, answer, type } = initialQuestionSet[currentQuestionNumber];
  return (
    <section>
      <div className="flashcard__timer">
        <Timer currentQuestionNumber={currentQuestionNumber} />
      </div>
      <div
        role="button"
        ariaPressed={answerIsShown}
        className={flipXAnimation ? 'flashcard flip-x-animation' : 'flashcard'}
        onClick={toggleAnswerIsShown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="flashcard__flip-instruction">
          <p className="flashcard__flip-instruction--outer">
            Click anywhere to&nbsp;
            <span className="flashcard__flip-instruction--inner">
              flip&nbsp;
            </span>
            the card.
          </p>
        </div>
        {answerIsShown ? (
          <FlashCardBack question={question} answer={answer} type={type} />
        ) : (
          <FlashCardFront question={question} flipY={flipYAnimation} />
        )}
      </div>
      <button type="button" onClick={handleNextQuestion}>
        Next Question
      </button>
    </section>
  );
};

export default Flashcard;
