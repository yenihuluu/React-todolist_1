import { css } from "@emotion/core";

export const header = () =>
  css`
    display: flex; /*default nya dlm bentuk row horizontal*/
    /*flexbox yt sebuah layout aging dlm css yg memudahkan kita utk melayout 1 atau lebih elemen html tanpa harus memikirkan flexibilitas dalam elemen nya.*/
    align-items: flex-start; /*secara vertikal items tersebut akan di mulai dari atas*/
  `;

export const headerTitle = theme =>
  css`
    /* flex: 1; /*mengambil sisa space semaksimal mungkin*/
    width: 52%; /* pengganti flex agar ukuran nya rata*/
    text-align: center;
    font-size: 3.6rem;
    font-family: "Homemade Apple", sans-serif;
    text-transform: lowercase;
    color: ${theme.color.primary.black};
  `;
