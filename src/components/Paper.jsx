import React from "react"; // Deklarasiin var React dari package/dependencies/react
import PropTypes from "prop-types"; // Deklarasiin var PropType dari package/dependencies/prop-types

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]) //childrean mempunyai 2 tipe yt array dan single
};

export default Paper;
