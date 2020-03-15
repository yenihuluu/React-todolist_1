import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  //declared theme adl parameter utk call parameter global
  let textColor;
  const {
    color: { primary }
  } = theme;
  switch (color) {
    case "black":
      // textColor = "#484848"; ini digunakan klo ga pake emotion-theming
      textColor = primary.black;
      break;
    case "red":
      // textColor = "#e06262";
      textColor = primary.red;
      break;
    default:
      // textColor = "#484848";
      textColor = primary.black;
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    padding: 16px;
    cursor: pointer;
    color: ${textColor};
    text-align: ${align};

    background: unset;
    border: unset;
    outline: unset;
  `;
};
