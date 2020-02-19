import React from "react"; //deklarasiin var React dari Folder Package/dependencies/react
import "./styles.css"; // panggil style.css dari folder src

import TodoList from "./pages/TodoList";
//folder src/Components/Paper

export default function App() {
  return <TodoList />;
}
