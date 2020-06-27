/*
 * App Actions
 */

import {
  LOAD_RESTAURANTS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_ERROR,
} from './constants';

/**
 * Load the restaurants, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_RESTAURANTS
 */
export function loadRestaurants() {
  return {
    type: LOAD_RESTAURANTS
  };
}

/**
 * Dispatched when the restaurants are loaded by the request saga
 *
 * @param  {array} restaurants The restaurants data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_RESTAURANTS_SUCCESS passing the restaurants
 */
export function restaurantsLoaded(restaurants) {
  return {
    type: LOAD_RESTAURANTS_SUCCESS,
    restaurants
  };
}

/**
 * Dispatched when loading the restaurants fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_RESTAURANTS_ERROR passing the error
 */
export function restaurantsLoadingError(error) {
  return {
    type: LOAD_RESTAURANTS_ERROR,
    error
  };
}
