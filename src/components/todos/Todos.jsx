/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react"; dicoment krn menggunakan emotion

import Todo from "../todo/Todo";
import PropTypes from "prop-types";
// import styles from "./todos.module.css"; --> KOMENT KRN PAKE EMOTION
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText}>
          Add todo by clicking{" "}
          <span css={styles.addButtonPlaceholderText}>Add</span> button on the
          top left corner
        </div>
      )}
    </section>
  );
};
//css = {} sebelumnya adalah ClassName = {} krn menggunakan emotion makanya diganti jadi css

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  completeTodo: PropTypes.func.isRequired //tipenya Array -> String
};
export default Todos;
