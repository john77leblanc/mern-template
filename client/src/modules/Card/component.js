import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import img from 'img/sample.jpg';
import { StyledComponent } from './styledComponent';


const Card = ({ id, name, text }) => (
  <StyledComponent id={id}>
    <img src={img} alt="" />
    <div>
      <h3>{ name }</h3>
      <p>{ text }</p>
      <br />
      <Link className="button-light" to={`/city/${name}`}>Read More</Link>
    </div>
  </StyledComponent>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
