/**
 * Gets restaurant list from open table API
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { restaurantsLoaded, restaurantsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectCityName } from 'containers/HomePage/selectors';
import { LOAD_RESTAURANTS } from '../App/constants';

export function* getRestaurants() {
  const cityName = yield select(makeSelectCityName());

  if (!cityName) {
    yield put(restaurantsLoaded([]));
    return;
  }

  const requestURL = `http://opentable.herokuapp.com/api/restaurants?city=${cityName}&per_page=100`;

  try {
    const result = yield call(request, requestURL);
    if (result.restaurants) {
      const { restaurants } = result;
      yield put(restaurantsLoaded(restaurants));
    }
  } catch (err) {
    yield put(restaurantsLoadingError(err));
  }
}

/**
 * Root saga
 */
export default function* getRestaurantsData() {
  yield takeLatest(LOAD_RESTAURANTS, getRestaurants);
}
