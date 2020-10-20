import React from 'react';
import { useDispatch } from 'react-redux';
import { filterSpecies } from '../actions/index';

const SpeciesFilter = () => {
  const categories = ['CHORDATA', 'ARTHROPODA', 'MOLLUSCA'];
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(filterSpecies(target.value));
  };

  return (
    <div>
      <select name="category" onChange={handleFilter}>
        <option value="All" key="All">
          All
        </option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpeciesFilter;
