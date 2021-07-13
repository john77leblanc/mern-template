import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledRow } from './styledRow';


const Row = ({ data }) => (
  <StyledRow>
    { data.map((entry) => <td>{ entry }</td>) }
  </StyledRow>
);

Row.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Row;
