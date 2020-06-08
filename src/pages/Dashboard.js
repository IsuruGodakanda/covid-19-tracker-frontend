import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from 'Common/Spinner';

import PatientDataTable from 'Components/dashboard/patient-data-table';
import { setPageNumber } from 'Actions/globalActions';
import { authUtil } from 'Utils/AuthUtil';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableName: 'Patient Results',
      loading: true,
      data: [],
      errors: [],
      datatable: null
    };
  }

  componentDidMount = async () => {
    this.submit();

    await this.setState({ loading: false });
  };

  submit = async () => {
    this.props.setPageNumber(0);

    let result;

    result = await authUtil('getData', null, `/all`);

    if (result.status === 200) {
      this.setState({ data: result.data });
    } else {
      this.setState({ data: [] });
      console.log('Retrieve Fail');
    }

    this.loadTable(this.state.data);
  };

  loadTable = async (data = []) => {
    this.setState({ datatable: <PatientDataTable data={data} /> });
  };

  render = () => {
    let content;

    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <div className='container mx-auto px-8 pb-4 lg:px-24 lg:pb-8'>
          <h4>Patient Onboarding</h4>
          <div id='results' className='mt-4'>
            <div className='flex items-end pb-2'>
              <div className='flex-none'>{this.state.tableName}</div>
              <div className='flex-1 text-right'>
                <button
                  onClick={() => {
                    this.props.history.push('/addPayment');
                  }}
                  className='text-black font-bold md:text-lg lg:text-lg bg-btn-secondary hover:bg-btn-secondary-hover px-4 py-2 rounded-full w-36'
                >
                  Add New
                </button>
              </div>
            </div>
            <div className='float-none'>{this.state.datatable}</div>
          </div>
        </div>
      );
    }

    return <div>{content}</div>;
  };
}

Dashboard.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  global: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  global: state.global
});

export default connect(mapStateToProps, { setPageNumber })(withRouter(Dashboard));
