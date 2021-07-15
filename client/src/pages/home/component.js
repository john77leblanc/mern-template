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
      <div className="message-area">
        <h1>Heading</h1>
        <h2>Subheading</h2>
      </div>
      <div className="content-area background-light">
        <h3>
          React is a free and open-source front-end JavaScript library for building user interfaces
          or UI components. It is maintained by Facebook and a community of individual developers and
          companies. React can be used as a base in the development of single-page or mobile applications.
        </h3>
      </div>
      <div className="content-area card-holder">
        { isPending && <p>Loading city details...</p> }
        { error && <p>Error fetching city.</p> }
        {cities && cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            text={city.description}
          />
        ))}
      </div>
    </StyledComponent>
  );
};

export default Home;
