import React from "react";
import { Metric } from "./Metric";

export const Metrics = (props) => {
  const { todos } = props;

  const done = todos.filter(todoItem => {
    return  todoItem.status === true;
  })

  const todo = todos.filter(todoItem => {
    return  todoItem.status === false;
  })

  const high = todos.filter(todoItem => {
    return  todoItem.priority === "Home";
  })

  const medium = todos.filter(todoItem => {
    return  todoItem.priority === "Office";
  })

  const low = todos.filter(todoItem => {
    return  todoItem.priority === "Shopping";
  })

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Metric label="Total" value={todos.length} />
      <Metric label="Done" value={done.length} />
      <Metric label="Todo" value={todo.length} />
      <Metric label="Home" value={high.length} />
      <Metric label="Office" value={medium.length} />
      <Metric label="Shopping" value={low.length} />
    </div>
  );
};

