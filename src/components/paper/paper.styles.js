import { css } from "@emotion/core";

export const paper = ({ theme }) =>
  css`
    width: 600px;
    height: 800px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 32px;
  `;

export const frame = ({ theme }) =>
  css`
    /* border: 1px solid var(--main-black-color); */
    height: 100%;
    border: 1px solid ${theme.color.primary.black};
    display: flex; /*apapun yg di isi didalam frame ini akan jika ditambah itemnya maka item bertambah ke bawah */
    flex-direction: column;
    justify-content: space-between;
  `;
