/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import RestaurantsList from 'components/RestaurantsList';
import { DebounceInput } from 'react-debounce-input';
import './style.scss';

export default class HomePage extends React.PureComponent {
  render() {
    const {
      loading,
      error,
      restaurants,
      onCitySubmit,
      onChangeCity,
      city,
      filter,
      onFilterChange
    } = this.props;
    const restaurantListProps = {
      loading,
      error,
      restaurants
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Restaurants List</h2>
          </section>
          <section className="centered">
            <form onSubmit={onCitySubmit}>
              <div>
                <span>{'Filter by City: '}</span>
                <DebounceInput
                  id="city"
                  type="text"
                  placeholder="City Name"
                  debounceTimeout={1000}
                  value={city}
                  onChange={onChangeCity}
                />
                <label htmlFor="filter">
                  <span>{'Refine search: '}</span>
                  <input
                    id="filter"
                    type="text"
                    placeholder="Name/Address/Area"
                    value={filter}
                    onChange={onFilterChange}
                  />
                </label>
              </div>
              <input className="hidden-input" type="submit" />
            </form>
            <RestaurantsList {...restaurantListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  restaurants: PropTypes.array,
  onCitySubmit: PropTypes.func,
  city: PropTypes.string,
  onChangeCity: PropTypes.func,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
