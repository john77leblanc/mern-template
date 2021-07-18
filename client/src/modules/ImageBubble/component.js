import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledComponent } from './styledComponent';


const ImageBubble = ({ img }) => (
  <StyledComponent src={img} />
);

ImageBubble.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ImageBubble;
