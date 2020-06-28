import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({ component, items }) => {
  const { city, restaurants } = items;
  const ComponentToRender = component;
  let content = (<li></li>);

  // If we have items, render them
  if (restaurants) {
    content = restaurants.map((item) => (
      <li key={`item-${item.id}`}>
        <p>
          <span className="field">{'Name: '}</span><span className="name">{item.name}</span>
        </p>
        <p>
          <span className="field">{'Address: '}</span><span className="address">{item.address}</span>
        </p>
        <p>
          <span className="field">{'Price: '}</span><span className="price">{item.price}</span>
        </p>
        <p>
          <span className="field">{'Area: '}</span><span className="area">{item.area}</span>
        </p>
      </li>
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className="list-wrapper">
      <p>{`Total Restaurants: ${(city && restaurants && restaurants.length) || 0}`}</p>
      <ul>
        {content}
      </ul>
    </div>
  );
};

List.propTypes = {
  component: PropTypes.elementType,
  items: PropTypes.object,
};

List.defaultProps = {
  items: {}
};

export default List;
