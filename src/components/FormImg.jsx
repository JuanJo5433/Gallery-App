import React from 'react';
import PropTypes from 'prop-types';

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Search: <input className="form-control w-100" type="text" name="inputText" />
        </label>
        <button className="btn btn-dark m-1">
          <span className="material-symbols-outlined">image_search</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
