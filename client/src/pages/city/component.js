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
  const { name } = useParams();

  const {
    data: city,
    isPending,
    error,
  } = useFetch(`${SERVER}/cities?name=${name}`);

  return (
    <StyledComponent>
      { isPending && <p>Loading city details...</p> }
      { error && <p>Error fetching city.</p> }
      {city && (
        <>
          <Banner
            title={city.name}
            text={city.description}
            img={`${process.env.PUBLIC_URL}/img/${city.img}`}
          />
          <div className="content-area">
            <h2>Top Sales</h2>
            <Table sales={city.details.sales} />
            <br />
            <Link to="/" className="button-light m-auto">Back to Cities</Link>
          </div>
          <div className="content-area background-light">
            <h2>New Heading</h2>
            <h3>Add some local images here next!</h3>
          </div>
        </>
      )}
    </StyledComponent>
  );
};

export default City;
