import React from 'react';

const NewDataRow = ({newRow, onChange, onSave}) => {
  return (
    <tr>
      <td><input name="name" value={newRow.name} onChange={onChange} /></td>
      <td><input name="value" value={newRow.value} onChange={onChange} /></td>
      <td><button className="btn btn-primary" onClick={onSave}>Add</button></td>
    </tr>
  );
};

export default NewDataRow;