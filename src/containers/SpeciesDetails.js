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
    <div className="detail-content">
          {
            
            details.map((result, key) => (
              <div key={ key } className="single-threat">
                <h2><span className="threat-tt">Threat:</span> { result.title}</h2>
                <p><span className="threat-sub">Timing:</span> { result.timing }</p>
                <p><span className="threat-sub">Score:</span> { result.score }</p>
                <p><span className="threat-sub">Severity:</span> { result.severity  }</p>
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
