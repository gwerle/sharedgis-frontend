import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
}

export const store = configureStore();
