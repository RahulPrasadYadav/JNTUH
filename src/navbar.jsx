import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
// import  Book from './assets/book1.svg';

 export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      
      <Link to="/Home" className="title">
      
        JNTUH Resourses
      </Link>
      <div className="manu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="https://linktr.ee/Rahul_Prasad_Yadav"target="_blank">Linktree</NavLink>
        </li>
        <li>
          <NavLink to="/about us">About us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};