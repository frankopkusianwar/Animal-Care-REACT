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
  let details = [threatData[threatData.length-2], threatData[threatData.length-1]]
  console.log(details)
  if(details[0] !== undefined) {
  return (
    <div>
          {
            
            details.map((result, key) => (
              <div>
                <h5>Threat: { result.title}</h5>
                <p>Timing: { result.timing }</p>
                <p>Score: { result.score }</p>
                <p>Severity:{ result.severity  }</p>
              </div> 
            ))
          }
    </div>
  )
 }else{
   return(<div><p>loading...</p></div>)
 }
}

export default SpeciesDetails
