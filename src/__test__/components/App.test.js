import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import SpeciesList from '../../containers/SpeciesList';

describe('App', () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('renders a SpeciesList component', () => {
    const spiciesList = appWrapper.find(SpeciesList);
    expect(spiciesList).toHaveLength(1);
  });
});
