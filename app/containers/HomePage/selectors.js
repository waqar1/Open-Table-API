import { createSelector } from 'reselect';
import {
  makeSelectRestaurants
} from '../App/selectors';

const selectHome = (state) => state.home;

const makeSelectCityName = () => createSelector(
  selectHome,
  (homeState) => homeState.city
);

const makeSelectFilter = () => createSelector(
  selectHome,
  (homeState) => homeState.filter
);

const makeSelectFilteredRestaurants = () => createSelector(
  makeSelectRestaurants(),
  makeSelectFilter(),
  (restaurants, filter) => {
    if (!filter) return restaurants;
    return restaurants.filter((restaurant) => {
      const combinedCriteria = `${restaurant.name} ${restaurant.address} ${restaurant.area}`;
      const re = RegExp(`.*${filter.toLowerCase().split('').join('.*')}.*`);
      return combinedCriteria.toLowerCase().match(re);
    });
  }
);

export {
  selectHome,
  makeSelectCityName,
  makeSelectFilter,
  makeSelectFilteredRestaurants
};
