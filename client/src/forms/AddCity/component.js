import React, { useState } from 'react';
import Loader from 'modules/Loader';

import { SERVER } from 'constants.js';

import { StyledComponent } from './styledComponent';


const AddCity = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const send = {};

    const abortCont = new AbortController();

    fetch(`${SERVER}/add-city`, {
      method: 'POST',
      signal: abortCont.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(send),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <StyledComponent>
      <form onSubmit={handleSubmit}>
        <h4>City Name</h4>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <h4>Description</h4>
        <textarea
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <h4>Banner Image</h4>
        { bannerPending && (<Loader />)}
        { bannerError && (<span>Error loading image.</span>)}
        { banner && (
          <button id="remove" type="button" className="float-in" onClick={removeBanner}>
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
        <hr />
        <input
          value="Add City"
          type="submit"
          className="button-light m-auto"
        />
      </form>
    </StyledComponent>
  );
};

export default AddCity;
