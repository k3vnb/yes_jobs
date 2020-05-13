import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import questionReducer from './questions/questions.reducer';

export default combineReducers({
  user: userReducer,
  questionSet: questionReducer,
});
