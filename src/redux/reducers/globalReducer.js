import { SET_BUTTON_LOADING, SET_HEADER_NAME, SET_SEARCH_PARAMS, SET_PAGE_NUMBER } from 'Actions/types';

const initialState = {
  pageNumber: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload
      };
    default:
      return state;
  }
}
