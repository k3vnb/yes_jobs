import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';
import Question from '../Question/Question';
import './QuestionList.css';

const QuestionList = ({ questionSet }) => {
  const questionList = questionSet.map((questionObj) => (
    <Question key={questionObj.id} questionObj={questionObj} />
  ));
  return <div className="question-list__container">{questionList}</div>;
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
