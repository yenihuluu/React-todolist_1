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

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
