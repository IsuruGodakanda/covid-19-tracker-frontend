import APIClientUtil from './APIClientUtil';

export const patientUtil = async (request, body, relativePath) => {
  switch (request) {
    case 'postData':
      return await APIClientUtil('POST', relativePath, body, { 'Content-Type': 'application/json' });
    case 'getData':
      return await APIClientUtil('GET', `${relativePath}`, null, null);
    default:
      return;
  }
};
