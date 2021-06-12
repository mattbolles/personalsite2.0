import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({ icon, title }) => {
  const Icon = icon;

  return (
    <div className="section-heading">
        <Icon size="1rem"/>
        <h4 className="gradient-text" style = {{
            paddingLeft: ".25rem"
        }}>{title}</h4>
    </div>
  );
};

SectionHeading.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
};

export default SectionHeading;