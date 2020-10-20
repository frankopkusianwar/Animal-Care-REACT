import speciesReducer from '../../reducers/species';

describe('test species reducer', () => {
  it('should return the initial state', () => {
    expect(speciesReducer({ species: { species: [], allData: [], error: '' } }, {})).toEqual({
      species: { species: [], allData: [], error: '' },
    });
  });

  it('should update store when gets all speciess', () => {
    expect(
      speciesReducer(
        undefined,
        {
          type: 'FETCH_SPECIES_SUCCESS',
          payload: { phylum_name: 'phylum_name' },
        },
      ),
    ).toEqual({
      species: undefined,
      allData: { phylum_name: 'phylum_name' },
      error: '',
    });
  });

  it('should update store when fails to get species', () => {
    expect(
      speciesReducer(
        undefined,
        {
          type: 'FETCH_SPECIES_FAILURE',
          error: {},
          allData: [],
        },
      ),
    ).toEqual({
      error: undefined,
      species: [],
      allData: [],
    });
  });
});
