import React from 'react';
import { shallow } from 'enzyme';

import ListItem from 'components/ListItem';
import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<List component={ListItem} />);
    expect(renderedComponent.find(ListItem)).toBeDefined();
  });

  it('should pass all items props to rendered component', () => {
    const items = {
      city: 'toronto',
      restaurants: [
        {
          id: 21307,
          name: 'Scaramouche Restaurant',
          address: '1 Benvenuto Place',
          city: 'Toronto',
          state: 'ON',
          area: 'Toronto / SW Ontario',
          postal_code: 'M4V 2L1',
          country: 'CA',
          phone: '4169618011',
          lat: 43.68207,
          lng: -79.40041,
          price: 4,
          reserve_url: 'http://www.opentable.com/single.aspx?rid=21307',
          mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=21307',
          image_url: 'https://www.opentable.com/img/restimages/21307.jpg'
        }
      ]
    };

    const renderedComponent = shallow(
      <List items={items} />
    );
    expect(renderedComponent.find('li')).toHaveLength(1);
  });
});
