import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledTable } from './styledTable';
import Row from './Row';


const Table = ({ headings, rows }) => (
  <StyledTable>
    <thead>
      <Row data={headings} />
    </thead>
    <tbody>
      { rows.map((row) => <Row data={row} />) }
    </tbody>
  </StyledTable>
);

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
