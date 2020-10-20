import React from 'react';
import { shallow } from 'enzyme';
import Router from '../../components/Router';
import Header from '../../components/Header';

describe('Header', () => {
  let routerWrapper;
  beforeAll(() => {
    routerWrapper = shallow(<Router />);
  });

  it('renders a header component', () => {
    const header = routerWrapper.find(Header);
    expect(header).toHaveLength(1);
  });
});
