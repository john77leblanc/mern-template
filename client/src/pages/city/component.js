import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Modules
import Banner from 'modules/Banner';
import Table from 'modules/Table';

import { SERVER } from 'constants.js';
import { StyledComponent } from './styledComponent';


const City = () => {
  const { id } = useParams();

  const {
    data: city,
    isPending,
    error,
  } = useFetch(`${SERVER}/cities?id=${id}`);

  return (
    <StyledComponent>
      { isPending && <p>Loading city details...</p> }
      { error && <p>Error fetching city.</p> }
      {city && (
        <Banner
          title={city.name}
          text={city.description}
        />
      )}
      <div className="content-area">
        <h2>Table Data</h2>
        <Table headings={['Heading 1', 'Heading 2', 'Heading 3']} rows={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} />
        <br />
        <Link to="/" className="button-light m-auto">Back to Cities</Link>
      </div>
    </StyledComponent>
  );
};

export default City;
