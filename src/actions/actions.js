import actions from './actionTypes';

export const addRow = (data) => {
  return {
    type: actions.ADD_TABLE_ROW,
    data
  };
};
export const deleteRow = (data) => {
  return {
    type: actions.DELETE_TABLE_ROW,
    data
  };
};
export const updateRow = (data) => {
  return {
    type: actions.UPDATE_TABLE_ROW,
    data
  };
};