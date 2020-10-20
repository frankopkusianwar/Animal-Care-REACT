/* eslint-disable react/no-array-index-key */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecies } from '../actions/index';
import Species from '../components/Species';
import SpeciesFilter from '../components/SpeciesFilter';

const SpeciesList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  const allSpeciesData = useSelector(state => state.species.species);
  const count = useSelector(state => state.species.allData.count);

  return (
    <div>
      <div className="sub-header">
        <div className="selector-content"><SpeciesFilter /></div>
        <h4>
          Total Animal Species:
          <span className="count">{ count }</span>
        </h4>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allSpeciesData
              .filter(specie => (filter === 'All' ? true : specie.phylum_name === filter))
              .map((result, key) => (
                <Species result={result} key={key} />
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default SpeciesList;
