import React from 'react';
import { shallow } from 'enzyme';
import Router from '../../components/Router';
import Header from '../../components/Header'

describe('App', () => {
  let routerWrapper
  beforeAll(() => {
    routerWrapper = shallow(<Router />)
  })

  it('renders a Header component', () => {
    const header = routerWrapper.find(Header)
  })
})
