import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App'
import Header from '../../components/Header';
import Species from '../../components/Species'
import SpeciesFilter from '../../components/SpeciesFilter'
import SpeciesList from '../../containers/SpeciesList'
import SpeciesDetails from '../../containers/SpeciesDetails'

describe('App', () => {
  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<App />)
  })

  it('renders a header component', () => {
    const header = appWrapper.find(Header)
  })

  it('renders a Species component', () => {
    const spicies = appWrapper.find(Species)
  })

  it('renders a SpeciesFilter component', () => {
    const spiciesFilter = appWrapper.find(SpeciesFilter)
  })

  it('renders a SpeciesList component', () => {
    const spiciesList = appWrapper.find(SpeciesList)
  })

  it('renders a SpeciesDetails component', () => {
    const spiciesdetails = appWrapper.find(SpeciesDetails)
  })
})
