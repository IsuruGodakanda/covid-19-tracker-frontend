import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import TextFieldInput from 'FormFields/TextFieldInput';
import SelectFieldInput from 'FormFields/SelectFieldInput';
import PatientValidations from './validation/patient-validations';
import MainCard from 'Packages/main-card';
import GenderList from 'Lists/genders';
import DistrictList from 'Lists/districts';
import { onboardPatient } from 'Actions/patientActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Patient = ({ onboardPatient }) => {
  const history = useHistory();

  const [formData, setFormData] = React.useState({
    name: '',
    nic: '',
    age: '',
    gender: '',
    medical_history: '',
    address: '',
    district: ''
  });
  const [errors, setErrors] = React.useState([]);
  const genderOptions = GenderList.options;
  const districtOptions = DistrictList.options;

  const { name, nic, age, gender, medical_history, address, district } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    delete errors[e.target.name];
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (PatientValidations(formData).isValid) {
      onboardPatient({ name, nic, age, gender, medical_history, address, district }, history);
    } else {
      setErrors(PatientValidations(formData).errors);
    }
  };

  return (
    <MainCard>
      <div className='container mx-auto pt-4'>
        <h4>Patient Onboarding</h4>
        <div className='py-6'>
          <form className='text-base' onSubmit={(e) => onSubmit(e)}>
            <div className='flex flex-row'>
              <div className='w-3/4'>
                <section className='pb-8'>
                  <div className='flex flex-row py-2 items-baseline'>
                    <div className='flex w-1/3 pr-4'>Full Name*</div>
                    <div className='flex-1 w-2/3'>
                      <TextFieldInput
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Full Name*'
                        onChange={(e) => onChange(e)}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        value={name}
                        error={errors.name}
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
                        onChange={(e) => onChange(e)}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        value={nic}
                        error={errors.nic}
                        maxLength='10'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row py-2 items-baseline'>
                    <div className='flex w-1/3 pr-4'>Age*</div>
                    <div className='flex-1 w-2/3'>
                      <TextFieldInput
                        id='age'
                        name='age'
                        type='text'
                        placeholder='Number of years'
                        onChange={(e) => onChange(e)}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        value={age}
                        error={errors.age}
                        maxLength='3'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row py-2 items-baseline'>
                    <div className='flex w-1/3 pr-4'>Gender*</div>
                    <div className='flex-1 w-2/3'>
                      <SelectFieldInput
                        id='gender'
                        name='gender'
                        onChange={(e) => onChange(e)}
                        placeholder='Select gender'
                        value={gender}
                        options={genderOptions}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        error={errors.gender}
                      />
                    </div>
                  </div>
                  <div className='flex flex-row py-2 items-baseline'>
                    <div className='flex w-1/3 pr-4'>Medical History*</div>
                    <div className='flex-1 w-2/3'>
                      <TextFieldInput
                        id='medical_history'
                        name='medical_history'
                        type='text'
                        placeholder='Medical History'
                        onChange={(e) => onChange(e)}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        value={medical_history}
                        error={errors.medical_history}
                        maxLength='150'
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
                        onChange={(e) => onChange(e)}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        value={address}
                        error={errors.address}
                        maxLength='80'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row py-2 items-baseline'>
                    <div className='flex w-1/3 pr-4'>District*</div>
                    <div className='flex-1 w-2/3'>
                      <SelectFieldInput
                        id='district'
                        name='district'
                        onChange={(e) => onChange(e)}
                        placeholder='Select district'
                        value={district}
                        options={districtOptions}
                        customStyle='w-full'
                        containerStyle='flex flex-row'
                        error={errors.district}
                      />
                    </div>
                  </div>
                </section>

                <section className='pb-8'>
                  <div className='text-center py-8'>
                    <input
                      type='submit'
                      className='text-white font-bold md:text-xl lg:text-xl bg-ezit-btn-primary hover:bg-ezit-btn-primary-hover px-4 py-2 rounded-full md:w-2/5 lg:w-1/5 cursor-pointer focus:outline-none focus:shadow-outline '
                      value='Add Patient'
                    />
                    <div className='mt-4 underline'>
                      <Link to='/'>Cancel</Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainCard>
  );
};

Patient.propTypes = {
  onboardPatient: PropTypes.func.isRequired
};

export default connect(null, { onboardPatient })(Patient);
