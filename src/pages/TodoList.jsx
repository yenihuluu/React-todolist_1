import React, { useState } from "react"; //deklarasiin var React dari Folder Package/dependencies/react

import Paper from "../components/paper/Paper"; //panggil variabel Paper dari
import Header from "../components/header/Header";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";
//folder src/Components/Paper

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React!", isCompleted: false },
    { text: "Belajar Hooks!", isCompleted: false },
    { text: "Belajar CSS!", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    //bertugas menambah Todo list
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Hanya bisa 10 list");
    }
  };
  const clearTodos = () => !showAdd && setTodos([]);
  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("Todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
