import {combineReducers} from 'redux';
import actionTypes from '../actions/actionTypes';
import graphData from './graphReducer';

export const initState = {
  graphData: []
};

const rootReducer = combineReducers({
  graphData
});

export default rootReducer;