
const initialState = {
  dogs: [],
  error: '',
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOGS_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_DOGS_SUCCESS':
      return {
        ...state,
        dogs: action.payload,
        error: '',
      };
    case 'FETCH_DOGS_FAILURE':
      return {
        ...state,
        dogs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dogsReducer;
