import React from "react";
import {FaUserSecret} from 'react-icons/fa';
const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <FaUserSecret color='white'/>    
      <a className="navbar-brand" href="#Profil">
        Profile
      </a>
    </nav>
  </>
);

export default Navbar;