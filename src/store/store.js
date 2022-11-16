import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import story from './reducers/storiesReducer'
import comment from './reducers/commentReducer'
import ReduxThunk from 'redux-thunk'

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
};

const store = createStore(
  combineReducers({story, comment}),
  compose(applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store
