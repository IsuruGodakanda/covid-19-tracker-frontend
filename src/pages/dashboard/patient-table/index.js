import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import Pagination from 'Packages/Pagination';
import DistrictList from 'Lists/districts';

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
            Header: 'Age',
            id: 'age',
            maxWidth: 200,
            accessor: (d) => d.age
          },
          {
            Header: 'Address',
            id: 'address',
            maxWidth: 200,
            accessor: (d) => d.address
          },
          {
            Header: 'District',
            id: 'district',
            maxWidth: 200,
            accessor: (d) => d.district
          },
          {
            Header: 'Medical History',
            id: 'medical_history',
            maxWidth: 200,
            accessor: (d) => d.medical_history
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
