import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const Banner = ({ title, text, img }) => (
  <StyledComponent img={img}>
    <div>
      <h1>{ title }</h1>
      <p>{ text }</p>
    </div>
  </StyledComponent>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
};

Banner.defaultProps = {
  img: '',
};

export default Banner;
