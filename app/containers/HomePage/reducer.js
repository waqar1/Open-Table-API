import {
  CHANGE_CITY_NAME,
  FILTER_RESULTS
} from './constants';

// The initial state of the App
const initialState = {
  city: '',
  filter: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_NAME:
      return { ...state, city: action.name, filter: '' };
    case FILTER_RESULTS:
      return { ...state, filter: action.value };
    default:
      return state;
  }
}

export default homeReducer;
