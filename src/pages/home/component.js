import React from 'react';
import { Link } from 'react-router-dom';

// Modules
import Banner from 'modules/Banner';
import Card from 'modules/Card';

// Images
import img from 'img/sample.jpg';

import { StyledComponent } from './styledComponent';


const Home = () => (
  <StyledComponent>
    <Banner>
      <div>
        <h1>Toronto, Ontario</h1>
        <p>
          Toronto is the capital city of the Canadian province of Ontario.
          With a recorded population of 2,731,571 in 2016, it is the most populous city in Canada
          and the fourth most populous city in North America.
        </p>
        <Link to="/" className="button-light">View City</Link>
      </div>
    </Banner>
    <div className="content-area card-holder">
      <Card>
        <img src={img} alt="" />
        <div>
          <h3>Modern Living</h3>
          <p>Some text going here to illustrate a point!</p>
        </div>
      </Card>
      <Card>
        <img src={img} alt="" />
        <div>
          <h3>Modern Living</h3>
          <p>Some text going here to illustrate a point!</p>
        </div>
      </Card>
      <Card>
        <img src={img} alt="" />
        <div>
          <h3>Modern Living</h3>
          <p>Some text going here to illustrate a point!</p>
        </div>
      </Card>
    </div>
  </StyledComponent>
);

export default Home;
