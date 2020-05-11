import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { initialQuestionSet } from '../../STORE';

import rootReducer from '../root-reducer';

const initialState = {};

const middlewares = [logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
