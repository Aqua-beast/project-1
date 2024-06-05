import React, { useState } from 'eact';
import { FaDashboard, FaUser, FaDatabase, FaChartBar, FaFile, FaSuppliers, FaAnalytics, FaTarget, FaSignOut } from 'eact-icons/fa';
import { NavLink } from 'eact-router-dom';
import styled from 'tyled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarHeader>
        <CompanyLogo>Company Name</CompanyLogo>
      </NavbarHeader>
      <NavbarToggle onClick={toggleNavbar}>
        {isOpen? <FaSignOut /> : <FaDashboard />}
      </NavbarToggle>
      <NavbarMenu isOpen={isOpen}>
        <NavLink to="/dashboard">
          <FaDashboard /> Dashboard
        </NavLink>
        <NavLink to="/entity-manager">
          <FaUser /> Entity Manager
        </NavLink>
        <NavLink to="/data-manager">
          <FaDatabase /> Data Manager
        </NavLink>
        <NavLink to="/reporting">
          <FaChartBar /> Reporting
        </NavLink>
        <NavLink to="/materiality">
          <FaFile /> Materiality
        </NavLink>
        <NavLink to="/supplier">
          <FaSuppliers /> Supplier
        </NavLink>
        <NavLink to="/analytics">
          <FaAnalytics /> Analytics
        </NavLink>
        <NavLink to="/target">
          <FaTarget /> Target
        </NavLink>
        <NavLink to="/logout">
          <FaSignOut /> Logout
        </NavLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const NavbarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CompanyLogo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const NavbarToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NavbarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => (props.isOpen? 'block' : 'none')};
`;

export default Navbar;