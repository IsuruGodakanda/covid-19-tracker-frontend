import { isEmpty } from 'Utils/CommonUtil';
import Validator from 'validator';

const PatientValidations = (patientData) => {
  let errors = {};

  if (!Validator.isLength(patientData.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (isEmpty(patientData.name)) {
    errors.name = 'Name field is required';
  }

  if (isEmpty(patientData.nic) || !/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(patientData.nic)) {
    errors.nic = 'Valid national ID field is required: eg:123456789V';
  }

  if (isEmpty(patientData.age)) {
    errors.age = 'Age field is required';
  }

  if (isEmpty(patientData.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (isEmpty(patientData.medical_history)) {
    errors.medical_history = 'Medical history field is required';
  }

  if (isEmpty(patientData.address)) {
    errors.address = 'Address field is required';
  }

  if (isEmpty(patientData.district)) {
    errors.district = 'District field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default PatientValidations;
