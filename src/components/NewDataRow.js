import React from 'react';

const NewDataRow = ({newRow, onChange, onSave}) => {
  return (
    <tr>
      <td><input name="name" value={newRow.name} type="text" onChange={onChange} /></td>
      <td><input name="value" value={newRow.value} type="number" min="0" onChange={onChange} /></td>
      <td><button className="btn btn-primary btn-block" onClick={onSave}>Add</button></td>
    </tr>
  );
};

export default NewDataRow;