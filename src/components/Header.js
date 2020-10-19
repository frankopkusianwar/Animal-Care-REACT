import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.PNG';

const Header = () => (
  <div id="App">
    <div className="panel-bg">
      <h1 className="Animal-care-CMS">Animal Care</h1>
      <ul>
        <li><Link to={'/'} className="home">Home</Link></li>
      </ul>
      <div className="profile"><img src={profile} alt="profile" /></div>
    </div>
  </div>
);

export default Header;
