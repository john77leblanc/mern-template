import React from 'react';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Modules
import Card from 'modules/Card';

import { SERVER } from 'constants.js';
import { StyledComponent } from './styledComponent';


const Home = () => {
  const {
    data: cities,
    isPending,
    error,
  } = useFetch(`${SERVER}/cities`);

  return (
    <StyledComponent>
      <div className="content-area card-holder">
        { isPending && <p>Loading city details...</p> }
        { error && <p>Error fetching city.</p> }
        {cities && cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            title={city.name}
            text={city.description}
          />
        ))}
      </div>
    </StyledComponent>
  );
};

export default Home;
