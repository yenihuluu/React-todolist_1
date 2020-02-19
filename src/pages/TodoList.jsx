import React, { useState } from "react"; //deklarasiin var React dari Folder Package/dependencies/react

import Paper from "../components/Paper"; //panggil variabel Paper dari
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
//folder src/Components/Paper

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React!" },
    { text: "Belajar Hooks!" },
    { text: "Belajar CSS!" }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
