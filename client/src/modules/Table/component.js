import React from 'react';
import { PropTypes } from 'prop-types';

import { StyledTable } from './styledTable';
import Row from './Row';


const Table = ({ sales }) => {
  const columns = sales.map((row, index) => sales.map((i) => i.prices[index]));

  return (
    <StyledTable>
      <thead>
        <Row data={sales.map((i) => i.year)} />
      </thead>
      <tbody>
        { columns.map((column) => <Row data={column} />)}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
