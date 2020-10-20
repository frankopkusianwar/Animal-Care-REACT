import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchSpeciesRequest, fetchSpeciesSuccess, fetchSpeciesFailure } from '../../actions/index'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const URL = 'https://apiv3.iucnredlist.org/api/v3/species/region/eastern_africa/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee';

describe('species actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should dispatch success on retrieval', () => {
    const store = mockStore({});
    const mockData = {
      data: { species: [{ phylum_name: 'phylum name' }] },
    };
    const expectedActions = [
      {
        type: 'FETCH_SPECIES_SUCCESS',
        payload: mockData.data,
      },
    ];
    moxios.stubRequest(URL, {
      status: 200,
      response: mockData,
    });
    store.dispatch(fetchSpeciesSuccess(mockData.data))
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch failure on failure to retrieve data', () => {
    const store = mockStore({});
    const mockData = {
      error: new Error('failed to get data'),
    };
    const expectedActions = [
      {
        type: 'FETCH_SPECIES_FAILURE',
        payload: new Error('failed to get data'),
      },
    ];
    moxios.stubRequest(URL, {
      status: 400,
      error: mockData,
    });
    store.dispatch(fetchSpeciesFailure(mockData.error))
    expect(store.getActions()).toEqual(expectedActions);
  });
});
