import React, { useState } from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan
import PropTypes from "prop-types";
import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");
  //Deklarasiin useState sebagai functional komponen
  //value = object/var dlm sebuah Array yg dideklarasiin yg berisi dr inputan form
  //setValue = function/methode utk melakukan sesuatu terhadap data yg terdapat di dalam value
  //useState = Hooks methode
  // useState("") = memberi penanda bahwa initial state dari value itu isinya string kosong
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
    return (
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
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
