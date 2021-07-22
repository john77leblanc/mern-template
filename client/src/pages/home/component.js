import React, { useState } from 'react';

// Custom Hooks
import useFetch from 'customHooks/useFetch';

// Forms
import AddCity from 'forms/AddCity';

// Modules
import Card from 'modules/Card';
import Modal from 'modules/Modal';

import { SERVER } from 'constants.js';
import { StyledComponent } from './styledComponent';


const Home = () => {
  const {
    data: cities,
    isPending,
    error,
  } = useFetch(`${SERVER}/cities`);

  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

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
      <div className="content-area d-flex">
        { isPending && <p>Loading city details...</p> }
        { error && <p>Error fetching city.</p> }
        {cities && cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            text={city.description}
            img={`${process.env.PUBLIC_URL}/img/${city.img}`}
          />
        ))}
      </div>
      <div className="content-area">
        <button className="button-light m-auto" type="button" onClick={openModal}>Add City</button>
        { displayModal && (
          <Modal title="Add City" close={closeModal}>
            <AddCity />
          </Modal>
        )}
      </div>
    </StyledComponent>
  );
};

export default Home;
