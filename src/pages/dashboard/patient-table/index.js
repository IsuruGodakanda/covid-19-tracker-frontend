import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import Pagination from 'Packages/Pagination';

import './index.css';
import 'react-table/react-table.css';

const PatientDataTable = (props) => {
  const { data } = props;
  return (
    <div id='resultTable' className='patientTable w-full'>
      <ReactTable
        data={data}
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

export default withRouter(PatientDataTable);
