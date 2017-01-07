import {createStore, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers';

const enhancer = persistState();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}