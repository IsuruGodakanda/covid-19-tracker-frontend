import { SET_PAGE_NUMBER } from './types';

// Set page Number
export const setPageNumber = (pageNumber) => {
  return {
    type: SET_PAGE_NUMBER,
    payload: pageNumber
  };
};
