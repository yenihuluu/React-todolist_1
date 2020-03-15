import { css } from "@emotion/core";

export const todo = ({ theme }) =>
  css`
    position: relative;

    flex: 1 0 auto;
    text-align: center;

    max-height: 34px;
    margin: 16px 0 0;
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid ${theme.color.primary.red};

    /* border-bottom: 1px solid var(--main-red-color); IMPORTANT : dicoment ketika pake emotion*/
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 50px;
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    color: ${theme.color.primary.black};
  `;
