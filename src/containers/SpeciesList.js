import React from 'react';
import Species from '../components/Species'

const SpeciesList = () => {
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
          <Species />
        </tbody>
      </table>
    </div>
  )
}

export default SpeciesList
