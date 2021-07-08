import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'img/logo.png';
import { StyledComponent } from './styledComponent';


const Navigation = () => (
  <StyledComponent>
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Loewen Kingston Logo" />
        </Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="#1">About Us</Link>
          </li>
          <li>
            <Link to="#1">Our Showroom</Link>
          </li>
          <li>
            <Link to="#1">Suppliers</Link>
          </li>
          <li>
            <Link to="#1">Testimonials</Link>
          </li>
          <li>
            <Link to="#1">Gallery</Link>
          </li>
          <li>
            <Link to="#1">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  </StyledComponent>
);

export default Navigation;
