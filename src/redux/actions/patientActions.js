import { patientUtil } from 'Utils/PatientUtil';
import { GET_PATIENTS, ONBOARD_PATIENT } from './types';

// Get all patients
export const getPatients = () => async (dispatch) => {
  const result = await patientUtil('getData', null, `/all`);

  if (result.status === 200) {
    dispatch({
      type: GET_PATIENTS,
      payload: result.data
    });
  } else {
    console.log('Retrieve Fail');
  }
};

// Onboard Patient
export const onboardPatient = ({ name, nic, address }, history) => async (dispatch) => {
  const body = await JSON.stringify({ name, nic, address });
  const result = await patientUtil('postData', body, '/onboard');

  if (result.status === 200) {
    dispatch({
      type: ONBOARD_PATIENT,
      payload: result.data
    });
    history.push('/');
  } else {
    console.log('Onboard Fail');
  }
};
