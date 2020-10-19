import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecies } from '../actions/index'
import Species from '../components/Species'

const SpeciesList = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  const allSpeciesData = useSelector(state => state.species.species);

  return (
    <div>
      <div className="sub-header">
        <p>filter goes here</p>
        <p>Total Animal sSpecies: 35456</p>
      </div>
      <table id="species">
        <thead>
          <tr>
            <th>Phylum Name</th>
            <th>Order Name</th>
            <th>Class Name</th>
            <th>Family Name</th>
            <th>Genus Name</th>
            <th>Scientific Name</th>
          </tr>
        </thead>
        <tbody>
          {
            allSpeciesData
            .map((result, key) => (
              <Species result={result} key={key} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default SpeciesList
