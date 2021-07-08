import React from 'react';
import { PropTypes } from 'prop-types';


const AppContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AppContainer;
