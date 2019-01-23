import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware];

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  )
);

export default configureStore;

