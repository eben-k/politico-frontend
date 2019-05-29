import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from './Signup';

const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

const component = shallow(<Signup />);

describe('Custom Search', () => {
  xit('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });

  xit('renders the form section', () => {
    expect(findByTestAttribute(component, 'reg-form').length).toBe(1);
  });
});
