import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectCityName = () => createSelector(
  selectHome,
  (homeState) => homeState.city
);

export {
  selectHome,
  makeSelectCityName,
};
