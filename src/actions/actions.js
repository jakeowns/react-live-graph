import actions from './actionTypes';

export const addRow = (data) => {
  return {
    type: actions.ADD_TABLE_ROW,
    data
  };
};