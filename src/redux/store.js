import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
