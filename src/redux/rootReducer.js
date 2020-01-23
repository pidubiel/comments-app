import { combineReducers } from 'redux';
import commentsReducer from './comments/commentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
