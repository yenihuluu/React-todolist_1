//import React from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan
//IMPORTANT : Ketika sudah menggunakan Emotion dalam Css maka Import React tidak perlu lagi.
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../button/Button";
// import styles from "./header.module.css"; IMPORTANT : import styles tdk kepake lagi kalau sudah menggunakan emotion

import * as styles from "./header.styles"; //import ini dipanggil ketika menggunakan Emotion dlm css
import { useTheme } from "emotion-theming";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      /
      {/*<button className="header-btn main-black-color" onClick={showAddToggle}> 
        {showAdd ? "Finish" : "Add"} --> BEFORE
  </button>
  IMPORTANT : section css sebelumnya ClassName (itu diubah jadi css karena sudah menggunakan emotion)*/}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>Todo list</h1>
      {/*<<button className="header-btn main-red-color" onClick={clearTodos}>
        Clear --> BEFORE
</button>*/}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
