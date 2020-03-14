import React from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan
import PropTypes from "prop-types";
import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  //disini ga menggunakan props (children) karena Header ini bagian dari Children
  return (
    <section className={styles.header}>
      /
      {/*<button className="header-btn main-black-color" onClick={showAddToggle}> 
        {showAdd ? "Finish" : "Add"} --> BEFORE
  </button>*/}
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo list</h1>
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
