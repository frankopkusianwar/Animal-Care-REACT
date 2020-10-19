import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SpeciesDetails = (props) => {

  const speciesName = props.location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpeciesThreats());
  }, [dispatch]);

  return (
    <div>
      <p>here go the details</p>
    </div>
  )
}

export default SpeciesDetails
