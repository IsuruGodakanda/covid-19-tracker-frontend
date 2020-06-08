import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Message from 'Messages/Message';
import PatientForm from 'Components/patient/patient-form';
import Spinner from 'Common/Spinner';

import { authUtil } from 'Utils/AuthUtil';

import { notification } from 'Utils/ImageUtil';

import PatientValidations from 'Components/patient/patient-validations';

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nic: '',
      address: '',
      response: '',
      loading: false,
      errors: []
    };
  }

  onChange = (e) => {
    let val;
    val = e.target.value;

    this.setState({ [e.target.id]: val });
    delete this.state.errors[e.target.id];
    this.setState({ response: '' });
  };

  addPatient = async (e) => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      nic: this.state.nic,
      address: this.state.address
    };

    if (PatientValidations(this.state).isValid) {
      // Patient Details
      let result = await authUtil('postData', formData, '/onboard');
      if (result.status === 200) {
        this.setState({ response: '' });
        this.props.history.push('/');
      } else {
        this.setState({ response: result.data.msg });
      }
    } else {
      await this.setState({ errors: PatientValidations(this.state).errors });
    }
  };

  render() {
    let responseMessage = (
      <Message
        type='error'
        containerStyle='bg-yellow-error'
        msgStyle='text-si-grey'
        icon={notification}
        message={this.state.response}
      />
    );

    let content;

    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <div className='container mx-auto px-8 pb-4 lg:px-24 lg:pb-8'>
          {this.state.response && responseMessage}
          <PatientForm states={this.state} onChange={this.onChange} addPatient={this.addPatient} />
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default withRouter(Patient);
