import { CHANGE_CITY_NAME } from './constants';

// The initial state of the App
const initialState = {
  city: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CITY_NAME:
      return { ...state, city: action.name };
    default:
      return state;
  }
}

export default homeReducer;
