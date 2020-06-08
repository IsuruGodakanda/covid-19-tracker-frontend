import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import TextFieldInput from 'FormFields/TextFieldInput';

class PatientForm extends Component {
  render() {
    return (
      <div className='py-6'>
        <form className='text-base'>
          <div className='flex flex-row'>
            <div className='w-3/4'>
              <h3>Add Patient</h3>
              <section className='pb-8'>
                <div className='flex flex-row py-2 items-baseline'>
                  <div className='flex w-1/3 pr-4'>Full Name*</div>
                  <div className='flex-1 w-2/3'>
                    <TextFieldInput
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Full Name*'
                      onChange={this.props.onChange}
                      customStyle='w-full'
                      containerStyle='flex flex-row'
                      value={this.props.states.name}
                      error={this.props.states.errors.name}
                      maxLength='50'
                    />
                  </div>
                </div>
                <div className='flex flex-row py-2 items-baseline'>
                  <div className='flex w-1/3 pr-4'>National ID Number*</div>
                  <div className='flex-1 w-2/3'>
                    <TextFieldInput
                      id='nic'
                      name='nic'
                      type='text'
                      placeholder='NIC eg: 123456789V'
                      onChange={this.props.onChange}
                      customStyle='w-full'
                      containerStyle='flex flex-row'
                      value={this.props.states.nic}
                      error={this.props.states.errors.nic}
                      maxLength='10'
                    />
                  </div>
                </div>
                <div className='flex flex-row py-2 items-baseline'>
                  <div className='flex w-1/3 pr-4'>Address*</div>
                  <div className='flex-1 w-2/3'>
                    <TextFieldInput
                      id='address'
                      name='address'
                      type='text'
                      placeholder='eg: No.200, Bake Rd, Colombo'
                      onChange={this.props.onChange}
                      customStyle='w-full'
                      containerStyle='flex flex-row'
                      value={this.props.states.address}
                      error={this.props.states.errors.address}
                      maxLength='80'
                    />
                  </div>
                </div>
              </section>

              <section className='pb-8'>
                <div className='text-center py-8'>
                  <button
                    onClick={this.props.addPatient}
                    className='text-white font-bold md:text-xl lg:text-xl bg-btn-primary hover:bg-btn-primary-hover px-4 py-2 rounded-full w-2/5 '
                  >
                    Add Patient
                  </button>
                  <div className='mt-4'>
                    <Link to='/'>Cancel</Link>
                  </div>
                </div>
              </section>
            </div>

            {/* <div className='w-1/4'>
              
            </div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PatientForm);
