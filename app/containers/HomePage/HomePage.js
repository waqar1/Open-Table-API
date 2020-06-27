/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import RestaurantsList from 'components/RestaurantsList';
import './style.scss';

export default class HomePage extends React.PureComponent {
  render() {
    const {
      loading, error, restaurants, onCitySubmit, onChangeCity, city
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
              <label htmlFor="city">
                <p>Type city name to show restaurants list</p>
                <input
                  id="city"
                  type="text"
                  placeholder="City Name"
                  value={city}
                  onChange={onChangeCity}
                />
              </label>
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
  onChangeCity: PropTypes.func
};
