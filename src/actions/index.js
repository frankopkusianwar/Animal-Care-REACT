import axios from 'axios';
const FETCH_SPECIES_REQUEST = 'FETCH_SPECIES_REQUEST'
const FETCH_SPECIES_SUCCESS = 'FETCH_SPECIES_SUCCESS'
const FETCH_SPECIES_FAILURE = 'FETCH_SPECIES_FAILURE'
const FETCH_SPECIES_THREATS_REQUEST = 'FETCH_SPECIES_THREATS_REQUEST'
const FETCH_SPECIES_THREATS_REQUEST_SUCCESS = 'FETCH_SPECIES_THREATS_REQUEST_SUCCESS'
const FETCH_SPECIES_THREATS_REQUEST_FAILURE = 'FETCH_SPECIES_THREATS_REQUEST_FAILURE'
const FILTER_SPECIES = 'FILTER_SPECIES'


const URL = `https://apiv3.iucnredlist.org/api/v3/species/region/eastern_africa/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`

export const fetchSpeciesRequest = () => ({
  type: FETCH_SPECIES_REQUEST,
});

export const fetchSpeciesSuccess = (species) => ({
  type: FETCH_SPECIES_SUCCESS,
  payload: species,
});

export const fetchSpeciesFailure = (error) => ({
  type: FETCH_SPECIES_FAILURE,
  payload: error,
});

export const fetchSpeciesThreatRequest = () => ({
  type: FETCH_SPECIES_THREATS_REQUEST,
});

export const fetchSpeciesThreatSuccess = (threats) => ({
  type: FETCH_SPECIES_THREATS_REQUEST_SUCCESS,
  payload: threats,
});

export const fetchSpeciesThreatFailure = (error) => ({
  type: FETCH_SPECIES_THREATS_REQUEST_FAILURE,
  payload: error,
});

export const fetchSpecies = () => dispatch => {
  dispatch(fetchSpeciesRequest);
  axios.get(URL).then(response => {
    const species = response.data;
    dispatch(fetchSpeciesSuccess(species));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchSpeciesFailure(errorMessage));
  });
};

export const filterSpecies = (name) => ({
  type: FILTER_SPECIES,
  payload: name,
});

export const fetchSpeciesThreats = (name) => dispatch => {
const SPECIESURL = `http://apiv3.iucnredlist.org/api/v3/threats/species/name/${name}/region/eastern_africa?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`
  dispatch(fetchSpeciesThreatRequest);
  axios.get(SPECIESURL).then(response => {
    const threats = response.data;
    dispatch(fetchSpeciesThreatSuccess(threats));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchSpeciesThreatFailure(errorMessage));
  });
};
