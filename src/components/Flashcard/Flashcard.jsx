import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { shape, string, arrayOf } from 'prop-types';
import FlashCardFront from './FlashcardFront';
import FlashCardBack from './FlashcardBack';
import QuestionFormModal from '../QuestionFormModal/QuestionFormModal';
import Timer from '../Timer/Timer';
import './Flashcard.css';

const Flashcard = ({ questionSet }) => {
  const randomQuestionIndex = useCallback(
    () => Math.ceil(Math.random() * questionSet.length) - 1,
    [questionSet.length]
  );
  const [answerIsShown, setAnswerIsShown] = useState(false);
  const [preserveCurrentQuestionId, setPreserveCurrentQuestionId] = useState(
    ''
  );
  const [flipXAnimation, setFlipXAnimation] = useState(false);
  const [flipYAnimation, setFlipYAnimation] = useState(false);
  const [showQuestionFormModal, setShowQuestionFormModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  useEffect(() => {
    if (preserveCurrentQuestionId) {
      const [updatedQuestion] = questionSet.filter(
        ({ id }) => id === preserveCurrentQuestionId
      );
      return setCurrentQuestion(updatedQuestion);
    }
    return setCurrentQuestion(questionSet[randomQuestionIndex()]);
  }, [questionSet, randomQuestionIndex, preserveCurrentQuestionId]);
  const removeAnimation = (callback) => setTimeout(() => callback(false), 500);
  const toggleShowQuestionFormModal = () => {
    setShowQuestionFormModal(!showQuestionFormModal);
    setPreserveCurrentQuestionId(currentQuestion.id);
  };
  const toggleAnswerIsShown = () => {
    setFlipXAnimation(true);
    removeAnimation(setFlipXAnimation);
    setAnswerIsShown(!answerIsShown);
  };
  const handleNextQuestion = () => {
    setAnswerIsShown(false);
    setFlipYAnimation(true);
    removeAnimation(setFlipYAnimation);
    setCurrentQuestion(questionSet[randomQuestionIndex()]);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleAnswerIsShown();
    }
  };
  const { question, answer, type } = currentQuestion;
  return (
    <section>
      <div className="flashcard__timer">
        <Timer currentQuestion={currentQuestion} />
      </div>
      <div className="flashcard__add-edit-btn">
        <button type="button" onClick={toggleShowQuestionFormModal}>
          {answer ? 'Edit Answer' : 'Add Answer'}
        </button>
      </div>
      <div
        role="button"
        aria-pressed={answerIsShown}
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
      {showQuestionFormModal && (
        <QuestionFormModal
          questionObj={currentQuestion}
          closeModal={toggleShowQuestionFormModal}
        />
      )}
    </section>
  );
};

Flashcard.propTypes = {
  questionSet: arrayOf(
    shape({
      id: string.isRequired,
      question: string.isRequired,
      answer: string.isRequired,
      type: string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = ({ questionSet }) => ({
  questionSet,
});

export default connect(mapStateToProps)(Flashcard);
