import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import img from 'img/sample.jpg';
import { StyledComponent } from './styledComponent';


const Card = ({ id, title, text }) => (
  <StyledComponent>
    <img src={img} alt="" />
    <div>
      <h3>{ title }</h3>
      <p>{ text }</p>
      <br />
      <Link className="button-light" to={`/city/${id}`}>Read More</Link>
    </div>
  </StyledComponent>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
