import React, { useState } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';
import QuestionFormModal from '../QuestionFormModal/QuestionFormModal';
import Question from '../Question/Question';
import './QuestionList.css';

const QuestionList = ({ questionSet }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState('0');
  const [showQuestionFormModal, setShowQuestionFormModal] = useState(false);
  const handleSelectQuestion = (id) => setSelectedQuestionId(id);
  const toggleShowQuestionFormModal = () =>
    setShowQuestionFormModal(!showQuestionFormModal);
  const [selectedQuestion] = questionSet.filter(
    ({ id }) => id === selectedQuestionId
  );
  const { answer } = selectedQuestion;
  const questionList = questionSet.map((questionObj) => (
    <Question
      key={questionObj.id}
      questionObj={questionObj}
      highlighted={questionObj.id === selectedQuestionId}
      onSelectQuestion={() => handleSelectQuestion(questionObj.id)}
    />
  ));
  return (
    <section className="question-list__main-container">
      <div className="question-list__container">{questionList}</div>
      <div className="answer-list__container">
        {answer || 'You have not answered this question'}
        <button type="button" onClick={toggleShowQuestionFormModal}>
          {answer ? 'Edit Answer' : 'Add Answer'}
        </button>
      </div>
      {showQuestionFormModal && (
        <QuestionFormModal
          questionObj={selectedQuestion}
          closeModal={toggleShowQuestionFormModal}
        />
      )}
    </section>
  );
};

QuestionList.propTypes = {
  questionSet: arrayOf(
    shape({
      id: string.isRequired,
      question: string.isRequired,
      answer: string.isRequired,
      type: string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = ({ questionSet }) => ({ questionSet });

export default connect(mapStateToProps)(QuestionList);
