import React from 'react';

const DataRow = ({data, onDelete, onChange}) => {
  const {name, value} = data;
  return (
    <tr>
      <td><input name="name" value={name} type="text" readOnly /></td>
      <td><input name="value" value={value} type="number" min="1" onChange={onChange} /></td>
      <td><button className="btn btn-primary btn-danger btn-block" onClick={onDelete}>Delete</button></td>
    </tr>
  );
};

export default DataRow;