import threatsReducer from '../../reducers/threatsReducer';

describe('test threats reducer', () => {
  it('should return the initial state', () => {
    expect(threatsReducer({ threats: [], error: '' }, {})).toEqual({
      threats: [], error: '',
    });
  });

  it('should update store when gets threats', () => {
    expect(
      threatsReducer(
        undefined,
        {
          type: 'FETCH_SPECIES_THREATS_REQUEST_SUCCESS',
          payload: { title: 'soil erosion' },
        },
      ),
    ).toEqual({
      threats: undefined,
      error: '',
    });
  });

  it('should update store when fails to get threats', () => {
    expect(
      threatsReducer(
        undefined,
        {
          type: 'FETCH_SPECIES_THREATS_REQUEST_FAILURE',
          error: {},
        },
      ),
    ).toEqual({
      error: undefined,
      threats: [],
    });
  });
});
