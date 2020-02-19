import React from "react";

import Todo from "./Todo";
import PropsType from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propsType = {
  todos: PropsType.arrayOf(PropsType.shape({ text: PropsType.string })) //tipenya Array -> String
};
export default Todos;
