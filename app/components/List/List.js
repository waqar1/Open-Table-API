import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({ component, items }) => {
  const ComponentToRender = component;
  let content = (<li></li>);

  // If we have items, render them
  if (items) {
    content = items.map((item) => (
      <li key={`item-${item.id}`}>{item.name}</li>
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className="list-wrapper">
      <ul>
        {content}
      </ul>
    </div>
  );
};

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
