import { QuestionActionTypes } from './questions.types';
import { initialQuestionSet } from '../../STORE';

const INITIAL_STATE = initialQuestionSet;

const questionReducer = (state = INITIAL_STATE, action) => {
  const { UPDATE_QUESTION_ANSWER } = QuestionActionTypes;
  switch (action.type) {
    case UPDATE_QUESTION_ANSWER:
      alert(action.payload.answer);
      return [
        ...state.filter(({ id }) => action.payload.id !== id),
        action.payload,
      ];
    default:
      return state;
  }
};

export default questionReducer;
