import React, { useState } from "react"; //deklarasiin var React dari Folder Package/dependencies/react

import Paper from "../components/Paper"; //panggil variabel Paper dari
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
//folder src/Components/Paper

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React!", isCompleted: false },
    { text: "Belajar Hooks!", isCompleted: false },
    { text: "Belajar CSS!", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(addedTodo);
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("Todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
