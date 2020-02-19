import React from "react"; //deklarasiin var React dari Folder Package/dependencies/react

import Paper from "../components/Paper"; //panggil variabel Paper dari
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
//folder src/Components/Paper

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default TodoList;
