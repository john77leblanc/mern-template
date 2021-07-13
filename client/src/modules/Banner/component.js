import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const Banner = ({ title, text }) => (
  <StyledComponent>
    <div>
      <h1>{ title }</h1>
      <p>{ text }</p>
    </div>
  </StyledComponent>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
