/**
 * Gets the repositories of the user from Github
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
  const requestURL = `http://opentable.herokuapp.com/api/restaurants?city=${cityName}`;

  try {
    const restaurants = yield call(request, requestURL);
    yield put(restaurantsLoaded(restaurants));
  } catch (err) {
    yield put(restaurantsLoadingError(err));
  }
}

/**
 * Root saga
 */
export default function* githubData() {
  yield takeLatest(LOAD_RESTAURANTS, getRestaurants);
}
