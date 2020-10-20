import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Species({ result }) {
  return (
    <tr>
      <td>{ result.phylum_name }</td>
      <td>{ result.order_name }</td>
      <td>{ result.class_name }</td>
      <td>{ result.family_name }</td>
      <td>{ result.genus_name }</td>
      <td>{ result.scientific_name }</td>
      <td><Link to={{ pathname: `/species/${result.scientific_name}`, state: result.scientific_name }} className="t-link">Threat details</Link></td>
    </tr>
  );
}

Species.propTypes = {
  result: propTypes.shape({
    phylum_name: propTypes.string.isRequired,
    order_name: propTypes.string.isRequired,
    class_name: propTypes.string.isRequired,
    family_name: propTypes.string.isRequired,
    genus_name: propTypes.string.isRequired,
    scientific_name: propTypes.string.isRequired,
  }).isRequired,
};

export default Species;
