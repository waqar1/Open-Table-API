import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectRestaurants = () => createSelector(
  selectGlobal,
  (globalState) => globalState.restaurants
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectRestaurants,
  makeSelectLocation,
};
