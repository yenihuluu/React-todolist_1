import React from "react";

import Todo from "./Todo";
import PropsType from "prop-types";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
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
    </section>
  );
};

Todos.propsType = {
  todos: PropsType.arrayOf(PropsType.shape({ text: PropsType.string })),
  completeTodo: PropsType.func.isRequired //tipenya Array -> String
};
export default Todos;
