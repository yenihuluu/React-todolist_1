import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import style from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const className = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  const className = cx(style.headerBtn, {
    [style.mainBlackColor]: color === "black",
    [style.mainRedColor]: color === "red",
    [style.alignLeft]: align === "left",
    [style.alignRight]: align === "right"
  });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};
export default Button;
