import React, { useState } from 'react';

import { StyledComponent } from './styledComponent';


const AddCity = () => {
  const [banner, setBanner] = useState(null);

  const updateBanner = (e) => {
    if (e.target.files.length) setBanner(URL.createObjectURL(e.target.files[0]));
  };

  const removeBanner = () => {
    setBanner(null);
  };

  return (
    <StyledComponent>
      <h4>City Name</h4>
      <input id="name" type="text" />

      <h4>Description</h4>
      <textarea id="description" type="text" />

      <h4>Banner Image</h4>
      { banner && (
        <button type="button" onClick={removeBanner}>
          <img src={banner} alt="" />
        </button>
      )}
      { !banner && (
        <label htmlFor="banner">
          <span className="button-light">+</span>
          <input
            id="banner"
            type="file"
            onChange={updateBanner}
            hidden
          />
        </label>
      )}
    </StyledComponent>
  );
};

export default AddCity;
