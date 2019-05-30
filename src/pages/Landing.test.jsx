import React from 'react';
import { shallow } from 'enzyme';

import Landing from './Landing';

describe('Navbar', () => {
  xit('should render correctly', () => {
    const component = shallow(<Landing className="" />);
    expect(component).toMatchSnapshot();
  });
});
