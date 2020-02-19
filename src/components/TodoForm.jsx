import React, { useState } from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
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

    addTodo(value);
    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default TodoForm;
