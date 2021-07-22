import React, { useState } from 'react';
import Loader from 'modules/Loader';

import { StyledComponent } from './styledComponent';


const AddCity = () => {
  const [banner, setBanner] = useState(null);
  const [bannerPending, setBannerPending] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  const updateBanner = (e) => {
    if (e.target.files.length) {
      const loading = new Promise((resolve) => {
        setBannerPending(true);
        setTimeout(() => {
          resolve(setBanner(URL.createObjectURL(e.target.files[0])));
        }, 2000);
      })
        .then(() => {
          setBannerPending(false);
        });

      loading.catch(() => {
        setBannerError(true);
        setBannerPending(false);
      });
    }
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
      { bannerPending && (<Loader />)}
      { bannerError && (<span>Error loading image.</span>)}
      { banner && (
        <button type="button" className="float-in" onClick={removeBanner}>
          <img src={banner} alt="" />
        </button>
      )}
      { !banner && !bannerPending && (
        <label htmlFor="banner">
          <span className="button-light">+ Add Image</span>
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
