import React from 'react';

const DataRow = ({data}) => {
  const {name, value} = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{' '}</td>
    </tr>
  );
};

export default DataRow;