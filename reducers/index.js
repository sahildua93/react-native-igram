import { combineReducers } from 'redux';
import  common from './common.reducer';
import authentication from './user.reducer';
import dashboard from './dashboard.reducer';

const rootReducer = combineReducers({
  common,
  authentication,
  dashboard,
});

export default rootReducer;
