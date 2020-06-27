import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

const RestaurantList = ({ loading, error, restaurants }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (restaurants !== false) {
    return <List items={restaurants} />;
  }

  return null;
};

RestaurantList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  restaurants: PropTypes.any
};

export default RestaurantList;
