import {combineReducers} from 'redux';
import actionTypes from '../actions/actionTypes';

const initState = {
  graphData: []
};

const rootReducer = combineReducers({
  graphData: (state = initState, action) => {
    switch(action.type) {
      case actionTypes.ADD_TABLE_ROW:
        return [
          ...state,
          Object.assign({}, action.data)
        ];
      default:
        return state.graphData;
    }
  }
});

export default rootReducer;