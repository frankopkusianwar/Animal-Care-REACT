import React from 'react';

function Species({ result }) {
  return (
    <tr>
      <td>{ result.phylum_name }</td>
      <td>{ result.order_name }</td>
      <td>{ result.class_name }</td>
      <td>{ result.family_name }</td>
      <td>{ result.genus_name }</td>
      <td>{ result.scientific_name }</td>
      <td>Threat details</td>
    </tr>
  );
}

export default Species;
