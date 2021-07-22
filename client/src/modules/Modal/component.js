import React from 'react';
import { PropTypes } from 'prop-types';

// import img from 'img/sample.jpg';
import { StyledComponent } from './styledComponent';


const Modal = ({ title, close, children }) => (
  <StyledComponent onClick={close}>
    <div className="popup">
      <h3>
        { title }
        <button type="button" onClick={close}>&#10006;</button>
      </h3>
      { children }
    </div>
  </StyledComponent>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Modal;
