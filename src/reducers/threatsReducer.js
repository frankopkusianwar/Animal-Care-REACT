
const initialState = {
  threats: [],
  error: '',
};
 
const threatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPECIES_THREATS_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_SPECIES_THREATS_REQUEST_SUCCESS':
      return {
        ...state,
        threats: action.payload.result,
        error: '',
      };
    case 'FETCH_SPECIES_THREATS_REQUEST_FAILURE':
      return {
        ...state,
        threats: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default threatsReducer;
