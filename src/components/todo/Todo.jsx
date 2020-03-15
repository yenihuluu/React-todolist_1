// import React from "react"; dicoment ketika menggunakan emotion
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";
// import styles from "./todo.module.css"; dicoment ketika menggunakan emotion
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return (
    // <div className={styles.todo} onClick={() => completeTodo(index)}>
    //   <span
    //     className={styles.todoText}
    //     style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
    //   >
    //     {text}
    //   </span>
    // </div>
    // DIATAS DICOMENT SAAT MENGGUNAKAN EMOTION
    <div css={styles.todo({ theme })} onClick={() => completeTodo(index)}>
      <span css={styles.todoText({ theme, isCompleted })}>{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
