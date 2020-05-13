import React, { useState } from 'react';
import { shape, string, func } from 'prop-types';
import './QuestionFormModal.css';

const QuestionFormModal = ({ questionObj, closeModal }) => {
  const { question, answer } = questionObj;
  const [userAnswer, setUserAnswer] = useState(answer);
  const handleChangeText = (e) => setUserAnswer(e.target.value);
  return (
    <dialog className="question-form__modal flex-container--centered">
      <form className="question-form__form">
        <button
          type="button"
          className="question-form__btn question-form__btn--cancel"
          onClick={closeModal}
        >
          Cancel
        </button>
        <h4>{question}</h4>
        <label htmlFor="answer">
          Your Answer:
          <textarea value={userAnswer} onChange={handleChangeText} />
        </label>
        <button
          type="submit"
          className="question-form__btn question-form__btn--submit"
        >
          Save
        </button>
      </form>
    </dialog>
  );
};

QuestionFormModal.propTypes = {
  questionObj: shape({
    question: string.isRequired,
    answer: string.isRequired,
    type: string.isRequired,
  }).isRequired,
  closeModal: func.isRequired,
};

export default QuestionFormModal;
