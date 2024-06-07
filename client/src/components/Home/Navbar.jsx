import React from 'react'
import url from '../../assets/breathe_esg_logo-removebg-preview.png';
import url1 from '../../assets/profile.png'
import { LuFileSpreadsheet } from "react-icons/lu";

import { FaChevronDown } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
      <img className='navbar-logo' src={url} alt="breath esg logo" /> 
        <span className="view-name">View Name</span>
        <div className="region-box">
          <LuFileSpreadsheet className="icon" />
          <span className="region-text">North India Region</span>
          <FaChevronDown className="down-icon" />
        </div>
      </div>
      <div className="navbar-right">
        <GoBell className="bell-icon" />
        <span>John Doe</span>
        <img src={url1} alt="Profile" className="profile-img" /> 
      </div>
    </div>
  );
};

export default Navbar;