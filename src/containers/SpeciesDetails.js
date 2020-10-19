import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpeciesThreats } from '../actions/index'

const SpeciesDetails = (props) => {

  const speciesName = props.location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpeciesThreats(speciesName));
  }, [dispatch, speciesName]);

  const threatData = useSelector(state => state.threats.threats);
  console.log(threatData)

  return (
    <div>
          {
            threatData 
            .map((result, key) => (
              <p>{ result.title}</p> 
            ))
          }
    </div>
  )
}

export default SpeciesDetails
