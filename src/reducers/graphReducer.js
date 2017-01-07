import actionTypes from '../actions/actionTypes';

const initState = [];
const graphData = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TABLE_ROW:
      return [
        ...state,
        Object.assign({}, action.data)
      ];
    default:
      return state;
  }
}
export default graphData;