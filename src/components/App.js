import React from 'react';
import DataTable from './DataTable';
import PieGraph from './PieGraph';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  transformData(data) {
    let chartSeries = null;
    chartSeries = data.map((k) => {
      return {
        field: k.name,
        name: k.name + ' (' + k.value + ')'
      };
    });
    return {
      data,
      chartSeries
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>React D3 Components Demo</h1>
        <div className="row">
          <div className="col-xs-6">
            <DataTable />
          </div>
          <div className="col-xs-6">
            <PieGraph graphData={this.transformData(this.props.graphData)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    graphData: state.graphData
  };
};

export default connect(mapStateToProps)(App);