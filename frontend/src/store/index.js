import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import sessionReducer from './session';
import spotsReducer from './allSpots';
import spotReducer from './spot';
import userReducer from './user';
import reviewReducer from './reviews';


const rootReducer = combineReducers({
session: sessionReducer,
allSpots: spotsReducer,
spot: spotReducer,
user: userReducer,
review: reviewReducer
});

let enhancer;


if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;