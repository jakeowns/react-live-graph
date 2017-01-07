import actionTypes from '../actions/actionTypes';

const initState = [];
const graphData = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TABLE_ROW:
      if (state.filter(v => v.name === action.data.name).length) return state;
      return [
        ...state,
        Object.assign({}, action.data)
      ];
    case actionTypes.DELETE_TABLE_ROW:
      return state.filter((v) => v.name !== action.data.name);
    case actionTypes.UPDATE_TABLE_ROW:
      return [ ...state ].map(v => {
        if (v.name === action.data.name) return Object.assign({}, action.data);
        return v;
      });
    default:
      return state;
  }
}
export default graphData;