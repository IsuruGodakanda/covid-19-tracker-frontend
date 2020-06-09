import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PatientDataTable from './patient-table';
import MainCard from 'Packages/main-card';
import { getPatients } from 'Actions/patientActions';

const Dashboard = ({ getPatients, patient: { patients } }) => {
  const history = useHistory();

  React.useEffect(() => {
    getPatients();
  }, [getPatients]);

  return (
    <MainCard>
      <div className='container mx-auto pt-4'>
        <h4>Patient List</h4>
        <div id='results' className='mt-4'>
          <div className='flex items-end pb-2'>
            <div className='flex-none'>Patient Results</div>
            <div className='flex-1 text-right'>
              <button
                onClick={() => {
                  history.push('/addPayment');
                }}
                className='text-black font-bold md:text-lg lg:text-lg bg-ezit-btn-secondary hover:bg-ezit-btn-secondary-hover focus:outline-none focus:shadow-outline px-4 py-2 rounded-full w-36'
              >
                Add New
              </button>
            </div>
          </div>
          <div className='float-none'>
            <PatientDataTable data={patients} />
          </div>
        </div>
      </div>
    </MainCard>
  );
};

Dashboard.propTypes = {
  getPatients: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  patient: state.patient
});

export default connect(mapStateToProps, { getPatients })(Dashboard);
