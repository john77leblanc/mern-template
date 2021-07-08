import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledComponent } from './styledComponent';


const Card = ({ children }) => (
  <StyledComponent>
    { children }
  </StyledComponent>
);

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Card;
