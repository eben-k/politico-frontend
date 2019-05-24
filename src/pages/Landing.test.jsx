import React from 'react';
import { shallow } from 'enzyme';

import Landing from './Landing';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = shallow(<Landing className="" />);
    expect(component).toMatchSnapshot();
  });
});
