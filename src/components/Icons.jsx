import React from "react";
import PropTypes from "prop-types";
import "./Icons.css";

const Icons = ({ href = "#", icon }) => {
  return (
    <>
      <a
        className="btn btn-outline-light btn-floating m-1 rounded-circle icon-button"
        href={href}
        role="button"
      >
        <i className={icon}></i>
        {console.log(icon)}
      </a>
    </>
  );
};

Icons.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icons;
