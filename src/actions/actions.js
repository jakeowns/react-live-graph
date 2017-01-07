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
  console.log('=='+ actions.UPDATE_TABLE_ROW +'==');
  console.log(data);
  return {
    type: actions.UPDATE_TABLE_ROW,
    data
  };
};