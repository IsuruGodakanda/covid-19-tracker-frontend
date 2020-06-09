import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import patientReducer from './patientReducer';

export default combineReducers({
  global: globalReducer,
  patient: patientReducer
});
