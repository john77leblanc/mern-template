import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledComponent } from './styledComponent';


const Banner = ({ title, text }) => (
  <StyledComponent>
    <div>
      <h1>{ title }</h1>
      <p>{ text }</p>
      <br />
      <Link className="button-light" to="/">Back</Link>
    </div>
  </StyledComponent>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
