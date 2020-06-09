import { GET_PATIENTS, ONBOARD_PATIENT } from '../actions/types';

const initialState = {
  patients: [],
  patient: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PATIENTS:
      return {
        ...state,
        patients: payload
      };
    case ONBOARD_PATIENT:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
