import React, { useState } from 'react';
import { connect } from 'react-redux';
import { shape, string, func } from 'prop-types';
import { updateQuestionObj } from '../../redux/questions/questions.actions';
import './QuestionFormModal.css';

const QuestionFormModal = ({ questionObj, closeModal, updateQuestionObj }) => {
  const { question, answer } = questionObj;
  const [userAnswer, setUserAnswer] = useState(answer);
  const handleChangeText = (e) => setUserAnswer(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuestionObj({ ...questionObj, answer: userAnswer });
    closeModal();
  };
  return (
    <dialog className="question-form__modal flex-container--centered">
      <form className="question-form__form" onSubmit={handleSubmit}>
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
  updateQuestionObj: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateQuestionObj: (questionObj) => dispatch(updateQuestionObj(questionObj)),
});

export default connect(null, mapDispatchToProps)(QuestionFormModal);
