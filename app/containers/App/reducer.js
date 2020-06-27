import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_ERROR
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  restaurants: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESTAURANTS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        restaurants: [],
      };

      return newState;
    }
    case LOAD_RESTAURANTS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        restaurants: action.restaurants
      };
      return newState;
    }

    case LOAD_RESTAURANTS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
