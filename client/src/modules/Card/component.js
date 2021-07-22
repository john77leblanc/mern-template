import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const Card = ({
  id,
  name,
  text,
  img,
}) => (
  <Link to={`/city/${name}`}>
    <StyledComponent id={id}>
      <img src={img} alt={`City of ${name}`} height="10rem" loading="lazy" />
      <div>
        <h3>{ name }</h3>
        <p>{ text }</p>
        <span className="elipses">...</span>
        <span className="button-light">Read More</span>
      </div>
    </StyledComponent>
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
