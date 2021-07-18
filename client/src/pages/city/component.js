import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Modules
import Banner from 'modules/Banner';
import ImageBubble from 'modules/ImageBubble';
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
            <h2>Come Visit</h2>
            <h3>Here are some local images!</h3>
            <div className="d-flex">
              {city.details.imgs.map((img) => (
                <ImageBubble key={img} img={`${process.env.PUBLIC_URL}/img/${img}`} />))}
            </div>
          </div>
        </>
      )}
    </StyledComponent>
  );
};

export default City;
