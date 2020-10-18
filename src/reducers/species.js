
const initialState = {
  species: [],
  error: '',
};

const speciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPECIES_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_SPECIES_SUCCESS':
      return {
        ...state,
        species: action.payload,
        error: '',
      };
    case 'FETCH_SPECIES_FAILURE':
      return {
        ...state,
        species: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default speciesReducer;
