import React from 'react';
import { Link } from 'react-router-dom';

import { StyledComponent } from './styledComponent';


const Navigation = () => (
  <StyledComponent>
    <nav>
      <div className="logo">
        <Link to="/">
          <b>COMPANY LOGO</b>
        </Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="#1">Page 1</Link>
          </li>
          <li>
            <Link to="#1">Page 2</Link>
          </li>
        </ul>
      </div>
    </nav>
  </StyledComponent>
);

export default Navigation;
