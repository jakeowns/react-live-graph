import React from 'react';
import {PieChart} from 'react-d3-basic';

const PieGraph = (props) => {
  const options = Object.assign({
      width: 400,
      height: 400,
      xScale: 'ordinal',
      value: d => d.value,
      name: d => d.name
    },
    props.graphData
  );
  return (
    <PieChart {...options} />
  );
};

export default PieGraph;