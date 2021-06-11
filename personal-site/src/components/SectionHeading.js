import React from "react";
import PropTypes from "prop-types";

const Heading = ({ icon, title }) => {
  //const Icon = icon;

  return (
    <div className="section-heading">
      <h6 className="gradient-text">{title}</h6>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeading;