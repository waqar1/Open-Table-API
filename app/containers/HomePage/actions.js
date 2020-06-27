/*
 * Home Page Actions
 */

import {
  CHANGE_CITY_NAME,
  FILTER_RESULTS
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_CITY_NAME
 */
export function changeCityName(name) {
  return {
    type: CHANGE_CITY_NAME,
    name
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_CITY_NAME
 */
export function filterResults(value) {
  return {
    type: FILTER_RESULTS,
    value
  };
}
