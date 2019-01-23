import { combineReducers } from 'redux';
import  common from './common.reducer';
import authentication from './user.reducer';

const rootReducer = combineReducers({
  common,
  authentication,
});

export default rootReducer;
