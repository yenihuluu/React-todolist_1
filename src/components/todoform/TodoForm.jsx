/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import React from "react";
//import React, { useState } from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan
//DICOMENT KARENA CARA PEMANGGILAN {useState} berbeda karena ada emotion
import PropTypes from "prop-types";
// import styles from "./todoform.module.css"; --> without EMOTION
import * as styles from "./todoform.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState(""); //dengan Emotion
  // const [value, setValue] = useState(""); --> ini penggunaan jika ga pake emotion
  //Deklarasiin useState sebagai functional komponen
  //value = object/var dlm sebuah Array yg dideklarasiin yg berisi dr inputan form
  //setValue = function/methode utk melakukan sesuatu terhadap data yg terdapat di dalam value
  //useState = Hooks methode
  // useState("") = memberi penanda bahwa initial state dari value itu isinya string kosong
  const theme = useTheme();
  const handleFormSubmit = e => {
    e.preventDefault(); //utk memprevent default behaviour dr submit utk refresh page
    if (!value) {
      alert("Inputan Kosong!");
      return;
    }

    if (value.length > 50) {
      alert(
        "inputan tidak boleh melebih 50 karater, silahkan di input kembali!!"
      );
      setValue("");
      return;
    }
    addTodo(value);
    //alert(value);
    setValue("");
  };

  if (showAdd) {
    //css sebelumnya adalah ClassName jika tidak menggunakan EMOTION
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
