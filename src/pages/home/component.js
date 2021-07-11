import React from 'react';

// Modules
import Card from 'modules/Card';

// Images
import img from 'img/sample.jpg';

import { StyledComponent } from './styledComponent';


const Home = () => (
  <StyledComponent>
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
