import React from 'react';
import DataRow from './DataRow';
import NewDataRow from './NewDataRow';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class DataTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newRow: {
        name: '',
        value: ''
      }
    };
    this.onUpdateRow = this.onUpdateRow.bind(this);
    this.onSaveRow = this.onSaveRow.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
    this.onDataRowChange = this.onDataRowChange.bind(this);
  }
  onUpdateRow(event) {
    const field = event.target.name;
    let newRow = this.state.newRow;
    newRow[field] = event.target.value;
    return this.setState({newRow});
  }
  onDataRowChange(event, data) {
    const name = data.name;
    const value = event.target.value;
    this.props.actions.updateRow({name, value});
  }
  onSaveRow(event) {
    event.preventDefault();
    const newRow = this.state.newRow;
    if (newRow.name.trim().length === 0 || newRow.value <= 0) return;
    this.props.actions.addRow(Object.assign({}, this.state.newRow));
    this.setState({
      newRow: {
        name: '',
        value: ''
      }
    });
  }
  onDeleteRow(event, data) {
    event.preventDefault();
    this.props.actions.deleteRow(Object.assign({}, data))
  }
  render() {
    const {graphData} = this.props;
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {graphData.map((val) => <DataRow key={val.name+'-'+val.value} data={val} onDelete={e => this.onDeleteRow(e, val)} onChange={e => this.onDataRowChange(e, val)}/>)}
            <NewDataRow
              newRow={this.state.newRow}
              onChange={this.onUpdateRow}
              onSave={this.onSaveRow}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    graphData: state.graphData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);