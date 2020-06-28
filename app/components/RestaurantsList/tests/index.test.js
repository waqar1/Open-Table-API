import { shallow, mount } from 'enzyme';
import React from 'react';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import RestaurantsList from '../index';

describe('<RestaurantsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<RestaurantsList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />)
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <RestaurantsList loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the restaurants if loading was successful', () => {
    const restaurants = [
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
    ];
    const renderedComponent = shallow(
      <RestaurantsList restaurants={restaurants} error={false} city={'Toronto'} />
    );

    expect(
      renderedComponent.contains(
        <List items={{ restaurants, city: 'Toronto' }} />
      )
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <RestaurantsList restaurants={[]} error={false} loading={false} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
