import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import Pagination from './pagination';

import './datatable.css';
import 'react-table/react-table.css';

class PatientDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  render = () => {
    return (
      <div id='resultTable' className='agencyTable w-full'>
        <ReactTable
          data={this.props.data}
          noDataText='No Available Data'
          defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: 'Name',
              id: 'name',
              maxWidth: 200,
              accessor: (d) => d.name
            },
            {
              Header: 'Address',
              id: 'address',
              maxWidth: 200,
              accessor: (d) => d.address
            }
          ]}
          defaultPageSize={100}
          style={{
            height: '400px'
          }}
          className='-striped -highlight'
          PaginationComponent={Pagination}
        />
      </div>
    );
  };
}

export default withRouter(PatientDataTable);
