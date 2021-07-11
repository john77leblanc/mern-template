import React from 'react';
import { useParams } from 'react-router-dom';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Modules
import Banner from 'modules/Banner';

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
    </StyledComponent>
  );
};

export default City;
