import axios from 'axios';
const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST'
const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS'
const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE'

export const fetchDogsRequest = () => ({
  type: FETCH_DOGS_REQUEST,
});

export const fetchDogsSuccess = (dogs) => ({
  type: FETCH_DOGS_SUCCESS,
  payload: dogs,
});

export const fetchDogsFailure = (error) => ({
  type: FETCH_DOGS_FAILURE,
  payload: error,
});

export const fetchDogs = () => dispatch => {
  dispatch(fetchDogsRequest);
  axios.get(URL).then(response => {
    const dogs = response.data;
    dispatch(fetchDogsSuccess(dogs));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchDogsFailure(errorMessage));
  });
};
