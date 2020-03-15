import React from "react"; //deklarasiin var React dari Folder Package/dependencies/react
import "./styles.css"; // panggil style.css dari folder src
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoList";
//folder src/Components/Paper

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  }
}; //global parameter
export default function App() {
  // return <TodoList />; sebelum ada global parameter, cara seperti ini digunakan utk call TodoList
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
