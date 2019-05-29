import React from 'react';
import { shallow } from 'enzyme';

import { Login } from './Login';

const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

const component = shallow(<Login />);

describe('Custom Search', () => {
  it('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });

  xit('renders the form section', () => {
    expect(findByTestAttribute(component, 'login-form').length).toBe(1);
  });

  xit('renders a submit button', () => {
    expect(findByTestAttribute(component, 'submit-button').length).toBe(1);
  });
});
