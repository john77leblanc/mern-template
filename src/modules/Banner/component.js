import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const Banner = ({ children }) => (
  <StyledComponent>
    { children }
  </StyledComponent>
);

Banner.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Banner;
