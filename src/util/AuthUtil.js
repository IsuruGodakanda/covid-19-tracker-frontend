import APIClientUtil from './APIClientUtil';

export const authUtil = async (request, body, relativePath) => {
  switch (request) {
    case 'postData':
      return await APIClientUtil('POST', relativePath, body, null);
    case 'getData':
      return await APIClientUtil('GET', `${relativePath}`, null, null);
    default:
      return;
  }
};
