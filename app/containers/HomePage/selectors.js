import { createSelector } from 'reselect';
import {
  makeSelectRestaurants
} from '../App/selectors';
import checkWord from '../../utils/checkWord';

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
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const combinedCriteria = `${restaurant.name} ${restaurant.address} ${restaurant.area}`;
      return checkWord(filter, combinedCriteria);
    });
    return filteredRestaurants.length ? filteredRestaurants : restaurants;
  }
);

export {
  selectHome,
  makeSelectCityName,
  makeSelectFilter,
  makeSelectFilteredRestaurants
};
